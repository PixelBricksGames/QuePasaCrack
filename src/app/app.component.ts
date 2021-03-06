import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'QuePasaCrack';
  version = '1.0.1';

  constructor(public service: AppService) {}
}
