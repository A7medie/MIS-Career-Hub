const careerPaths = [
  {
    title: "Data Analyst", category: "Data & Analytics", icon: "▥",
    description: "Turns raw data into clear findings that support better business decisions.",
    overview: "A Data Analyst collects, cleans, explores, and interprets data to answer business questions. The role often involves building reports, identifying trends, and explaining findings to stakeholders.",
    responsibilities: ["Collect and clean data from different sources", "Analyze trends and investigate business questions", "Create dashboards and recurring reports", "Present findings and practical recommendations"],
    skills: ["Excel and spreadsheet analysis", "SQL and basic statistics", "Data visualization and communication", "Critical thinking and attention to detail"],
    tools: ["Microsoft Excel", "SQL", "Power BI or Tableau", "Python (useful for automation)"],
    next: "Senior Data Analyst → Analytics Lead → Analytics Manager"
  },
  {
    title: "Business Intelligence Analyst", category: "Data & Analytics", icon: "▤",
    description: "Builds dashboards and reporting systems that help organizations monitor performance.",
    overview: "A BI Analyst transforms business data into dashboards, KPIs, and reports. The focus is on making organizational performance easier to understand and monitor.",
    responsibilities: ["Define and track key performance indicators", "Build interactive dashboards", "Combine data from business systems", "Explain performance changes to teams"],
    skills: ["SQL and data modeling", "Dashboard design", "Business understanding", "Analytical communication"],
    tools: ["Power BI", "Tableau", "SQL", "Excel"],
    next: "Senior BI Analyst → BI Developer → BI Manager"
  },
  {
    title: "Data Scientist", category: "Data & Analytics", icon: "⌁",
    description: "Uses statistics and programming to discover patterns and build predictive models.",
    overview: "A Data Scientist applies statistical methods, programming, and machine learning to complex datasets. This path usually requires stronger mathematics and coding than entry-level data analysis.",
    responsibilities: ["Explore and prepare complex datasets", "Build and evaluate statistical or predictive models", "Communicate uncertainty and model results", "Work with data and engineering teams"],
    skills: ["Python or R", "Statistics and probability", "Machine learning foundations", "Data storytelling"],
    tools: ["Python", "Jupyter", "pandas and scikit-learn", "SQL"],
    next: "Senior Data Scientist → Applied Scientist → Data Science Lead"
  },
  {
    title: "Machine Learning Engineer", category: "Data & Analytics", icon: "✧",
    description: "Develops and deploys machine-learning systems inside real applications.",
    overview: "Machine Learning Engineers turn trained models into reliable software services. The role combines software engineering, data preparation, model evaluation, and deployment.",
    responsibilities: ["Prepare data and model pipelines", "Integrate models into applications", "Monitor model quality and performance", "Collaborate with data scientists and developers"],
    skills: ["Strong Python programming", "Machine learning concepts", "Software engineering and APIs", "Model deployment and monitoring"],
    tools: ["Python", "scikit-learn or PyTorch", "Docker", "Cloud ML services"],
    next: "Senior ML Engineer → ML Platform Engineer → ML Lead"
  },
  {
    title: "Data Engineer", category: "Data & Analytics", icon: "⇄",
    description: "Builds the pipelines and infrastructure that make data usable and reliable.",
    overview: "A Data Engineer designs systems that collect, transform, store, and deliver data for analytics and applications.",
    responsibilities: ["Build data ingestion and transformation pipelines", "Maintain data warehouses and databases", "Improve data quality and reliability", "Optimize performance and pipeline costs"],
    skills: ["SQL and Python", "Data modeling", "ETL/ELT concepts", "Cloud and distributed data basics"],
    tools: ["SQL", "Python", "Apache Airflow", "BigQuery, Snowflake, or similar"],
    next: "Senior Data Engineer → Data Architect → Data Engineering Manager"
  },
  {
    title: "Database Administrator (DBA)", category: "Data & Analytics", icon: "▦",
    description: "Maintains database performance, availability, security, and reliability.",
    overview: "A DBA manages database environments and helps ensure that organizational data is secure, backed up, available, and performing well.",
    responsibilities: ["Install and maintain database systems", "Manage access, backups, and recovery", "Monitor database performance", "Support developers and troubleshoot database issues"],
    skills: ["Database concepts and SQL", "Backup and recovery knowledge", "Security and access management", "Troubleshooting"],
    tools: ["SQL Server", "Oracle Database", "PostgreSQL", "MySQL"],
    next: "Senior DBA → Database Architect → Database Manager"
  },
  {
    title: "SQL Developer", category: "Data & Analytics", icon: "</>",
    description: "Writes and optimizes SQL queries, procedures, and database logic.",
    overview: "An SQL Developer creates database queries and objects that support applications, reporting, and business processes.",
    responsibilities: ["Write complex SQL queries", "Create views, stored procedures, and functions", "Improve query performance", "Work with analysts and software developers"],
    skills: ["Advanced SQL", "Relational database design", "Query optimization", "Logical problem-solving"],
    tools: ["SQL Server", "Oracle SQL Developer", "MySQL Workbench", "PostgreSQL"],
    next: "Senior SQL Developer → Database Developer → Data Architect"
  },
  {
    title: "Reporting Analyst", category: "Data & Analytics", icon: "▧",
    description: "Produces accurate recurring reports and tracks operational performance.",
    overview: "A Reporting Analyst focuses on gathering, validating, and presenting regular business reports so teams can monitor targets and results.",
    responsibilities: ["Prepare scheduled reports", "Validate figures and investigate discrepancies", "Maintain reporting templates", "Summarize operational performance"],
    skills: ["Excel", "SQL fundamentals", "Accuracy and organization", "Clear written communication"],
    tools: ["Excel", "Power BI", "SQL", "Google Sheets"],
    next: "Senior Reporting Analyst → BI Analyst → Reporting Manager"
  },
  {
    title: "Front-End Developer", category: "Software & Development", icon: "◫",
    description: "Builds the visual and interactive parts of websites and web applications.",
    overview: "A Front-End Developer turns interface designs into accessible, responsive web experiences that users interact with directly.",
    responsibilities: ["Build page layouts and interactive components", "Connect interfaces to APIs", "Improve accessibility and performance", "Test across browsers and screen sizes"],
    skills: ["HTML, CSS, and JavaScript", "Responsive design", "Git and debugging", "A front-end framework"],
    tools: ["VS Code", "Git", "React or Vue", "Browser developer tools"],
    next: "Senior Front-End Developer → UI Engineer → Front-End Lead"
  },
  {
    title: "Back-End Developer", category: "Software & Development", icon: "{ }",
    description: "Develops server-side logic, APIs, and application data services.",
    overview: "A Back-End Developer builds the systems behind an application, including business logic, APIs, authentication, and database communication.",
    responsibilities: ["Design and build APIs", "Implement application logic", "Connect services to databases", "Maintain security, reliability, and performance"],
    skills: ["One back-end language", "Databases and SQL", "API design", "Security and testing fundamentals"],
    tools: ["Node.js, Java, Python, or C#", "PostgreSQL or MySQL", "Postman", "Git"],
    next: "Senior Back-End Developer → Software Architect → Engineering Lead"
  },
  {
    title: "Full-Stack Developer", category: "Software & Development", icon: "▣",
    description: "Works across both the front-end interface and back-end application services.",
    overview: "A Full-Stack Developer can contribute to the user interface, server-side logic, APIs, and database integration of a web application.",
    responsibilities: ["Build user-facing pages", "Create server-side features and APIs", "Connect applications to databases", "Test and maintain end-to-end features"],
    skills: ["HTML, CSS, and JavaScript", "A front-end and back-end framework", "SQL and API integration", "Git and debugging"],
    tools: ["React", "Node.js", "PostgreSQL", "Git and VS Code"],
    next: "Senior Full-Stack Developer → Technical Lead → Software Architect"
  },
  {
    title: "Mobile App Developer", category: "Software & Development", icon: "▯",
    description: "Creates applications for smartphones and tablets.",
    overview: "A Mobile App Developer builds, tests, and maintains applications for Android, iOS, or both platforms.",
    responsibilities: ["Develop mobile app features", "Connect apps to APIs and services", "Test on devices and emulators", "Publish updates and fix issues"],
    skills: ["Programming fundamentals", "Mobile UI design principles", "API and data handling", "Testing and debugging"],
    tools: ["Kotlin or Swift", "Flutter or React Native", "Android Studio", "Xcode"],
    next: "Senior Mobile Developer → Mobile Architect → Engineering Lead"
  },
  {
    title: "Software Engineer", category: "Software & Development", icon: "⌘",
    description: "Designs, develops, tests, and maintains software systems.",
    overview: "Software Engineers apply engineering principles to create maintainable software. They may specialize in web, mobile, enterprise, or other systems.",
    responsibilities: ["Understand requirements and design solutions", "Write and review code", "Test and debug software", "Maintain and improve existing systems"],
    skills: ["Programming and data structures", "Software design principles", "Testing and version control", "Teamwork and problem-solving"],
    tools: ["Java, C#, Python, or JavaScript", "Git", "Testing frameworks", "Development environments"],
    next: "Senior Software Engineer → Staff Engineer → Engineering Manager"
  },
  {
    title: "UI/UX Designer", category: "Software & Development", icon: "✎",
    description: "Designs digital products that are useful, understandable, and easy to navigate.",
    overview: "UI/UX Designers research user needs and design interfaces and experiences that help people complete tasks effectively.",
    responsibilities: ["Research users and their needs", "Create wireframes and prototypes", "Design interface layouts and components", "Test designs and improve usability"],
    skills: ["User research", "Wireframing and prototyping", "Visual communication", "Usability principles"],
    tools: ["Figma", "FigJam", "Adobe Illustrator", "Usability testing tools"],
    next: "Senior Product Designer → UX Lead → Design Manager"
  },
  {
    title: "Software Tester (QA Engineer)", category: "Software & Development", icon: "✓",
    description: "Checks software quality and identifies issues before users encounter them.",
    overview: "A QA Engineer plans and performs tests to verify that software behaves as expected and meets requirements.",
    responsibilities: ["Review requirements and identify test scenarios", "Perform manual tests", "Document and report defects", "Verify fixes and prevent regressions"],
    skills: ["Analytical thinking", "Test case writing", "Attention to detail", "Basic technical and API knowledge"],
    tools: ["Jira", "TestRail", "Postman", "Browser developer tools"],
    next: "Senior QA Engineer → QA Lead → Quality Engineering Manager"
  },
  {
    title: "Automation Tester", category: "Software & Development", icon: "⚙",
    description: "Uses code and testing tools to automate repeatable software checks.",
    overview: "An Automation Tester creates automated tests that help teams check software faster and more consistently during development.",
    responsibilities: ["Choose suitable tests to automate", "Write and maintain automated test scripts", "Run tests in development pipelines", "Analyze failures and report defects"],
    skills: ["Programming basics", "Testing fundamentals", "Automation frameworks", "Debugging"],
    tools: ["Selenium", "Playwright or Cypress", "JavaScript or Python", "Jenkins"],
    next: "Senior Automation Engineer → SDET → QA Automation Lead"
  },
  {
    title: "IT Support Specialist", category: "IT & Infrastructure", icon: "⌁",
    description: "Helps users solve everyday hardware, software, and access problems.",
    overview: "An IT Support Specialist provides technical assistance to employees or customers and helps keep workplace technology working.",
    responsibilities: ["Respond to support requests", "Troubleshoot devices and applications", "Set up accounts and equipment", "Document solutions and escalate complex issues"],
    skills: ["Windows and basic networking", "Troubleshooting", "Customer service", "Clear documentation"],
    tools: ["Windows", "Microsoft 365", "Ticketing systems", "Remote support tools"],
    next: "IT Support Engineer → Systems Administrator → IT Manager"
  },
  {
    title: "System Administrator", category: "IT & Infrastructure", icon: "▤",
    description: "Maintains computer systems, servers, user accounts, and IT services.",
    overview: "A System Administrator manages an organization's computing environment to keep systems available, updated, and secure.",
    responsibilities: ["Manage servers and user accounts", "Apply updates and monitor system health", "Maintain backups and permissions", "Troubleshoot infrastructure incidents"],
    skills: ["Operating systems", "Networking fundamentals", "Scripting basics", "Security and backup practices"],
    tools: ["Windows Server", "Linux", "Active Directory", "PowerShell"],
    next: "Senior Systems Administrator → Systems Engineer → Infrastructure Manager"
  },
  {
    title: "Network Engineer", category: "IT & Infrastructure", icon: "⌘",
    description: "Designs and maintains the networks that connect devices and systems.",
    overview: "A Network Engineer plans, configures, and troubleshoots wired and wireless networks to support reliable communication.",
    responsibilities: ["Configure network equipment", "Monitor connectivity and performance", "Troubleshoot network issues", "Document network architecture"],
    skills: ["TCP/IP and subnetting", "Routing and switching concepts", "Network troubleshooting", "Security fundamentals"],
    tools: ["Cisco equipment", "Wireshark", "Network monitoring platforms", "Packet Tracer"],
    next: "Senior Network Engineer → Network Architect → Network Manager"
  },
  {
    title: "Cloud Engineer", category: "IT & Infrastructure", icon: "☁",
    description: "Builds and maintains services and infrastructure on cloud platforms.",
    overview: "A Cloud Engineer helps organizations deploy, configure, and operate systems using cloud computing platforms.",
    responsibilities: ["Deploy cloud resources and services", "Manage access, networking, and storage", "Monitor reliability and costs", "Automate routine infrastructure tasks"],
    skills: ["Linux and networking", "Cloud fundamentals", "Scripting", "Security and monitoring"],
    tools: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform"],
    next: "Senior Cloud Engineer → Cloud Architect → Cloud Engineering Manager"
  },
  {
    title: "DevOps Engineer", category: "IT & Infrastructure", icon: "⇢",
    description: "Improves how software is built, tested, released, and operated.",
    overview: "A DevOps Engineer helps development and operations teams deliver software reliably through automation, infrastructure practices, and monitoring.",
    responsibilities: ["Build CI/CD pipelines", "Automate deployment and infrastructure", "Monitor applications and services", "Improve release reliability"],
    skills: ["Linux", "Scripting", "Cloud and networking basics", "Containers and CI/CD concepts"],
    tools: ["Docker", "Kubernetes", "GitHub Actions or Jenkins", "Terraform"],
    next: "Senior DevOps Engineer → Platform Engineer → DevOps Lead"
  },
  {
    title: "Cybersecurity Analyst", category: "IT & Infrastructure", icon: "⬡",
    description: "Monitors systems and helps organizations identify and manage security risks.",
    overview: "A Cybersecurity Analyst supports defensive security by reviewing alerts, investigating suspicious activity, and helping strengthen systems and processes.",
    responsibilities: ["Monitor security alerts", "Investigate and document incidents", "Review vulnerabilities and security controls", "Support awareness and risk-reduction activities"],
    skills: ["Networking and operating systems", "Security fundamentals", "Analytical investigation", "Clear incident reporting"],
    tools: ["SIEM platforms", "Endpoint security tools", "Vulnerability scanners", "Security frameworks"],
    next: "Senior Security Analyst → Security Engineer → Security Operations Lead"
  },
  {
    title: "Information Security Specialist", category: "IT & Infrastructure", icon: "◈",
    description: "Helps protect an organization's information, policies, and security controls.",
    overview: "An Information Security Specialist focuses on protecting information assets through policies, risk assessment, awareness, and technical or administrative controls.",
    responsibilities: ["Support information security policies", "Assess security risks and controls", "Coordinate awareness activities", "Help prepare for audits and compliance reviews"],
    skills: ["Information security principles", "Risk and control awareness", "Documentation", "Communication and analysis"],
    tools: ["ISO 27001 framework", "GRC platforms", "Microsoft security tools", "Risk registers"],
    next: "Information Security Analyst → Security Manager → CISO"
  },
  {
    title: "Business Analyst", category: "Business & Systems", icon: "◇",
    description: "Connects business needs with practical process or technology solutions.",
    overview: "A Business Analyst works with stakeholders to understand problems, document requirements, and help teams deliver solutions that create business value.",
    responsibilities: ["Interview stakeholders and gather requirements", "Map current and future processes", "Write user stories and acceptance criteria", "Support solution validation and delivery"],
    skills: ["Communication and facilitation", "Requirements analysis", "Process mapping", "Critical thinking"],
    tools: ["Excel", "Jira", "Confluence", "Visio or diagrams.net"],
    next: "Senior Business Analyst → Lead BA → Product Owner or BA Manager"
  },
  {
    title: "Systems Analyst", category: "Business & Systems", icon: "⌘",
    description: "Studies business systems and defines how technology should support them.",
    overview: "A Systems Analyst examines existing systems, user requirements, and technical constraints to recommend or specify improvements.",
    responsibilities: ["Analyze system requirements", "Document workflows and system behavior", "Coordinate between users and technical teams", "Support testing and implementation"],
    skills: ["Systems thinking", "Requirements documentation", "Database and process knowledge", "Communication"],
    tools: ["UML diagrams", "SQL", "Jira", "Visio or diagrams.net"],
    next: "Senior Systems Analyst → Solution Architect → Systems Manager"
  },
  {
    title: "ERP Consultant", category: "Business & Systems", icon: "▦",
    description: "Helps organizations implement and improve integrated business systems.",
    overview: "An ERP Consultant understands business processes and configures or supports enterprise resource planning systems across areas such as finance, inventory, and purchasing.",
    responsibilities: ["Understand client business processes", "Gather requirements and configure ERP modules", "Support data migration and testing", "Train users and assist after go-live"],
    skills: ["Business process knowledge", "ERP concepts", "Requirements gathering", "Problem-solving and communication"],
    tools: ["SAP", "Oracle ERP", "Microsoft Dynamics 365", "ERP reporting tools"],
    next: "Senior ERP Consultant → ERP Solution Architect → ERP Practice Lead"
  },
  {
    title: "SAP Consultant", category: "Business & Systems", icon: "▣",
    description: "Specializes in configuring and supporting solutions within the SAP ecosystem.",
    overview: "An SAP Consultant works with specific SAP modules and helps organizations align the platform with their business processes. Specialization in a module is usually important.",
    responsibilities: ["Analyze requirements for an SAP module", "Configure and test system processes", "Support implementation and upgrades", "Help users and document solutions"],
    skills: ["Business process knowledge", "A chosen SAP module", "Requirements analysis", "Testing and communication"],
    tools: ["SAP S/4HANA", "SAP Fiori", "SAP Analytics Cloud", "Module-specific tools"],
    next: "Senior SAP Consultant → SAP Solution Architect → SAP Project Lead"
  },
  {
    title: "CRM Specialist", category: "Business & Systems", icon: "◎",
    description: "Manages customer relationship systems and improves customer data and workflows.",
    overview: "A CRM Specialist supports the systems and processes used to manage customer information, sales activities, and service interactions.",
    responsibilities: ["Maintain CRM data quality", "Configure fields, workflows, and reports", "Support sales and service teams", "Analyze customer and pipeline information"],
    skills: ["CRM process knowledge", "Data management", "Reporting", "User support and communication"],
    tools: ["Salesforce", "HubSpot", "Microsoft Dynamics 365", "Excel"],
    next: "CRM Analyst → CRM Consultant → CRM Manager"
  },
  {
    title: "IT Project Manager", category: "Business & Systems", icon: "◷",
    description: "Coordinates technology projects, teams, timelines, budgets, and delivery.",
    overview: "An IT Project Manager plans and coordinates technology projects so that agreed outcomes are delivered within scope, time, and budget constraints.",
    responsibilities: ["Define scope, milestones, and responsibilities", "Coordinate project teams and stakeholders", "Track risks, issues, and progress", "Communicate status and support delivery"],
    skills: ["Planning and organization", "Communication and leadership", "Risk management", "Agile or traditional project methods"],
    tools: ["Jira", "Trello or Asana", "Microsoft Project", "Confluence"],
    next: "Senior Project Manager → Program Manager → PMO Director"
  },
  {
    title: "Product Manager", category: "Business & Systems", icon: "✦",
    description: "Guides a product's direction by balancing user needs and business goals.",
    overview: "A Product Manager helps decide what a product should achieve, which problems to prioritize, and how teams can deliver value to users and the business.",
    responsibilities: ["Research users and market needs", "Set product goals and priorities", "Maintain and communicate the product roadmap", "Work with design, engineering, and business teams"],
    skills: ["Strategic thinking", "User and market research", "Prioritization", "Communication and data-informed decisions"],
    tools: ["Jira", "Productboard", "Figma", "Analytics platforms"],
    next: "Senior Product Manager → Group Product Manager → Head of Product"
  },
  {
    title: "IT Business Consultant", category: "Business & Systems", icon: "◇",
    description: "Advises organizations on using technology to solve business challenges.",
    overview: "An IT Business Consultant evaluates business needs and recommends technology, process, or systems changes that support organizational goals.",
    responsibilities: ["Understand business challenges", "Assess systems and process options", "Prepare recommendations and proposals", "Support transformation and implementation work"],
    skills: ["Business analysis", "Technology awareness", "Research and presentation", "Stakeholder management"],
    tools: ["Excel", "PowerPoint", "Process mapping tools", "Business analysis platforms"],
    next: "Senior Consultant → Engagement Manager → Consulting Director"
  },
  {
    title: "Digital Transformation Specialist", category: "Business & Systems", icon: "↗",
    description: "Supports the adoption of digital technologies and redesigned business processes.",
    overview: "A Digital Transformation Specialist helps organizations modernize workflows, services, and operating models through technology and organizational change.",
    responsibilities: ["Identify opportunities to digitize processes", "Analyze readiness and business impact", "Coordinate technology adoption initiatives", "Measure outcomes and support change management"],
    skills: ["Process analysis", "Change management", "Digital technology awareness", "Communication and project coordination"],
    tools: ["Process mapping software", "Power BI", "Project management tools", "Collaboration platforms"],
    next: "Transformation Consultant → Digital Program Manager → Transformation Director"
  },
  {
    title: "Financial Analyst", category: "Finance & Operations", icon: "⌁",
    description: "Analyzes financial information to support planning and business decisions.",
    overview: "A Financial Analyst reviews financial data, budgets, forecasts, and performance to help organizations understand financial results and plan ahead.",
    responsibilities: ["Analyze financial statements and performance", "Prepare budgets and forecasts", "Compare actual results with plans", "Present financial insights to decision-makers"],
    skills: ["Accounting and finance fundamentals", "Excel and financial modeling", "Analytical thinking", "Business communication"],
    tools: ["Excel", "Power BI", "Financial planning systems", "ERP platforms"],
    next: "Senior Financial Analyst → Finance Manager → Finance Director"
  },
  {
    title: "Risk Analyst", category: "Finance & Operations", icon: "△",
    description: "Identifies, measures, and reports risks that may affect an organization.",
    overview: "A Risk Analyst helps an organization understand potential financial, operational, or business risks and evaluate ways to manage them.",
    responsibilities: ["Collect and analyze risk information", "Maintain risk registers and reports", "Monitor indicators and control effectiveness", "Support risk assessments and mitigation plans"],
    skills: ["Analytical and quantitative thinking", "Excel and reporting", "Attention to detail", "Understanding of business controls"],
    tools: ["Excel", "Power BI", "Risk management platforms", "SQL (useful)"],
    next: "Senior Risk Analyst → Risk Manager → Chief Risk Officer"
  },
  {
    title: "Operations Analyst", category: "Finance & Operations", icon: "⇄",
    description: "Studies operational performance and finds ways to improve efficiency.",
    overview: "An Operations Analyst uses data and process analysis to understand how day-to-day operations perform and where improvements can be made.",
    responsibilities: ["Track operational KPIs", "Analyze delays, costs, and service levels", "Identify process bottlenecks", "Recommend and monitor improvements"],
    skills: ["Excel and data analysis", "Process mapping", "Problem-solving", "Communication"],
    tools: ["Excel", "Power BI", "SQL", "Process mapping tools"],
    next: "Senior Operations Analyst → Operations Manager → Operations Director"
  },
  {
    title: "Supply Chain Analyst", category: "Finance & Operations", icon: "⌖",
    description: "Uses data to improve purchasing, inventory, logistics, and supply chain performance.",
    overview: "A Supply Chain Analyst examines supply chain data to help organizations balance demand, inventory, cost, and delivery performance.",
    responsibilities: ["Analyze inventory and demand trends", "Monitor supplier and delivery performance", "Prepare supply chain reports", "Support forecasting and process improvements"],
    skills: ["Excel and analytical thinking", "Supply chain fundamentals", "Forecasting basics", "Communication and problem-solving"],
    tools: ["Excel", "Power BI", "ERP systems", "SQL"],
    next: "Senior Supply Chain Analyst → Supply Chain Manager → Supply Chain Director"
  },
  {
    title: "Business Process Analyst", category: "Finance & Operations", icon: "⤴",
    description: "Maps, evaluates, and improves the processes people use to get work done.",
    overview: "A Business Process Analyst documents workflows, identifies inefficiencies, and helps teams redesign processes to improve quality, cost, or speed.",
    responsibilities: ["Document current business processes", "Identify bottlenecks and unnecessary steps", "Design improved workflows", "Measure process performance"],
    skills: ["Process modeling", "Analytical thinking", "Facilitation", "Requirements documentation"],
    tools: ["BPMN tools", "Visio or diagrams.net", "Excel", "Process mining platforms"],
    next: "Senior Process Analyst → BPM Consultant → Process Improvement Manager"
  },
  {
    title: "IT Auditor", category: "Finance & Operations", icon: "☷",
    description: "Reviews technology controls, systems, and processes for risk and compliance.",
    overview: "An IT Auditor evaluates whether technology controls are appropriately designed and operating, and documents findings for management.",
    responsibilities: ["Review IT processes and controls", "Assess access, change, and backup controls", "Collect audit evidence", "Prepare findings and recommendations"],
    skills: ["IT fundamentals", "Risk and internal control concepts", "Documentation", "Professional communication"],
    tools: ["Excel", "Audit management software", "GRC platforms", "Control frameworks"],
    next: "Senior IT Auditor → IT Audit Manager → Head of Internal Audit"
  },
  {
    title: "Digital Marketing Specialist", category: "Digital & Other", icon: "↗",
    description: "Plans and evaluates online campaigns that help organizations reach customers.",
    overview: "A Digital Marketing Specialist works across digital channels to attract audiences, communicate value, and measure campaign performance.",
    responsibilities: ["Plan and publish digital campaigns", "Monitor traffic and engagement", "Research audiences and keywords", "Measure campaign results and optimize activity"],
    skills: ["Content and communication", "Marketing fundamentals", "Analytics and experimentation", "Creative problem-solving"],
    tools: ["Google Analytics", "Google Ads", "Meta Ads Manager", "SEO tools"],
    next: "Digital Marketing Manager → Growth Manager → Head of Marketing"
  },
  {
    title: "E-commerce Specialist", category: "Digital & Other", icon: "▣",
    description: "Helps manage online stores, product listings, orders, and sales performance.",
    overview: "An E-commerce Specialist supports the operation and growth of online stores, coordinating product content, promotions, customer journeys, and performance data.",
    responsibilities: ["Maintain product listings and store content", "Monitor orders and sales metrics", "Coordinate promotions and campaigns", "Improve the online shopping experience"],
    skills: ["E-commerce operations", "Data analysis", "Digital marketing basics", "Organization and customer focus"],
    tools: ["Shopify or WooCommerce", "Excel", "Google Analytics", "Marketplace dashboards"],
    next: "E-commerce Manager → Online Business Manager → E-commerce Director"
  },
  {
    title: "GIS Analyst", category: "Digital & Other", icon: "⌖",
    description: "Uses geographic data and mapping tools to answer location-based questions.",
    overview: "A GIS Analyst works with spatial data to create maps, analyze geographic patterns, and support decisions in areas such as planning, logistics, and utilities.",
    responsibilities: ["Collect and prepare spatial datasets", "Create maps and geographic visualizations", "Perform spatial analysis", "Maintain GIS data and communicate findings"],
    skills: ["Spatial thinking", "Data management", "Cartography basics", "Analytical communication"],
    tools: ["ArcGIS", "QGIS", "Excel", "Spatial databases"],
    next: "Senior GIS Analyst → GIS Specialist → GIS Manager"
  },
  {
    title: "RPA Developer", category: "Digital & Other", icon: "⚙",
    description: "Automates repetitive business tasks using robotic process automation tools.",
    overview: "An RPA Developer designs software bots that carry out rule-based, repetitive tasks across business applications.",
    responsibilities: ["Identify tasks suitable for automation", "Design and build automation workflows", "Test bots and handle exceptions", "Monitor and maintain deployed automations"],
    skills: ["Process analysis", "Logic and scripting", "Attention to detail", "Testing and documentation"],
    tools: ["UiPath", "Power Automate", "Automation Anywhere", "Excel"],
    next: "Senior RPA Developer → Automation Solution Architect → Automation Lead"
  },
  {
    title: "Technical Writer", category: "Digital & Other", icon: "✎",
    description: "Creates clear technical documentation that helps people use products and systems.",
    overview: "A Technical Writer turns complex technical information into understandable guides, procedures, help content, and product documentation.",
    responsibilities: ["Write user guides and technical instructions", "Interview subject-matter experts", "Organize and maintain documentation", "Review content for clarity and accuracy"],
    skills: ["Clear writing", "Research and interviewing", "Information organization", "Basic technical understanding"],
    tools: ["Markdown", "Google Docs or Microsoft Word", "Confluence", "Documentation platforms"],
    next: "Senior Technical Writer → Documentation Lead → Content Design Manager"
  }
];

