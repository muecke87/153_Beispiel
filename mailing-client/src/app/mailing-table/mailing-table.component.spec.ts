import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingTableComponent } from './mailing-table.component';

describe('MailingTableComponent', () => {
  let component: MailingTableComponent;
  let fixture: ComponentFixture<MailingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
