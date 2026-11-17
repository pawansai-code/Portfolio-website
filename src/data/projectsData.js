import rsImg1 from '../assets/roadsos/WhatsApp Unknown 2026-06-10 at 3.07.27 PM/image1.jpeg';
import rsImg2 from '../assets/roadsos/WhatsApp Unknown 2026-06-10 at 3.07.27 PM/image2.png';
import rsImg3 from '../assets/roadsos/WhatsApp Unknown 2026-06-10 at 3.07.27 PM/image3.jpeg';
import rsImg4 from '../assets/roadsos/WhatsApp Unknown 2026-06-10 at 3.07.27 PM/image4.jpeg';
import codeLensDemo from '../assets/codelens/codelens-final.mp4';
import codeLensImg1 from '../assets/codelens/postgre1.png';
import codeLensImg2 from '../assets/codelens/postgre2.png';
import codeLensImg3 from '../assets/codelens/pinecode.png';

export const projectsData = [
  {
    id: "codelens",
    title: "CodeLens",
    description:
      "An AI-powered code analysis and Retrieval-Augmented Generation (RAG) platform that allows developers to chat with GitHub repositories using natural language, providing highly accurate answers with exact file and line-number citations.",
    longDescription:
      "CodeLens is an AI-powered code analysis and Retrieval-Augmented Generation (RAG) platform that allows developers to input a GitHub repository URL and \"chat\" with that codebase using natural language. It features a 4-phase pipeline: Smart Ingestion & AST Parsing, Dual Storage (Pinecone for semantic search and PostgreSQL for exact keyword matching), Hybrid Retrieval & Reranking using Reciprocal Rank Fusion, and Answer Generation using a locally hosted LLM. The frontend is a modern React + Vite dashboard with split-pane design, interactive citations, and repository analytics.",
    tech: ["React", "TypeScript", "FastAPI", "LangChain", "PostgreSQL", "Pinecone"],
    role: "Full Stack Developer",
    github: "https://github.com/pawansai-code/CODE-LENS",
    demo: codeLensDemo,
    images: [
      codeLensImg1,
      codeLensImg2,
      codeLensImg3
    ],
  },
  {
    id: "road-sos",
    title: "Road-SOS",
    description:
      "A comprehensive React Native application acting as a digital lifeline in critical emergencies. Features single-tap SOS triggering, automated SMS dispatch with live tracking links to emergency contacts, and digital medical profiles for first responders.",
    longDescription:
      "Road-SOS is a comprehensive React Native application designed to bridge the gap between emergency onset and response dispatch. In critical situations like road accidents or sudden medical crises, every second counts. Traditional methods lack instant location sharing, automated contact notification, and quick access to critical medical history. With a single tap, Road-SOS triggers an SOS event, starts live location tracking, dispatches formatted SMS to pre-saved emergency contacts, and logs the event history. It acts as a digital lifeline, featuring a digital medical profile that stores crucial data for instant access by first responders.",
    tech: ["React Native", "Expo", "Django", "PostgreSQL", "Redux Toolkit"],
    role: "Full Stack Developer",
    github: "https://github.com/pawansai-code/Road-SOS",
    demo: null,
    images: [
      rsImg1,
      rsImg2,
      rsImg3,
      rsImg4
    ],
  },
  {
    id: "smart-crop",
    title: "Smart Crop Advisory System",
    description:
      "Developed the frontend using React.js and Redux Toolkit to deliver a highly responsive, user-friendly interface. Engineered distinct functional modules including an AI-powered chatbot, an articles & news feed, real-time market price tracking, a tractor connection hub, and a pest & disease detection interface.",
    longDescription:
      "Developed the frontend using React.js and Redux Toolkit to deliver a highly responsive, user-friendly interface. Engineered distinct functional modules including an AI-powered chatbot, an articles & news feed, real-time market price tracking, a tractor connection hub, and a pest & disease detection interface. This system aims to empower farmers with timely and accurate information, reducing crop loss and improving overall yield through modern technology integration.",
    tech: ["React.js", "Redux Toolkit", "JavaScript", "CSS3", "AI Integration"],
    role: "Frontend Developer",
    github: null,
    demo: null,
    images: [
      "https://images.unsplash.com/photo-1592982537447-6f200c6d70bc?q=80&w=2070&auto=format&fit=crop"
    ],
  },
  {
    id: "drone-safety",
    title: "Drone-based Women Safety Analysis",
    description:
      "Labeled aerial image datasets using Roboflow for gender detection from drone footage. Assisted in training a gender classification model using a MobileNetV2 pre-trained architecture. Supported dataset preparation, model tuning, and research activities.",
    longDescription:
      "Labeled aerial image datasets using Roboflow for gender detection from drone footage. Assisted in training a gender classification model using a MobileNetV2 pre-trained architecture. Supported dataset preparation, model tuning, and research activities. This project explores the use of aerial surveillance and machine learning to enhance safety measures and provide rapid response capabilities in critical situations.",
    tech: ["Roboflow", "MobileNetV2", "Python", "Machine Learning"],
    role: "ML Researcher / Data Analysis",
    github: null,
    demo: null,
    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2000&auto=format&fit=crop"
    ],
  },
  {
    id: "mini-projects",
    title: "Mini Projects Collection",
    description:
      "Developed over 5 mini Python projects including an AI chatbot using Groq API, MADLIB story generator, and number guessing game. Created 5+ frontend clones like Netflix and YouTube homepages.",
    longDescription:
      "Developed over 5 mini Python projects including an AI chatbot using Groq API, MADLIB story generator, and number guessing game. Created 5+ frontend clones like Netflix and YouTube homepages. These projects serve as a playground for experimenting with new technologies, refining coding skills, and understanding complex architectures by recreating popular platforms.",
    tech: ["Python", "Groq API", "HTML", "CSS", "JavaScript"],
    role: "Developer",
    github: "https://github.com/pawansaig",
    demo: null,
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    ],
  },
];
