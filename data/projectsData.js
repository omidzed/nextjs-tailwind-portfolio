import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
  {
    id: '1',
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
        img: '/images/letsParlay/Screenshot 2024-05-12 230032.png',
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
    },
  },

  {
    id: '2',
    title: 'Defi-City',
    url: 'https://deficity.vercel.app/',
    category: 'Web Application',
    img: '/images/DefiCity/deficity9.png',
    ProjectHeader: {
      title: 'Defi-City',
      publishDate: 'Feb 20, 2024',
      tags: 'Web Application',
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'Defi-City',
        img: '/images/DefiCity/defiCity5.png',
      },
      {
        id: uuidv4(),
        title: 'Defi-City',
        img: '/images/DefiCity/deficity7.png',
      },
      {
        id: uuidv4(),
        title: 'Defi-City',
        img: '/images/DefiCity/deficity.png',
      },
    ],
    ProjectInfo: {
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Website',
          details: 'https://defi-city.vercel.app/',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'Defi-City, where the pulse of cryptocurrency markets is always at your fingertips! This app, built with React and TypeScript, harnesses the CoinGecko API to deliver real-time cryptocurrency data. It features a streamlined watchlist, enabling you to easily track and manage your preferred cryptocurrencies. For insights at a glance, I’ve incorporated Victory Line Charts to elegantly display your crypto’s performance over the past week. It’s more than just an app—it’s your essential tool for navigating the dynamic world of cryptocurrencies!',
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
    },
  },
];
