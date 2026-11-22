const careers = [
  {
    "title": "Data Analyst",
    "category": "Data & Analytics",
    "description": "Turns raw data into insights that support business decisions.",
    "dims": [
      "data",
      "business",
      "research"
    ],
    "reasons": [
      "You prefer evidence-based decisions",
      "You enjoy finding patterns and explaining them"
    ],
    "roadmap": [
      "Excel and data cleaning",
      "SQL and basic statistics",
      "Power BI dashboards",
      "Python foundations and portfolio projects"
    ],
    "salary": "analytics"
  },
  {
    "title": "Business Intelligence Analyst",
    "category": "Data & Analytics",
    "description": "Builds dashboards and reporting systems to monitor performance.",
    "dims": [
      "data",
      "business",
      "systems"
    ],
    "reasons": [
      "You like dashboards and measurable outcomes",
      "You enjoy connecting business questions with data"
    ],
    "roadmap": [
      "Excel and SQL",
      "Data modeling",
      "Power BI or Tableau",
      "Build a KPI dashboard project"
    ],
    "salary": "analytics"
  },
  {
    "title": "Data Scientist",
    "category": "Data & Analytics",
    "description": "Uses statistics and programming to investigate complex data and build models.",
    "dims": [
      "data",
      "research",
      "software"
    ],
    "reasons": [
      "You enjoy investigating complex questions",
      "You show interest in statistics and experimentation"
    ],
    "roadmap": [
      "Python and statistics",
      "SQL and data preparation",
      "Machine learning foundations",
      "End-to-end prediction project"
    ],
    "salary": "advanced_data"
  },
  {
    "title": "Machine Learning Engineer",
    "category": "Data & Analytics",
    "description": "Builds and deploys machine-learning features in software products.",
    "dims": [
      "data",
      "software",
      "systems"
    ],
    "reasons": [
      "You like both programming and intelligent systems",
      "You prefer building technical solutions"
    ],
    "roadmap": [
      "Python and software fundamentals",
      "ML algorithms and evaluation",
      "APIs and model deployment",
      "Build and deploy a small ML application"
    ],
    "salary": "advanced_data"
  },
  {
    "title": "Data Engineer",
    "category": "Data & Analytics",
    "description": "Builds pipelines and platforms that move and prepare data.",
    "dims": [
      "data",
      "software",
      "systems"
    ],
    "reasons": [
      "You enjoy organizing data systems",
      "You like technical problem-solving behind analytics"
    ],
    "roadmap": [
      "SQL and Python",
      "Databases and data modeling",
      "ETL/ELT pipelines",
      "Build a small data pipeline"
    ],
    "salary": "data_engineering"
  },
  {
    "title": "Database Administrator (DBA)",
    "category": "Data & Analytics",
    "description": "Maintains database availability, performance, backup, and security.",
    "dims": [
      "data",
      "systems",
      "infra"
    ],
    "reasons": [
      "You prefer structured systems and reliability",
      "You show interest in databases and troubleshooting"
    ],
    "roadmap": [
      "SQL and relational databases",
      "Database administration basics",
      "Backup, recovery, and access control",
      "Practice with a database server"
    ],
    "salary": "infra"
  },
  {
    "title": "SQL Developer",
    "category": "Data & Analytics",
    "description": "Creates and optimizes SQL queries and database logic.",
    "dims": [
      "data",
      "software",
      "systems"
    ],
    "reasons": [
      "You enjoy structured logic and querying information",
      "You prefer focused technical problem-solving"
    ],
    "roadmap": [
      "SQL fundamentals",
      "Joins, subqueries, and window functions",
      "Stored procedures and optimization",
      "Build a reporting database project"
    ],
    "salary": "analytics"
  },
  {
    "title": "Reporting Analyst",
    "category": "Data & Analytics",
    "description": "Creates accurate recurring reports and performance summaries.",
    "dims": [
      "data",
      "business",
      "operations"
    ],
    "reasons": [
      "You value accuracy and clear reporting",
      "You like turning information into useful summaries"
    ],
    "roadmap": [
      "Advanced Excel",
      "SQL basics",
      "Reporting and KPI design",
      "Create a monthly business report"
    ],
    "salary": "analytics"
  },
  {
    "title": "Front-End Developer",
    "category": "Software & Development",
    "description": "Builds the visible and interactive parts of websites and applications.",
    "dims": [
      "software",
      "design",
      "creative"
    ],
    "reasons": [
      "You enjoy creating things people interact with",
      "You show interest in visual details and coding"
    ],
    "roadmap": [
      "HTML and CSS",
      "JavaScript fundamentals",
      "Responsive layouts and React",
      "Build and publish a portfolio website"
    ],
    "salary": "software"
  },
  {
    "title": "Back-End Developer",
    "category": "Software & Development",
    "description": "Builds server-side logic, APIs, and database integrations.",
    "dims": [
      "software",
      "systems",
      "logic"
    ],
    "reasons": [
      "You enjoy logic and behind-the-scenes systems",
      "You prefer solving technical problems"
    ],
    "roadmap": [
      "Choose JavaScript, Python, Java, or C#",
      "APIs and SQL databases",
      "Authentication and testing",
      "Build a REST API project"
    ],
    "salary": "software"
  },
  {
    "title": "Full-Stack Developer",
    "category": "Software & Development",
    "description": "Works across the interface, server, and database of an application.",
    "dims": [
      "software",
      "systems",
      "design"
    ],
    "reasons": [
      "You enjoy a mix of visual and logical work",
      "You are interested in building complete applications"
    ],
    "roadmap": [
      "HTML, CSS, and JavaScript",
      "Front-end framework",
      "Back-end APIs and SQL",
      "Build a full-stack application"
    ],
    "salary": "software"
  },
  {
    "title": "Mobile App Developer",
    "category": "Software & Development",
    "description": "Creates applications for phones and tablets.",
    "dims": [
      "software",
      "creative",
      "systems"
    ],
    "reasons": [
      "You like building tools for everyday use",
      "You show interest in app experiences and coding"
    ],
    "roadmap": [
      "Programming fundamentals",
      "Kotlin, Swift, Flutter, or React Native",
      "APIs and mobile UI",
      "Build and test a mobile app"
    ],
    "salary": "software"
  },
  {
    "title": "Software Engineer",
    "category": "Software & Development",
    "description": "Designs, develops, tests, and maintains software systems.",
    "dims": [
      "software",
      "logic",
      "systems"
    ],
    "reasons": [
      "You enjoy structured problem-solving",
      "You prefer creating and improving technical systems"
    ],
    "roadmap": [
      "Programming and data structures",
      "OOP and software design",
      "Git, testing, and databases",
      "Build two practical software projects"
    ],
    "salary": "software"
  },
  {
    "title": "UI/UX Designer",
    "category": "Software & Development",
    "description": "Designs useful, clear, and accessible digital experiences.",
    "dims": [
      "design",
      "creative",
      "research"
    ],
    "reasons": [
      "You notice how people use digital products",
      "You enjoy visual thinking and understanding user needs"
    ],
    "roadmap": [
      "Design principles and user research",
      "Wireframes and Figma",
      "Prototyping and usability tests",
      "Create two case studies for a portfolio"
    ],
    "salary": "design"
  },
  {
    "title": "Software Tester (QA Engineer)",
    "category": "Software & Development",
    "description": "Checks software behavior and helps teams prevent defects.",
    "dims": [
      "software",
      "systems",
      "detail"
    ],
    "reasons": [
      "You like checking details and finding inconsistencies",
      "You prefer structured tasks and quality"
    ],
    "roadmap": [
      "Software testing fundamentals",
      "Test cases and bug reports",
      "API and browser testing",
      "Test a sample web application"
    ],
    "salary": "software"
  },
  {
    "title": "Automation Tester",
    "category": "Software & Development",
    "description": "Uses code to automate repeatable software tests.",
    "dims": [
      "software",
      "automation",
      "logic"
    ],
    "reasons": [
      "You enjoy improving repetitive tasks",
      "You like coding with a clear practical purpose"
    ],
    "roadmap": [
      "Testing fundamentals",
      "JavaScript or Python",
      "Playwright, Cypress, or Selenium",
      "Build an automated test suite"
    ],
    "salary": "software"
  },
  {
    "title": "IT Support Specialist",
    "category": "IT & Infrastructure",
    "description": "Helps users troubleshoot devices, software, and access issues.",
    "dims": [
      "infra",
      "communication",
      "systems"
    ],
    "reasons": [
      "You like solving practical technology problems",
      "You are comfortable helping people"
    ],
    "roadmap": [
      "Computer and OS fundamentals",
      "Networking basics",
      "Troubleshooting and ticketing",
      "Practice common support scenarios"
    ],
    "salary": "support"
  },
  {
    "title": "System Administrator",
    "category": "IT & Infrastructure",
    "description": "Maintains servers, accounts, operating systems, and IT services.",
    "dims": [
      "infra",
      "systems",
      "security"
    ],
    "reasons": [
      "You prefer maintaining reliable systems",
      "You show interest in operating systems and infrastructure"
    ],
    "roadmap": [
      "Windows and Linux fundamentals",
      "Networking and identity management",
      "Scripting and backups",
      "Build a small virtual lab"
    ],
    "salary": "infra"
  },
  {
    "title": "Network Engineer",
    "category": "IT & Infrastructure",
    "description": "Designs and maintains networks and connectivity.",
    "dims": [
      "infra",
      "systems",
      "logic"
    ],
    "reasons": [
      "You enjoy understanding how systems connect",
      "You like diagnosing technical issues"
    ],
    "roadmap": [
      "Networking fundamentals and TCP/IP",
      "Routing and switching concepts",
      "Network monitoring",
      "Practice network simulations"
    ],
    "salary": "infra"
  },
  {
    "title": "Cloud Engineer",
    "category": "IT & Infrastructure",
    "description": "Deploys and maintains infrastructure on cloud platforms.",
    "dims": [
      "infra",
      "systems",
      "software"
    ],
    "reasons": [
      "You are interested in modern infrastructure",
      "You enjoy technical systems and continuous learning"
    ],
    "roadmap": [
      "Linux and networking",
      "AWS or Azure fundamentals",
      "Cloud security and automation",
      "Deploy a small cloud project"
    ],
    "salary": "cloud"
  },
  {
    "title": "DevOps Engineer",
    "category": "IT & Infrastructure",
    "description": "Automates software delivery and improves system reliability.",
    "dims": [
      "infra",
      "software",
      "automation"
    ],
    "reasons": [
      "You like automation and technical workflows",
      "You enjoy connecting development with operations"
    ],
    "roadmap": [
      "Linux and scripting",
      "Git and CI/CD",
      "Docker and cloud basics",
      "Build a CI/CD pipeline"
    ],
    "salary": "cloud"
  },
  {
    "title": "Cybersecurity Analyst",
    "category": "IT & Infrastructure",
    "description": "Supports defensive security monitoring and incident investigation.",
    "dims": [
      "security",
      "infra",
      "research"
    ],
    "reasons": [
      "You are interested in protecting systems",
      "You enjoy investigation and careful analysis"
    ],
    "roadmap": [
      "Networking and operating systems",
      "Security fundamentals",
      "Logs and defensive monitoring",
      "Complete safe defensive lab exercises"
    ],
    "salary": "security"
  },
  {
    "title": "Information Security Specialist",
    "category": "IT & Infrastructure",
    "description": "Helps protect information through risk controls, policies, and awareness.",
    "dims": [
      "security",
      "business",
      "detail"
    ],
    "reasons": [
      "You value protecting information and reducing risk",
      "You like structured policies and documentation"
    ],
    "roadmap": [
      "Information security fundamentals",
      "Risk and control concepts",
      "Security policies and awareness",
      "Study a basic security framework"
    ],
    "salary": "security"
  },
  {
    "title": "Business Analyst",
    "category": "Business & Systems",
    "description": "Connects business needs with clear requirements and practical solutions.",
    "dims": [
      "business",
      "communication",
      "research"
    ],
    "reasons": [
      "You enjoy understanding people's needs",
      "You like organizing problems into clear requirements"
    ],
    "roadmap": [
      "Business analysis fundamentals",
      "Requirements and process mapping",
      "User stories and stakeholder communication",
      "Document a sample business case"
    ],
    "salary": "business"
  },
  {
    "title": "Systems Analyst",
    "category": "Business & Systems",
    "description": "Studies systems and defines how technology should support requirements.",
    "dims": [
      "systems",
      "business",
      "logic"
    ],
    "reasons": [
      "You enjoy connecting business processes with technology",
      "You like structured analysis"
    ],
    "roadmap": [
      "Systems analysis fundamentals",
      "Requirements and UML diagrams",
      "SQL and system workflows",
      "Create a system analysis case study"
    ],
    "salary": "business"
  },
  {
    "title": "ERP Consultant",
    "category": "Business & Systems",
    "description": "Helps organizations implement integrated business software.",
    "dims": [
      "business",
      "systems",
      "communication"
    ],
    "reasons": [
      "You like business processes and technology together",
      "You enjoy explaining systems and supporting users"
    ],
    "roadmap": [
      "Accounting and operations processes",
      "ERP concepts",
      "Choose an ERP platform/module",
      "Practice a business process implementation case"
    ],
    "salary": "business"
  },
  {
    "title": "SAP Consultant",
    "category": "Business & Systems",
    "description": "Specializes in configuring and supporting SAP business modules.",
    "dims": [
      "business",
      "systems",
      "detail"
    ],
    "reasons": [
      "You are interested in enterprise systems",
      "You prefer structured business workflows"
    ],
    "roadmap": [
      "Understand core business processes",
      "Explore SAP fundamentals",
      "Choose a module such as FI, MM, or SD",
      "Practice an end-to-end process case"
    ],
    "salary": "business"
  },
  {
    "title": "CRM Specialist",
    "category": "Business & Systems",
    "description": "Maintains customer relationship systems and workflows.",
    "dims": [
      "business",
      "systems",
      "communication"
    ],
    "reasons": [
      "You like customer processes and organized information",
      "You enjoy improving how teams use systems"
    ],
    "roadmap": [
      "CRM concepts and customer journeys",
      "Learn Salesforce or Dynamics basics",
      "Data quality and reporting",
      "Configure a sample CRM workflow"
    ],
    "salary": "business"
  },
  {
    "title": "IT Project Manager",
    "category": "Business & Systems",
    "description": "Coordinates technology projects, people, timelines, and delivery.",
    "dims": [
      "leadership",
      "business",
      "communication"
    ],
    "reasons": [
      "You enjoy coordinating people and tasks",
      "You prefer planning and organizing work"
    ],
    "roadmap": [
      "Project management fundamentals",
      "Agile and Scrum basics",
      "Risk, scope, and scheduling",
      "Plan a sample technology project"
    ],
    "salary": "management"
  },
  {
    "title": "Product Manager",
    "category": "Business & Systems",
    "description": "Guides product direction by balancing user needs and business goals.",
    "dims": [
      "leadership",
      "business",
      "research",
      "communication"
    ],
    "reasons": [
      "You like deciding what should be built and why",
      "You are interested in users, priorities, and strategy"
    ],
    "roadmap": [
      "Product discovery and user research",
      "Roadmaps and prioritization",
      "Metrics and Agile collaboration",
      "Create a product case study"
    ],
    "salary": "management"
  },
  {
    "title": "IT Business Consultant",
    "category": "Business & Systems",
    "description": "Advises organizations on technology and process improvements.",
    "dims": [
      "business",
      "communication",
      "research"
    ],
    "reasons": [
      "You enjoy analyzing business challenges",
      "You like presenting options and recommendations"
    ],
    "roadmap": [
      "Business and IT fundamentals",
      "Consulting and analysis methods",
      "Presentation and process mapping",
      "Prepare a sample consulting recommendation"
    ],
    "salary": "business"
  },
  {
    "title": "Digital Transformation Specialist",
    "category": "Business & Systems",
    "description": "Supports adoption of digital tools and redesigned business processes.",
    "dims": [
      "business",
      "systems",
      "leadership"
    ],
    "reasons": [
      "You like improving how organizations work",
      "You are interested in change and technology adoption"
    ],
    "roadmap": [
      "Business process analysis",
      "Digital systems overview",
      "Change and project management",
      "Map a process improvement project"
    ],
    "salary": "management"
  },
  {
    "title": "Financial Analyst",
    "category": "Finance & Operations",
    "description": "Analyzes budgets, financial performance, and forecasts.",
    "dims": [
      "finance",
      "data",
      "detail"
    ],
    "reasons": [
      "You enjoy working with numbers and financial information",
      "You value accuracy and evidence-based decisions"
    ],
    "roadmap": [
      "Accounting and finance basics",
      "Advanced Excel and financial modeling",
      "Budgeting and variance analysis",
      "Build a sample financial report"
    ],
    "salary": "finance"
  },
  {
    "title": "Risk Analyst",
    "category": "Finance & Operations",
    "description": "Identifies and reports risks that may affect an organization.",
    "dims": [
      "finance",
      "security",
      "research"
    ],
    "reasons": [
      "You like identifying what could go wrong",
      "You enjoy careful analysis and structured evaluation"
    ],
    "roadmap": [
      "Business and risk fundamentals",
      "Excel and data analysis",
      "Risk registers and controls",
      "Create a sample risk assessment"
    ],
    "salary": "finance"
  },
  {
    "title": "Operations Analyst",
    "category": "Finance & Operations",
    "description": "Analyzes operational performance and identifies process improvements.",
    "dims": [
      "operations",
      "data",
      "business"
    ],
    "reasons": [
      "You like making work more efficient",
      "You enjoy measuring performance and solving practical issues"
    ],
    "roadmap": [
      "Excel and KPI analysis",
      "Process mapping",
      "SQL or Power BI",
      "Analyze a sample operations dataset"
    ],
    "salary": "operations"
  },
  {
    "title": "Supply Chain Analyst",
    "category": "Finance & Operations",
    "description": "Uses data to improve inventory, purchasing, and delivery performance.",
    "dims": [
      "operations",
      "data",
      "business"
    ],
    "reasons": [
      "You are interested in how products and services move",
      "You like planning and analyzing operational data"
    ],
    "roadmap": [
      "Supply chain fundamentals",
      "Excel and forecasting",
      "ERP and Power BI basics",
      "Build an inventory analysis project"
    ],
    "salary": "operations"
  },
  {
    "title": "Business Process Analyst",
    "category": "Finance & Operations",
    "description": "Maps and improves the workflows used across an organization.",
    "dims": [
      "operations",
      "business",
      "research"
    ],
    "reasons": [
      "You notice inefficient steps and want to improve them",
      "You enjoy organizing workflows"
    ],
    "roadmap": [
      "Process mapping and BPMN",
      "Root-cause analysis",
      "Workflow improvement",
      "Document and redesign a sample process"
    ],
    "salary": "operations"
  },
  {
    "title": "IT Auditor",
    "category": "Finance & Operations",
    "description": "Reviews technology controls, risks, and compliance evidence.",
    "dims": [
      "security",
      "finance",
      "detail"
    ],
    "reasons": [
      "You value accuracy, controls, and accountability",
      "You enjoy reviewing systems against clear criteria"
    ],
    "roadmap": [
      "IT and accounting fundamentals",
      "Internal controls and risk",
      "Audit evidence and reporting",
      "Study a basic IT control framework"
    ],
    "salary": "finance"
  },
  {
    "title": "Digital Marketing Specialist",
    "category": "Digital & Other",
    "description": "Plans and measures online campaigns and audience engagement.",
    "dims": [
      "marketing",
      "creative",
      "data"
    ],
    "reasons": [
      "You enjoy communication and creative ideas",
      "You are interested in understanding audience behavior"
    ],
    "roadmap": [
      "Marketing fundamentals",
      "Content, SEO, and campaign basics",
      "Analytics and experimentation",
      "Plan and measure a sample campaign"
    ],
    "salary": "marketing"
  },
  {
    "title": "E-commerce Specialist",
    "category": "Digital & Other",
    "description": "Supports online store operations, product listings, and sales performance.",
    "dims": [
      "marketing",
      "business",
      "operations"
    ],
    "reasons": [
      "You like online business and customer journeys",
      "You enjoy combining organization with commercial goals"
    ],
    "roadmap": [
      "E-commerce fundamentals",
      "Store platforms and product content",
      "Sales metrics and digital marketing",
      "Build a sample online store plan"
    ],
    "salary": "marketing"
  },
  {
    "title": "GIS Analyst",
    "category": "Digital & Other",
    "description": "Uses geographic data and maps to answer location-based questions.",
    "dims": [
      "data",
      "research",
      "systems"
    ],
    "reasons": [
      "You enjoy maps and spatial information",
      "You like analyzing information in visual contexts"
    ],
    "roadmap": [
      "GIS concepts and spatial data",
      "QGIS or ArcGIS basics",
      "Spatial analysis and map design",
      "Create a small mapping project"
    ],
    "salary": "analytics"
  },
  {
    "title": "RPA Developer",
    "category": "Digital & Other",
    "description": "Automates repetitive business tasks with software bots.",
    "dims": [
      "automation",
      "systems",
      "business"
    ],
    "reasons": [
      "You enjoy reducing repetitive work",
      "You like logic and practical automation"
    ],
    "roadmap": [
      "Process analysis",
      "Power Automate or UiPath basics",
      "Variables, conditions, and exceptions",
      "Automate a sample office workflow"
    ],
    "salary": "software"
  },
  {
    "title": "Technical Writer",
    "category": "Digital & Other",
    "description": "Creates clear documentation for technical products and systems.",
    "dims": [
      "communication",
      "detail",
      "systems"
    ],
    "reasons": [
      "You enjoy explaining complicated ideas clearly",
      "You value organized information and precise writing"
    ],
    "roadmap": [
      "Technical writing fundamentals",
      "Markdown and documentation tools",
      "Learn to interview technical teams",
      "Create a short user guide"
    ],
    "salary": "business"
  }
];

