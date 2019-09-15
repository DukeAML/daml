import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onBrain() {
    window.open('https://autismcenter.duke.edu/events/seminar-dr-michael-andrews-towards-more-reliable-brain-imaging-findings-autism',
    '_blank');
  }
}
