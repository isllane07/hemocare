import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorListaComponent } from './doador-lista.component';

describe('DoadorListaComponent', () => {
  let component: DoadorListaComponent;
  let fixture: ComponentFixture<DoadorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoadorListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoadorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
