import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyprofilenewsletterPage } from './myprofilenewsletter.page';

describe('MyprofilenewsletterPage', () => {
  let component: MyprofilenewsletterPage;
  let fixture: ComponentFixture<MyprofilenewsletterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofilenewsletterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyprofilenewsletterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
