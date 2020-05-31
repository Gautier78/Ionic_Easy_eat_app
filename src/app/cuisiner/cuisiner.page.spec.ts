import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuisinerPage } from './cuisiner.page';

describe('CuisinerPage', () => {
  let component: CuisinerPage;
  let fixture: ComponentFixture<CuisinerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisinerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuisinerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
