// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Kanak Kumari",
  firstName: "Kanak",
  brandName: "Kanak Kumari",
  title: "Full Stack Web Developer",
  location: "Gurugram, Haryana, India",

  summary:
  "Building scalable web applications, responsive user interfaces, and Android apps using React, Node.js, Firebase, Kotlin, and modern web technologies.",
    resumeUrl: "/Kanak_Kumari_Resume.pdf",
    emails: {
    primary: "kanakpaswan546@gmail.com",
  },
};

export const socialLinks = {
  github: "https://github.com/Kanakpaswan27",
  linkedin: "https://linkedin.com/in/kanakpaswan-dev",
};

export const heroContent = {
  greeting: "Hi, I'm Kanak Kumari",
  titleHighlight: "Full Stack Web Developer",
  subtitle:
    'I build modern websites, Android apps, and responsive user interfaces that deliver exceptional user experiences.',
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Hire Me",
    href:
      "mailto:kanakpaswan546@gmail.com?subject=Hiring%20Opportunity&body=Hello%20Kanak%20Kumari,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ABest%20Regards,",
  },
 ctaResume: {
    text: "Download Resume",
    href: "/Kanak_Kumari_Resume.pdf",
  },
};

export const aboutContent = {
  heading: "Hello!",

  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Kanak Kumari</span>. I am a passionate BCA student and aspiring Full Stack Web Developer from Gurugram, India. I enjoy building responsive websites, Android applications, and modern user interfaces using React, JavaScript, Kotlin, Firebase, and other modern technologies. I love solving real-world problems through clean, scalable, and user-friendly applications.`,

  techStack: [
    "React",
    "JavaScript",
    "Node.js",
    "Firebase",
    "Kotlin",
    "GitHub"
  ]
};

export const skillsContent = {
  badge: "My Workflow",

  heading: "How I Build Modern Digital Products",

  description:
    "From planning to deployment, I follow a structured development process focused on performance, clean code, responsive design, and delivering real-world solutions.",

  cards: [
    {
      number: "01",
      title: "Research & Planning",
      text: "I understand project requirements, analyze user needs, create a roadmap, and choose the best technologies before starting development.",
    },
    {
      number: "02",
      title: "UI/UX Design",
      text: "I design clean, responsive, and user-friendly interfaces that provide a smooth experience across desktop and mobile devices.",
    },
    {
      number: "03",
      title: "Development",
      text: "I develop modern web applications and Android apps using React, JavaScript, Node.js, Firebase, Kotlin, and other latest technologies while following clean coding practices.",
    },
    {
      number: "04",
      title: "Testing & Deployment",
      text: "I test applications thoroughly, fix bugs, optimize performance, and deploy production-ready projects with scalability and reliability in mind.",
    },
  ],

  endText: "Always Learning • Always Building 🚀",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Kotlin", level: 82 },
        { name: "Java", level: 78 },
        { name: "Python", level: 72 },
        { name: "C++", level: 75 }
      ]
    },

    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 78 },
        { name: "Responsive Design", level: 90 }
      ]
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 68 },
        { name: "Firebase", level: 85 },
        { name: "REST APIs", level: 78 }
      ]
    },

    {
      title: "Android Development",
      skills: [
        { name: "Kotlin", level: 82 },
        { name: "Jetpack Compose", level: 85 },
        { name: "Firebase Authentication", level: 84 },
        { name: "Firestore", level: 84 },
        { name: "Firebase Storage", level: 80 }
      ]
    },

    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 78 },
        { name: "Firebase Firestore", level: 84 },
        { name: "SQLite", level: 72 }
      ]
    },

    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 82 },
        { name: "VS Code", level: 92 },
        { name: "Android Studio", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Adobe Photoshop", level: 90 },
        { name: "Canva", level: 92 }
      ]
    }
  ]
};

// Brand New Creative Work Data
export const contentCreation = {
  badge: "Creative Portfolio",

  heading: "Building Digital Experiences Beyond Coding",

  description:
    "Along with software development, I enjoy designing user interfaces, creating premium graphics, editing professional photo albums, and building modern digital experiences.",

  categories: [
    {
      title: "UI/UX Design",
      description:
        "Designing clean, modern, and responsive interfaces with a strong focus on user experience and accessibility.",
      stats: "20+ UI Designs",
      icon: "🎨",
    },
    {
      title: "Android App Development",
      description:
        "Developing Android applications using Kotlin, Jetpack Compose, Firebase Authentication, Firestore, and modern Android architecture.",
      stats: "Multiple Apps Built",
      icon: "📱",
    },
    {
      title: "Web Development",
      description:
        "Building responsive websites and full-stack web applications using HTML, CSS, JavaScript, React, Node.js, and Firebase.",
      stats: "5+ Projects",
      icon: "💻",
    },
    {
      title: "Graphic & Album Designing",
      description:
        "Creating premium wedding albums, banners, social media creatives, and professional photo edits using Adobe Photoshop and Canva.",
      stats: "Creative Portfolio",
      icon: "📸",
    },
  ],
};
export const internshipsList = [
  {
    organization: "CodeVedx",
    role: "Virtual Web Development Intern",
    duration: "2026 (2 Months)",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Responsive Web Design"
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git & GitHub"
    ]
  },

  {
    organization: "Deloitte Australia (Forage)",
    role: "Technology Virtual Job Simulation",
    duration: "2026",
    skills: [
      "Problem Solving",
      "Software Development",
      "Technology Consulting",
      "Professional Communication"
    ],
    tech: [
      "Software Engineering",
      "Cyber Security",
      "Business Technology"
    ]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Finding efficient and practical solutions to real-world development challenges."
  },
  {
    name: "Teamwork",
    icon: "🤝",
    desc: "Collaborating effectively with team members during projects and internships."
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Presenting ideas clearly while maintaining professional communication."
  },
  {
    name: "Quick Learning",
    icon: "📚",
    desc: "Continuously learning modern technologies and applying them in projects."
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "Designing modern user interfaces with attention to detail."
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Managing academics, internships, and development projects efficiently."
  },
   {
    name: "Critical Thinking",
    icon: "🧠",
    desc: "Analyzing problems logically to make informed technical decisions."
  },
  {
    name: "Attention to Detail",
    icon: "🔍",
    desc: "Writing clean, reliable, and well-tested code with precision."
  }
];
export const leadershipList = [
  {
    title: "College Project Leadership",
    role: "Project Developer",
    badge: "Development",
    description:
      "Leading the development of software projects by planning features, managing implementation, solving technical challenges, and creating user-focused digital solutions."
  },
  {
    title: "Technology Community Engagement",
    role: "Tech Learner & Collaborator",
    badge: "Technology",
    description:
      "Participating in technology communities, exploring modern development tools, sharing knowledge, and connecting with fellow students and developers."
  },
  {
    title: "Creative & Technical Work",
    role: "Designer & Developer",
    badge: "Creative",
    description:
      "Combining development and design skills to create modern websites, Android applications, UI designs, and professional digital experiences."
  }
];

export const projects = [
  {
    id: "college-notification-portal",
    number: "01",
    badge: "⭐ Featured Project",

    title: "College Notification Portal",

    description:
      "A modern Android application developed for colleges to streamline the process of sharing notices with students. The app provides secure authentication, role-based access, real-time notice updates, image and PDF uploads, push notifications, and an intuitive user interface built with Jetpack Compose.",

    techTags: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "Firebase Storage",
      "FCM"
    ],

    links: {
      github: "https://github.com/Kanakpaswan27",
      demo: null,
    },

    isFlagship: true,
  },

  {
    id: "shopverse",
    number: "02",
    badge: "🛒 React Project",

    title: "ShopVerse – E-Commerce Web Application",

    description:
      "A modern e-commerce web application built with React and Vite featuring responsive design, product listing, product details, shopping cart, wishlist, and smooth navigation.",

    techTags: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "React Router"
    ],

    links: {
      github: "#",
      demo: "#"
    },

    isFlagship: false,
  },
];   // 👈 yaha semicolon hona chahiye

export const certificates = {
  featured: [
    {
      name: "Master SQL for Data Business with AI Skills",
      issuer: "WsCube Tech",
      icon: "🗄️",
    },
    {
      name: "Roadmap to Full Stack AI Engineering",
      issuer: "WsCube Tech",
      icon: "🤖",
    },
    {
      name: "10X AI Tools Workshop",
      issuer: "be10X",
      icon: "🚀",
    },
    {
      name: "Introduction to Large Language Models (LLMs)",
      issuer: "IBM SkillsBuild",
      icon: "🧠",
    },
    {
      name: "Professional Networking for Career Growth",
      issuer: "HP LIFE",
      icon: "🤝",
    },
    {
      name: "Technology Virtual Job Simulation",
      issuer: "Deloitte (Forage)",
      icon: "💼",
    }
  ],

  viewAllUrl: "",
};
export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Government College for Girls, Sector 52, Gurugram University",
  cgpa: "Pursuing",
  graduation: "2028",
  twelfth: "Senior Secondary (Class XII)",
  tenth: "Secondary (Class X)",
};

export const footerContent = {
  taglines: [
    "Full Stack Web Developer",
    "React • Node.js • Kotlin",
    "Building Modern Digital Experiences",
  ],

  credential: "BCA Student • Full Stack Web Developer",

  copyright: `© ${new Date().getFullYear()} Kanak Kumari | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
