/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Haridoss P",
  title: "Haridoss P",
  subTitle: emoji(
    "Electrical & Electronics Engineer. Bridging the gap between High-Voltage Power Systems and Low-Level Embedded Firmware. Specialized in Industrial IoT, Grid Telemetry, and Real-Time Control Systems."
  ),
  resumeLink: "", // Insert your Google Drive link here
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Haridoss2004",
  linkedin: "https://www.linkedin.com/in/haridoss2004",
  gmail: "jacobisraelemmanuel@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "", 
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Core Competencies",
  subTitle: "HARDWARE-SOFTWARE CO-DESIGN | POWER SYSTEMS ANALYSIS",
  skills: [
    emoji(
      "⚡ Embedded Engineering: Bare-metal C/C++, Register-level Programming, ISR Handling, and Memory Optimization."
    ),
    emoji("⚡ Communication Protocols: Implementation of I2C, SPI, UART, and MQTT for sensor fusion and telemetry."),
    emoji(
      "⚡ Power Electronics: Smart Grid integration, Battery Management Systems (BMS), and Power Quality Analysis."
    ),
    emoji("⚡ System Design: Mixed-Signal PCB Design (KiCad), 3D Prototyping (Fusion 360), and Control Loop Tuning.")
  ],

  softwareSkills: [
    {
      skillName: "Embedded C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python (Scripting/AI)",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MATLAB & Simulink",
      fontAwesomeClassname: "fas fa-chart-line" 
    },
    {
      skillName: "KiCad (PCB Design)",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Industrial IoT",
      fontAwesomeClassname: "fas fa-wifi"
    },
    {
      skillName: "Database Management",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Fusion 360 (CAD)",
      fontAwesomeClassname: "fas fa-cube"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Thiagarajar College of Engineering, Madurai",
      logo: require("./assets/images/harvardLogo.png"), // Replace with TCE Logo
      subHeader: "B.E. (Electrical and Electronics Engineering)",
      duration: "2022 - 2026",
      desc: "Specialization in Embedded Control & Power Systems.",
      descBullets: [

        "Key Coursework: Linear Integrated Circuits, Microcontroller Architecture, Transmission & Distribution, Digital Signal Processing."
      ]
    },
    {
      schoolName: "St. Joseph's Higher Secondary School, Cuddalore",
      logo: require("./assets/images/sjc.png"), // Replace with School Logo
      subHeader: "HSC (State Board)",
      duration: "Completed 2022",
      desc: "Focus: Mathematics, Physics, Chemistry. (86%)"
    },
    {
      schoolName: "St. Joseph's Higher Secondary School, Cuddalore",
      logo: require("./assets/images/sjc.png"), // Replace with School Logo
      subHeader: "SSLC (State Board)",
      duration: "Completed 2020",
      desc: "Academic Excellence with 93% score. Strong foundation in Mathematics and General Sciences."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Embedded Firmware & Architecture", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Smart Grid & Power Electronics",
      progressPercentage: "85%"
    },
    {
      Stack: "AI Integration & Data Analytics",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering Intern",
      company: "National Institute of Technology, Tiruchirappalli (Dept. of EEE)",
      companylogo: require("./assets/images/facebookLogo.png"), // Replace with NIT Logo
      date: "June 2024 – June 2024",
      desc: "Designed and prototyped a 4G LTE-enabled Smart Energy Meter for remote grid infrastructure.",
      descBullets: [
        "Engineered secure serial communication between MCU and 4G LTE Modems for real-time telemetry.",
        "Implemented precise Voltage/Current sensing logic with outlier detection for load profiling.",
        "Deployed Edge-AI models (XGBoost) to detect power theft patterns and transmission anomalies locally."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Engineering Projects",
  subtitle: "DEPLOYABLE SYSTEMS FOR ENERGY, ROBOTICS, AND HEALTHCARE",
  projects: [
    {
      image: require("./assets/images/marl.webp"), // Replace with V2X Image
      projectName: "MARL-Based V2X Energy Optimization",
      projectDesc: "Developed a Grid-to-Vehicle (V2G) energy exchange system. Implemented Multi-Agent Reinforcement Learning (MARL) algorithms to optimize load balancing between EVs and the Grid, utilizing Master-Slave architecture (RPi & ESP32).",
      footerLink: [
        {
          name: "View System Architecture",
          url: "https://github.com/Haridoss2004"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Replace with Arm Image
      projectName: "Computer Vision Electromagnetic Arm",
      projectDesc: "Built an industrial sorting robotic arm. Integrated OpenCV for object material classification and implemented PWM-based servo control loops for precise actuation of a 12V electromagnetic end-effector.",
      footerLink: [
        {
          name: "View Firmware",
          url: "https://github.com/Haridoss2004"
        }
      ]
    },
    {
      image: require("./assets/images/smart.png"), // Replace with Watch Image
      projectName: "Low-Power Bio-Wearable",
      projectDesc: "Designed a health monitoring embedded system on the RP2040 chip. Engineered I2C driver implementation for MAX30100 (SpO2/HR) sensors and optimized power consumption for battery-operated usage.",
      footerLink: [
        {
          name: "View Codebase",
          url: "https://github.com/Haridoss2004"
        }
      ]
    },
    {
      image: require("./assets/images/pedia.png"), // Replace with Medical Device Image
      projectName: "Pediatric Optical Diagnostic Device",
      projectDesc: "Engineered a low-cost medical imaging device. handled the complete product lifecycle from CAD modeling (Fusion 360) and 3D printing to Python-based image acquisition software. Validated by Aravind Eye Hospital.",
      footerLink: [
        {
          name: "View Prototype",
          url: "https://github.com/Haridoss2004"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Validation & Recognition"),
  subtitle:
    "Awards for Engineering Feasibility and Innovation",

  achievementsCards: [
     {
      title: "Agro 360 International Hackathon",
      subtitle:
        "Secured 2nd Prize (International Level) with a cash award of ₹30,000. Recognized for scalable agricultural technology solutions.",
      image: require("./assets/images/agro.png"), // Replace with Agro 360 Logo
      imageAlt: "Agro 360 Logo",
      footerLink: []
    },
    {
      title: "L&T Ideation Challenge 2025",
      subtitle:
        "Top 5 National Finalist (1000+ Teams). Recognized for scalability in V2X energy solutions. Invited for R&D collaboration.",
      image: require("./assets/images/lt.png"), // Replace with L&T Logo
      imageAlt: "L&T Logo",
      footerLink: []
    },
    {
      title: "Design Patent (Indian Patent Office)",
      subtitle:
        "Intellectual Property filed for 'Kaleidoscope-based Eye Examination Device'. Validated for novelty and industrial applicability.",
      image: require("./assets/images/ip.png"), // Replace with Patent Logo
      imageAlt: "Patent Logo",
      footerLink: []
    },
    {
      title: "Hackathon Victories",
      subtitle: "Secured 3rd Prize at AIEH 2025 (₹20k) and 1st Prize at Play with IoT (AICTE) for rapid prototyping excellence.",
      image: require("./assets/images/AES.webp"), // Replace with Trophy/Medal Logo
      imageAlt: "Award Logo",
      footerLink: []
    },
    {
      title: "Technical Outreach",
      subtitle: "Founder of HD TECHNO. Producing technical documentation and video tutorials on Circuit Theory and IoT deployments (3K+ Views).",
      image: require("./assets/images/ut.webp"), // Replace with YouTube Logo
      imageAlt: "YouTube Logo",
      footerLink: [
         {
          name: "View Tutorials",
          url: "https://www.youtube.com/@Haridoss2004" 
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Publications",
  subtitle:
    "Research Papers and Conference Proceedings",
  displayMediumBlogs: "false", 
  blogs: [
    {
      url: "#", 
      title: "AI-Enhanced Smart Meter System",
      description:
        "Paper presented at IEI Madurai. Analyzes the application of Gradient Boosting (XGBoost) for anomaly detection in smart grid infrastructure."
    },
    {
      url: "#",
      title: "Future with Wireless Electricity",
      description:
        "Poster Presentation on Inductive Coupling and Resonant Energy Transfer. National Science Day, TCE."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    ""
  ),
  talks: [], 
  display: false 
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false 
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "View Full Engineering Portfolio",
  display: true 
};

const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle:
    "Available for R&D and Engineering Roles in Embedded Systems and Power Electronics.",
  number: "+91 7603965707",
  email_address: "jacobisraelemmanuel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", 
  display: false 
};

const isHireable = true; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};