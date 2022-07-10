import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SimpleService } from './simple-service.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, // for SimpleService
  ],
  providers: [ SimpleService ],
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.scss'],
})
export class SimpleServiceComponent {
  constructor(private simpleService: SimpleService) {}

  autoData$ = this.simpleService.autoData$;

  manualData$ = this.simpleService.getManualData();
}
