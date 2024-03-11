import { v4 as uuidv4 } from 'uuid';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
  {
    id: 1,
    title: `Let's Parlay`,
    url: 'https://letsparlay.vercel.app/',
    category: 'Web Application',
    img: '/images/letsParlay/Screenshot 2024-03-09 001212.png',
    ProjectHeader: {
      title: `Let's Parlay`,
      publishDate: 'Feb 2, 2024',
      tags: 'UI / Frontend',
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: `Let's Parlay`,
        img: '/images/letsParlay/Screenshot 2024-03-09 001212.png',
      },
      {
        id: uuidv4(),
        title: `Let's Parlay`,
        img: '/images/letsParlay/Screenshot 2024-03-09 001637.png',
      },
      {
        id: uuidv4(),
        title: 'Google Health Platform',
        img: '/images/letsParlay/Screenshot 2024-03-10 011352.png',
      },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Omid Zedd Productions',
        },
        {
          id: uuidv4(),
          title: 'Services',
          details: 'Virtual Sports Book',
        },
        {
          id: uuidv4(),
          title: 'Website',
          details: 'https://letsparlay.vercel.app/',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: `The primary purpose of our app is to provide a fun, risk-free environment for MMA fans to engage with the sport in a new way. It's an excellent way for beginners to get acquainted with betting concepts and for experienced bettors to test strategies.`,

      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'HTML',
            'CSS',
            'TypeScript',
            'Vite',
            'TailwindCSS',
            'Figma',
            'Adobe Photshop',
          ],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
        },
        {
          id: uuidv4(),
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
        },
      ],
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 2,
    title: 'Defi-City',
    url: 'https://deficity.vercel.app/',
    category: 'Web Application',
    img: '/images/DefiCity/deficity.png',
    ProjectHeader: {
      title: 'Defi-City',
      publishDate: 'Feb 20, 2024',
      tags: 'Web Application',
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'Defi-City',
        img: '/images/deficity.png',
      },
      {
        id: uuidv4(),
        title: 'Defi-City',
        img: '/images/deficity.png',
      },
      {
        id: uuidv4(),
        title: 'Defi-City',
        img: '/images/deficity.png',
      },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Website',
          details: 'https://deficity.vercel.app/',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js',
            'TailwindCSS',
            'AdobeXD',
          ],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
        },
        {
          id: uuidv4(),
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
        },
      ],

      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
];
