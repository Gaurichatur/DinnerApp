import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerdeatilsComponent } from './dinnerdeatils.component';

describe('DinnerdeatilsComponent', () => {
  let component: DinnerdeatilsComponent;
  let fixture: ComponentFixture<DinnerdeatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinnerdeatilsComponent]
    });
    fixture = TestBed.createComponent(DinnerdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
