import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createCV() {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const timesRomanBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const timesRomanOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // A4 Page: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();
  const margin = 40;
  let y = height - margin;

  const primaryColor = rgb(0.08, 0.18, 0.36); // Deep Navy
  const secondaryColor = rgb(0.2, 0.25, 0.35); // Slate
  const textColor = rgb(0.15, 0.15, 0.18); // Dark Charcoal
  const accentColor = rgb(0.1, 0.45, 0.85); // Blue Accent
  const lightLineColor = rgb(0.85, 0.88, 0.92);

  // Header: Name
  page.drawText('MUHAMMAD IRFAN SETIAWAN', {
    x: margin,
    y: y - 10,
    size: 20,
    font: timesRomanBold,
    color: primaryColor,
  });
  y -= 30;

  // Subtitle
  page.drawText('Informatics Engineering Graduate | Aspiring Software Engineer | Web Developer | Data & ML Enthusiast', {
    x: margin,
    y: y,
    size: 10,
    font: timesRomanBold,
    color: accentColor,
  });
  y -= 16;

  // Contact line
  page.drawText('Semarang, Indonesia  |  irfaanmuh27@gmail.com  |  085799479834  |  github.com/ipankexe', {
    x: margin,
    y: y,
    size: 8.5,
    font: timesRomanFont,
    color: secondaryColor,
  });
  y -= 14;

  // Divider line
  page.drawLine({
    start: { x: margin, y: y },
    end: { x: width - margin, y: y },
    thickness: 1.5,
    color: primaryColor,
  });
  y -= 18;

  function drawSectionHeading(title) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y,
      size: 11,
      font: timesRomanBold,
      color: primaryColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: width - margin, y: y },
      thickness: 0.8,
      color: lightLineColor,
    });
    y -= 14;
  }

  // PROFESSIONAL SUMMARY
  drawSectionHeading('Professional Summary');
  const summaryText = 'Informatics Engineering graduate from Universitas Dian Nuswantoro with hands-on experience developing web-based applications and information systems through academic and practical projects. Familiar with PHP, Laravel, JavaScript, React.js, SQL, MySQL, MongoDB, Node.js, and Express.js. Also developing foundational capabilities in data analysis and machine learning, including data preparation, exploratory data analysis (EDA), visualization, and basic predictive modeling concepts.';
  
  // Wrap summary text
  const words = summaryText.split(' ');
  let line = '';
  for (const word of words) {
    const testLine = line + (line ? ' ' : '') + word;
    const testWidth = timesRomanFont.widthOfTextAtSize(testLine, 9.5);
    if (testWidth > (width - 2 * margin)) {
      page.drawText(line, { x: margin, y: y, size: 9.5, font: timesRomanFont, color: textColor });
      y -= 13;
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, { x: margin, y: y, size: 9.5, font: timesRomanFont, color: textColor });
    y -= 18;
  }

  // EDUCATION
  drawSectionHeading('Education');
  page.drawText('Universitas Dian Nuswantoro (UDINUS)', {
    x: margin,
    y: y,
    size: 10.5,
    font: timesRomanBold,
    color: textColor,
  });
  page.drawText('Semarang, Indonesia', {
    x: width - margin - 110,
    y: y,
    size: 9.5,
    font: timesRomanFont,
    color: secondaryColor,
  });
  y -= 13;

  page.drawText('Bachelor of Computer Science (S1) in Informatics Engineering (Teknik Informatika)', {
    x: margin,
    y: y,
    size: 9.5,
    font: timesRomanOblique,
    color: textColor,
  });
  page.drawText('Graduated', {
    x: width - margin - 60,
    y: y,
    size: 9.5,
    font: timesRomanBold,
    color: accentColor,
  });
  y -= 13;

  page.drawText('Final Thesis: "Perancangan Sistem Point of Sales berbasis Web pada Rumah Makan Kulu Asri Menggunakan Metode Waterfall"', {
    x: margin + 8,
    y: y,
    size: 8.5,
    font: timesRomanFont,
    color: secondaryColor,
  });
  y -= 18;

  // EXPERIENCE
  drawSectionHeading('Practical Experience');
  
  // Job 1
  page.drawText('Diskominfo / Government Web Development Project', {
    x: margin,
    y: y,
    size: 10,
    font: timesRomanBold,
    color: textColor,
  });
  page.drawText('Practical / Internship Project', {
    x: width - margin - 130,
    y: y,
    size: 9,
    font: timesRomanOblique,
    color: secondaryColor,
  });
  y -= 13;

  page.drawText('Backend / Web Development  |  Stack: React.js, Node.js, Express.js, MongoDB, Mongoose, RESTful API', {
    x: margin,
    y: y,
    size: 9,
    font: timesRomanBold,
    color: accentColor,
  });
  y -= 13;

  const exp1Bullets = [
    'Engineered backend RESTful API services handling government information dissemination, public visit requests, and emergency news feeds.',
    'Integrated MongoDB database schemas using Mongoose ORM for efficient data modeling, validation, and fast query execution.',
    'Collaborated on system features including interactive Geoportal map coordinates, image upload pipeline, and verified citizen contact submission forms.'
  ];
  for (const bullet of exp1Bullets) {
    page.drawText(`- ${bullet}`, { x: margin + 8, y: y, size: 8.5, font: timesRomanFont, color: textColor });
    y -= 12;
  }
  y -= 4;

  // Job 2
  page.drawText('Dikala Kopi Group', {
    x: margin,
    y: y,
    size: 10,
    font: timesRomanBold,
    color: textColor,
  });
  page.drawText('Operational Support', {
    x: width - margin - 110,
    y: y,
    size: 9,
    font: timesRomanOblique,
    color: secondaryColor,
  });
  y -= 13;

  page.drawText('Barkit / Operational Support', {
    x: margin,
    y: y,
    size: 9,
    font: timesRomanBold,
    color: secondaryColor,
  });
  y -= 13;

  const exp2Bullets = [
    'Handled fast-paced operational workflows, inventory balance checks, and precise customer order execution.',
    'Applied disciplined task organization, active teamwork, and adaptable communication in a high-turnover environment.'
  ];
  for (const bullet of exp2Bullets) {
    page.drawText(`- ${bullet}`, { x: margin + 8, y: y, size: 8.5, font: timesRomanFont, color: textColor });
    y -= 12;
  }
  y -= 10;

  // PROJECTS
  drawSectionHeading('Key Technical Projects');

  const projects = [
    {
      title: 'Point of Sales (POS) Web System - RM Kulu Asri (Final Project / Thesis)',
      tech: 'Laravel, PHP, MySQL, JavaScript, Bootstrap',
      desc: 'Developed complete cashier POS system using Waterfall methodology. Features table order mapping, bill receipt printing, automated inventory subtraction, and robust transaction cancellation/void authorization.'
    },
    {
      title: 'Government Fire Department (DAMKAR) Information System',
      tech: 'React.js, Node.js, Express.js, MongoDB, Mongoose, Leaflet/Maps',
      desc: 'Comprehensive municipal portal featuring real-time fire alerts, interactive GIS geoportal map, public training visit scheduler, and administrative content management.'
    },
    {
      title: 'StuntingCareNet - Toddler Nutritional Health Platform',
      tech: 'Laravel, PHP, MySQL, Chart.js',
      desc: 'Nutritional health tracking web app with multi-role access (Admin, Healthcare Staff, Parents) tracking WHO anthropometric growth indicators and stunting risk classification.'
    },
    {
      title: 'Belajar Pintar - Interactive E-Learning Web Portal',
      tech: 'React.js, React Query, Context API, Reducer, Tailwind CSS',
      desc: 'Modern web educational application with scalable state architecture, cached asynchronous API data, modular learning roadmaps, and real-time quiz feedback.'
    },
    {
      title: 'High-Availability MySQL Replication Cluster',
      tech: 'Ubuntu Server 24.04, MySQL 8.0, Master-Slave Replication, SQL Proxy',
      desc: 'Designed resilient multi-node database topology featuring SQL Proxy load balancer routing writes to Master and distributing read queries to Slave 1 & Slave 2 with replication monitoring.'
    }
  ];

  for (const proj of projects) {
    page.drawText(proj.title, { x: margin, y: y, size: 9.5, font: timesRomanBold, color: textColor });
    page.drawText(`[ ${proj.tech} ]`, { x: width - margin - timesRomanFont.widthOfTextAtSize(`[ ${proj.tech} ]`, 8), y: y, size: 8, font: timesRomanOblique, color: accentColor });
    y -= 12;
    page.drawText(proj.desc, { x: margin + 8, y: y, size: 8.5, font: timesRomanFont, color: secondaryColor });
    y -= 14;
  }
  y -= 4;

  // TECHNICAL SKILLS & CERTIFICATIONS
  drawSectionHeading('Technical Skills & Certification');

  page.drawText('Programming & Web: ', { x: margin, y: y, size: 9, font: timesRomanBold, color: textColor });
  page.drawText('PHP, JavaScript (ES6+), HTML5, CSS3, Laravel, React.js, Tailwind CSS, REST APIs', { x: margin + 110, y: y, size: 9, font: timesRomanFont, color: secondaryColor });
  y -= 13;

  page.drawText('Backend & Databases: ', { x: margin, y: y, size: 9, font: timesRomanBold, color: textColor });
  page.drawText('Node.js, Express.js, MySQL, MongoDB, Mongoose, SQL Query Optimization, DB Replication', { x: margin + 110, y: y, size: 9, font: timesRomanFont, color: secondaryColor });
  y -= 13;

  page.drawText('Data & Machine Learning: ', { x: margin, y: y, size: 9, font: timesRomanBold, color: textColor });
  page.drawText('Data Cleaning & Preparation, Exploratory Data Analysis (EDA), Visualization, ML Fundamentals', { x: margin + 110, y: y, size: 9, font: timesRomanFont, color: secondaryColor });
  y -= 13;

  page.drawText('IT & Cybersecurity: ', { x: margin, y: y, size: 9, font: timesRomanBold, color: textColor });
  page.drawText('Network Fundamentals, Linux (Ubuntu Server), Troubleshooting, Cisco Cybersecurity Essentials', { x: margin + 110, y: y, size: 9, font: timesRomanFont, color: secondaryColor });
  y -= 13;

  page.drawText('Certification: ', { x: margin, y: y, size: 9, font: timesRomanBold, color: primaryColor });
  page.drawText('Cisco Cybersecurity Essentials — Cisco Networking Academy', { x: margin + 110, y: y, size: 9, font: timesRomanBold, color: accentColor });

  const pdfBytes = await pdfDoc.save();

  const out1 = path.resolve('src/assets/documents/Muhammad-Irfan-Setiawan-CV.pdf');
  const out2 = path.resolve('public/documents/Muhammad-Irfan-Setiawan-CV.pdf');
  fs.writeFileSync(out1, pdfBytes);
  fs.writeFileSync(out2, pdfBytes);
  console.log('CV successfully created at:', out1, 'and', out2);
}

createCV().catch(err => {
  console.error(err);
  process.exit(1);
});
