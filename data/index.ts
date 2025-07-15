export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize team collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I speak fluent Python… and occasionally human 🐍💬",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Multi Agent System enhaced with a RAG pipeline for automating  POE Systems",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/ray-so-export (4).png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WebGator",
    des: "A React-based web consulting platform that lets users enter project requirements and instantly receive cost estimates, streamlining early-stage communication between clients and developers.",
    img: "/webgator.jpg",
    iconLists: ["/icons8-react.svg",  "/icons8-mongo-db-48.png", "/icons8-node-js.svg"],
    link: "/https://eduvantage-ai.netlify.app/",
  },
  {
    id: 2,
    title: "Goali",
    des: "Goali is a full-stack fundraising and event management app with live auctions, secure payments, and real-time bid updates. Built with React, Node.js, and Supabase, it supports donations, bidding, and role-based admin controls.",
    img: "/goali.jpg",
    iconLists: ["/icons8-react.svg",  "/icons8-mongo-db-48.png", "/icons8-node-js.svg"],
    link: "/https://eduvantage-ai.netlify.app/",
  },


  {
    id: 3,
    title: "EduVantage: AI Graduate Recommender",
    des: "An AI-powered web platform recommending universities using NLP, NER, and LLMs, RAGs, Smart Search, and more.",
    img: "/eduvantage.png",
    iconLists: ["/icons8-supabase.svg", "/icons8-selenium.svg", "/icons8-python.svg", "/icons8-chatgpt.svg", "/langchain-icon-white-seeklogo.png", "/icons8-mongo-db-48.png"],
    link: "/https://eduvantage-ai.netlify.app/",
  },
  {
    id: 4,
    title: "Glaucoma Detection System",
    des: "An advanced U-Net-based model designed for early glaucoma detection, trained on  ophthalmic datasets, it achieves 87% accuracy in segmenting affected regions.",
    img: "/glacoma.png",
    iconLists: ["/icons8-python.svg", "/icons8-tensorflow.svg", "/icons8-flask (1).svg" ],
    link: "/ui.yoom.com",
  },
  {
    id: 5,
    title: "Video Prediction Model",
    des: "Generated future video frames from short sequences using deep learning. The model predicts the next 10 frames based on the first 10 frames, achieving 90% accuracy.",
    img: "/video pred.png",
    iconLists: ["/icons8-python.svg", "/icons8-pytorch.svg", "/icons8-flask (1).svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 6,
    title: "AutoML Vision on Google Cloud Vertex AI",
    des: "Developed and deployed an image classification model on Google Cloud to detect damaged car parts using AutoML.",
    img: "/automl.png",
    iconLists: ["/icons8-google-cloud.svg", "/vertexai-svgrepo-com.svg" ],
    link: "/automl.png",
  },
  {
    id: 7,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Arham Akmal has been an exceptional experience. His ability to understand our business needs and translate them into innovative digital solutions was truly impressive. Arham’s attention to detail, proactive communication, and commitment to quality made the entire process seamless. For any organization looking to drive digital transformation, Arham is the professional you want on your team.",
    name: "Saud Altamimi",
    title: "CEO of Intelligent Solutions, Saudi Arabia",
  }
 
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "Assisted in the development of a web-based LMS system using Vue.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    desc: "Leading the development of an Multi agent system.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "AI and Automation Developer",
    desc: "Developed and Assisted in automations using Python, n8n, enhancing operational efficiency.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },

  {
    id: 3,
    img: "/link.svg",
  },
];
