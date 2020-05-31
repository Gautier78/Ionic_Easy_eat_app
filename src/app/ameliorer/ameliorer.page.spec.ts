import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmeliorerPage } from './ameliorer.page';

describe('AmeliorerPage', () => {
  let component: AmeliorerPage;
  let fixture: ComponentFixture<AmeliorerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmeliorerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmeliorerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
