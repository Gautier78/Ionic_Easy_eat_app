import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProblemePagePage } from './probleme-page.page';

describe('ProblemePagePage', () => {
  let component: ProblemePagePage;
  let fixture: ComponentFixture<ProblemePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
