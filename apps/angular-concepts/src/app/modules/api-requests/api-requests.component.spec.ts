import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '../../services/users.service';

import { ApiRequestsComponent } from './api-requests.component';

describe('ApiRequestsComponent', () => {
  let component: ApiRequestsComponent;
  let fixture: ComponentFixture<ApiRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApiRequestsComponent,
        HttpClientTestingModule,
      ],
      providers: [ UsersService ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
