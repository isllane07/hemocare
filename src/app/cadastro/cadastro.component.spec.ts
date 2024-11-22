import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorCadastroComponent} from './cadastro.component';

describe('CadastroComponent', () => {
  let component: DoadorCadastroComponent;
  let fixture: ComponentFixture<DoadorCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoadorCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoadorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
