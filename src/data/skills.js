export const skillCategories = [
  {
    id: "programming-web",
    name: "Programming & Web",
    description: "Core languages and web technologies used to architect end-to-end full-stack applications.",
    skills: [
      {
        name: "PHP",
        context: "Server-side language used extensively for MVC web development, authentication, and database orchestration in academic and production systems.",
        level: "Experienced",
        projects: ["Kulu Asri POS", "StuntingCareNet"]
      },
      {
        name: "JavaScript (ES6+)",
        context: "Modern asynchronous JavaScript, closures, DOM manipulation, promises, async/await, and REST API consumption.",
        level: "Experienced",
        projects: ["Damkar Web Portal", "Belajar Pintar", "Kulu Asri POS"]
      },
      {
        name: "Laravel",
        context: "Full-stack PHP framework utilizing Eloquent ORM, middleware, Blade templates, migrations, and transactional business logic.",
        level: "Experienced",
        projects: ["Kulu Asri POS", "StuntingCareNet"]
      },
      {
        name: "React.js",
        context: "Building dynamic component-driven user interfaces with hooks (useState, useEffect, useReducer), Context API, and client-side routing.",
        level: "Competent",
        projects: ["Damkar Web Portal", "Belajar Pintar"]
      },
      {
        name: "HTML5",
        context: "Semantic markup, accessible structure, SEO-friendly page architecture, and responsive forms.",
        level: "Proficient",
        projects: ["All Web Projects"]
      },
      {
        name: "CSS3",
        context: "Modern responsive layouts using Flexbox, CSS Grid, media queries, keyframe animations, and custom styling.",
        level: "Proficient",
        projects: ["All Web Projects"]
      }
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "Developing robust server-side APIs, routing mechanisms, and business service layers.",
    skills: [
      {
        name: "Node.js",
        context: "Asynchronous runtime for building non-blocking backend network services and event-driven API servers.",
        level: "Competent",
        projects: ["Damkar Web Portal"]
      },
      {
        name: "Express.js",
        context: "Fast minimalist Node.js web framework for structuring RESTful endpoints, middleware chains, error handlers, and file upload pipelines.",
        level: "Competent",
        projects: ["Damkar Web Portal"]
      },
      {
        name: "Mongoose",
        context: "Object Data Modeling (ODM) library for MongoDB, managing schema definitions, validations, references, and population queries.",
        level: "Competent",
        projects: ["Damkar Web Portal"]
      },
      {
        name: "RESTful API Design",
        context: "Creating clean HTTP status conventions, JSON payload schemas, CRUD routing, and client-server integration patterns.",
        level: "Competent",
        projects: ["Damkar Web Portal", "Belajar Pintar"]
      }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Crafting fast, responsive, and intuitive user interfaces with stateful reactive tools.",
    skills: [
      {
        name: "React.js Ecosystem",
        context: "React Router, TanStack Query for remote state caching, Context API for global state, and custom hook abstraction.",
        level: "Competent",
        projects: ["Belajar Pintar", "Damkar Web Portal"]
      },
      {
        name: "Tailwind CSS",
        context: "Utility-first CSS styling for rapid UI development, responsive breakpoints, dark mode themes, and design token integration.",
        level: "Proficient",
        projects: ["Belajar Pintar", "Personal Portfolio"]
      },
      {
        name: "Responsive & Accessible UI",
        context: "Designing mobile-first layouts that adapt smoothly across desktop, tablet, and mobile with keyboard-navigable semantics.",
        level: "Proficient",
        projects: ["All Projects"]
      }
    ]
  },
  {
    id: "database",
    name: "Database Systems",
    description: "Designing schemas, writing relational SQL queries, managing document stores, and database replication.",
    skills: [
      {
        name: "MySQL",
        context: "Relational database schema design, indexing, foreign key constraints, ACID transaction queries, and master-slave replication configuration.",
        level: "Experienced",
        projects: ["Kulu Asri POS", "StuntingCareNet", "MySQL HA Cluster"]
      },
      {
        name: "MongoDB",
        context: "NoSQL document database modeling, JSON-like document structuring, aggregation pipelines, and schema indexing.",
        level: "Competent",
        projects: ["Damkar Web Portal"]
      },
      {
        name: "SQL & Query Optimization",
        context: "Writing complex multi-table JOINs, subqueries, GROUP BY aggregations, and performance-conscious data retrieval.",
        level: "Experienced",
        projects: ["Kulu Asri POS", "StuntingCareNet"]
      },
      {
        name: "Database Replication",
        context: "Configuring MySQL binary log (binlog) asynchronous master-to-slave replication topologies for read scalability.",
        level: "Foundational / Practical",
        projects: ["MySQL HA Cluster"]
      }
    ]
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    description: "Foundational capabilities in cleaning, structuring, and exploring datasets to extract actionable insights.",
    skills: [
      {
        name: "Data Cleaning",
        context: "Detecting and handling missing values, handling duplicate records, datatype conversions, and outlier handling.",
        level: "Foundational",
        projects: ["StuntingCareNet Data Validation", "Academic Datasets"]
      },
      {
        name: "Data Preparation",
        context: "Structuring raw categorical and numerical records into tidy formats ready for exploratory analysis and model consumption.",
        level: "Foundational",
        projects: ["Anthropometric Health Datasets"]
      },
      {
        name: "Exploratory Data Analysis (EDA)",
        context: "Investigating feature distributions, correlation matrices, and identifying patterns within structured tabular data.",
        level: "Foundational",
        projects: ["Healthcare & POS Analytics"]
      },
      {
        name: "Data Visualization",
        context: "Communicating trends, distributions, and comparisons through charts, line graphs, bar charts, and scatter plots.",
        level: "Foundational",
        projects: ["Chart.js Dashboards", "Statistical Visuals"]
      },
      {
        name: "Basic Statistical Analysis",
        context: "Applying summary statistics: mean, median, standard deviation, percentile ranks, and z-score calculations.",
        level: "Foundational",
        projects: ["WHO Growth Anthropometry"]
      },
      {
        name: "SQL for Data Analysis",
        context: "Executing aggregation queries, window functions, and group summarizations to extract business metrics directly from DBs.",
        level: "Competent",
        projects: ["POS Revenue Reporting", "MySQL Analytics"]
      }
    ]
  },
  {
    id: "machine-learning",
    name: "Machine Learning (Foundations)",
    description: "Foundational understanding of core learning paradigms, data preprocessing, and evaluation principles.",
    skills: [
      {
        name: "Machine Learning Fundamentals",
        context: "Understanding the end-to-end ML lifecycle: problem definition, data preparation, feature engineering, model training, and evaluation.",
        level: "Foundational Concept",
        projects: ["Academic Exploration"]
      },
      {
        name: "Supervised Learning",
        context: "Foundational principles of classification (e.g., predicting discrete categories) and regression (predicting continuous numerical targets).",
        level: "Foundational Concept",
        projects: ["Predictive Exploration"]
      },
      {
        name: "Unsupervised Learning",
        context: "Conceptual understanding of clustering techniques (grouping unlabeled data points based on feature similarity) and dimensionality reduction.",
        level: "Foundational Concept",
        projects: ["Cluster Analysis Study"]
      },
      {
        name: "Data Preprocessing for ML",
        context: "Feature scaling (normalization, standardization), categorical encoding (one-hot, label encoding), and train/test data splitting.",
        level: "Foundational Concept",
        projects: ["Dataset Preparation"]
      },
      {
        name: "Feature Selection",
        context: "Identifying relevant predictors, removing collinear or noisy features to improve model interpretability.",
        level: "Foundational Concept",
        projects: ["Feature Engineering Labs"]
      },
      {
        name: "Model Evaluation",
        context: "Understanding core metrics: Accuracy, Precision, Recall, F1-Score, Confusion Matrix, and Mean Squared Error (MSE).",
        level: "Foundational Concept",
        projects: ["Evaluation Metrics Study"]
      }
    ]
  },
  {
    id: "it-infrastructure",
    name: "IT & Infrastructure",
    description: "Operating system environments, networking essentials, and hands-on system troubleshooting.",
    skills: [
      {
        name: "Network Fundamentals",
        context: "Understanding TCP/IP model, IP subnetting, DNS resolution, HTTP/HTTPS protocols, ports, and routing concepts.",
        level: "Foundational",
        projects: ["MySQL Cluster Setup", "Networking Labs"]
      },
      {
        name: "Linux (Ubuntu Server)",
        context: "Command line operations, SSH key management, service daemons (systemd), package management (apt), and UFW firewall configuration.",
        level: "Competent",
        projects: ["MySQL Cluster on Ubuntu 24.04"]
      },
      {
        name: "Computer Troubleshooting",
        context: "Hardware diagnostics, operating system maintenance, peripheral configuration, and systematic technical problem resolution.",
        level: "Experienced",
        projects: ["IT Support Labs"]
      }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Foundational security concepts, network defense awareness, and certified baseline principles.",
    skills: [
      {
        name: "Cybersecurity Fundamentals",
        context: "Understanding the CIA Triad (Confidentiality, Integrity, Availability), common threat vectors (phishing, malware, injection), and defensive hygiene.",
        level: "Foundational",
        projects: ["Academic Security Labs"]
      },
      {
        name: "Cisco Cybersecurity Essentials",
        context: "Formal Cisco credential covering network security policies, vulnerability defense, authentication safeguards, and operational security.",
        level: "Certified",
        projects: ["Cisco Networking Academy"]
      }
    ]
  }
];
