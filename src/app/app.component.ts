import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobListingComponent } from './job-listing/job-listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'joblisting';
}
