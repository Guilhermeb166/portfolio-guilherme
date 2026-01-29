import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiPrisma } from 'react-icons/si'
import { IoLogoFirebase } from "react-icons/io5";

export const projectsData = [
  {
    id: 'project-1',
    title: 'Meu Controle Financeiro',
    description: 'Este é um sistema de Controle Financeiro desenvolvido em Next.js e Firebase, que permite gerenciar receitas e despesas com suporte a cartões de crédito. O projeto inclui funcionalidades avançadas como dashboards analíticos, planejamento de crédito e importação automática de extratos via OCR.',
    technologies: [
      { icon: <SiNextdotjs />, name: 'NextJS' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { icon: <FaNodeJs />, name: 'NodeJS' },
      { icon: <IoLogoFirebase />, name: 'Firebase' },
    ],
    image: '/img/projects/lrfut.png',
    liveUrl: 'https://meu-controle-financeiro-web.vercel.app/',
  },
  {
    id: 'project-2',
    title: 'Another Awesome Project',
    description: 'A cutting-edge web application designed to streamline workflows and enhance user engagement with intuitive interfaces.',
    technologies: [
      { icon: <FaReact />, name: 'ReactJS' },
      { icon: <SiNextdotjs />, name: 'NextJS' },
      { icon: <SiPostgresql />, name: 'PostgreSQL' },
      { icon: <SiPrisma />, name: 'Prisma' },
    ],
    image: '/img/projects/nexts.png',
  },
  {
    id: 'project-3',
    title: 'E-commerce Platform',
    description: 'A robust e-commerce solution with a seamless shopping experience, secure payment gateway, and efficient product management.',
    technologies: [
      { icon: <FaReact />, name: 'ReactJS' },
      { icon: <FaNodeJs />, name: 'NodeJS' },
      { icon: <FaDatabase />, name: 'MySQL' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    ],
    image: '/img/projects/barber.png',
  },
]