const questions = [
  {
    "text": "What kind of task sounds most satisfying to you?",
    "category": "INTERESTS",
    "options": [
      {
        "text": "Finding patterns in numbers and information",
        "scores": {
          "data": 3,
          "research": 1
        }
      },
      {
        "text": "Building a website, app, or digital feature",
        "scores": {
          "software": 3,
          "creative": 1
        }
      },
      {
        "text": "Understanding how computer systems work",
        "scores": {
          "infra": 3,
          "systems": 1
        }
      },
      {
        "text": "Improving a business process or service",
        "scores": {
          "business": 2,
          "operations": 2
        }
      }
    ]
  },
  {
    "text": "When you face a problem, what do you naturally do first?",
    "category": "PROBLEM SOLVING",
    "options": [
      {
        "text": "Look for facts, numbers, and evidence",
        "scores": {
          "data": 2,
          "research": 2
        }
      },
      {
        "text": "Break it into logical steps and test a solution",
        "scores": {
          "software": 2,
          "logic": 2
        }
      },
      {
        "text": "Ask people questions to understand what they need",
        "scores": {
          "business": 2,
          "communication": 2
        }
      },
      {
        "text": "Check the system and trace where the issue started",
        "scores": {
          "infra": 2,
          "systems": 2
        }
      }
    ]
  },
  {
    "text": "Which school or university activity do you enjoy most?",
    "category": "INTERESTS",
    "options": [
      {
        "text": "Working with tables, calculations, and evidence",
        "scores": {
          "data": 2,
          "finance": 2
        }
      },
      {
        "text": "Creating presentations, designs, or digital content",
        "scores": {
          "creative": 2,
          "marketing": 2
        }
      },
      {
        "text": "Solving technical exercises and logical puzzles",
        "scores": {
          "software": 2,
          "logic": 2
        }
      },
      {
        "text": "Organizing a team task or planning a project",
        "scores": {
          "leadership": 2,
          "business": 2
        }
      }
    ]
  },
  {
    "text": "How do you feel about working with data?",
    "category": "WORK STYLE",
    "options": [
      {
        "text": "I enjoy exploring it and finding patterns",
        "scores": {
          "data": 3,
          "research": 1
        }
      },
      {
        "text": "I like using it to make business decisions",
        "scores": {
          "data": 2,
          "business": 2
        }
      },
      {
        "text": "I prefer building the systems that store it",
        "scores": {
          "data": 2,
          "systems": 2
        }
      },
      {
        "text": "I would rather focus on people, design, or operations",
        "scores": {
          "communication": 1,
          "creative": 1,
          "operations": 1
        }
      }
    ]
  },
  {
    "text": "Which type of challenge interests you most?",
    "category": "INTERESTS",
    "options": [
      {
        "text": "Why did this metric change?",
        "scores": {
          "data": 2,
          "research": 2
        }
      },
      {
        "text": "How can I make this feature work?",
        "scores": {
          "software": 3,
          "logic": 1
        }
      },
      {
        "text": "Why is this network or computer not working?",
        "scores": {
          "infra": 3,
          "systems": 1
        }
      },
      {
        "text": "Why is this process slow or confusing?",
        "scores": {
          "operations": 2,
          "business": 2
        }
      }
    ]
  },
  {
    "text": "What kind of work environment appeals to you?",
    "category": "WORK STYLE",
    "options": [
      {
        "text": "Quiet focused work with information and analysis",
        "scores": {
          "data": 2,
          "research": 1
        }
      },
      {
        "text": "A development team building products together",
        "scores": {
          "software": 2,
          "systems": 1
        }
      },
      {
        "text": "A technical operations team solving live issues",
        "scores": {
          "infra": 2,
          "operations": 1
        }
      },
      {
        "text": "Working with different departments and stakeholders",
        "scores": {
          "business": 2,
          "communication": 1
        }
      }
    ]
  },
  {
    "text": "How do you feel about mathematics and statistics?",
    "category": "STRENGTHS",
    "options": [
      {
        "text": "I enjoy them and want to use them often",
        "scores": {
          "data": 2,
          "finance": 2
        }
      },
      {
        "text": "I can use basic calculations when needed",
        "scores": {
          "business": 1,
          "operations": 1
        }
      },
      {
        "text": "I prefer logic and coding more than statistics",
        "scores": {
          "software": 2,
          "logic": 1
        }
      },
      {
        "text": "I prefer communication, design, or organizing work",
        "scores": {
          "communication": 1,
          "creative": 1,
          "leadership": 1
        }
      }
    ]
  },
  {
    "text": "Which activity would you choose for a practical project?",
    "category": "PRACTICAL WORK",
    "options": [
      {
        "text": "Analyze sales data and explain trends",
        "scores": {
          "data": 3,
          "business": 1
        }
      },
      {
        "text": "Create a responsive website",
        "scores": {
          "software": 3,
          "creative": 1
        }
      },
      {
        "text": "Set up a small computer network or server lab",
        "scores": {
          "infra": 3
        }
      },
      {
        "text": "Redesign a customer journey or business workflow",
        "scores": {
          "business": 2,
          "operations": 2
        }
      }
    ]
  },
  {
    "text": "Which responsibility sounds most interesting?",
    "category": "WORK PREFERENCES",
    "options": [
      {
        "text": "Explain what the data says",
        "scores": {
          "data": 2,
          "communication": 1
        }
      },
      {
        "text": "Build and improve a digital product",
        "scores": {
          "software": 2,
          "creative": 1
        }
      },
      {
        "text": "Keep technology available and protected",
        "scores": {
          "infra": 2,
          "security": 2
        }
      },
      {
        "text": "Coordinate people and make sure work gets delivered",
        "scores": {
          "leadership": 2,
          "business": 1
        }
      }
    ]
  },
  {
    "text": "What would you most like to understand deeply?",
    "category": "CURIOSITY",
    "options": [
      {
        "text": "Customer behavior, performance, and trends",
        "scores": {
          "data": 2,
          "marketing": 1,
          "business": 1
        }
      },
      {
        "text": "How software and applications are built",
        "scores": {
          "software": 3
        }
      },
      {
        "text": "Networks, operating systems, and cloud platforms",
        "scores": {
          "infra": 3
        }
      },
      {
        "text": "How companies manage money and operations",
        "scores": {
          "finance": 2,
          "operations": 2
        }
      }
    ]
  },
  {
    "text": "How do you approach details?",
    "category": "WORK STYLE",
    "options": [
      {
        "text": "I like checking figures and spotting inconsistencies",
        "scores": {
          "data": 1,
          "finance": 1,
          "detail": 2
        }
      },
      {
        "text": "I like checking code and testing behavior",
        "scores": {
          "software": 2,
          "detail": 2
        }
      },
      {
        "text": "I like checking settings, access, and system health",
        "scores": {
          "infra": 2,
          "security": 1,
          "detail": 1
        }
      },
      {
        "text": "I like checking requirements and process steps",
        "scores": {
          "business": 2,
          "operations": 1,
          "detail": 1
        }
      }
    ]
  },
  {
    "text": "How would you prefer to communicate your work?",
    "category": "COMMUNICATION",
    "options": [
      {
        "text": "Charts, reports, and short explanations",
        "scores": {
          "data": 2,
          "communication": 1
        }
      },
      {
        "text": "A working demo or technical documentation",
        "scores": {
          "software": 2,
          "systems": 1
        }
      },
      {
        "text": "Incident updates and technical status reports",
        "scores": {
          "infra": 2,
          "communication": 1
        }
      },
      {
        "text": "Presentations, meetings, and recommendations",
        "scores": {
          "business": 2,
          "leadership": 1
        }
      }
    ]
  },
  {
    "text": "Which type of uncertainty do you prefer handling?",
    "category": "PROBLEM SOLVING",
    "options": [
      {
        "text": "Incomplete data that needs investigation",
        "scores": {
          "data": 2,
          "research": 2
        }
      },
      {
        "text": "A feature that needs experimentation and debugging",
        "scores": {
          "software": 2,
          "logic": 2
        }
      },
      {
        "text": "A technical fault that needs systematic troubleshooting",
        "scores": {
          "infra": 2,
          "systems": 2
        }
      },
      {
        "text": "A business need with several possible solutions",
        "scores": {
          "business": 2,
          "research": 1,
          "communication": 1
        }
      }
    ]
  },
  {
    "text": "Which topic would you read about voluntarily?",
    "category": "CURIOSITY",
    "options": [
      {
        "text": "Analytics, AI, statistics, or business intelligence",
        "scores": {
          "data": 3,
          "research": 1
        }
      },
      {
        "text": "Programming, app development, or design systems",
        "scores": {
          "software": 2,
          "design": 1,
          "creative": 1
        }
      },
      {
        "text": "Cybersecurity, cloud, or computer networks",
        "scores": {
          "security": 2,
          "infra": 2
        }
      },
      {
        "text": "Management, finance, marketing, or operations",
        "scores": {
          "business": 1,
          "finance": 1,
          "marketing": 1,
          "operations": 1
        }
      }
    ]
  },
  {
    "text": "How do you feel about helping other people solve problems?",
    "category": "PEOPLE & TEAMWORK",
    "options": [
      {
        "text": "I like explaining insights and recommendations",
        "scores": {
          "communication": 2,
          "data": 1
        }
      },
      {
        "text": "I like collaborating to build something",
        "scores": {
          "software": 1,
          "communication": 1
        }
      },
      {
        "text": "I like helping users with technical issues",
        "scores": {
          "communication": 2,
          "infra": 1
        }
      },
      {
        "text": "I like understanding needs and coordinating solutions",
        "scores": {
          "business": 2,
          "communication": 1
        }
      }
    ]
  },
  {
    "text": "Which type of project would you choose?",
    "category": "PRACTICAL WORK",
    "options": [
      {
        "text": "A sales dashboard with filters and KPIs",
        "scores": {
          "data": 2,
          "business": 1
        }
      },
      {
        "text": "A small online store or mobile application",
        "scores": {
          "software": 2,
          "marketing": 1
        }
      },
      {
        "text": "A secure server and network setup",
        "scores": {
          "infra": 2,
          "security": 1
        }
      },
      {
        "text": "A project plan for improving a company service",
        "scores": {
          "leadership": 1,
          "operations": 2,
          "business": 1
        }
      }
    ]
  },
  {
    "text": "Which statement sounds most like you?",
    "category": "PERSONAL STYLE",
    "options": [
      {
        "text": "I am curious and like asking why the numbers changed",
        "scores": {
          "data": 2,
          "research": 1
        }
      },
      {
        "text": "I enjoy making and experimenting with things",
        "scores": {
          "software": 1,
          "creative": 2
        }
      },
      {
        "text": "I am patient when troubleshooting technical issues",
        "scores": {
          "infra": 2,
          "systems": 1
        }
      },
      {
        "text": "I enjoy organizing people, tasks, and information",
        "scores": {
          "leadership": 1,
          "business": 2
        }
      }
    ]
  },
  {
    "text": "Which business area interests you most?",
    "category": "BUSINESS INTERESTS",
    "options": [
      {
        "text": "Sales performance and customer analytics",
        "scores": {
          "data": 2,
          "marketing": 1
        }
      },
      {
        "text": "Digital products and software services",
        "scores": {
          "software": 2,
          "business": 1
        }
      },
      {
        "text": "Technology infrastructure and security",
        "scores": {
          "infra": 2,
          "security": 1
        }
      },
      {
        "text": "Finance, inventory, or daily operations",
        "scores": {
          "finance": 1,
          "operations": 2
        }
      }
    ]
  },
  {
    "text": "How interested are you in visual design?",
    "category": "CREATIVITY",
    "options": [
      {
        "text": "Very interested; I enjoy layout and user experience",
        "scores": {
          "design": 3,
          "creative": 1
        }
      },
      {
        "text": "Somewhat; I like dashboards and visualizing data",
        "scores": {
          "data": 2,
          "design": 1
        }
      },
      {
        "text": "Not much; I prefer logic and technical systems",
        "scores": {
          "software": 1,
          "infra": 1,
          "logic": 1
        }
      },
      {
        "text": "I prefer process diagrams and business presentations",
        "scores": {
          "business": 2,
          "communication": 1
        }
      }
    ]
  },
  {
    "text": "What would you like to automate?",
    "category": "AUTOMATION",
    "options": [
      {
        "text": "Data cleaning and report generation",
        "scores": {
          "data": 2,
          "automation": 2
        }
      },
      {
        "text": "Testing software features",
        "scores": {
          "software": 2,
          "automation": 2
        }
      },
      {
        "text": "Server setup and software deployment",
        "scores": {
          "infra": 2,
          "automation": 2
        }
      },
      {
        "text": "Office workflows and repetitive business tasks",
        "scores": {
          "business": 1,
          "operations": 1,
          "automation": 2
        }
      }
    ]
  },
  {
    "text": "How do you feel about financial information?",
    "category": "FINANCE INTEREST",
    "options": [
      {
        "text": "I enjoy budgets, costs, and financial performance",
        "scores": {
          "finance": 3,
          "data": 1
        }
      },
      {
        "text": "I like using numbers to improve operations",
        "scores": {
          "operations": 2,
          "data": 1
        }
      },
      {
        "text": "I prefer technical topics over finance",
        "scores": {
          "software": 1,
          "infra": 1
        }
      },
      {
        "text": "I prefer customer, product, or communication topics",
        "scores": {
          "marketing": 1,
          "business": 1,
          "communication": 1
        }
      }
    ]
  },
  {
    "text": "Which role in a team would you naturally take?",
    "category": "TEAMWORK",
    "options": [
      {
        "text": "The person who checks information and finds insights",
        "scores": {
          "data": 2,
          "research": 1
        }
      },
      {
        "text": "The person who builds or fixes the technical part",
        "scores": {
          "software": 2,
          "infra": 1
        }
      },
      {
        "text": "The person who organizes tasks and follows up",
        "scores": {
          "leadership": 2,
          "operations": 1
        }
      },
      {
        "text": "The person who explains ideas and aligns everyone",
        "scores": {
          "communication": 2,
          "business": 1
        }
      }
    ]
  },
  {
    "text": "How do you react when something does not work?",
    "category": "PROBLEM SOLVING",
    "options": [
      {
        "text": "I inspect the data and check assumptions",
        "scores": {
          "data": 2,
          "research": 1
        }
      },
      {
        "text": "I debug the code and try another approach",
        "scores": {
          "software": 2,
          "logic": 1
        }
      },
      {
        "text": "I troubleshoot settings and system dependencies",
        "scores": {
          "infra": 2,
          "systems": 1
        }
      },
      {
        "text": "I clarify the requirement and review the process",
        "scores": {
          "business": 2,
          "operations": 1
        }
      }
    ]
  },
  {
    "text": "Which type of impact would you like your work to have?",
    "category": "MOTIVATION",
    "options": [
      {
        "text": "Help leaders make better decisions",
        "scores": {
          "data": 2,
          "business": 1
        }
      },
      {
        "text": "Give users a better digital product",
        "scores": {
          "software": 1,
          "design": 2
        }
      },
      {
        "text": "Protect services and keep systems running",
        "scores": {
          "infra": 1,
          "security": 2
        }
      },
      {
        "text": "Help a business save time, money, or effort",
        "scores": {
          "operations": 2,
          "finance": 1
        }
      }
    ]
  },
  {
    "text": "How do you feel about research and investigation?",
    "category": "WORK STYLE",
    "options": [
      {
        "text": "I enjoy exploring a question until I understand it",
        "scores": {
          "research": 3,
          "data": 1
        }
      },
      {
        "text": "I prefer making a prototype and learning by building",
        "scores": {
          "software": 2,
          "creative": 1
        }
      },
      {
        "text": "I enjoy investigating technical faults",
        "scores": {
          "infra": 2,
          "research": 1
        }
      },
      {
        "text": "I prefer interviews and understanding stakeholder needs",
        "scores": {
          "business": 2,
          "communication": 1
        }
      }
    ]
  },
  {
    "text": "Which work pace suits you best?",
    "category": "WORK PREFERENCES",
    "options": [
      {
        "text": "Focused analysis with time to check accuracy",
        "scores": {
          "data": 1,
          "detail": 2
        }
      },
      {
        "text": "Iterative building, testing, and releasing",
        "scores": {
          "software": 2,
          "automation": 1
        }
      },
      {
        "text": "Monitoring systems and responding to issues",
        "scores": {
          "infra": 2,
          "operations": 1
        }
      },
      {
        "text": "Coordinating several people and priorities",
        "scores": {
          "leadership": 2,
          "communication": 1
        }
      }
    ]
  },
  {
    "text": "Which documentation would you rather create?",
    "category": "COMMUNICATION",
    "options": [
      {
        "text": "A data report with findings and charts",
        "scores": {
          "data": 2,
          "communication": 1
        }
      },
      {
        "text": "Technical documentation for a software feature",
        "scores": {
          "software": 1,
          "systems": 1,
          "detail": 1
        }
      },
      {
        "text": "A system or security procedure",
        "scores": {
          "infra": 1,
          "security": 1,
          "detail": 1
        }
      },
      {
        "text": "A business process guide or project plan",
        "scores": {
          "business": 2,
          "operations": 1
        }
      }
    ]
  },
  {
    "text": "What would you like to become better at?",
    "category": "DEVELOPMENT GOALS",
    "options": [
      {
        "text": "Analyzing information and making evidence-based decisions",
        "scores": {
          "data": 2,
          "research": 1
        }
      },
      {
        "text": "Programming and creating digital solutions",
        "scores": {
          "software": 3
        }
      },
      {
        "text": "Managing infrastructure and security",
        "scores": {
          "infra": 2,
          "security": 1
        }
      },
      {
        "text": "Leading projects and improving business performance",
        "scores": {
          "leadership": 1,
          "business": 2,
          "operations": 1
        }
      }
    ]
  },
  {
    "text": "How comfortable are you with continuous technical learning?",
    "category": "LEARNING STYLE",
    "options": [
      {
        "text": "Very comfortable; I like learning new tools",
        "scores": {
          "software": 1,
          "infra": 1,
          "data": 1
        }
      },
      {
        "text": "Comfortable when the tool helps solve a clear business problem",
        "scores": {
          "business": 1,
          "data": 1,
          "systems": 1
        }
      },
      {
        "text": "I prefer a mix of technology and people-focused work",
        "scores": {
          "communication": 1,
          "business": 1,
          "design": 1
        }
      },
      {
        "text": "I prefer structured methods and domain knowledge",
        "scores": {
          "finance": 1,
          "operations": 1,
          "detail": 1
        }
      }
    ]
  },
  {
    "text": "Which statement best describes your ideal contribution?",
    "category": "PERSONAL STYLE",
    "options": [
      {
        "text": "I turn complex information into clear insights",
        "scores": {
          "data": 2,
          "communication": 1
        }
      },
      {
        "text": "I turn ideas into working software",
        "scores": {
          "software": 3
        }
      },
      {
        "text": "I keep systems stable, connected, and protected",
        "scores": {
          "infra": 2,
          "security": 1
        }
      },
      {
        "text": "I turn business needs into organized improvements",
        "scores": {
          "business": 2,
          "operations": 1,
          "leadership": 1
        }
      }
    ]
  }
];


