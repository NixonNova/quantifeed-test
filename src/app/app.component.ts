import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationHeaderComponent } from "./components/navigation-header/navigation-header.component";
import { RetirementDetailFormComponent } from "./components/retirement-detail-form/retirement-detail-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationHeaderComponent, RetirementDetailFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

