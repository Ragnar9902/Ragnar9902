import {
  chakra,
  chartjs,
  css,
  express,
  html,
  javascript,
  mongodb,
  mySQL,
  nextjs,
  node,
  promptEngineering,
  react,
  redux,
  tailwind,
  typescript,
} from "./techstack";

export const ProjectList = [
  {
    heading: "Yoyoso",
    img: "https://admin.yoyoso.com.co/logo_yoyoso.png",
    title: "Yoyoso shops",
    description:
      "At Yoyoso Shop, I contributed as a web developer. My responsibilities included developing and maintaining the e-commerce platform, ensuring seamless functionality and user experience. Through collaborative efforts, I implemented innovative features and optimized performance, aligning with the brand's vision. This experience allowed me to sharpen my skills in frontend and backend development, while also gaining valuable insights into the e-commerce industry.",
    techStack: [javascript, nextjs],
    liveLink: "https://www.yoyoso.com.co/",
    // gitLink: "https://github.com/SumatM/Spartan",
  },
  {
    heading: "CARNES SANTA CRUZ",
    img: "https://www.carnessantacruz.co/wp-content/uploads/2016/05/santacruzlogo-1.png",
    title: "Carnes",
    description:
      "As part of my role at Carnes Santa Cruz, I was entrusted with the development of new components and maintenance of the control panel, a critical component of the company's operations. Working closely with the team, I designed and implemented features to streamline inventory management, order processing, and customer relationship management. Through meticulous attention to detail. This experience honed my skills in backend development and database management, while also providing valuable insights into the logistics and supply chain industry.",
    techStack: [node, react, redux, nextjs],
    // liveLink: "https://puny-potato-4945.vercel.app/",
    // gitLink: "https://github.com/SumatM/Arivu",
  },
  {
    heading: "CAMARA DE COMERCIO",
    img: "https://www.camarabaq.org.co/wp-content/uploads/2023/02/logo-camarabaq-02.svg",
    title: "Chamber of Commerce",
    description:
      "As a web developer for the Camara de Comercio de Barranquilla, I contributed to the enhancement of their digital presence and services. Collaborating closely with the team, I played a key role in developing and maintaining their website and online platforms. This involved implementing new features, optimizing performance, and ensuring a seamless user experience for visitors and clients.",
    techStack: [node, nextjs, mySQL],
    liveLink: "https://www.camarabaq.org.co/",
    // gitLink: "https://github.com/SumatM/Indian-States",
  },
  // {
  //   heading: "TODO APP",
  //   title: "",
  //   img: "https://raw.githubusercontent.com/SumatM/react_reudx_todo_app/main/public/Screenshot%20(750).png",
  //   title: "Advance Todo Web App",
  //   description:
  //     "Todo App is a simple todo application that allows you to track your tasks and monitor the time taken to complete them.",
  //   techStack: [javascript, react, redux, chakra],
  //   liveLink: "https://sumat-todo-app.vercel.app/",
  //   gitLink: "https://github.com/SumatM/react_reudx_todo_app",
  // },
  // {
  //   heading: "WEB RESUME",
  //   img: "https://raw.githubusercontent.com/SumatM/web_resume/main/public/Screenshot%20(747).png",
  //   title: "Non PDF Resume",
  //   description:
  //     "Web Resume a professionally designed interactive platform that presents my skills and illustrious professional journey. With multi-theme support and captivating animations, it offers a compelling showcase of my expertise.",
  //   techStack: [nextjs, tailwind, redux],
  //   liveLink: "https://web-resume-six.vercel.app/resume",
  //   gitLink: "https://github.com/SumatM/web_resume",
  // },
  // {
  //   heading: "JOKE GENERATOR",
  //   img: "https://raw.githubusercontent.com/SumatM/joke_genrator/main/frontend/public/Screenshot%20(787).png",
  //   title: "Genrative AI Joke Generator App",
  //   description:
  //     "Created a fun Joke Generator app using OpenAI API, delivering a delightful experience with witty and entertaining jokes. Let the app bring laughter to your day with clever humor!",
  //   techStack: [react, typescript, node, promptEngineering, express],
  //   liveLink: "https://joke-indol.vercel.app/",
  //   gitLink: "https://github.com/SumatM/joke_genrator",
  // },
  // {
  //   heading: "Code-Ninja",
  //   img: "https://raw.githubusercontent.com/SumatM/Code-Ninja/43e9d8f70d5e16bede959a47347ffe46c7a0d263/frontend/src/assets/Screenshot%20(758).png",
  //   title: "Code Converter, Code Debugger",
  //   description:
  //     "Experience the future of coding with Code Ninja. Our advanced tool, powered by OpenAI API, offers code conversion, quality checks, and debugging. Elevate your coding skills, write error-free code, and boost productivity with Code Ninja.",
  //   techStack: [react, typescript, chakra, promptEngineering, node],
  //   liveLink: "https://code-converter-brown.vercel.app/",
  //   gitLink: "https://github.com/SumatM/Code-Ninja",
  // },
  // {
  //   heading: "E.M.S",
  //   img: "https://raw.githubusercontent.com/SumatM/typeScript-learning/e1f49f5f02d1400869046f783090a7f8762b7c47/mock_demo/frontend/src/assets/Screenshot%20(759).png",
  //   title: "Employee Management System",
  //   description:
  //     "Employee Management System with authentication, authorization, sorting, filtering, pagination, and search capabilities. Seamlessly manage employees, tracking their data efficiently and ensuring secure access. Simplify HR tasks with this comprehensive solution.",
  //   techStack: [react, typescript, chakra, redux, node, express, mongodb],
  //   liveLink: "https://ems-ebon.vercel.app/",
  //   gitLink:
  //     "https://github.com/SumatM/typeScript-learning/tree/main/mock_demo",
  // },
  // {
  //   heading: "Aroma",
  //   img: "https://raw.githubusercontent.com/SumatM/Zomato_clone/2602b3d75a1d9c67084add7af6229c9a152ec9a1/frontend/public/Screenshot_20230807_005739.png",
  //   title: "Zomato Clone",
  //   description: "Working... ",
  //   techStack: [react, tailwind, redux, node, mongodb, express],
  //   liveLink: "https://aroma-zomato.vercel.app/",
  //   gitLink: "https://github.com/SumatM/Zomato_clone",
  // },
];

