import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onClickDan() {
    window.open('https://arxiv.org/abs/1806.10574', '_blank');
  }
}
