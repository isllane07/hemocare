import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorDetalheComponent } from './doador.component';

describe('DoadorComponent', () => {
  let component: DoadorDetalheComponent;
  let fixture: ComponentFixture<DoadorDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoadorDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoadorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
