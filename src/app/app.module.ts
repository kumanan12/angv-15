import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgGridModule } from 'ag-grid-angular';
import { AgTableComponent } from './ag-table/ag-table.component';
import { AgServerPagingComponent } from './ag-server-paging/ag-server-paging.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FakeBackendInterceptor } from './http-interceptors/fake-backend.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    AgTableComponent,
    AgServerPagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    AgGridModule,
    HttpClientModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
