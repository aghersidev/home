import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    template: `
    <header>
        <div class="container">
            <nav>
                <div class="logo">Andres<span>Ghersi</span></div>
                <div class="nav-links">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#tech">Skills</a>
                    <a href="#contact">Contact</a>
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
                    <h2>Full Stack Software Engineer</h2>
                    <p>I am a Software Engineer with experience in Cloud projects, Databases and Agile Methodologies. Check my past projects and technology stacks section for more detail.</p>
                    <div class="cta-buttons">
                        <a href="#projects" class="btn btn-primary">View Projects</a>
                        <a href="#contact" class="btn btn-secondary">Contact Me</a>
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
            <div class="section-title fade-in">
                <h2>My Projects</h2>
            </div>
            <div class="projects-grid">
                <div class="project-card fade-in delay-1">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" alt="E-commerce Platform">
                    </div>
                    <div class="project-info">
                        <h3>E-commerce Platform</h3>
                        <p>A full-featured online store with product listings, shopping cart, and secure checkout system built with React and Node.js.</p>
                        <div class="project-tags">
                            <span class="project-tag">React</span>
                            <span class="project-tag">Node.js</span>
                            <span class="project-tag">MongoDB</span>
                        </div>
                        <div class="project-links">
                            <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            <a href="#"><i class="fab fa-github"></i> Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="project-card fade-in delay-2">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Task Manager">
                    </div>
                    <div class="project-info">
                        <h3>Task Management App</h3>
                        <p>A productivity application for organizing tasks with drag-and-drop functionality, team collaboration and real-time updates.</p>
                        <div class="project-tags">
                            <span class="project-tag">Vue.js</span>
                            <span class="project-tag">Firebase</span>
                            <span class="project-tag">Tailwind CSS</span>
                        </div>
                        <div class="project-links">
                            <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            <a href="#"><i class="fab fa-github"></i> Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="project-card fade-in delay-3">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Recipe Finder">
                    </div>
                    <div class="project-info">
                        <h3>Recipe Finder</h3>
                        <p>A culinary application that allows users to search recipes by ingredients, dietary restrictions, and cooking time.</p>
                        <div class="project-tags">
                            <span class="project-tag">JavaScript</span>
                            <span class="project-tag">API</span>
                            <span class="project-tag">SCSS</span>
                        </div>
                        <div class="project-links">
                            <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                            <a href="#"><i class="fab fa-github"></i> Source Code</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tech Stack Bento Grid -->
            <div class="tech-stack fade-in delay-4" id="tech">
                <div class="section-title">
                    <h2>My Tech Stack</h2>
                </div>
                <div class="bento-grid">
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-js-square"></i></div>
                        <div class="tech-name">JavaScript</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-react"></i></div>
                        <div class="tech-name">React</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-node-js"></i></div>
                        <div class="tech-name">Node.js</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-python"></i></div>
                        <div class="tech-name">Python</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-html5"></i></div>
                        <div class="tech-name">HTML5</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-css3-alt"></i></div>
                        <div class="tech-name">CSS3</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-aws"></i></div>
                        <div class="tech-name">AWS</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fas fa-database"></i></div>
                        <div class="tech-name">MongoDB</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-git-alt"></i></div>
                        <div class="tech-name">Git</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-docker"></i></div>
                        <div class="tech-name">Docker</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fab fa-npm"></i></div>
                        <div class="tech-name">npm</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon"><i class="fas fa-server"></i></div>
                        <div class="tech-name">Express</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact" id="contact">
        <div class="container">
            <div class="section-title">
                <h2>Get In Touch</h2>
            </div>
            <div class="contact-container fade-in">
                <div class="contact-info">
                    <h3>Let's work together</h3>
                    <p>Whether you have a project in mind or just want to say hello. Feel free to reach out!</p>
                    <div class="contact-details">
                        <div class="contact-detail">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-text">
                                <h4>Email</h4>
                                <a href="mailto:andresghersi&#64;gmail.com">andresghersi&#64;gmail.com</a>
                            </div>
                        </div>
                      
                        <div class="contact-detail">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h4>Location</h4>
                                <p>Chicago, IL</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-form delay-1">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" class="form-control" placeholder="Your name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" class="form-control" placeholder="Your email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" class="form-control" placeholder="Subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" class="form-control" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
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
    </footer>`
})
export class AppComponent {
    menuOpen = false;

    projects = [
        {
            title: 'E-commerce Platform',
            description: 'A full-featured online store with product listings, shopping cart, and secure checkout system built with React and Node.js.',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
            tags: ['React', 'Node.js', 'MongoDB'],
            demo: '#',
            repo: '#'
        },
        {
            title: 'Task Manager',
            description: 'A productivity application for organizing tasks with drag-and-drop functionality, team collaboration and real-time updates.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
            tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            demo: '#',
            repo: '#'
        },
        {
            title: 'Recipe Finder',
            description: 'A culinary application that allows users to search recipes by ingredients, dietary restrictions, and cooking time.',
            image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
            tags: ['JavaScript', 'API', 'SCSS'],
            demo: '#',
            repo: '#'
        }
    ];

    techStack = [
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'AWS', icon: 'fab fa-aws' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'npm', icon: 'fab fa-npm' },
        { name: 'Express', icon: 'fas fa-server' }
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
