import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedTextComponent } from '../../animated-text-component/animated-text-component.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, AnimatedTextComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {}
