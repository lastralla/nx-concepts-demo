import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { MaterialDataService } from '../../services/materia-data.service';

import { MaterialTableComponent } from './material-table.component';

describe('MaterialTableComponent', () => {
  let component: MaterialTableComponent;
  let fixture: ComponentFixture<MaterialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTableComponent ],
      providers: [
        MockProvider(MaterialDataService),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
