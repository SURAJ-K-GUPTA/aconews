// config.js
const config = {
    apiBaseUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : 'https://aconews-backend-cdh8goyw4-suraj-kumar-guptas-projects.vercel.app/'
  };
  
  export default config;
  