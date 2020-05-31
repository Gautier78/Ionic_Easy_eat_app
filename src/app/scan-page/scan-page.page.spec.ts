import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanPagePage } from './scan-page.page';

describe('ScanPagePage', () => {
  let component: ScanPagePage;
  let fixture: ComponentFixture<ScanPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