const extra = [
  {
    heading: "DIAMONDLAND",
    img: "https://raw.githubusercontent.com/chaudhari014/legit-building-8885/main/banner/Screenshot%20(672).png",
    title: " CaratLane Clone",
    description:
      "Diamondland is an e-commerce website specializing in jewelry, offering customers a wide range of high-quality jewelry at affordable prices. They also provide personalized gift options for your loved ones.",
    techStack: [html, javascript, css],
    liveLink: "https://diamond-land.netlify.app/index.html",
    gitLink: "https://github.com/chaudhari014/legit-building-8885",
  },
  ,
  {
    heading: "SPENDWISER",
    img: "https://user-images.githubusercontent.com/112808279/238118882-e4441c6a-8b1e-418d-b228-7132e40a40d4.png",
    title: "Money Manager App",
    description:
      " SpendWiser is an invaluable tool for anyone looking to manage their monthly budget and keep track of their spending. With its user-friendly interface and comprehensive features, SpendWiser makes it easy to stay on top of your finances and ensure that you are meeting your financial goals.",
    techStack: [react, chakra, redux, chartjs],
    liveLink: "https://hilarious-wood-568-fw21-0275-updated1.vercel.app/",
    gitLink: "https://github.com/SumatM/SpendWiser",
  },
  {
    heading: " TEXT TO SPEECH",
    img: "https://raw.githubusercontent.com/SumatM/Text-To-Speech/main/Screenshot%20(712).png",
    title: " JavaScript Speech Synthesis",
    description:
      "WebPage that converts written text into spoken words. Utilized natural language processing techniques to analyze and interpret the text, generating synthesized speech output.",
    techStack: [html, javascript, css],
    liveLink: "https://text-to-speech-sumat.netlify.app/",
    gitLink: "https://github.com/SumatM/Text-To-Speech",
  },
];
