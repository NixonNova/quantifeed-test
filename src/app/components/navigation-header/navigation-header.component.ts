import { Component } from '@angular/core';
import { faGlobe, faUser, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
    selector: 'navigation-header',
    templateUrl: 'navigation-header.component.html',
    styleUrl: 'navigation-header.component.css',
    standalone: true,
    imports:[FontAwesomeModule]
  })
  export class NavigationHeaderComponent {
    faGlobe = faGlobe;
    faUser = faUser;
    faPencil = faPencil;
  
  }