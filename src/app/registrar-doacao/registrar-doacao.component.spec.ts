import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDoacaoComponent } from './registrar-doacao.component';

describe('RegistrarDoacaoComponent', () => {
  let component: RegistrarDoacaoComponent;
  let fixture: ComponentFixture<RegistrarDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarDoacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
