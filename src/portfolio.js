/* ============================================================
   HARIDOSS P — PORTFOLIO CONFIGURATION
   Electrical & Electronics | Embedded Systems | Computer Architecture | Software Engineering
   ============================================================ */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// ─── Splash Screen ────────────────────────────────────────────
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// ─── Illustration ─────────────────────────────────────────────
const illustration = {
  animated: true
};

// ─── Greeting / Hero ──────────────────────────────────────────
const greeting = {
  username: "Haridoss P",
  title: "Haridoss P",
  subTitle: emoji(
    "⚡ Electrical & Electronics Engineer · Embedded Systems Architect · Software Engineer. " +
      "I operate at the intersection of silicon and software — from bare-metal firmware on microcontrollers " +
      "to distributed cloud-connected IoT systems. Passionate about Smart Grids, Computer Architecture, " +
      "Real-Time Control, and building elegant, efficient code in C, C++, Java, and Python."
  ),
  resumeLink: "", // Insert your Google Drive resume link here
  displayGreeting: true
};

// ─── Social Media ─────────────────────────────────────────────
const socialMediaLinks = {
  github: "https://github.com/Haridoss2004",
  linkedin: "https://www.linkedin.com/in/haridoss2004",
  gmail: "jacobisraelemmanuel@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// ─── Skills Section ───────────────────────────────────────────
const skillsSection = {
  title: "Core Competencies",
  subTitle:
    "HARDWARE-SOFTWARE CO-DESIGN · COMPUTER ARCHITECTURE · POWER SYSTEMS · FULL-STACK ENGINEERING",

  skills: [
    emoji(
      "⚡ Embedded Engineering: Bare-metal C/C++, Register-level MCU Programming, ISR & DMA Handling, RTOS (FreeRTOS), Memory & Power Optimization on ARM Cortex-M."
    ),
    emoji(
      "⚡ Computer Architecture & Systems: Pipeline Design, Cache Hierarchy, Branch Prediction, RISC-V ISA, x86 Low-Level Programming, and Operating System Internals."
    ),
    emoji(
      "⚡ Software Engineering: Object-Oriented Design in Java & C++, Data Structures & Algorithms, Multithreaded Programming, Design Patterns, and System Design."
    ),
    emoji(
      "⚡ Communication Protocols: I2C, SPI, UART, CAN Bus, MQTT, Modbus — from register-level driver implementation to cloud telemetry pipelines."
    ),
    emoji(
      "⚡ Power Electronics & Smart Grid: V2G/V2X Systems, Battery Management Systems (BMS), Smart Metering, Grid Telemetry, and Power Quality Analysis."
    ),
    emoji(
      "⚡ System Design: Mixed-Signal PCB Design (KiCad), 3D Prototyping (Fusion 360), Control Loop Tuning, and Edge-AI Deployment on constrained hardware."
    )
  ],

  softwareSkills: [
    {
      skillName: "C Programming",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "C++ (Embedded/OOP)",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java (OOP & SE)",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python (AI/Scripting)",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MATLAB & Simulink",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "ARM / RISC-V Architecture",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "FreeRTOS",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "KiCad (PCB Design)",
      fontAwesomeClassname: "fas fa-draw-polygon"
    },
    {
      skillName: "Industrial IoT / MQTT",
      fontAwesomeClassname: "fas fa-wifi"
    },
    {
      skillName: "Linux / Shell",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git & Version Control",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Fusion 360 (CAD)",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "SQL / Database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

// ─── Education ────────────────────────────────────────────────
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Thiagarajar College of Engineering, Madurai",
      logo: require("./assets/images/harvardLogo.png"), // Replace with TCE Logo
      subHeader: "B.E. — Electrical and Electronics Engineering",
      duration: "2022 – 2026",
      desc: "Specialization in Embedded Control Systems, Power Electronics, and Computer Architecture.",
      descBullets: [
        "Key Coursework: Microcontroller Architecture, Computer Organization & Architecture, Linear Integrated Circuits, Digital Signal Processing, Transmission & Distribution, Control Systems.",
        "Final Year Project: MARL-Based V2X Energy Optimization System (Grid-to-Vehicle Intelligence).",
        "Academic Focus: Hardware-Software Co-design, Real-Time Operating Systems, and Analog/Digital Circuit Design."
      ]
    },
    {
      schoolName: "St. Joseph's Higher Secondary School, Cuddalore",
      logo: require("./assets/images/sjc.png"),
      subHeader: "HSC (State Board) — Science Stream",
      duration: "Completed 2022",
      desc: "Focus: Mathematics, Physics, Chemistry, Biology. Strong foundation in analytical reasoning and physical sciences."
    },
    {
      schoolName: "St. Joseph's Higher Secondary School, Cuddalore",
      logo: require("./assets/images/sjc.png"),
      subHeader: "SSLC (State Board)",
      duration: "Completed 2020",
      desc: "Strong foundation in Mathematics, General Sciences, and Logical Reasoning."
    }
  ]
};

// ─── Tech Stack / Proficiency Bars ────────────────────────────
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Embedded Firmware & MCU Architecture",
      progressPercentage: "90%"
    },
    {
      Stack: "C / C++ Systems Programming",
      progressPercentage: "88%"
    },
    {
      Stack: "Smart Grid & Power Electronics",
      progressPercentage: "85%"
    },
    {
      Stack: "Java — OOP & Software Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "Computer Architecture & Low-Level Systems",
      progressPercentage: "78%"
    },
    {
      Stack: "AI / ML Integration & Data Analytics",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// ─── Work Experience ──────────────────────────────────────────
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Research & Development Intern — Embedded Systems",
      company:
        "National Institute of Technology, Tiruchirappalli (Dept. of EEE)",
      companylogo: require("./assets/images/facebookLogo.png"), // Replace with NIT-T Logo
      date: "June 2024 – July 2024",
      desc: "Designed and prototyped a 4G LTE-enabled Smart Energy Meter for remote grid infrastructure monitoring and anomaly detection.",
      descBullets: [
        "Engineered low-level serial communication drivers (UART-based AT command interface) between STM32 MCU and SIM7600 4G LTE modem for real-time data telemetry over MQTT.",
        "Implemented precision Voltage & Current sensing logic using ACS712 + ZMPT101B with ADC calibration, outlier detection, and load profiling algorithms in bare-metal C.",
        "Deployed Edge-AI model (XGBoost, quantized for MCU) to detect power theft patterns and transmission anomalies locally — reducing cloud dependency by 60%.",
        "Designed a complete firmware architecture: ISR-driven sampling, circular buffer management, watchdog timer supervision, and over-the-air (OTA) update mechanism."
      ]
    }
  ]
};

