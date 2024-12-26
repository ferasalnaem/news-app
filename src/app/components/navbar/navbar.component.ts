import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    // Navigate to the main route and reload
    this.router.navigate(['/']).then(() => {
      window.location.reload(); // Force reload to reset state
    });
  }
}
