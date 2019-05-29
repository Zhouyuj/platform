import { Component, OnDestroy } from '@angular/core';
import { InterceptorsService } from './core/interceptors/interceptors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  constructor(private interceptorService: InterceptorsService) {
    this.interceptorService.registerInterceptors();
  }

  ngOnDestroy() {
    console.log(location);
    location.href = location.origin;
  }
}
