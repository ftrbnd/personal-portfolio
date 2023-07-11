export interface Project {
  name: string;
  description: string;
  thumbnailUrl: string;
  repoUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    name: 'EDEN Heardle',
    description: 'The audio-based version of Wordle, specifically made for songs from the musical artist EDEN. Created with TypeScript, React, Redux, Firebase, React Router, and Material UI.',
    thumbnailUrl: 'https://i.imgur.com/hJda2lu.png',
    repoUrl: 'https://github.com/ftrbnd/odin-js-final-project',
    demoUrl: 'https://eden-heardle.web.app'
  },
  {
    name: 'EDEN Discord Bot',
    description: 'A Discord bot made for a community server of over 3,000 members! Includes moderation features, birthday reminders, a "Guess the Song" game, and more.',
    thumbnailUrl: 'https://i.imgur.com/sj4kU3x.png',
    repoUrl: 'https://github.com/ftrbnd/eden-bot-v13',
    demoUrl: 'https://discord.gg/futurebound'
  },
  {
    name: '',
    description: '',
    thumbnailUrl: '',
    repoUrl: '',
    demoUrl: ''
  },
  {
    name: '',
    description: '',
    thumbnailUrl: '',
    repoUrl: '',
    demoUrl: ''
  },
  {
    name: '',
    description: '',
    thumbnailUrl: '',
    repoUrl: '',
    demoUrl: ''
  },
  {
    name: '',
    description: '',
    thumbnailUrl: '',
    repoUrl: '',
    demoUrl: ''
  }
];
