import { Code, Smartphone, Wifi, Cloud, Shield, Zap, Database, Cpu, Globe, Headphones } from "lucide-react"

export interface SubService {
  name: string
  description: string
  technologies: string[]
  features: string[]
}

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: Code,
    shortDescription: "Custom websites and web applications built with modern technologies",
    fullDescription:
      "We create stunning, responsive websites and powerful web applications using the latest technologies. Our comprehensive web development services cover everything from simple landing pages to complex enterprise applications, ensuring your digital presence stands out in today's competitive landscape.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure", "Modern Frameworks", "Custom CMS"],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    benefits: [
      "Increased online presence",
      "Better user engagement",
      "Higher conversion rates",
      "Mobile-first approach",
    ],
    subServices: [
      {
        name: "Frontend Development",
        description: "Modern, responsive user interfaces with cutting-edge frameworks",
        technologies: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "SCSS"],
        features: ["Component-based architecture", "State management", "Progressive Web Apps", "Server-side rendering"],
      },
      {
        name: "Backend Development",
        description: "Robust server-side solutions and APIs for scalable applications",
        technologies: ["Node.js", "Express.js", "Python", "Django", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
        features: ["RESTful APIs", "GraphQL", "Database integration", "Authentication systems", "Cloud deployment"],
      },
      {
        name: "Full-Stack Development",
        description: "Complete web solutions combining frontend and backend expertise",
        technologies: ["MERN Stack", "MEAN Stack", "Next.js", "Laravel + Vue", "Django + React"],
        features: ["End-to-end development", "Database design", "API integration", "Deployment & DevOps"],
      },
      {
        name: "E-commerce Development",
        description: "Powerful online stores and marketplace solutions",
        technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Custom solutions"],
        features: ["Payment integration", "Inventory management", "Order tracking", "Multi-vendor support"],
      },
      {
        name: "CMS Development",
        description: "Custom content management systems and headless CMS solutions",
        technologies: ["WordPress", "Drupal", "Strapi", "Sanity", "Contentful", "Custom CMS"],
        features: ["Custom post types", "User roles", "SEO optimization", "Multi-language support"],
      },
    ],
  },
  {
    slug: "app-development",
    title: "App Development",
    icon: Smartphone,
    shortDescription: "Native and cross-platform mobile applications for iOS and Android",
    fullDescription:
      "Transform your ideas into powerful mobile applications that deliver exceptional user experiences. We develop both native and cross-platform apps using the latest technologies, ensuring optimal performance, scalability, and user engagement across all devices and platforms.",
    features: [
      "Native Performance",
      "Cross-Platform",
      "User-Friendly",
      "Scalable",
      "Offline Support",
      "Push Notifications",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    benefits: ["Reach wider audience", "Improved customer engagement", "Brand recognition", "Revenue generation"],
    subServices: [
      {
        name: "iOS Development",
        description: "Native iOS applications with optimal performance and user experience",
        technologies: ["Swift", "SwiftUI", "Objective-C", "Xcode", "Core Data", "CloudKit"],
        features: ["Native performance", "iOS design guidelines", "App Store optimization", "Device-specific features"],
      },
      {
        name: "Android Development",
        description: "Native Android applications following Material Design principles",
        technologies: ["Kotlin", "Java", "Android Studio", "Jetpack Compose", "Room", "Firebase"],
        features: [
          "Material Design",
          "Google services integration",
          "Play Store optimization",
          "Multiple device support",
        ],
      },
      {
        name: "Cross-Platform Development",
        description: "Single codebase applications for both iOS and Android platforms",
        technologies: ["React Native", "Flutter", "Expo", "Dart", "Redux", "SQLite"],
        features: ["Code reusability", "Faster development", "Consistent UI/UX", "Cost-effective solution"],
      },
      {
        name: "Progressive Web Apps",
        description: "Web applications that work like native mobile apps",
        technologies: ["React", "Vue.js", "Service Workers", "Web App Manifest", "IndexedDB"],
        features: [
          "Offline functionality",
          "Push notifications",
          "App-like experience",
          "Cross-platform compatibility",
        ],
      },
    ],
  },
  {
    slug: "iot-solutions",
    title: "IoT Solutions",
    icon: Wifi,
    shortDescription: "Smart connected devices and IoT ecosystem development",
    fullDescription:
      "Build intelligent IoT ecosystems that connect devices, collect data, and provide actionable insights. From smart homes to industrial IoT, we create comprehensive solutions that transform how you interact with technology, enabling automation, monitoring, and control of physical devices through internet connectivity.",
    features: [
      "Real-time Monitoring",
      "Cloud Integration",
      "Data Analytics",
      "Remote Control",
      "Edge Computing",
      "Security Protocols",
    ],
    technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "MQTT", "LoRaWAN", "Zigbee"],
    benefits: ["Operational efficiency", "Cost reduction", "Predictive maintenance", "Data-driven decisions"],
    subServices: [
      {
        name: "Smart Home Solutions",
        description: "Intelligent home automation systems for comfort and security",
        technologies: ["Raspberry Pi", "Arduino", "Zigbee", "Z-Wave", "WiFi", "Bluetooth", "HomeKit"],
        features: ["Voice control", "Mobile app integration", "Energy monitoring", "Security systems"],
      },
      {
        name: "Industrial IoT",
        description: "Industrial automation and monitoring solutions for manufacturing",
        technologies: ["PLC", "SCADA", "Modbus", "OPC-UA", "LoRaWAN", "Edge Computing"],
        features: ["Equipment monitoring", "Predictive maintenance", "Quality control", "Supply chain optimization"],
      },
      {
        name: "Healthcare IoT",
        description: "Connected medical devices and health monitoring systems",
        technologies: ["Wearable sensors", "Bluetooth LE", "Cloud storage", "ML algorithms", "HIPAA compliance"],
        features: ["Patient monitoring", "Telemedicine", "Health analytics", "Emergency alerts"],
      },
    ],
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    icon: Cloud,
    shortDescription: "Cloud infrastructure setup, migration, and management services",
    fullDescription:
      "Leverage the power of cloud computing with our comprehensive cloud services. We help you migrate, optimize, and manage your infrastructure on leading cloud platforms, ensuring scalability, reliability, and cost-effectiveness for your business operations.",
    features: [
      "AWS/Azure/GCP",
      "Auto Scaling",
      "Cost Optimization",
      "24/7 Support",
      "Disaster Recovery",
      "Performance Monitoring",
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    benefits: ["Reduced IT costs", "Improved scalability", "Enhanced security", "Business continuity"],
    subServices: [
      {
        name: "Cloud Migration",
        description: "Seamless migration of applications and data to cloud platforms",
        technologies: ["AWS Migration Hub", "Azure Migrate", "Google Cloud Migrate", "Terraform", "Ansible"],
        features: ["Assessment & planning", "Data migration", "Application modernization", "Minimal downtime"],
      },
      {
        name: "AWS Solutions",
        description: "Comprehensive Amazon Web Services implementation and management",
        technologies: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "Route 53", "VPC", "CloudWatch"],
        features: ["Serverless architecture", "Auto-scaling", "Load balancing", "Content delivery"],
      },
      {
        name: "Microsoft Azure",
        description: "Enterprise-grade Azure cloud solutions and services",
        technologies: ["Azure VMs", "Azure SQL", "Azure Functions", "Azure DevOps", "Azure AD", "Azure Monitor"],
        features: ["Hybrid cloud", "Enterprise integration", "AI/ML services", "DevOps integration"],
      },
      {
        name: "DevOps & CI/CD",
        description: "Automated deployment pipelines and infrastructure as code",
        technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Terraform"],
        features: [
          "Automated deployments",
          "Infrastructure as code",
          "Container orchestration",
          "Monitoring & logging",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    icon: Shield,
    shortDescription: "Comprehensive security solutions to protect your digital assets",
    fullDescription:
      "Protect your business from cyber threats with our comprehensive security solutions. We provide end-to-end security services including threat detection, vulnerability assessment, compliance management, and incident response to safeguard your digital infrastructure.",
    features: [
      "Threat Detection",
      "Data Protection",
      "Compliance",
      "Security Audits",
      "Incident Response",
      "Employee Training",
    ],
    technologies: ["SIEM", "Firewall", "VPN", "Encryption", "Multi-factor Authentication", "Zero Trust"],
    benefits: ["Risk mitigation", "Regulatory compliance", "Business reputation", "Customer trust"],
    subServices: [
      {
        name: "Security Assessment",
        description: "Comprehensive security audits and vulnerability assessments",
        technologies: ["Nessus", "OpenVAS", "Burp Suite", "OWASP ZAP", "Metasploit", "Nmap"],
        features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance auditing"],
      },
      {
        name: "Network Security",
        description: "Advanced network protection and monitoring solutions",
        technologies: ["Firewalls", "IDS/IPS", "VPN", "Network segmentation", "DDoS protection"],
        features: ["Perimeter security", "Traffic monitoring", "Intrusion detection", "Access control"],
      },
      {
        name: "Data Protection",
        description: "Comprehensive data security and privacy solutions",
        technologies: ["Encryption", "Data masking", "Backup solutions", "DLP", "Key management"],
        features: ["Data classification", "Encryption at rest/transit", "Backup & recovery", "Privacy compliance"],
      },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    icon: Zap,
    shortDescription: "End-to-end digital transformation consulting and implementation",
    fullDescription:
      "Transform your business with our comprehensive digital transformation services. We help organizations modernize their operations, improve efficiency, and stay competitive in the digital age through strategic technology adoption and process optimization.",
    features: [
      "Process Automation",
      "Legacy Modernization",
      "AI Integration",
      "Change Management",
      "Digital Strategy",
      "Training & Support",
    ],
    technologies: ["RPA", "AI/ML", "Blockchain", "API Integration", "Microservices", "DevOps"],
    benefits: ["Operational efficiency", "Cost savings", "Competitive advantage", "Future readiness"],
    subServices: [
      {
        name: "Digital Strategy Consulting",
        description: "Strategic planning and roadmap development for digital transformation",
        technologies: ["Business analysis", "Technology assessment", "ROI modeling", "Change management"],
        features: ["Digital maturity assessment", "Technology roadmap", "Business case development", "Risk assessment"],
      },
      {
        name: "Process Automation",
        description: "Robotic Process Automation and workflow optimization",
        technologies: ["UiPath", "Blue Prism", "Microsoft Power Automate", "Zapier", "Python"],
        features: ["Task automation", "Workflow optimization", "Bot development", "Process mining"],
      },
      {
        name: "Legacy System Modernization",
        description: "Modernization of outdated systems and applications",
        technologies: ["Cloud migration", "API development", "Microservices", "Containerization"],
        features: ["System assessment", "Migration planning", "Data migration", "Integration"],
      },
    ],
  },
  {
    slug: "database-management",
    title: "Database Management",
    icon: Database,
    shortDescription: "Professional database design, optimization, and management services",
    fullDescription:
      "Optimize your data infrastructure with our expert database management services. We design, implement, and maintain robust database solutions that ensure data integrity, performance, and security.",
    features: [
      "Database Design",
      "Performance Tuning",
      "Data Migration",
      "Backup & Recovery",
      "Security Implementation",
      "24/7 Monitoring",
    ],
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Oracle", "SQL Server"],
    benefits: ["Improved performance", "Data security", "Reduced downtime", "Scalable architecture"],
    subServices: [
      {
        name: "Database Design & Architecture",
        description: "Custom database design and architecture planning",
        technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database modeling tools"],
        features: ["Schema design", "Performance optimization", "Scalability planning", "Data modeling"],
      },
      {
        name: "Database Migration",
        description: "Safe and efficient database migration services",
        technologies: ["Migration tools", "ETL processes", "Data validation", "Rollback procedures"],
        features: ["Zero-downtime migration", "Data integrity", "Performance testing", "Rollback planning"],
      },
    ],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    icon: Cpu,
    shortDescription: "Intelligent solutions powered by artificial intelligence and machine learning",
    fullDescription:
      "Harness the power of AI and machine learning to automate processes, gain insights, and create intelligent applications. Our AI solutions help businesses make data-driven decisions and improve efficiency.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Chatbots",
      "Process Automation",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Pandas"],
    benefits: ["Automated decision making", "Improved accuracy", "Cost reduction", "Enhanced customer experience"],
    subServices: [
      {
        name: "Machine Learning Models",
        description: "Custom ML models for predictive analytics and automation",
        technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
        features: ["Predictive modeling", "Classification", "Regression analysis", "Model deployment"],
      },
      {
        name: "Natural Language Processing",
        description: "Text analysis, chatbots, and language understanding systems",
        technologies: ["OpenAI GPT", "BERT", "spaCy", "NLTK", "Transformers", "LangChain"],
        features: ["Text analysis", "Chatbot development", "Sentiment analysis", "Language translation"],
      },
    ],
  },
  {
    slug: "e-commerce-solutions",
    title: "E-commerce Solutions",
    icon: Globe,
    shortDescription: "Complete e-commerce platforms and online store development",
    fullDescription:
      "Build powerful e-commerce platforms that drive sales and enhance customer experience. From custom online stores to marketplace integrations, we create solutions that grow your business.",
    features: [
      "Custom Store Design",
      "Payment Integration",
      "Inventory Management",
      "Order Processing",
      "Mobile Commerce",
      "Analytics & Reporting",
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "React"],
    benefits: ["Increased sales", "Global reach", "Better customer experience", "Automated operations"],
    subServices: [
      {
        name: "Shopify Development",
        description: "Custom Shopify stores and theme development",
        technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "Shopify APIs", "Third-party integrations"],
        features: ["Custom themes", "App development", "Payment integration", "Store optimization"],
      },
      {
        name: "WooCommerce Development",
        description: "WordPress-based e-commerce solutions",
        technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Payment gateways"],
        features: ["Custom plugins", "Theme customization", "Payment integration", "Inventory management"],
      },
      {
        name: "Custom E-commerce",
        description: "Fully custom e-commerce platforms built from scratch",
        technologies: ["React", "Node.js", "Next.js", "Stripe", "PayPal", "Database systems"],
        features: ["Custom functionality", "Scalable architecture", "Advanced features", "Third-party integrations"],
      },
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    icon: Headphones,
    shortDescription: "Strategic IT consulting and technology advisory services",
    fullDescription:
      "Get expert guidance on your technology decisions with our IT consulting services. We help businesses align their technology strategy with business objectives and implement best practices.",
    features: [
      "Technology Assessment",
      "Strategic Planning",
      "Architecture Design",
      "Vendor Selection",
      "Project Management",
      "Risk Assessment",
    ],
    technologies: ["ITIL", "TOGAF", "Agile", "DevOps", "Cloud Platforms", "Enterprise Software"],
    benefits: ["Strategic alignment", "Cost optimization", "Risk mitigation", "Improved efficiency"],
    subServices: [
      {
        name: "Technology Strategy",
        description: "Strategic technology planning and roadmap development",
        technologies: ["Business analysis", "Technology assessment", "Strategic planning tools"],
        features: ["Technology roadmap", "Digital strategy", "Investment planning", "Risk assessment"],
      },
      {
        name: "System Integration",
        description: "Integration of disparate systems and applications",
        technologies: ["APIs", "Middleware", "ESB", "Integration platforms", "Custom connectors"],
        features: ["System connectivity", "Data synchronization", "Workflow automation", "Legacy integration"],
      },
    ],
  },
]
