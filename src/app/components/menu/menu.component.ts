import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  public stage: string;
  constructor() { }

  ngOnInit() {
    this.stage = 'title';
  }

  public setStage(stage): void {
    this.stage = stage;
  }

}
