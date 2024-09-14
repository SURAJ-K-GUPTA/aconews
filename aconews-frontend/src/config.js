// config.js
// const config = {
//     apiBaseUrl: process.env.NODE_ENV === 'development'
//       ? 'http://localhost:5000'
//       : 'https://aconews-backend-nine.vercel.app'
//   };
  
//   export default config;
  

const config = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL
};

export default config;