const grid = document.getElementById("specializationsGrid");
const searchInput = document.getElementById("searchInput");
const filterRow = document.getElementById("filterRow");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const resetButton = document.getElementById("resetButton");
const modal = document.getElementById("detailModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
let activeCategory = "All";

document.getElementById("totalCount").textContent = careerPaths.length;
document.getElementById("currentYear").textContent = new Date().getFullYear();

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function renderCards() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = careerPaths.filter(path => {
    const matchesCategory = activeCategory === "All" || path.category === activeCategory;
    const searchableText = [
      path.title, path.category, path.description, path.overview,
      ...path.skills, ...path.tools, ...path.responsibilities
    ].join(" ").toLowerCase();
    return matchesCategory && searchableText.includes(query);
  });

  grid.innerHTML = filtered.map(path => {
    const originalIndex = careerPaths.indexOf(path);
    return `
      <article class="specialization-card">
        <div class="card-top">
          <span class="card-icon" aria-hidden="true">${escapeHTML(path.icon)}</span>
          <span class="card-number">PATH ${String(originalIndex + 1).padStart(2, "0")}</span>
        </div>
        <p class="category-label">${escapeHTML(path.category)}</p>
        <h3>${escapeHTML(path.title)}</h3>
        <p class="card-description">${escapeHTML(path.description)}</p>
        <div class="card-bottom">
          <span class="skill-hint">${path.skills.length} key skill areas</span>
          <button class="details-button" data-index="${originalIndex}">View Details <span>→</span></button>
        </div>
      </article>`;
  }).join("");

  resultsCount.textContent = `Showing ${filtered.length} of ${careerPaths.length} paths`;
  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
}

