import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedTextComponent } from "./animated-text-component/animated-text-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, AnimatedTextComponent],
    template: `
    <header>
        <div class="container">
            <nav>
                <div class="logo">Andres<span>Ghersi</span></div>
                <div class="nav-links">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#tech">Skills</a>
                    <a href="https://github.com/aghersidev"
                        target="_blank" rel="noopener noreferrer">
                        Github <i class="fab fa-github"></i>
                    </a>
                </div>
                <button class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text fade-in">
                <h1>Hi, I'm <span>Andres Ghersi</span></h1>
                    <h2><app-animated-text [text]="'Full Stack Software Engineer'" [initialDelay]="0.0" [extraDelay]="0.04"></app-animated-text></h2>
                    <p><app-animated-text [text]="'Experienced in Cloud projects, Databases and Agile Methodologies. Check my projects and technology stack section for more detail.'" [initialDelay]="0.8" [extraDelay]="0.00"></app-animated-text></p>
                    <div class="cta-buttons">
                        <a href="#projects" class="btn btn-primary">
                            <i class="fa-solid fa-folder"></i> View Projects</a>
                        <a href="#contact" class="btn btn-secondary">
                            <i class="fa-solid fa-file-pdf"></i> Download Resume</a>
                    </div>
                    <div class="social-links">
                        <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Medium"><i class="fab fa-medium"></i></a>
                    </div>
                </div>
                <div class="hero-image fade-in delay-1">
                    <img src="./resources/images/6555646.JPG" alt="Andres Ghersi">
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="section" id="projects">
        <div class="container">
            <div class="projects">
                <div class="section-title fade-in">
                <h2>Some projects I have worked on</h2>
                </div>
            
                <div class="projects-grid">
                @for (project of projects; track project.title) {
                    <div class="project-card fade-in delay-1">
                        <div class="project-image">
                            <img src="{{project.image}}" alt="{{project.title}}">
                        </div>
                        <div class="project-info">
                            <h3>{{project.title}}</h3>
                            <p>{{project.description}}</p>
                            <div class="project-tags">
                                @for (tag of project.tags; track tag) {
                                    <span class="project-tag">{{tag}}</span>
                                } @empty {
                                    <p>No tags available.</p>
                                }
                            </div>
                            <div class="project-links">
                                <a href="{{project.demo}}"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                                <a href="{{project.repo}}"><i class="fab fa-github"></i> Source Code</a>
                            </div>
                        </div>
                    </div>
                } @empty {
                    <p>No projects to display.</p>
                }                
            </div> 
            </div> 
        </div>
    </section>
    <!-- Tech Stack Bento Grid -->
    <section class="section" id="tech">
        <div class="container">
            <div class="tech-stack fade-in">
                <div class="section-title fade-in">
                    <h2>Technologies I use most of the time</h2>
                </div>
                <div class="bento-grid">
                    @for (tech of techStack; track tech.name) {
                        <div class="tech-item">
                            <div class="tech-icon"><i class="{{tech.icon}}"></i></div>
                            <div class="tech-name">{{tech.name}}</div>
                        </div>
                    } @empty {
                        <p>No technologies to display.</p>
                    }
                </div>
            </div>
        </div>
    </section>
   
                
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">Andres<span>Ghersi</span></div>
                <div class="footer-social">
                    <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
                <div class="footer-links">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#tech">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="copyright">
                    &copy; 2025 Andres Ghersi. All rights reserved.
                </div>
            </div>
        </div>
      </footer>
    `,
    styleUrls: ['./app.component.css']
}
)
export class AppComponent {
    menuOpen = false;

    projects = [
        {
            title: 'Amazon.com Serverless Email Service Application',
            description: 'A fully featured email notifications IaC pipeline for internal usage of Amazon teams, powered by AWS services.',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
            tags: ['AWS', 'TypeScript', 'CDK'],
            demo: 'https://www.amazon.com/',
            repo: '#'
        },
        {
            title: 'DescubrePUCP - Mobile AR app',
            description: 'DescubrePUCP is a mobile AR application integrated with Google Services that shows the location and information of places and events within the university campus.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
            tags: ['MySQL', 'PHP', 'Bootstrap'],
            demo: 'https://descubre.pucp.edu.pe/',
            repo: '#'
        },
        {
            title: 'Campaign Clima de Cambios',
            description: 'Information System for Campus Sustainability (including website, mobile and interactive experience) designed to promote environment management.',
            image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
            tags: ['JavaScript', 'API', 'SCSS'],
            demo: '#',
            repo: '#'
        }
    ];

    techStack = [
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'SpringBoot', icon: 'fab fa-java' },
        { name: 'AWS', icon: 'fab fa-aws' },
        { name: 'Relational Databases', icon: 'fas fa-database' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    ];
    ngAfterViewInit() {
        // Smooth scrolling for navigation links
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e: Event) => {
                e.preventDefault();

                const target = document.querySelector(
                    (e.currentTarget as HTMLAnchorElement).getAttribute('href')!
                );

                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}
