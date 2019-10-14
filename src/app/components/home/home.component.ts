import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Duke Applied Machine Learning Group';
  restOpen: boolean;
  entOpen: boolean;
  agOpen: boolean;
  dataOpen: boolean;
  constructor() {
    this.restOpen = false;
    this.entOpen = false;
    this.agOpen = false;
    this.dataOpen = false;
  }

  ngOnInit() {
  }

  entSel() {
    this.entOpen = true;
    this.dataOpen = false;
    this.agOpen = false;
    this.restOpen = false;
  }
  restSel() {
    this.entOpen = false;
    this.dataOpen = false;
    this.agOpen = false;
    this.restOpen = true;
  }
  dataSel() {
    this.entOpen = false;
    this.dataOpen = true;
    this.agOpen = false;
    this.restOpen = false;
  }
  agSel() {
    this.entOpen = false;
    this.dataOpen = false;
    this.agOpen = true;
    this.restOpen = false;
  }
}
