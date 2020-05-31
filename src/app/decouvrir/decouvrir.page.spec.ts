import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecouvrirPage } from './decouvrir.page';

describe('DecouvrirPage', () => {
  let component: DecouvrirPage;
  let fixture: ComponentFixture<DecouvrirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecouvrirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecouvrirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
