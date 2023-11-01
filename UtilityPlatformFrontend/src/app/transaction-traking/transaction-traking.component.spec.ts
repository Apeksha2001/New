import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTrakingComponent } from './transaction-traking.component';

describe('TransactionTrakingComponent', () => {
  let component: TransactionTrakingComponent;
  let fixture: ComponentFixture<TransactionTrakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTrakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTrakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
