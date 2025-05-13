import { Component } from '@angular/core';
import jobsData from './data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss',
})
export class JobListingComponent {
  jobs = jobsData;
  filters: string[] = [];

  get filterdJobs() {
    if (this.filters.length === 0) return this.jobs;
    return this.jobs.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
      return this.filters.every((filter) => jobTags.includes(filter));
    });
  }

  addfilter(tag: string) {
    if (!this.filters.includes(tag)) {
      this.filters.push(tag);
    }
  }

  removeFilter(tag: string) {
    this.filters = this.filters.filter((filter) => filter !== tag);
  }

  clearFilters() {
    this.filters = [];
  }

  // ngOnInit(): void {
  //   console.log(this.jobs);
  // }
}
