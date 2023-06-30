import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgServerPagingComponent } from './ag-server-paging.component';

describe('AgServerPagingComponent', () => {
  let component: AgServerPagingComponent;
  let fixture: ComponentFixture<AgServerPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgServerPagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgServerPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
