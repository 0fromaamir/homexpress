import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyprofilecompanyaccountPage } from './myprofilecompanyaccount.page';

describe('MyprofilecompanyaccountPage', () => {
  let component: MyprofilecompanyaccountPage;
  let fixture: ComponentFixture<MyprofilecompanyaccountPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofilecompanyaccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyprofilecompanyaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
