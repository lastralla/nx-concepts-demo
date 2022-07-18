import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockModule } from 'ng-mocks';
import { MustMatchDirective } from '../../directives/must-match.directive';
import { ValidateUsernameDirective } from '../../directives/validate-username.directive';

import { TemplateFormComponent } from './template-form.component';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TemplateFormComponent,
        MustMatchDirective,
        ValidateUsernameDirective
      ],
      imports: [
        MockModule(FormsModule)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
