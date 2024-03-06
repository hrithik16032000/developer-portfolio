import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    raweng,
    coginit,
    fitnessapp,
    chat_app,
    epiphany_india,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend  Developer React.js",
      company_name: "Coginit Developer's",
      icon: coginit,
      iconBg: "#383E56",
      date: "September 2020 - January 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Full Stack Developer MERN",
      company_name: "Raw Engineering",
      icon: raweng,
      iconBg: "#E6DEDD",
      date: "July 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies, implemented geofence UI feature with ReactJs and Material UI, React Hook Forms for dynamic approach",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Contributed to the implementation of scalable APIs and background workers (delayed jobs) for managing first and third-party integrations in DFEP which involved technologies like Express.js, Node.js, NestJS, MongoDB, and graphQL."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Hrithik does, a true team player and tech geek. He goes out of his way when you ask for some help and guidance",
      name: "Tarun Singh",
      designation: "Senior Application Engineer",
      company: "Raw Engineering",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial: "Impressed with the strong work ethic and problem-solving abilities. I remember his initiative in developing a last moment approach that saved us significant time and improved the final product. I am confident that he would be a valuable asset to any team.",
      name: "Tejas Gavankar",
      designation: "Associate Software Engineer",
      company: "Red Hat",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      testimonial:"An empathetic person, a skilled developer and the go to person to solve your problems are one of the few of his qualities worth mentioning. As a former colleague and a friend, he deserves my highest recommendation and i will always he looking forward to work with Hrithik.",
      name: "Atul Mishra",
      designation: "SDE",
      company: "Zeus Learning",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Fitness Web App",
      description:
        "Web-based fitness platform that allows users to search, and try out various fitness and health exercises. The demonstrattions are crystal clear and highly informative for one to achive their fitness goals",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restAPI",
          color: "green-text-gradient",
        },
        {
          name: "materialUI",
          color: "pink-text-gradient",
        },
      ],
      image: fitnessapp,
      source_code_link: "https://github.com/hrithik16032000/teamshavy-fitnessclub",
    },
    {
      name: "Chat Web App",
      description:
        "Web application that enables users to chat with each other, build using with use of Sockets, Rest APIs, React Hooks, and CSS",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: chat_app,
      source_code_link: "https://github.com/hrithik16032000/projectops-chat-app",
    },
    {
      name: "Epiphany India",
      description:
        "A Multimedia Production Hub project that provides news and information about the current happenings in the culture domain in India",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "restAPI",
          color: "yellow-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: epiphany_india,
      source_code_link: "https://github.com/hrithik16032000/demoepiphany",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };