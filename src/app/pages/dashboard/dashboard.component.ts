import { Component, inject,Input } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})





export class DashboardComponent {

  cards = [
    { title: 'Users', icon: 'people', count: '15', label: 'Currently Online' },
    { title: 'Revenue', icon: 'attach_money', count: 'Ksh 10000', label: 'Total Revenue' },
    { title: 'Weekly Sales', icon: 'date_range', count: 'Ksh 50000', label: null },
    { title: 'Average Sales', icon: 'monetization_on', count: 'Ksh 50000', label: null },
  ];

  private breakpointObserver = inject(BreakpointObserver);



  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );


}
