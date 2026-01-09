import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECH_STACK, TechStackItem } from '../../data/tech-stack.data';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css'],
})
export class TechStackComponent {
  techStack: TechStackItem[] = TECH_STACK;
}
