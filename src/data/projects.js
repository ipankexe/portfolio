export const projectsData = [
  {
    id: 1,
    slug: "kulu-asri-pos",
    title: "Point of Sales Web System — Rumah Makan Kulu Asri",
    shortTitle: "Kulu Asri POS",
    type: "Final Project / Thesis",
    categories: ["Web Development", "Backend", "Database"],
    featured: true,
    period: "2023 - 2024",
    highlight: "Features transaction void/cancellation functionality with secure manager authorization.",
    description: "A comprehensive web-based Point of Sales (POS) and restaurant management system developed for Rumah Makan Kulu Asri to digitize dining orders, automate stock deductions, and resolve reconciliation discrepancies.",
    image: null, // To be added later by user
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap 5", "Blade Engine"],
    stats: [
      { label: "Methodology", value: "Waterfall" },
      { label: "Testing", value: "Black Box (100% Passed)" },
      { label: "Core Feature", value: "Void Transaction Logic" }
    ],
    github: "https://github.com/ipankexe/kulu-asri-pos",
    demoUrl: null, // internal business deployment
    features: [
      "Interactive Table Management & Status Monitoring (Available, Occupied, Reserved)",
      "Dynamic Menu Catalog with Categorized Items (Food, Beverages, Packages)",
      "Real-time Order Processing and Kitchen Ticket Generation",
      "Automated Inventory/Stock Deduction linked directly to order fulfillment",
      "Transaction Void / Cancellation workflow with audit logging and authorization safeguard",
      "Cashier Split-Payment, Discount Computation, and Instant Bill/Receipt Printing",
      "Daily and Monthly Sales Analytical Reports with Excel / PDF export capabilities"
    ],
    caseStudy: {
      problem: "Rumah Makan Kulu Asri previously relied entirely on manual paper-based order slips and physical cash registers. This resulted in frequent miscalculations, delayed food preparation due to lost physical tickets, lack of real-time inventory visibility, and high vulnerability to unrecorded order changes or cancelled bills.",
      existingWorkflow: "Waitstaff manually wrote orders on triplicate paper slips → physically handed one slip to the kitchen, one to the cashier, and kept one at the table → customers paid at the counter where cashiers manually keyed in items → if an order was mistakenly rung up or cancelled, slips were torn up without tracking, causing inventory and cash drawer mismatches.",
      proposedSolution: "Engineered a centralized web-based Point of Sales application built on Laravel and MySQL. Implemented strict role-based access control (Admin, Manager, Cashier, Waiter), digitized the order workflow from table to kitchen, and introduced a formalized transaction voiding mechanism requiring administrative verification with full audit trails.",
      methodology: "Waterfall Model (Requirements Analysis, System Design, Implementation, Integration & Testing, Deployment & Maintenance), perfectly aligned with academic rigor and predictable restaurant business processes.",
      testing: "Black Box Testing across 28 test scenarios covering authentication, order dispatch, dynamic bill calculations, stock synchronization, and edge cases in transaction cancellations. All test cases passed with expected validation behavior.",
      architecture: "Model-View-Controller (MVC) architecture on Laravel 10. Relational MySQL schema with strict foreign keys, transactional queries (DB Transactions) for order creation and inventory deduction, preventing race conditions.",
      result: "Successfully eliminated manual paper discrepancies, accelerated order-to-kitchen processing time, and provided management with accurate end-of-day financial reconciliation reports."
    }
  },
  {
    id: 2,
    slug: "damkar-information-system",
    title: "Government Fire Department Information System (DAMKAR)",
    shortTitle: "Damkar Web Portal",
    type: "Internship / Practical Project",
    categories: ["Web Development", "Frontend", "Backend", "Database"],
    featured: true,
    period: "Diskominfo Practical Project",
    highlight: "Integrated real-time incident geoportal, public visit request system, and emergency alert dispatcher.",
    description: "A centralized municipal information system and public service portal developed for the Fire and Rescue Department (Dinas Pemadam Kebakaran dan Penyelamatan) through a practical project at Diskominfo.",
    image: null, // To be added later by user
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Leaflet GIS"],
    stats: [
      { label: "Institution", value: "Diskominfo" },
      { label: "Database", value: "MongoDB / Mongoose" },
      { label: "Map Service", value: "GIS Geoportal / Leaflet" }
    ],
    github: "https://github.com/ipankexe/damkar-diskominfo-system",
    demoUrl: null,
    features: [
      "Real-time Emergency Alert Banner with active regional alert notifications",
      "Interactive GIS Geoportal Map with custom markers for fire stations and live incident reports",
      "Public Education Visit Request System (Layanan Kunjungan Edukasi) with automated date booking & verification",
      "Official News, Public Fire Safety Articles, and Operational Press Releases CMS",
      "Direct Citizen Incident Reporting & Contact Form with geocoded coordinates",
      "Multi-file Image Upload pipeline for emergency field documentation and article media",
      "Administrative Dashboard for verification of public booking requests and content moderation"
    ],
    caseStudy: {
      problem: "Public access to local fire station information and educational visit booking was fragmented across phone calls and physical letters. Citizens lacked a unified channel to view verified fire department safety guidelines, fire danger levels, or check the nearest operational fire station post.",
      existingWorkflow: "Schools and civic groups wanting to schedule safety education visits had to submit physical letters in person weeks in advance with no real-time calendar availability. Emergency communications relied solely on telephone dispatch without digital geocoding or public situational feeds.",
      proposedSolution: "Developed a modern, responsive web portal powered by a Node.js/Express REST API backend and a React.js client. Built an automated schedule booking module for public visits, integrated interactive map layers using Leaflet GIS, and created an administrative backend for rapid municipal updates.",
      methodology: "Agile-Iterative development with bi-weekly coordination reviews alongside Diskominfo supervisors and Fire Department stakeholders to refine UI requirements and API contracts.",
      testing: "API integration testing using Postman for endpoints (visit booking CRUD, news feeds, incident submission). Frontend responsive testing across tablet and mobile devices to ensure citizen accessibility.",
      architecture: "Decoupled Single Page Application (SPA) architecture: React.js frontend communicating via Axios with Express.js REST API server. Document-oriented MongoDB database with Mongoose schemas for flexible incident logs and booking records.",
      result: "Streamlined the public visit booking workflow into an easy 3-step digital process, improved citizen awareness of fire safety, and established a scalable digital touchpoint for municipal emergency services."
    }
  },
  {
    id: 3,
    slug: "stuntingcarenet",
    title: "StuntingCareNet — Child Nutritional Health & Growth Monitoring",
    shortTitle: "StuntingCareNet",
    type: "Academic Project",
    categories: ["Web Development", "Backend", "Database", "Data Analysis"],
    featured: true,
    period: "2023",
    highlight: "Three-tier role access (Admin, Healthcare Staff, Parents) with automated WHO growth standard classification.",
    description: "An epidemiological and child health tracking web application designed to support community healthcare workers (Posyandu/Puskesmas) and parents in detecting early childhood stunting and nutritional vulnerabilities.",
    image: null, // To be added later by user
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Chart.js", "Tailwind CSS"],
    stats: [
      { label: "Target", value: "Toddlers (0-59 months)" },
      { label: "Standard", value: "WHO Child Growth Standards" },
      { label: "Role Architecture", value: "3-Tier RBAC" }
    ],
    github: "https://github.com/ipankexe/stuntingcarenet",
    demoUrl: null,
    features: [
      "Role-Based Access Control (RBAC): Admin, Healthcare Workers (Kader Posyandu / Nakes), and Parents",
      "Anthropometric Data Entry: Recording age (months), length/height (cm), weight (kg), and head circumference",
      "Automated Z-score & Stunting Risk Classification (Severely Stunted, Stunted, Normal, Tall)",
      "Interactive Longitudinal Growth Percentile Charts (Height-for-Age, Weight-for-Age)",
      "Individual Toddler Nutritional Health Diary accessible directly by parents",
      "Aggregated Posyandu Community Reports to identify localized nutritional risk clusters",
      "Nutritional Intervention Advice & Recommended Complementary Feeding (MP-ASI) guidelines"
    ],
    caseStudy: {
      problem: "Traditional Posyandu records in suburban and rural areas rely on physical paper health books (KMS). Data entry errors, delayed calculations of anthropometric indicators, and lack of historical data visualization lead to missed early warning signs of childhood stunting.",
      existingWorkflow: "Cadres weighed and measured infants during monthly Posyandu sessions, plotted points manually on physical paper curves, and parents often lost records between visits. Health centers struggled to consolidate regional nutritional statistics quickly.",
      proposedSolution: "Created a dedicated web platform using Laravel and MySQL. Integrated automated algorithms calculating nutritional status based on WHO child growth charts, allowing healthcare workers to instantly classify status upon measurement entry and generate clear interactive visual charts.",
      methodology: "Component-based prototyping and data validation modeling following official Indonesian Ministry of Health (Kemenkes) anthropometric parameters.",
      testing: "Unit and functional testing of calculation algorithms against standard WHO growth reference tables to verify zero calculation variance.",
      architecture: "Laravel MVC with MySQL relational database storing normalized tables for Posyandu units, families, children profiles, and historical anthropometric measurement series.",
      result: "Enabled instant risk classification in under 2 seconds per measurement, giving parents transparent digital access to their child's developmental trajectory and empowering healthcare cadres with organized regional records."
    }
  },
  {
    id: 4,
    slug: "belajar-pintar",
    title: "Belajar Pintar — Interactive E-Learning & Assessment Platform",
    shortTitle: "Belajar Pintar",
    type: "Academic Project",
    categories: ["Web Development", "Frontend"],
    featured: true,
    period: "2023",
    highlight: "State management architecture utilizing React Query, Context API, and useReducer for zero-lag quiz interactions.",
    description: "A modern, responsive e-learning web application built to explore modular educational roadmaps, interactive coding assessments, and optimized client-side state caching in React.",
    image: null, // To be added later by user
    technologies: ["React.js", "React Query", "Context API", "useReducer", "Tailwind CSS", "Vite"],
    stats: [
      { label: "State Architecture", value: "Context + Reducer" },
      { label: "Data Caching", value: "TanStack React Query" },
      { label: "UI Response", value: "Instant Optimistic Updates" }
    ],
    github: "https://github.com/ipankexe/belajar-pintar",
    demoUrl: null,
    features: [
      "Modular Course Learning Roadmap with prerequisite unlocking and progress tracking",
      "Interactive Quiz Engine with instant feedback, score computation, and answer explanations",
      "Synchronized Lesson Notes and timestamped chapter navigation",
      "Code Playground preview component for front-end programming tutorials",
      "Optimistic UI updates for module completion toggles and bookmarking",
      "Global Dark / Light theme synchronization using custom React hooks",
      "Comprehensive client-side caching to prevent unnecessary re-fetching of module content"
    ],
    caseStudy: {
      problem: "Many student learning portals suffer from sluggish page transitions, full-page reloads between quiz questions, and lost form states when switching between lessons or tabs.",
      existingWorkflow: "Traditional multi-page learning platforms submit every answer via server postbacks, resulting in disruptive latency and a clunky assessment experience for learners.",
      proposedSolution: "Architected a single-page web app using React.js that decouples presentation from data fetching. Integrated TanStack React Query for background cache management and combined Context API with `useReducer` for complex quiz state machines.",
      methodology: "User-Centered Design (UCD) focusing on distraction-free learning interfaces, quick keyboard shortcuts, and immediate positive feedback loops.",
      testing: "Component testing, state machine edge-case validation (back navigation, unfinished tests, network re-connection handling).",
      architecture: "Modern React architecture with custom hooks (`useQuiz`, `useCourseProgress`), isolated state management reducers, and Tailwind CSS utility styling for clean visual hierarchy.",
      result: "Delivered a silky-smooth learning experience with instant quiz validation (<50ms response), zero state loss, and high learner engagement."
    }
  },
  {
    id: 5,
    slug: "mysql-cluster",
    title: "High-Availability MySQL Master-Slave Replication & SQL Proxy Cluster",
    shortTitle: "MySQL HA Cluster",
    type: "Academic / Infrastructure Project",
    categories: ["Database", "IT / Infrastructure"],
    featured: true,
    period: "2024",
    highlight: "Multi-node database topology on Ubuntu Server 24.04 with SQL Proxy routing and asynchronous read replication.",
    description: "An enterprise-grade database infrastructure simulation designed and deployed on virtualized Ubuntu Server 24.04 nodes, implementing master-slave asynchronous replication and SQL proxy load balancing.",
    image: null, // To be added later by user
    technologies: ["Ubuntu Server 24.04", "MySQL 8.0", "Database Replication", "DBeaver", "HAProxy / SQL Proxy", "Bash Scripting"],
    stats: [
      { label: "Nodes", value: "3 DB Nodes + 1 Proxy" },
      { label: "Topology", value: "Master - Dual Slave" },
      { label: "OS", value: "Ubuntu Server 24.04 LTS" }
    ],
    github: "https://github.com/ipankexe/mysql-ha-cluster-setup",
    demoUrl: null,
    features: [
      "Master-Slave Asynchronous Binary Log (binlog) Replication Architecture",
      "SQL Proxy / HAProxy load balancer routing write queries to Master and read queries across Slave nodes",
      "Configured dual read replicas (Slave 1 and Slave 2) on independent virtual server instances",
      "Automated server initialization and configuration scripts via Bash shell",
      "Replication health monitoring via MySQL status variables (`Slave_IO_Running`, `Slave_SQL_Running`)",
      "Comprehensive DBeaver management and schema synchronization benchmarking",
      "Stress testing and simulation of master node failover scenarios and replication lag measurement"
    ],
    caseStudy: {
      problem: "Single-instance database deployments represent a severe single point of failure (SPOF) for growing web applications. Under high concurrent traffic, unseparated read and write queries degrade transaction response times and risk complete service outages during hardware faults.",
      existingWorkflow: "Monolithic applications connect all web threads to a single database server; read queries for analytical reports lock database tables or saturate CPU, degrading critical user transaction writes.",
      proposedSolution: "Engineered a scalable multi-node database cluster on Ubuntu Server 24.04. Built an upstream SQL Proxy layer that transparently intercepts incoming application SQL traffic, directing all write transactions (INSERT, UPDATE, DELETE) to the dedicated Master node while distributing intensive read queries (SELECT) across Slave 1 and Slave 2.",
      methodology: "Infrastructure as Code (IaC) principles: scripted network configuration, static IP allocation, firewall rule setting (UFW), MySQL config hardening (`server-id`, `log_bin`, `binlog_do_db`), and replication user provisioning.",
      testing: "Stress-tested concurrent query throughput using automated load generation scripts. Tested failover by intentionally stopping the master daemon and verifying replication integrity and proxy health detection.",
      architecture: "Network Topology:\n• Client Applications → SQL Proxy (Port 3306)\n• SQL Proxy → Master Node (192.168.1.20) [Writes/Reads]\n• Master Node ──(Binary Log Sync)──> Slave Node 1 (192.168.1.21) [Reads]\n• Master Node ──(Binary Log Sync)──> Slave Node 2 (192.168.1.22) [Reads]",
      result: "Achieved seamless separation of read/write traffic, minimized database bottleneck risks, and validated zero-data-loss asynchronous replication across all nodes."
    }
  }
];

export const projectCategories = [
  "All",
  "Web Development",
  "Frontend",
  "Backend",
  "Database",
  "Data Analysis",
  "Machine Learning",
  "IT / Infrastructure"
];
