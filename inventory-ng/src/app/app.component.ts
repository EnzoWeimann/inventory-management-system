import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Root component of the app.
 * 
 * Hosts the main layout and navigation bar defined in its HTML template.
 * It includes a router outlet to load components dynamucally based on the route.
 */
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
