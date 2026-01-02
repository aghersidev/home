import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  imports: [CommonModule],
  standalone: true,
  template: `
        <span 
          *ngFor="let char of letters; let i = index"
          class="letter"
          [style.animation-delay]="getDelay(i)">
          {{ char === ' ' ? '\u00A0' : char }}
        </span>
  `,
  styles: [`
    .text-container {
      display: flex;
    }

    .letter {
      display: inline-block;
      opacity: 0;
      transform: rotateY(-90deg);
      animation: flipIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    @keyframes flipIn {
      from {
        opacity: 0;
        transform: rotateY(-90deg) translateZ(-50px);
      }
      to {
        opacity: 1;
        transform: rotateY(0deg) translateZ(0);
      }
    }
  `]
})
export class AnimatedTextComponent implements OnChanges {
  @Input() text: string = 'Angular 3D';
  @Input() initialDelay: number = 0;  // Delay inicial en segundos
  @Input() extraDelay: number = 0.07; // Delay extra por letra en segundos

  letters: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.letters = Array.from(this.text);
  }

  getDelay(index: number): string {
    return `${this.initialDelay + index * this.extraDelay}s`;
  }
}
