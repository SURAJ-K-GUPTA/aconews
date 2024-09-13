// config.js
const config = {
    apiBaseUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : 'https://your-backend-url.vercel.app'
  };
  
  export default config;
  