const salaryBands = {
  analytics: { entry:"EGP 10k–20k", mid:"EGP 20k–35k", senior:"EGP 35k–60k", note:"Indicative data and reporting roles; specialist employers and strong portfolios can pay differently." },
  advanced_data: { entry:"EGP 15k–25k", mid:"EGP 25k–45k", senior:"EGP 45k–75k", note:"Specialized data and ML roles vary widely with mathematics, engineering depth, and employer type." },
  data_engineering: { entry:"EGP 15k–25k", mid:"EGP 25k–45k", senior:"EGP 45k–75k", note:"Indicative range for data engineering; cloud and production experience affect pay." },
  software: { entry:"EGP 10k–20k", mid:"EGP 20k–40k", senior:"EGP 40k–70k", note:"Broad software and QA estimate; stack, portfolio, English, and company size matter." },
  infra: { entry:"EGP 10k–18k", mid:"EGP 18k–35k", senior:"EGP 35k–60k", note:"Indicative systems and networking range; certifications and on-call duties may affect pay." },
  support: { entry:"EGP 8k–15k", mid:"EGP 15k–25k", senior:"EGP 25k–40k", note:"Support pay varies by language, shift, technical scope, and employer." },
  cloud: { entry:"EGP 15k–25k", mid:"EGP 25k–45k", senior:"EGP 45k–80k", note:"Cloud and DevOps roles are skill-sensitive; production experience can change the range substantially." },
  security: { entry:"EGP 12k–22k", mid:"EGP 22k–40k", senior:"EGP 40k–70k", note:"Cybersecurity pay depends heavily on defensive skills, certifications, and practical experience." },
  business: { entry:"EGP 10k–18k", mid:"EGP 18k–32k", senior:"EGP 32k–55k", note:"Indicative business and systems analyst / consultant range; industry and ERP expertise matter." },
  management: { entry:"EGP 15k–25k", mid:"EGP 25k–45k", senior:"EGP 45k–80k", note:"Project and product management often require prior delivery experience; figures are broad estimates." },
  finance: { entry:"EGP 9k–16k", mid:"EGP 16k–30k", senior:"EGP 30k–55k", note:"Indicative analyst and audit range; banking, multinational, and professional qualifications may shift pay." },
  operations: { entry:"EGP 9k–16k", mid:"EGP 16k–28k", senior:"EGP 28k–50k", note:"Operations and supply-chain pay depends on sector, company size, and analytical responsibilities." },
  design: { entry:"EGP 10k–18k", mid:"EGP 18k–32k", senior:"EGP 32k–55k", note:"Portfolio quality and product-company experience strongly affect design compensation." },
  marketing: { entry:"EGP 8k–15k", mid:"EGP 15k–28k", senior:"EGP 28k–50k", note:"Digital marketing and e-commerce pay varies by channel expertise and performance incentives." }
};

