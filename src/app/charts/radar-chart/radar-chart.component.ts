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
          data: [267, 176, 72, 79, 92, 74],
          backgroundColor: 'blue'
        },
        {
          label: "Profit",
          data: [142, 242, 136, 127, 117, 138],
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
