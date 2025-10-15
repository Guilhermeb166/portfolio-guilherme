import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiPrisma } from 'react-icons/si'

export const projectsData = [
  {
    id: 'project-1',
    title: 'Diteck Technology',
    description: 'A full-stack agency platform with AI-powered features, secure job application flow, and role-based dashboards for Admin and Users.',
    technologies: [
      { icon: <SiNextdotjs />, name: 'NextJS' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { icon: <FaNodeJs />, name: 'NodeJS' },
      { icon: <SiMongodb />, name: 'MongoDB' },
    ],
    image: '/img/projects/lrfut.png',
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