const dimensionLabels = {
  data:"Data analysis", software:"Software development", infra:"IT infrastructure",
  security:"Security awareness", business:"Business analysis", finance:"Finance",
  operations:"Operations improvement", design:"User experience and design",
  creative:"Creativity", marketing:"Digital marketing", communication:"Communication",
  leadership:"Planning and coordination", automation:"Automation", research:"Research",
  systems:"Systems thinking", logic:"Logical problem-solving", detail:"Attention to detail"
};

const introScreen = document.getElementById("introScreen");
const quizScreen = document.getElementById("quizScreen");
const resultsScreen = document.getElementById("resultsScreen");
const startButton = document.getElementById("startButton");
const questionText = document.getElementById("questionText");
const questionCategory = document.getElementById("questionCategory");
const questionNumber = document.getElementById("questionNumber");
const questionCounter = document.getElementById("questionCounter");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const answersList = document.getElementById("answersList");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const topMatches = document.getElementById("topMatches");
const profileSummary = document.getElementById("profileSummary");
const strengthTags = document.getElementById("strengthTags");
let currentQuestion = 0;
let answers = Array(questions.length).fill(null);

document.getElementById("currentYear").textContent = new Date().getFullYear();

function showScreen(screen) {
  [introScreen, quizScreen, resultsScreen].forEach(item => item.hidden = item !== screen);
  window.scrollTo({top:0,behavior:"smooth"});
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
function renderQuestion() {
  const q = questions[currentQuestion];
  const selected = answers[currentQuestion];
  questionText.textContent = q.text;
  questionCategory.textContent = q.category;
  questionNumber.textContent = `${String(currentQuestion+1).padStart(2,"0")} / ${questions.length}`;
  questionCounter.textContent = `Question ${currentQuestion+1} of ${questions.length}`;
  const percent = Math.round(((currentQuestion+1)/questions.length)*100);
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  answersList.innerHTML = q.options.map((option,index)=>`
    <button class="answer-option ${selected===index?"selected":""}" data-answer="${index}" aria-pressed="${selected===index}">
      <span class="answer-letter">${String.fromCharCode(65+index)}</span><span>${escapeHTML(option.text)}</span>
    </button>`).join("");
  backButton.disabled = currentQuestion===0;
  nextButton.disabled = selected===null;
  nextButton.innerHTML = currentQuestion===questions.length-1 ? 'See My Results <span>→</span>' : 'Next Question <span>→</span>';
}
function chooseAnswer(index) {
  answers[currentQuestion]=index;
  renderQuestion();
}
function buildScores() {
  const totals = {};
  careers.forEach(c=>totals[c.title]=0);
  const dimensionTotals = {};
  let answeredWeight = 0;

  answers.forEach((answerIndex,qIndex)=>{
    if(answerIndex===null) return;
    const scores=questions[qIndex].options[answerIndex].scores;
    Object.entries(scores).forEach(([dimension,value])=>{
      dimensionTotals[dimension]=(dimensionTotals[dimension]||0)+value;
      answeredWeight += value;
    });
  });

  careers.forEach(career=>{
    let raw=0, possible=0;
    career.dims.forEach(dim=>{
      const value=dimensionTotals[dim]||0;
      raw += value;
      possible += value;
    });
    // Role specificity bonus: matching several of a role's dimensions is more meaningful than one broad match.
    const breadth = career.dims.filter(dim=>(dimensionTotals[dim]||0)>0).length / career.dims.length;
    totals[career.title] = (raw / Math.sqrt(career.dims.length)) * (0.72 + 0.28*breadth);
  });
  const sorted=careers.map(c=>({...c,raw:totals[c.title]})).sort((a,b)=>b.raw-a.raw);
  const max=sorted[0]?.raw||1;
  const top=sorted.slice(0,3).map((career,index)=>({
    ...career,
    fit:Math.max(1,Math.min(99,Math.round((career.raw/max)*100))),
    reasons:career.reasons.slice(0,2)
  }));
  const strongest=Object.entries(dimensionTotals).sort((a,b)=>b[1]-a[1]).slice(0,5);
  return {top,strongest,dimensionTotals};
}
function renderResults() {
  const {top,strongest,dimensionTotals}=buildScores();
  topMatches.innerHTML=top.map((career,index)=>{
    const salary=salaryBands[career.salary]||salaryBands.business;
    return `<article class="match-card ${index===0?"best":""}">
      <div class="match-head">
        <span class="rank-badge">${String(index+1).padStart(2,"0")}</span>
        <div class="match-title-wrap"><span class="match-category">${escapeHTML(career.category)}</span><h3>${escapeHTML(career.title)}</h3></div>
        <div><div class="fit-number">${career.fit}%</div><div class="fit-label">MATCH INDEX</div></div>
      </div>
      <div class="fit-track"><div class="fit-fill" style="width:${career.fit}%"></div></div>
      <p class="match-overview">${escapeHTML(career.description)}</p>
      <div class="match-section"><h4>WHY THIS PATH MATCHES</h4><div class="reason-list">${career.reasons.map(reason=>`<span class="reason-chip">${escapeHTML(reason)}</span>`).join("")}</div></div>
      <div class="match-section"><h4>SUGGESTED LEARNING ROADMAP</h4><ol class="roadmap-list">${career.roadmap.map(step=>`<li>${escapeHTML(step)}</li>`).join("")}</ol></div>
      <div class="salary-panel">
        <h4>ESTIMATED MONTHLY SALARY IN EGYPT · EGP</h4>
        <div class="salary-grid">
          <div class="salary-level"><span>Entry level</span><strong>${salary.entry}</strong></div>
          <div class="salary-level"><span>Mid-level</span><strong>${salary.mid}</strong></div>
          <div class="salary-level"><span>Senior</span><strong>${salary.senior}</strong></div>
        </div>
        <p class="salary-note">${escapeHTML(salary.note)} These are indicative estimates, not guaranteed offers.</p>
      </div>
    </article>`;
  }).join("");

  const topDims=strongest.slice(0,4).map(([key])=>dimensionLabels[key]||key);
  profileSummary.textContent = topDims.length
    ? `Your answers show stronger interest in ${topDims.join(", ").toLowerCase()}. The three recommendations above are the closest matches among the career paths included in this assessment.`
    : "Your answers show a balanced set of interests. Explore the recommendations and compare the day-to-day tasks before choosing a direction.";
  strengthTags.innerHTML=topDims.map(label=>`<span class="strength-tag">${escapeHTML(label)}</span>`).join("");
  showScreen(resultsScreen);
}
startButton.addEventListener("click",()=>{currentQuestion=0;answers=Array(questions.length).fill(null);showScreen(quizScreen);renderQuestion();});
// Keyboard shortcuts: A-D choose an option, Enter moves to the next question.
document.addEventListener("keydown", event => {
  if (quizScreen.hidden || event.altKey || event.ctrlKey || event.metaKey) return;
  const tag = event.target?.tagName?.toLowerCase();
  if (["input", "textarea", "select"].includes(tag) || event.target?.isContentEditable) return;
  const key = event.key.toLowerCase();
  if (["a", "b", "c", "d"].includes(key)) {
    event.preventDefault();
    chooseAnswer(key.charCodeAt(0) - 97);
  } else if (event.key === "Enter" && answers[currentQuestion] !== null) {
    event.preventDefault();
    nextButton.click();
  }
});

answersList.addEventListener("click",event=>{
  const option=event.target.closest(".answer-option");
  if(option) chooseAnswer(Number(option.dataset.answer));
});
backButton.addEventListener("click",()=>{if(currentQuestion>0){currentQuestion--;renderQuestion();}});
nextButton.addEventListener("click",()=>{
  if(answers[currentQuestion]===null)return;
  if(currentQuestion<questions.length-1){currentQuestion++;renderQuestion();}
  else renderResults();
});
document.getElementById("quitButton").addEventListener("click",()=>{
  if(confirm("Exit the assessment? Your current answers will be cleared.")){answers=Array(questions.length).fill(null);showScreen(introScreen);}
});
document.getElementById("retakeButton").addEventListener("click",()=>{
  currentQuestion=0;answers=Array(questions.length).fill(null);showScreen(quizScreen);renderQuestion();
});
document.getElementById("printButton").addEventListener("click",()=>window.print());


if(questions.length!==30) console.warn("Assessment should contain exactly 30 questions.");
if(careers.length!==43) console.warn("Expected 43 career profiles.");


// Small pointer-follow interaction for navigation links.
(() => {
  const links = document.querySelectorAll(".main-nav a");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!finePointer) return;
  links.forEach(link => {
    link.addEventListener("pointermove", event => {
      const rect = link.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      link.style.transform = `translate(${x * 3}px, ${-2 + y * 2}px)`;
    });
    link.addEventListener("pointerleave", () => { link.style.transform = ""; });
  });
})();




