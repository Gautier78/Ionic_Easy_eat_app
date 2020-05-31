import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GnocchisPage } from './gnocchis.page';

describe('GnocchisPage', () => {
  let component: GnocchisPage;
  let fixture: ComponentFixture<GnocchisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnocchisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GnocchisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
