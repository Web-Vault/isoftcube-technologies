import { Code, Smartphone, Shield, Cloud, Users, Palette, Database, Headphones } from "lucide-react"

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Remote"
  experience: string
  genderPreference: "Any" | "Male" | "Female" | "Prefer not to specify"
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
  salary?: string
  icon: any
  postedDate: string
}

export const jobs: Job[] = [
  {
    id: "senior-fullstack-dev",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    experience: "5+ years",
    genderPreference: "Any",
    description:
      "We're looking for an experienced Full Stack Developer to join our engineering team and help build cutting-edge web applications.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong understanding of database design and optimization",
      "Experience with CI/CD pipelines and DevOps practices",
      "Bachelor's degree in Computer Science or equivalent experience",
    ],
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams to define and implement new features",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and mentor junior developers",
      "Optimize application performance and user experience",
      "Stay up-to-date with emerging technologies and best practices",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO policy",
    ],
    salary: "$120,000 - $180,000",
    icon: Code,
    postedDate: "2024-01-15",
  },
  {
    id: "mobile-app-developer",
    title: "Mobile App Developer (React Native)",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    experience: "3+ years",
    genderPreference: "Any",
    description:
      "Join our mobile team to create innovative mobile applications that serve millions of users worldwide.",
    requirements: [
      "3+ years of React Native development experience",
      "Strong knowledge of JavaScript/TypeScript",
      "Experience with native iOS and Android development",
      "Familiarity with mobile app deployment processes",
      "Understanding of mobile UI/UX best practices",
      "Experience with state management libraries (Redux, MobX)",
    ],
    responsibilities: [
      "Develop and maintain React Native mobile applications",
      "Implement new features and improve existing functionality",
      "Collaborate with designers to create pixel-perfect UIs",
      "Optimize app performance and user experience",
      "Write unit and integration tests",
      "Participate in app store submission and review processes",
    ],
    benefits: [
      "Competitive salary package",
      "Health and wellness benefits",
      "Remote work flexibility",
      "Learning and development opportunities",
      "Team building activities",
    ],
    salary: "$90,000 - $140,000",
    icon: Smartphone,
    postedDate: "2024-01-10",
  },
  {
    id: "cybersecurity-specialist",
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Austin, TX",
    type: "Full-time",
    experience: "4+ years",
    genderPreference: "Any",
    description:
      "Protect our organization and clients from cyber threats by implementing robust security measures and monitoring systems.",
    requirements: [
      "4+ years of cybersecurity experience",
      "CISSP, CISM, or equivalent security certifications",
      "Experience with security tools (SIEM, IDS/IPS, firewalls)",
      "Knowledge of compliance frameworks (SOC 2, ISO 27001)",
      "Strong understanding of network security protocols",
      "Experience with penetration testing and vulnerability assessments",
    ],
    responsibilities: [
      "Monitor and analyze security events and incidents",
      "Implement and maintain security policies and procedures",
      "Conduct security assessments and audits",
      "Respond to security incidents and breaches",
      "Provide security training to employees",
      "Stay current with emerging security threats and technologies",
    ],
    benefits: [
      "Competitive salary and bonuses",
      "Comprehensive health benefits",
      "Professional certification support",
      "Flexible working hours",
      "Security conference attendance",
    ],
    salary: "$110,000 - $160,000",
    icon: Shield,
    postedDate: "2024-01-08",
  },
  {
    id: "cloud-architect",
    title: "Cloud Solutions Architect",
    department: "Infrastructure",
    location: "Seattle, WA / Remote",
    type: "Full-time",
    experience: "6+ years",
    genderPreference: "Any",
    description: "Design and implement scalable cloud infrastructure solutions for our clients and internal systems.",
    requirements: [
      "6+ years of cloud architecture experience",
      "AWS/Azure/GCP certifications (Solutions Architect level)",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Strong knowledge of containerization (Docker, Kubernetes)",
      "Experience with microservices architecture",
      "Understanding of DevOps practices and CI/CD pipelines",
    ],
    responsibilities: [
      "Design cloud architecture solutions for client projects",
      "Lead cloud migration and modernization initiatives",
      "Optimize cloud costs and performance",
      "Mentor development teams on cloud best practices",
      "Create technical documentation and architecture diagrams",
      "Evaluate and recommend new cloud technologies",
    ],
    benefits: [
      "Excellent compensation package",
      "Stock options",
      "Premium health insurance",
      "Cloud certification reimbursement",
      "Conference and training budget",
    ],
    salary: "$140,000 - $200,000",
    icon: Cloud,
    postedDate: "2024-01-05",
  },
  {
    id: "project-manager",
    title: "Technical Project Manager",
    department: "Operations",
    location: "Chicago, IL / Hybrid",
    type: "Full-time",
    experience: "4+ years",
    genderPreference: "Any",
    description: "Lead cross-functional teams to deliver complex technical projects on time and within budget.",
    requirements: [
      "4+ years of technical project management experience",
      "PMP or Agile/Scrum certifications preferred",
      "Experience managing software development projects",
      "Strong understanding of SDLC methodologies",
      "Excellent communication and leadership skills",
      "Experience with project management tools (Jira, Asana, Monday)",
    ],
    responsibilities: [
      "Plan, execute, and deliver technical projects",
      "Coordinate with development, design, and QA teams",
      "Manage project timelines, budgets, and resources",
      "Communicate project status to stakeholders",
      "Identify and mitigate project risks",
      "Facilitate Agile ceremonies and processes",
    ],
    benefits: [
      "Competitive salary",
      "Performance-based bonuses",
      "Health and dental coverage",
      "Professional development support",
      "Hybrid work model",
    ],
    salary: "$95,000 - $130,000",
    icon: Users,
    postedDate: "2024-01-03",
  },
  {
    id: "ui-ux-designer",
    title: "Senior UI/UX Designer",
    department: "Design",
    location: "Los Angeles, CA / Remote",
    type: "Full-time",
    experience: "4+ years",
    genderPreference: "Any",
    description: "Create exceptional user experiences and beautiful interfaces for our web and mobile applications.",
    requirements: [
      "4+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, and Adobe Creative Suite",
      "Strong portfolio demonstrating design thinking process",
      "Experience with user research and usability testing",
      "Knowledge of design systems and component libraries",
      "Understanding of front-end development constraints",
    ],
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and create user personas",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve design systems",
      "Present design concepts to stakeholders",
    ],
    benefits: [
      "Creative freedom and autonomy",
      "Top-tier design tools and equipment",
      "Health and wellness benefits",
      "Design conference attendance",
      "Flexible work arrangements",
    ],
    salary: "$85,000 - $125,000",
    icon: Palette,
    postedDate: "2024-01-01",
  },
  {
    id: "database-administrator",
    title: "Database Administrator",
    department: "Infrastructure",
    location: "Denver, CO",
    type: "Full-time",
    experience: "5+ years",
    genderPreference: "Any",
    description: "Manage and optimize our database systems to ensure high performance, availability, and security.",
    requirements: [
      "5+ years of database administration experience",
      "Expertise in PostgreSQL, MySQL, and MongoDB",
      "Experience with database performance tuning",
      "Knowledge of backup and disaster recovery procedures",
      "Understanding of database security best practices",
      "Experience with cloud database services (RDS, Atlas)",
    ],
    responsibilities: [
      "Install, configure, and maintain database systems",
      "Monitor database performance and optimize queries",
      "Implement backup and recovery strategies",
      "Ensure database security and compliance",
      "Troubleshoot database issues and outages",
      "Plan and execute database migrations",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance coverage",
      "Retirement savings plan",
      "Professional certification support",
      "On-call compensation",
    ],
    salary: "$100,000 - $145,000",
    icon: Database,
    postedDate: "2023-12-28",
  },
  {
    id: "customer-success-manager",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Miami, FL / Remote",
    type: "Full-time",
    experience: "3+ years",
    genderPreference: "Any",
    description: "Build strong relationships with our clients and ensure their success with our technology solutions.",
    requirements: [
      "3+ years of customer success or account management experience",
      "Strong communication and interpersonal skills",
      "Experience in B2B technology or SaaS industry",
      "Ability to understand technical concepts and solutions",
      "CRM experience (Salesforce, HubSpot)",
      "Bachelor's degree in Business or related field",
    ],
    responsibilities: [
      "Manage relationships with key client accounts",
      "Ensure successful onboarding of new clients",
      "Monitor client health and identify expansion opportunities",
      "Resolve client issues and escalations",
      "Conduct regular business reviews with clients",
      "Collaborate with sales and technical teams",
    ],
    benefits: [
      "Base salary plus commission",
      "Health and dental benefits",
      "Travel opportunities",
      "Professional development budget",
      "Remote work flexibility",
    ],
    salary: "$70,000 - $100,000 + Commission",
    icon: Headphones,
    postedDate: "2023-12-25",
  },
]