// ─── Open Source ──────────────────────────────────────────────
const openSource = {
  showGithubProfile: "true",
  display: true
};

// ─── Major Engineering Projects ───────────────────────────────
const bigProjects = {
  title: "Engineering Projects",
  subtitle:
    "DEPLOYABLE SYSTEMS ACROSS ENERGY, ROBOTICS, HEALTHCARE & COMPUTER ARCHITECTURE",

  projects: [
    {
      image: require("./assets/images/marl.webp"),
      projectName: "MARL-Based V2X Energy Optimization System",
      projectDesc:
        "End-to-end Grid-to-Vehicle (V2G) intelligent energy exchange platform. Implemented Multi-Agent Reinforcement Learning (MARL) algorithms in Python to optimize real-time load balancing between EV fleets and the power grid. Built on a Master-Slave embedded architecture (Raspberry Pi 4 as coordinator + ESP32 edge nodes) communicating over MQTT. Validated as Top 5 National Finalist at L&T Ideation Challenge 2025 (1000+ teams).",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Haridoss2004"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Computer Vision Electromagnetic Sorting Arm",
      projectDesc:
        "Designed and built a fully functional industrial-grade robotic sorting arm integrating OpenCV-based computer vision (Python) for real-time material classification (ferrous vs. non-ferrous). Implemented a state-machine firmware in C++ for inverse kinematics and PWM-based servo control loops. Custom 3D-printed chassis (Fusion 360) with a 12V electromagnetic end-effector. Demonstrated 92% sorting accuracy at 1.2 cycles/sec.",
      footerLink: [
        {
          name: "View Firmware",
          url: "https://github.com/Haridoss2004"
        }
      ]
    },
    {
      image: require("./assets/images/smart.png"),
      projectName: "Low-Power Bio-Wearable (RP2040)",
      projectDesc:
        "Engineered a wearable health monitoring embedded system from scratch on the RP2040 (dual-core ARM Cortex-M0+). Written entirely in bare-metal C: custom I2C driver implementation for MAX30100 (SpO2/HR) and MPU-6050 (motion) sensors, DMA-optimized data acquisition, and a FreeRTOS-based task scheduler managing BLE telemetry (HC-08), local LCD rendering, and adaptive power modes. Achieved 72-hour battery life on a 500mAh LiPo cell.",
      footerLink: [
        {
          name: "View Codebase",
          url: "https://github.com/Haridoss2004"
        }
      ]
    },
    {
      image: require("./assets/images/pedia.png"),
      projectName: "Pediatric Optical Diagnostic Device",
      projectDesc:
        "Led the complete product lifecycle of a low-cost pediatric fundus imaging device: concept → CAD modeling (Fusion 360) → 3D-printed prototype → Python-based image acquisition & enhancement software (OpenCV + PIL). Filed as Design Patent with the Indian Patent Office (IP India) — validated for novelty and industrial applicability. Clinically evaluated and certified by Aravind Eye Hospital, Madurai.",
      footerLink: [
        {
          name: "View Prototype",
          url: "https://github.com/Haridoss2004"
        }
      ]
    },
    {
      image: require("./assets/images/smart.png"), // Replace with a CPU/Architecture image
      projectName: "5-Stage RISC Pipeline Simulator (Java)",
      projectDesc:
        "Built a full software simulation of a 5-stage RISC processor pipeline (IF → ID → EX → MEM → WB) in Java. Implements data hazard detection with forwarding paths, control hazard handling via branch prediction (2-bit saturating counter), and a configurable cache hierarchy (L1/L2 with LRU eviction). Outputs cycle-accurate execution traces and CPI statistics. Demonstrates deep understanding of computer architecture internals.",
      footerLink: [
        {
          name: "View Simulator",
          url: "https://github.com/Haridoss2004"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Replace with a DS/Algo image
      projectName: "Embedded Data Structures Library (C)",
      projectDesc:
        "Authored a portable, heap-free data structures library in C targeting resource-constrained microcontrollers (no stdlib malloc). Includes statically-allocated ring buffers, priority queues, hash maps (open addressing), and linked lists — all with O(1) or O(log n) guarantees. Used as the foundation for sensor fusion and task scheduling in multiple embedded projects. Fully unit-tested with Unity test framework.",
      footerLink: [
        {
          name: "View Library",
          url: "https://github.com/Haridoss2004"
        }
      ]
    }
  ],
  display: true
};

// ─── Achievements & Recognition ───────────────────────────────
const achievementSection = {
  title: emoji("Validation & Recognition 🏆"),
  subtitle:
    "International Awards, National Finalists, Patents & Technical Outreach",

  achievementsCards: [
    {
      title: "L&T Ideation Challenge 2025 — Top 5 National Finalist",
      subtitle:
        "Top 5 out of 1,000+ teams nationally. Recognized for engineering feasibility and scalability of V2X energy optimization solutions. Personally invited for R&D collaboration discussions.",
      image: require("./assets/images/lt.png"),
      imageAlt: "L&T Logo",
      footerLink: []
    },
    {
      title: "Agro 360 International Hackathon — 2nd Prize",
      subtitle:
        "Secured 2nd Prize at International level with a cash award of ₹30,000. Recognized for scalable, low-cost agricultural IoT technology using embedded sensors and edge intelligence.",
      image: require("./assets/images/agro.png"),
      imageAlt: "Agro 360 Logo",
      footerLink: []
    },
    {
      title: "Design Patent — Indian Patent Office",
      subtitle:
        "Intellectual Property filed for the 'Kaleidoscope-based Pediatric Eye Examination Device'. Validated by IP India for novelty, originality, and industrial applicability.",
      image: require("./assets/images/ip.png"),
      imageAlt: "Patent Logo",
      footerLink: []
    },
    {
      title:
        "AIEH 2025 — 3rd Prize (₹20,000) & AICTE IoT Hackathon — 1st Prize",
      subtitle:
        "Secured 3rd Prize at AIEH 2025 (₹20,000 cash award) for embedded AI system design. Won 1st Prize at 'Play with IoT' (AICTE-sanctioned) for rapid, production-quality prototyping.",
      image: require("./assets/images/AES.webp"),
      imageAlt: "Award Logo",
      footerLink: []
    },
    {
      title: "HD TECHNO — Technical Content Creator",
      subtitle:
        "Founded HD TECHNO: producing in-depth technical documentation, schematics, and video tutorials on Circuit Theory, Embedded Systems, and IoT deployments. 3,000+ views and growing.",
      image: require("./assets/images/ut.webp"),
      imageAlt: "YouTube Logo",
      footerLink: [
        {
          name: "Watch Tutorials",
          url: "https://www.youtube.com/@Haridoss2004"
        }
      ]
    }
  ],
  display: true
};

// ─── Technical Publications / Blogs ───────────────────────────
const blogSection = {
  title: "Technical Publications",
  subtitle: "Research Papers, Conference Proceedings & Technical Writing",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "#",
      title: "AI-Enhanced Smart Meter System for Grid Anomaly Detection",
      description:
        "Paper presented at IEI Madurai. Analyzes the application of Gradient Boosting (XGBoost) for real-time anomaly detection and power theft identification in smart grid metering infrastructure. Covers firmware architecture, ADC signal conditioning, and edge model quantization."
    },
    {
      url: "#",
      title: "Future with Wireless Electricity — Resonant Energy Transfer",
      description:
        "Poster Presentation on Inductive Coupling and Resonant Wireless Power Transfer (WPT) for EV charging. Covers coil geometry, frequency tuning, and efficiency analysis. Presented at National Science Day, TCE."
    },
    {
      url: "#",
      title: "Pipeline Hazard Mitigation in RISC Architectures",
      description:
        "Technical deep-dive into data forwarding, branch prediction strategies (2-bit saturating counter, BTB), and out-of-order execution concepts. Based on simulation results from the Java RISC pipeline simulator project."
    }
  ],
  display: true
};

// ─── Talks ────────────────────────────────────────────────────
const talkSection = {
  title: "Talks",
  subtitle: emoji(""),
  talks: [],
  display: false
};

// ─── Podcast ──────────────────────────────────────────────────
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// ─── Resume Section ───────────────────────────────────────────
const resumeSection = {
  title: "Resume",
  subtitle: "Download Full Engineering Portfolio",
  display: true
};

// ─── Contact ──────────────────────────────────────────────────
const contactInfo = {
  title: emoji("Let's Build Something ☎️"),
  subtitle:
    "Open to R&D roles, internships, and collaborations in Embedded Systems, Computer Architecture, Power Electronics, and Software Engineering. Whether it's firmware that runs on 2KB of RAM or a distributed cloud system — let's talk.",
  number: "+91 7603965707",
  email_address: "jacobisraelemmanuel@gmail.com"
};

// ─── Twitter ──────────────────────────────────────────────────
const twitterDetails = {
  userName: "twitter",
  display: false
};

// ─── Hireable Flag ────────────────────────────────────────────
const isHireable = true;

// ─── Exports ──────────────────────────────────────────────────
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
