import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "DownloadCV", link: "/Roman_CV.pdf" },

  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
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
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
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
    title: "Country Finder App",
    des: "Here in this Project find the country by search, by region and also find the detial of Country",
    img: "/Screenshot 2024-07-20 130430.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://mycountrysfinders.netlify.app/",
  },
  {
    id: 2,
    title: "Body Mass Index Calculater App",
    des: "Here You can check your BMI In metric as well as Imperial ",
    img: "/Screenshot 2024-07-20 130515.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://bmicalculaters.netlify.app/",
  },
  {
    id: 3,
    title: "Growth App",
    des: "A static website a fully Responsive site",
    img: "/Screenshot 2024-07-20 130536.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://growthapps.netlify.app/",
  },
  {
    id: 4,
    title: "Go Priv",
    des: "Go Priv is a Service Provide company I have design facial page for it",
    img: "/Screenshot 2024-07-20 130654.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://gopriv.com/facials",
  },
  {
    id: 5,
    title: "Promptopia",
    des: "This is the app where user can create the prompt and also update and delete the prompt this is full stack App made in Next js and mongoDb for database",
    img: "/Screenshot 2024-07-20 131202.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/romankhanromii/project_promptopia_next_js",
  },
  {
    id: 6,
    title: "VideoGame",
    des: "This is the website which is made in Chakra Ui,TypeScript,React",
    img: "/Screenshot 2024-07-20 130352.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://imaginative-dodol-d7c021.netlify.app/",
  },
  {
    id: 7,
    title: "HealthCare Platform",
    des: "A comprehensive website offering top-notch healthcare services to meet all your medical needs.",
    img: "/Screenshot 2024-07-20 141429.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://thelunaclinic.com/",
  },
  {
    id: 8,
    title: "Resturent Website",
    des: "A delightful online destination showcasing our exquisite menu, special offers, and seamless reservation system for an unforgettable dining experience.ds.",
    img: "/Screenshot 2024-07-20 142309.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://foodyspoint.com/",
  },

  {
    id: 9,
    title: "Tip Calculater App",
    des: "A user-friendly web app for quickly and accurately calculating tips on your bill",
    img: "/tip.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://tip-calculater-app.netlify.app/",
  },
  {
    id: 10,
    title: "Design Like Gpt",
    des: "A user-friendly web design create in react and tailwind",
    img: "/design.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://sunny-lily-e87182.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
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
    title: "Frontend Engineer",
    desc: "Frontend Engineer at K2X Tech, specializing in React.js, Tailwind CSS, React Query, and Redux",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Junior Mern Stack Developer",
    desc: "Junior MERN Stack Developer at Priv, experienced in React.js, Node.js, Express.js, and MongoDB",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer",
    desc: "Frontend Developer at Pixel Io Technology, skilled in React.js, Tailwind CSS, and Material UI",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mern Stack Intern",
    desc: "MERN Stack intern proficient in MongoDB, Express.js, React, and Node.js, eager to build dynamic web applications and enhance development skills.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/romankhanromii",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Romankh88096896?t=Y9wCIx0KPho670YM_v6SBg&s=09",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/romankhan1/",
  },
];
