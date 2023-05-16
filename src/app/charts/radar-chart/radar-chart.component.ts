import { Component } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {
public chart:any;

createChart() {
  this.chart = new Chart("RadarChart", {
    type: 'radar',
    data: {
      labels: ['Nyama Choma', 'Tusker', 'Coke', 'Dry Fry Fish', 'White Cap', 'GlenFidich'],
      datasets: [
        {
          label: "Sales",
          data: [467, 576, 572, 79, 92, 574],
          backgroundColor: 'blue'
        },
        {
          label: "Profit",
          data: [542, 542, 536, 327, 17, 538],
          backgroundColor: 'limegreen'
        }
      ]
    },
    options: {
      aspectRatio: 1.3,
      animation: {
        duration: 2000,
        easing: 'easeOutCubic'
      }
    }
  });
}

ngOnInit(): void {
  this.createChart();
}





}
