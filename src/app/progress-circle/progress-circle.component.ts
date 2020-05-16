import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnChanges {

  @Input() total: number;
  @Input() completed: number;
  @Input() radius: number;

  circleStyles: any;

  constructor() { }

  ngOnChanges(): void {
    const circumference = this.radius * 2 * 22 / 7;
    const progressPercent = Math.min(100, (this.completed / this.total) * 100);
    const offset = circumference * (1 - progressPercent / 100);
    this.circleStyles = {
      'stroke-dasharray': circumference,
      'stroke-dashoffset': offset,
      'stroke-width': this.radius * 2
    };
  }

}
