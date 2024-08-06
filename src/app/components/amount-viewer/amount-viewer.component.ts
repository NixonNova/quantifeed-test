import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'amount-viewer',
  templateUrl: 'amount-viewer.component.html',
  standalone: true,
  imports:[CommonModule]
})
export class AmountViewerComponent {
  @Input() amount: number | undefined;
  @Input() currency: string | undefined;

  ngOnInit() {
  }

}