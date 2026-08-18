<h1>API for Studying Redux in the Movie App</h1>


This is a standalone React application that uses The Movie Database (TMDB) API to fetch external movie data, utilizing React-Redux and Redux to manage global state.

---------------------------------------------------------------------------------------------------------

 
<h3 align="center"> 
     STATUS: 🔔 JavaScript 🚀 App: Finished ... 🎯  
</h3>

  
                                      ==================================================
                      

<!-- ![Movie catalog image](https://github.com/Almir-git-unifc/redux-api-consumer-movies/blob/main/z-app-vers5-banner-films.png)  -->

<div align="center">

  <img src="https://github.com/Almir-git-unifc/redux-api-consumer-movies/blob/main/z-app-vers5-banner-films.png" alt="Movie catalog image">

</div>


--------------------------------------------------------------------------------------

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
## Table of Contents
- [Introduction](#introduction)
- [Feature](#Feature)
- [Technologies](#Technologies)
- [How To Use](#How-To-Use)
- [Author](#Author)
- [License](#License)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Introduction
This is a standalone React application that consumes external data via The Movie Database (TMDB) API. The project demonstrates the integration of global state management using Redux and React-Redux within a modular architecture.


# Feature
- Movie Catalog: Dynamic display of movies fetched from the TMDB API.
- Movie Details: Detailed view featuring title, synopsis, language, popularity, and poster.
- Global State Management: Use of `redux` and `react-redux` to manage application data.
- Smart Navigation: Implementation of dynamic routes using `react-router-dom` and `useParams`.
- Asynchronous Requests: Integration with `axios` for efficient API data fetching.


# Technologies
- React: Main library for the user interface.
- Redux and React-Redux: Global application state management.
- Axios: HTTP client for consuming the TMDB API.
- React Router Dom: Routing and navigation management.
- TMDB API: External source for movie data.


# How To Use

Prerequisites
- Node.js installed on your machine.
- A valid API key obtained from [TMDB](https://www.themoviedb.org/).

Installation and Execution
```
1. Clone the repository:
```bash
git clone <https://github.com/Almir-git-unifc/redux-api-consumer-movies.git>
cd <redux-api-consumer-movies>

2. Install dependencies:
npm install

3. Configure your API key:
Create a '.env' file in the project root and add your key:
REACT_APP_TMDB_API_KEY=your_key_here

4. Start the application:
npm start

The application will be running locally at http://localhost:3000.
```



&nbsp;
# Author <a name = "Author"></a>

👤 **Almir**

- Github: [@Almir-git-hub](https://github.com/Almir-git-unifc)

&nbsp;
# License <a name = "License"></a>

MIT
