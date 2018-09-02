import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajProduitComponent } from './maj-produit.component';

describe('MajProduitComponent', () => {
  let component: MajProduitComponent;
  let fixture: ComponentFixture<MajProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
