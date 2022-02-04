import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaruserComponent } from './sidebaruser.component';

describe('SidebaruserComponent', () => {
  let component: SidebaruserComponent;
  let fixture: ComponentFixture<SidebaruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebaruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
