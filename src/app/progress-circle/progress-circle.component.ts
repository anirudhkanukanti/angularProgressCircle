import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.radius && changes.radius.currentValue !== changes.radius.previousValue)
      || (changes.completed && changes.completed.currentValue !== changes.completed.previousValue)
      || (changes.total && changes.total.currentValue !== changes.total.previousValue)
    ) {
      const circumference = 2 * Math.PI * this.radius;
      const progressPercent = Math.min(100, (this.completed / this.total) * 100);
      // const offset = circumference * (1 - progressPercent / 100);
      const offset = circumference * (progressPercent / 100);
      this.circleStyles = {
        // 'stroke-dasharray': circumference,
        // 'stroke-dashoffset': offset,
        'stroke-dasharray': offset + ' ' + circumference,
        'stroke-width': this.radius * 2
      };
    }
  }

}
