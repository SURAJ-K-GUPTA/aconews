# ACONEWS

ACONEWS is a full-stack news application that provides the latest news articles. It allows users to search for news based on various filters like country and language. The project leverages the GNews API and includes both a frontend (React) and backend (Node.js/Express) that are hosted separately.

## Project Setup

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/download/) (v14 or above)
- [npm](https://www.npmjs.com/get-npm) (v6 or above)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- A GNews API Key (You can obtain it from [gnews.io](https://gnews.io/))

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/aconews.git
    cd aconews
    ```

2. **Backend Setup**:
    Navigate to the backend folder and install the dependencies.
    ```bash
    cd aconews-backend
    npm install
    ```

    Create a `.env` file in the `aconews-backend` directory with the following content:
    ```bash
    PORT=5000
    GNEWS_API_KEY=your_gnews_api_key
    ```

    Start the backend server:
    ```bash
    npm start
    ```

3. **Frontend Setup**:
    Navigate to the frontend folder and install the dependencies.
    ```bash
    cd ../aconews-frontend
    npm install
    ```

    Start the frontend:
    ```bash
    npm start
    ```

4. **Access the application**:
    - Frontend: Open [http://localhost:3000](http://localhost:3000) in your browser.
    - Backend API: Running on [http://localhost:5000/api/news](http://localhost:5000/api/news)

### API Proxy Setup

The frontend is set up to proxy API requests to the backend via the `"proxy": "http://localhost:5000"` configuration in the `package.json`. No additional CORS configuration is needed for local development.

## Approach

The project is divided into two major parts:
- **Frontend**: Developed using React with Tailwind CSS for styling. It fetches news articles from the backend and displays them in a responsive grid layout. Users can search for news by entering keywords, selecting a language, and filtering by country.
  
- **Backend**: Built with Node.js and Express, it acts as a proxy to the GNews API. The backend ensures that requests are made securely to the GNews API using the stored API key and handles all API requests from the frontend.

### Key Features:
- Search news articles by keyword.
- Filter by language and country.
- Responsive UI with pagination support.

## Challenges and How I Overcame Them

### 1. **Cross-Origin Resource Sharing (CORS) Issues**:
   When making API requests from the frontend to the backend, I faced CORS issues. This was resolved by setting up a proxy in the frontend's `package.json` to point to the backend server, eliminating the need for CORS configuration in local development.

### 2. **Handling Empty or Unavailable Data**:
   During testing, some search queries returned no results or resulted in a `404` from the API. I handled this by adding error handling in both the frontend and backend to display user-friendly messages like "No articles found."

### 3. **Pagination**:
   Implementing pagination with limited API results required careful logic to calculate and handle page transitions. The solution was to use the total number of results from the API response and divide it by the number of articles per page to determine the total pages dynamically.

---

Feel free to contribute to this project by submitting issues or pull requests!
