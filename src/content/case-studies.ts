import type { CaseStudy } from './types';

// Define case study slugs for projects that have detailed case studies
const caseStudySlugs = new Set<string>([
  'tailornex',
  'house-price-prediction',
  'talentlens-ai',
  'library-mcp-server',
  'studdybuddy-ai',
  'ally-assistive-language',
  'electron-ai-engine',
  'mapify',
  'knitkraft',
  'note-vec',
  'contentforge',
  'neon-trail',
  'task-management',
  'appvision-react',
  'paper-erp'
]);

export { caseStudySlugs };

export const getCaseStudy = (slug: string) => caseStudies.find(cs => cs.slug === slug);

// Example case studies (these would be expanded with detailed content)
export const caseStudies: CaseStudy[] = [
  {
    slug: 'tailornex',
    tagline: 'Building a Tailoring Marketplace with Flutter and FastAPI',
    stats: [
      { value: 3, label: 'Team Members' },
      { value: 2026, label: 'Year Started' },
    ],
    blocks: [
      {
        type: 'prose',
        id: 'intro',
        title: 'Introduction',
        paragraphs: [
          'TailorNex is a mobile application designed to connect customers with tailors through a seamless experience of custom design exploration, guided measurements, bidding, and order progress tracking.',
          'The application leverages Flutter for a cross-platform mobile experience and FastAPI for backend services, ensuring scalability and performance.',
        ],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: [
          'Custom design exploration with guided measurements',
          'Bidding system for tailoring services',
          'Real-time order progress tracking',
          'Integration with AWS services for data storage and processing',
        ],
      },
      {
        type: 'metrics',
        id: 'metrics',
        title: 'Technical Metrics',
        columns: ['Metric', 'Value'],
        rows: [
          { label: 'Backend API Response Time', values: ['< 100ms'] },
          { label: 'Database Query Efficiency', values: ['Optimized for DynamoDB'] },
          { label: 'Mobile App Launch Time', values: ['< 2s'] },
        ],
      },
    ],
  },
  {
    slug: 'house-price-prediction',
    tagline: 'Machine Learning for Property Price Estimation',
    stats: [
      { value: 85, decimals: 2, label: 'Model R² Score' },
      { value: 2026, label: 'Year Completed' },
    ],
    blocks: [
      {
        type: 'prose',
        id: 'intro',
        title: 'Introduction',
        paragraphs: [
          'The Smart House Price Prediction System is a machine learning project aimed at estimating property prices using data preprocessing, model experimentation, and an interactive Streamlit interface.',
          'The project achieved an R² score of approximately 85%, demonstrating high accuracy in predicting house prices.',
        ],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: [
          'Data preprocessing pipeline for cleaning and transforming data',
          'Model experimentation with various machine learning algorithms',
          'Interactive Streamlit interface for real-time predictions',
          'Comprehensive documentation and reproducibility',
        ],
      },
      {
        type: 'metrics',
        id: 'metrics',
        title: 'Model Performance',
        columns: ['Metric', 'Value'],
        rows: [
          { label: 'Model R² Score', values: ['85%'] },
          { label: 'Training Time', values: ['< 1 hour'] },
          { label: 'Prediction Accuracy', values: ['High'] },
        ],
      },
    ],
  },
  {
    slug: 'talentlens-ai',
    tagline: 'Privacy-conscious resume analyzer and job matcher',
    stats: [
      { value: 2026, label: 'Year' },
    ],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: [
          'TalentLens AI is a privacy-conscious resume analyzer and job matcher. It leverages explainable NLP scoring to improve hiring outcomes, ensuring applicant privacy through a robust consent framework.',
        ],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: [
          'I served as the Fullstack ML Engineer, responsible for the end-to-end development of the resume parsing engine, integration of pgvector for semantic search, and the design of the explainable NLP scoring system.',
        ],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['Next.js', 'FastAPI', 'PostgreSQL', 'pgvector', 'NLP'],
      },
      {
        type: 'architecture',
        id: 'architecture',
        title: 'System Architecture',
        summary: 'A full-stack architecture combining a performant frontend with a robust Python backend for AI processing.',
        columns: [
          { label: 'Frontend', nodes: ['Next.js', 'React'] },
          { label: 'Backend', nodes: ['FastAPI', 'PostgreSQL', 'pgvector'] },
          { label: 'AI/NLP', nodes: ['Sentence Embeddings', 'Explainable NLP'] },
        ],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: [
          'Resume parsing for PDF and DOCX files',
          'Semantic job matching using pgvector',
          'Explainable NLP scoring for recruiter insights',
          'Applicant privacy and consent management framework',
          'Recruiter workflow dashboard',
        ],
      },
      {
        type: 'list',
        id: 'technical-challenges',
        title: 'Technical Challenges',
        items: [
          'Optimizing semantic search queries with pgvector for large datasets',
          'Ensuring privacy-compliant data handling in the AI processing pipeline',
        ],
      },
      {
        type: 'prose',
        id: 'testing-quality',
        title: 'Testing and Quality',
        paragraphs: [
          'Implemented unit tests for the resume parser and integration tests for the semantic matching service.',
        ],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped'],
      },
    ],
  },
  {
    slug: 'library-mcp-server',
    tagline: 'AI-Powered Library Management System with MCP',
    stats: [
      { value: 2026, label: 'Year' },
    ],
    blocks: [
      {
        type: 'prose',
        id: 'intro',
        title: 'Introduction',
        paragraphs: [
          'A high-performance library management system built with .NET 8, utilizing the Model Context Protocol (MCP) to allow AI clients to interact with library data. It simplifies complex library workflows through intelligent tool-based interaction.',
        ],
      },
      {
        type: 'architecture',
        id: 'architecture',
        title: 'System Architecture',
        summary: 'A robust backend architecture designed for transactional integrity and AI interoperability.',
        columns: [
          { label: 'Backend', nodes: ['.NET 8', 'Entity Framework Core'] },
          { label: 'Data', nodes: ['SQL Server'] },
          { label: 'Interoperability', nodes: ['Model Context Protocol (MCP)'] },
        ],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Implemented Features',
        items: [
          'Transactional book borrowing and return workflows',
          'Advanced book search with pagination',
          'Open Library catalog integration',
          'MCP tools for AI-driven database interaction',
        ],
      },
    ],
  },
  {
    slug: 'studdybuddy-ai',
    tagline: 'AI-Powered Study Assistant',
    stats: [
      { value: 2026, label: 'Year' },
    ],
    blocks: [
      {
        type: 'prose',
        id: 'intro',
        title: 'Project Overview',
        paragraphs: [
          'An AI-powered study assistant application designed to enhance learning efficiency through interactive, intelligent feedback.',
          'The mobile-first approach leverages Generative AI to provide personalized study support.',
        ],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: [
          'I designed and developed the mobile-first frontend interface and integrated Google Generative AI APIs for intelligent feedback processing.',
        ],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['TypeScript', 'Firebase', 'Google Generative AI'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: [
          'Interactive, intelligent feedback system',
          'Secure user authentication with Firebase',
          'Mobile-first responsive design',
        ],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped'],
      },
    ],
  },
  {
    slug: 'ally-assistive-language',
    tagline: 'Real-time assistive technology for communication',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['An assistive technology tool designed to provide real-time language support, aiming to break communication barriers.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['Developed the core real-time language processing engine and integrated the frontend interface for communication support.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['JavaScript'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: ['Real-time language translation/support'],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped'],
      },
    ],
  },
  {
    slug: 'electron-ai-engine',
    tagline: 'Desktop-based AI workflow automation',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['A desktop-based AI integration engine built with Electron, allowing for local AI processing and workflow automation.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['Architected the Electron-based desktop integration and local AI processing pipeline.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['Python', 'Electron'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: ['Local AI processing', 'Workflow automation'],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped'],
      },
    ],
  },
  {
    slug: 'mapify',
    tagline: 'Location-based visualization services',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['A mapping application focused on visualization and location-based data services.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['Developed the mapping interface and data visualization components.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['JavaScript'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: ['Mapping visualization', 'Location-based data services'],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped'],
      },
    ],
  },
  {
    slug: 'knitkraft',
    tagline: 'Pattern design and crafting platform',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['A creative platform concept exploring pattern design and crafting workflows.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['Designed the pattern creation workflow concept and built the frontend prototype.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['EJS'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: ['Pattern design interface'],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped'],
      },
    ],
  },
  {
    slug: 'note-vec',
    tagline: 'Vector-based storage for notes',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['A note-taking application experimenting with vector-based storage for efficient retrieval and semantic search.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['Implemented the vector-based storage engine and semantic search capability using vector embeddings.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['TypeScript', 'Vector Database'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: ['Vector-based note storage', 'Semantic search'],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped'],
      },
    ],
  },
  {
    slug: 'contentforge',
    tagline: 'AI content creation suite',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['An AI content suite mobile application designed to streamline content creation workflows.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['Designed the content creation workflow mobile interface and integrated AI content generation APIs.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['TypeScript', 'Mobile'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: ['AI content generation', 'Mobile workflow'],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['In Development'],
      },
    ],
  },
  {
    slug: 'neon-trail',
    tagline: 'Browser-based arcade game',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['A browser-based arcade game featuring six unlockable levels, increasing difficulty, hazards, power-ups, and combo-based scoring.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['Developed game mechanics, physics-based movement, and rendering using the HTML5 Canvas API.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: ['Six levels', 'Increasing difficulty', 'Power-ups', 'Combo scoring'],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped'],
      },
    ],
  },
  {
    slug: 'task-management',
    tagline: 'Modern task organization',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['A task management application designed to organize work with task details, priority levels, due dates, progress tracking, completion controls, and authentication.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['Developed full-stack functionality for task organization, tracking, and user authentication.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['React', 'Next.js', 'TypeScript'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: ['Task tracking', 'Priority levels', 'Due dates', 'User authentication'],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped'],
      },
    ],
  },
  {
    slug: 'appvision-react',
    tagline: 'Modern frontend project with React and Vite',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['AppVision React is a web application focused on building a modern frontend with reusable components and a responsive user interface. It demonstrates expertise in frontend development using TypeScript and modern tooling.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['I served as the Frontend Developer, responsible for designing and implementing the component architecture and ensuring a responsive design across devices.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: [
          'Component-based UI architecture',
          'Responsive layout design',
          'TypeScript integration for type safety',
          'Fast build times using Vite',
        ],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['Shipped - Completed and deployed as a personal portfolio piece.'],
      },
    ],
  },
  {
    slug: 'paper-erp',
    tagline: 'Workflow-focused ERP concept',
    stats: [{ value: 2026, label: 'Year' }],
    blocks: [
      {
        type: 'prose',
        id: 'overview',
        title: 'Project Overview',
        paragraphs: ['A workflow-focused ERP concept for a paper distribution business, planned around customer and supplier records, stock tracking, ledgers, and invoice generation.'],
      },
      {
        type: 'prose',
        id: 'contribution',
        title: 'My Contribution',
        paragraphs: ['System designer, responsible for the initial architectural design and workflow planning.'],
      },
      {
        type: 'list',
        id: 'stack',
        title: 'Technology Stack',
        items: ['Next.js', 'TypeScript', 'AWS'],
      },
      {
        type: 'list',
        id: 'features',
        title: 'Key Features',
        items: ['Customer/Supplier management', 'Stock tracking', 'Ledgers', 'Invoice generation'],
      },
      {
        type: 'prose',
        id: 'status',
        title: 'Current Status',
        paragraphs: ['In Design'],
      },
    ],
  },
];