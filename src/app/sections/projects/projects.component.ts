import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
