import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MymatchesnewherePage } from './mymatchesnewhere.page';

describe('MymatchesnewherePage', () => {
  let component: MymatchesnewherePage;
  let fixture: ComponentFixture<MymatchesnewherePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MymatchesnewherePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MymatchesnewherePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
