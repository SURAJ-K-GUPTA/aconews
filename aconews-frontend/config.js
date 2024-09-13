// config.js
const config = {
    apiBaseUrl: process.env.NODE_ENV === 'production'
      ? 'https://aconews-backend-cdh8goyw4-suraj-kumar-guptas-projects.vercel.app/'
      : 'http://localhost:5000'
  };
  
  export default config;
  