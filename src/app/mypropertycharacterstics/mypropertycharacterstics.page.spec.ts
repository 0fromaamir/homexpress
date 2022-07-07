import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MypropertycharactersticsPage } from './mypropertycharacterstics.page';

describe('MypropertycharactersticsPage', () => {
  let component: MypropertycharactersticsPage;
  let fixture: ComponentFixture<MypropertycharactersticsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MypropertycharactersticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MypropertycharactersticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
