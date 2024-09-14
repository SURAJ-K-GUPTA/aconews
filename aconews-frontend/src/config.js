// config.js
const config = {
    apiBaseUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : 'https://aconews-backend-nine.vercel.app'
  };
  
  export default config;
  