/* === MIS Career Hub shared interactions === */
(() => {
  const body = document.body;
  const page = body.dataset.page || 'page';
  const header = document.querySelector('.site-header');
  const canvas = document.getElementById('networkCanvas');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Responsive interactive network grid: nodes gently react to the pointer.
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, points = [], columns = 0, raf = 0;
    const spacing = window.innerWidth < 650 ? 58 : 70;
    const pointer = { x: -1000, y: -1000, active: false };
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2; points = [];
      for (let row = 0; row < rows; row++) for (let col = 0; col < columns; col++) {
        const x = (col - 1) * spacing, y = (row - 1) * spacing;
        points.push({ x, y, ox: x, oy: y, phase: Math.random() * Math.PI * 2, row, col });
      }
      if (reduceMotion) draw(0);
    }
    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      const t = reduceMotion ? 0 : time * .00025;
      for (const p of points) {
        let dx = reduceMotion ? 0 : Math.sin(t + p.phase) * 1.15;
        let dy = reduceMotion ? 0 : Math.cos(t + p.phase) * 1.15;
        if (pointer.active) {
          const mx = p.ox - pointer.x, my = p.oy - pointer.y, dist = Math.hypot(mx, my);
          if (dist < 185 && dist > 0) { const force = (185 - dist) / 185 * 9; dx += mx / dist * force; dy += my / dist * force; }
        }
        p.x = p.ox + dx; p.y = p.oy + dy;
      }
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        const neighbours = [a.col < columns - 1 ? i + 1 : -1, i + columns - 1, i + columns, a.col < columns - 1 ? i + columns + 1 : -1];
        for (const j of neighbours) {
          if (j < 0 || j >= points.length) continue;
          const b = points[j], dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < spacing * 1.65) {
            ctx.strokeStyle = 'rgba(98,230,194,' + ((1 - dist / (spacing * 1.65)) * .19) + ')';
            ctx.lineWidth = .7; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const near = pointer.active && Math.hypot(a.x - pointer.x, a.y - pointer.y) < 170;
        ctx.fillStyle = near ? 'rgba(121,169,255,.8)' : 'rgba(98,230,194,.32)';
        ctx.beginPath(); ctx.arc(a.x, a.y, near ? 1.8 : 1, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }
    window.addEventListener('pointermove', e => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true; if (reduceMotion) draw(0); }, { passive: true });
    window.addEventListener('pointerleave', () => { pointer.active = false; if (reduceMotion) draw(0); });
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduceMotion) raf = requestAnimationFrame(draw); });
    resize(); if (!reduceMotion) raf = requestAnimationFrame(draw);
  }

  // Header interaction is independent from the background network.
  if (header) {
    const setHeaderPointer = e => {
      const r = header.getBoundingClientRect();
      header.style.setProperty('--header-x', (e.clientX - r.left) + 'px');
      header.style.setProperty('--header-y', (e.clientY - r.top) + 'px');
    };
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      header.addEventListener('pointermove', setHeaderPointer, { passive: true });
    }
    const updateProgress = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      header.style.setProperty('--scroll-progress', String(Math.min(1, Math.max(0, window.scrollY / max))));
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();
  }

  // Mobile menu, with safe checks for every page.
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    mainNav.addEventListener('click', e => {
      if (e.target.closest('a')) { mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Smooth transition for navigation between local pages.
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  overlay.setAttribute('aria-hidden', 'true');
  body.appendChild(overlay);
  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', e => {
      const raw = link.getAttribute('href');
      if (!raw || raw.startsWith('#') || link.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      let url; try { url = new URL(raw, window.location.href); } catch { return; }
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      e.preventDefault(); overlay.classList.add('is-leaving');
      window.setTimeout(() => { window.location.href = url.href; }, 260);
    });
  });
  body.classList.add('page-enter');
})();
