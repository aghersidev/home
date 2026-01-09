export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  repo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Amazon.com Serverless Email Service Application',
    description:
      'A fully featured email notifications IaC pipeline for internal usage of Amazon teams, powered by AWS services.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    tags: ['AWS', 'TypeScript', 'CDK'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'DescubrePUCP - Mobile AR app',
    description:
      'DescubrePUCP is a mobile AR application integrated with Google Services that shows the location and information of places and events within the university campus.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    tags: ['MySQL', 'PHP', 'Bootstrap'],
    demo: 'https://descubre.pucp.edu.pe/',
    repo: '#',
  },
  {
    title: 'Campaign Clima de Cambios',
    description:
      'Information System for Campus Sustainability (including website, mobile and interactive experience) designed to promote environment management.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
    tags: ['JavaScript', 'API', 'SCSS'],
    demo: '#',
    repo: '#',
  },
];
