import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'date-viewer',
  templateUrl: 'date-viewer.component.html',
  standalone: true,
  imports:[CommonModule]
})
export class DateViewerComponent {
  @Input() date: Date | undefined;

  ngOnInit() {
  }

}