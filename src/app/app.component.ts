import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    TechStackComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
