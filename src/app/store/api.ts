import { galleryModel, projectModel } from './models';

export const sendgridKey: string =
  '12b9f281aadd8eb247184900afa1b93cea905ec6c0cffd0a09990f7af70a3ab08ee33fdb70eecfa4961606c639c0b972760231899cba965c12f7911609f3386c954423bd5881e477bdc23a9867dd0ac1230f61fe1480e051b7a88e7fab40665f0f11ba7c9b95357778ba54169f4115662ad08b68e06a68de7949b18353e86486';

export const projects: projectModel[] = [
  {
    link: 'https://seamfix-med.vercel.app/',
    img: 'https://res.cloudinary.com/drbrbpqdn/image/upload/v1677237103/Joecdev/joecdev_smartcheck_rnwmgo.png',
    stacks: ['Angular', 'Tailwind CSS', 'ng Material'],
    description:
      'A demo server dashboard. I designed a server dashboard using Angular and Angular material for practice purpose.',
  },
  {
    link: 'https://dumele.vercel.app/',
    img: 'https://res.cloudinary.com/drbrbpqdn/image/upload/v1677237105/Joecdev/joecdev_dumele_rshlet.png',
    stacks: ['Angular', 'Tailwind CSS', 'Gsap'],
    description:
      "African tech talent hunt website. They're globally decentralized organization experienced in building excellent products and managing daily digital operations.",
  },
  {
    link: 'https://dumele-landing.netlify.app/',
    img: 'https://res.cloudinary.com/drbrbpqdn/image/upload/v1677237106/Joecdev/joecdev_dumele_landing_lmrn2a.png',
    stacks: ['Angular', 'Tailwind CSS', 'SwiperJs'],
    description:
      "African tech talent hunt website Dumele landing page. They're globally decentralized organization experienced in building excellent products and managing daily digital operations.",
  },
  {
    link: 'https://joecdev.com',
    img: 'https://res.cloudinary.com/dt8umwrcb/image/upload/v1648926926/portfolio/joecdev_seegbk.jpg',
    stacks: ['Strapi', 'Angular', 'Tailwind CSS'],
    description:
      "My portfolio website. It's the site you're looking at currently. It's developed with Angular as the front-end and StrapiJs as the headless CMS backend.",
  },
  {
    link: 'https://fardelins.com',
    img: 'https://res.cloudinary.com/dt8umwrcb/image/upload/v1648926926/portfolio/fardelins_rulesd.jpg',
    stacks: ['NodeJs', 'Angular', 'Tailwind CSS'],
    description:
      "This is a side project I'm working on. It's a SaaS Courier Management System developed from scratch with Angular, Angular material, and NodeJS. Its features include delivery management, dispatch tracking, and lots more.",
  },
  {
    link: 'https://chuuse.org',
    img: 'https://res.cloudinary.com/dt8umwrcb/image/upload/v1648926925/portfolio/chuuse_udvoq0.jpg',
    stacks: ['Nuxt', 'Tailwind CSS'],
    description:
      'A project I revamped using NuxtJs. I also worked here. Chuuse is a talent provider, and an EdTech company focused on improving young African tech talents for the global workspace.',
  },
  {
    link: 'https://lessonapp.chuuse.org',
    img: 'https://res.cloudinary.com/dt8umwrcb/image/upload/v1648926926/portfolio/lessonteacher_hqq9r1.jpg',
    stacks: ['Angular', 'Tailwind CSS'],
    description:
      'A simple landing page I designed for Chuuse Lesson teacher App. It accepts PayStack credit card payments.',
  },
  {
    link: 'https://learn.chuuse.org',
    img: 'https://res.cloudinary.com/dt8umwrcb/image/upload/v1633522872/portfolio/Chuuse-LMS.gif',
    stacks: ['WordPress', 'Elementor', 'Tutor LMS'],
    description:
      "Chuuse Learning Management System built on WordPress with Elementor and Tutor LMS plugin. It's a site used to train students online on basic tech skills.",
  },
  {
    link: 'https://github.com/jowc/demo_dasboard',
    img: 'https://res.cloudinary.com/dt8umwrcb/image/upload/v1648926916/portfolio/Demo_Material_Design_lekpgv.gif',
    stacks: ['Angular', 'Material', 'High Chart'],
    description:
      'This is a demo dashboard project built using Angular material and High Chart library. Dynamic data is been fetched and displayed on the dashboard.',
  },
  {
    link: 'https://tranquil-waters-46809.herokuapp.com/',
    img: 'https://res.cloudinary.com/dt8umwrcb/image/upload/v1633522869/portfolio/CareerPath.gif',
    stacks: ['Django', 'Tailwind CSS', 'API'],
    description:
      'A simple AI to test a user/student on what major to pursue as a career. It was a side project built because I had this challenge while growing up.',
  },
  {
    link: 'https://toh-angular-c9691.web.app/',
    img: 'https://res.cloudinary.com/dt8umwrcb/image/upload/v1633522789/portfolio/TOH.gif',
    stacks: ['Firebase', 'Angular', 'Tailwind CSS'],
    description:
      'It was a revamp of the official Angular tutorial guide on learning Angular. I built this as a refresher project and enjoyed the comeback.',
  },
];

export const imageSlider: galleryModel[] = [
  { url: 'assets/media/pic1.png' },
  { url: 'assets/media/fardelins-dashboard.png' },
  { url: 'assets/media/pic2.png' },
  { url: 'assets/media/pic3.png' },
  { url: 'assets/media/pic4.png' },
  { url: 'assets/media/pic5.png' },
  { url: 'assets/media/pic[1].jpg' },
  { url: 'assets/media/pic[2].jpg' },
];