function openDetails(index) {
  const path = careerPaths[index];
  if (!path) return;

  const list = items => `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  modalContent.innerHTML = `
    <p class="modal-category">${escapeHTML(path.category)}</p>
    <h2 class="modal-title" id="modalTitle">${escapeHTML(path.title)}</h2>
    <p class="modal-overview">${escapeHTML(path.overview)}</p>
    <div class="modal-info-grid">
      <div class="info-block"><h4>KEY RESPONSIBILITIES</h4>${list(path.responsibilities)}</div>
      <div class="info-block"><h4>REQUIRED SKILLS</h4>${list(path.skills)}</div>
      <div class="info-block"><h4>COMMON TOOLS</h4>${list(path.tools)}</div>
      <div class="info-block"><h4>POSSIBLE CAREER PROGRESSION</h4><p style="color:#b0bdcf;font-size:11px;line-height:1.8">${escapeHTML(path.next)}</p></div>
    </div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeDetails() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

searchInput.addEventListener("input", renderCards);

filterRow.addEventListener("click", event => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;
  activeCategory = button.dataset.category;
  filterRow.querySelectorAll(".filter-btn").forEach(item => {
    item.classList.toggle("active", item === button);
  });
  renderCards();
});

grid.addEventListener("click", event => {
  const button = event.target.closest(".details-button");
  if (button) openDetails(Number(button.dataset.index));
});

resetButton.addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "All";
  filterRow.querySelectorAll(".filter-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.category === "All");
  });
  renderCards();
  searchInput.focus();
});

modalClose.addEventListener("click", closeDetails);
modal.addEventListener("click", event => {
  if (event.target === modal) closeDetails();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeDetails();
});


renderCards();


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
