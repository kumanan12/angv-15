import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-ag-server-paging',
  templateUrl: './ag-server-paging.component.html',
  styleUrls: ['./ag-server-paging.component.css']
})
export class AgServerPagingComponent {

  @ViewChild('myGrid') myGrid: AgGridAngular | undefined;
  gridApi: any;
  gridColumnApi: any;
  gridOptions: Partial<GridOptions>;
  columnDefs;
  cacheOverflowSize;
  maxConcurrentDatasourceRequests;
  infiniteInitialRowCount;
  userSubscriber: Subscription | undefined;

  rowData: any;

  constructor(
    private test: TestService) {

    this.columnDefs = [
      { headerName: 'User Id', field: 'id', sortable: true },
      { headerName: 'First Name', field: 'first_name', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Last Name', field: 'last_name', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Email', field: 'email', sortable: true },
      { headerName: 'Gender', field: 'gender', sortable: true },
      { headerName: 'Company', field: 'company', sortable: true }
    ];

    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 2;

    this.gridOptions = {
      headerHeight: 45,
      rowHeight: 30,
      cacheBlockSize: 90,
      paginationPageSize: 90,
      rowModelType: 'infinite',
    }
  }

  onGridReady(params: { api: any; columnApi: any; }) {
    console.log('On Grid Ready');

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    var datasource = {
      getRows: (params: IGetRowsParams) => {
        //  TODO: Call a service that fetches list of users
        console.log("Fetching startRow " + params.startRow + " of " + params.endRow);
        console.log(params);
        this.test.getUsers(params)
          .subscribe((data: any )=> {
            console.log(data);
            params.successCallback(data['users'], data['totalRecords'])
          });
      }
    }

    this.gridApi.setDatasource(datasource);
  }

  onPaginationChanged() {

  }

}
