import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginedDetailComponent } from './logined-detail.component';

describe('LoginedDetailComponent', () => {
  let component: LoginedDetailComponent;
  let fixture: ComponentFixture<LoginedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
