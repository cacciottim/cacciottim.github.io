// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'cacciottim', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['cacciottim/cacciottim'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: { title: 'Portfolio of Matteo Cacciotti', description: '', imageURL: '' },
  social: {
    linkedin: 'matteocacciotti',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'cacciottimatteo@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1HjYhviEHLaD-3xSb12AjTLVsoRGPIzW6/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python (Intermediate)',
    'FastAPI',
    'Java (Basics)',
    'C (Basics)',
    'SQL (Basics)',
    'Git',
    'Windows',
    'Linux',
    'Networking',
    'Prompt Engineering',
  ],
  experiences: [],
  certifications: [
    {
      name: 'Google AI Essentials',
      body: '',
      year: 'May 2026',
      link: '',
    },
    {
      name: 'LPI Linux Essentials',
      body: '',
      year: 'Oct 2025',
      link: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2F79e42627-17e9-41fa-ae95-048bde60b265%2Fpublic_url&urlhash=zMmU&mt=cgiLDyZUYJIulYzimMAC9h_7VCuse9IDWDzHXLrRVwrB0PLIpGXqtJJekVzn5GRn5xggQhJRCjvQ6acgjO-ro9wsIety&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BF9pdZNR8T8qrWDtpI0KLlg%3D%3D',
    },
    {
      name: 'CCST Networking',
      body: '',
      year: 'Aug 2025',
      link: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2Fd9fb9df8-ca0e-42f3-8aa0-054d92cdbd34%2Fpublic_url&urlhash=OvlN&mt=-5Vtlbwgg4-GsYT0KQTwxGs6WFwcSbPvCE5VIsCA_ru7gsWhTIElh4H7Dnmm58Gd9NdYLWV-5w3sunf3HaTGZWrqhmB7&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BF9pdZNR8T8qrWDtpI0KLlg%3D%3D',
    },
  ],
  educations: [
    {
      institution: 'Università Telematica Pegaso',
      degree: 'Bachelor\'s Degree',
      from: '2024',
      to: 'Present',
    },
    {
      institution: 'Liceo Scientifico "Ettore Majorana" di Latina',
      degree: 'Degree',
      from: '2019',
      to: '2024',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
