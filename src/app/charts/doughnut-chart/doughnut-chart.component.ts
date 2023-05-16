import { Component } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
public chart:any

createChart() {
  this.chart = new Chart("DoughnutChart", {
    type: 'doughnut',
    data: {
      labels: ['Nyama Choma', 'Tusker', 'Coke', 'Dry Fry Fish', 'White Cap', 'GlenFidich'],
      datasets: [
        {
          label: "Sales",
          data: [467, 576, 572, 79, 92, 574],
          backgroundColor: ['blue', 'orange', 'green', 'red', 'purple', 'yellow']
        },
        {
          label: "Profit",
          data: [542, 542, 536, 327, 17, 538],
          backgroundColor: ['limegreen', 'pink', 'teal', 'maroon', 'indigo', 'gold']
        }
      ]
    },
    options: {
      aspectRatio: 1.3,
      animation: {
        duration: 2000,
        easing: 'easeInOutQuad'
      }
    }
  });
}

ngOnInit(): void {
  this.createChart();
}












}
