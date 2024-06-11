export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://github.com/adrianhajdin?tab=repositories',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://github.com/adrianhajdin/zoom-clone',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: 'https://github.com/adrianhajdin/ai_saas_app',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: 'https://github.com/adrianhajdin/iphone',
  },
];

export const testimonials = [
  {
    quote:
      "Working with Ridwan was an amazing experience. His attention to detail, creativity, and ability to solve complex problems were invaluable to our project. Ridwan's passion for web development shines through in everything he does. If you're looking for a talented and dedicated developer, Ridwan is the perfect choice.",
    name: 'Emily Davis',
    title: 'Founder of TechSavvy Solutions',
  },
  {
    quote:
      "Ridwan exceeded all expectations on our project. His professionalism, communication skills, and technical expertise were exceptional. Ridwan's commitment to delivering high-quality results and meeting deadlines make him a valuable asset to any team. I highly recommend him for your next project.",
    name: 'John Smith',
    title: 'CTO of InnovateX',
  },
  {
    quote:
      "I had the pleasure of collaborating with Ridwan on a challenging project, and he delivered outstanding results. Ridwan's problem-solving abilities, attention to detail, and dedication to customer satisfaction set him apart. If you're looking for a reliable and skilled developer, Ridwan is the one.",
    name: 'Sarah Johnson',
    title: 'CEO of WebWorks Co.',
  },
  {
    quote:
      'Ridwan is an exceptional developer who goes above and beyond to ensure project success. His expertise in front-end development, coupled with his strong communication skills, make him a valuable asset to any team. I thoroughly enjoyed working with Ridwan and would highly recommend him.',
    name: 'David Brown',
    title: 'Lead Developer at CodeCraft Inc.',
  },
  {
    quote:
      "Working with Ridwan was a pleasure from start to finish. His professionalism, creativity, and commitment to excellence were evident throughout our collaboration. Ridwan's ability to understand and exceed client expectations makes him an invaluable partner. I look forward to working with him again.",
    name: 'Rachel Clark',
    title: 'Marketing Manager at DigitalDreams',
  },
];

export const companies = [
  {
    id: 1,
    name: 'NEXT.JS',
    img: '/next.svg',
    nameImg: '/nextjs.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/mongoDB.svg',
    nameImg: '/mongoDBName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/express.svg',
    nameImg: '/expressName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/node.svg',
    nameImg: '/nodeName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/react.svg',
    nameImg: '/reactName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'MERN Stack Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies and backend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'React Frontend Developer',
    desc: 'Developed user-facing features using React.js, ensuring high performance and responsiveness.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance Web Dev Project',
    desc: 'Led the dev of a website for a client, from initial concept to deployment on internet.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Junior Backend Developer',
    desc: 'Exploring the backend world with Node.js, Express.js, and MongoDB.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

//done
export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https:/github.com/ridwan414-hub/',
  },
  {
    id: 2,
    img: '/fb.svg',
    link: 'https://www.facebook.com/ridwanmahmoud.ridwanmahmoud',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/ridwanmahmoud/',
  },
];
