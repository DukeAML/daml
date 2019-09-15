import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../canvasjs.min';
import { stringify } from '@angular/compiler/src/util';
import { RouteConfigLoadStart } from '@angular/router';
@Component({
  selector: 'app-gpus',
  templateUrl: './gpus.component.html',
  styleUrls: ['./gpus.component.scss']
})
export class GpusComponent implements OnInit {

  public expand: boolean;

  constructor() { }

  ngOnInit() {
    CanvasJS.addColorSet('colors',
    ['#abb6c2', '#2b3e50', '#df691a']);
    const chart = new CanvasJS.Chart('chartContainer', {
      colorSet: 'colors',
      backgroundColor: null,
      animationEnabled: true,
      exportEnabled: true,
      data: [{
        type: 'pie',
        click: function(e) {
          if (e.dataPoint.y === 9.5) {
            window.open(
              'https://vm-manage.oit.duke.edu/containers/gpuscavenger',
              '_blank'
            );
          }
         },
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: {y} GPUS (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: 12.5, name: 'In Use by Provider' },
          { y: 6.25, name: 'Temporarily In Use' },
          { y: 9.5, name: 'Free' }
        ]
      }]
    });

    chart.render();
  }

  public onClick(e) {
    alert(  e.dataSeries.type + ', dataPoint { x:' + e.dataPoint.x + ', y: ' + e.dataPoint.y + ' }' );
  }

  public onClickExpand() {
    this.expand = !this.expand;
  }

}


