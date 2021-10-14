import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash-component',
  templateUrl: './dash-component.component.html',
  styleUrls: ['./dash-component.component.css']
})
export class DashComponentComponent {

  constructor(private breakpointObserver: BreakpointObserver) {}
}
