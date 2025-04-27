# Movie-Database-Project

Arontend application for a movie database designed to display a list of movies, allow users to search for movies, and provide detailed information about individual movies. It utilizes React components, routing, and data fetching to achieve its functionality.

## Features

*   **Movie Listing:** Displays a list of movies (in `MovieList.js`).
*   **Movie Detail View:** Displays detailed information for each movie (in `MovieDetailPage.js`).
*   **Search Functionality:** Allows users to search for movies (in `Header.js` and `HomePage.js`).
*   **Loading and Error Handling:** Provides loading indicators and error messages during data fetching (in `MovieList.js`, `HomePage.js`, and `MovieDetailPage.js`).
*   **Navigation/Routing:** Uses `react-router-dom` for navigation between different views (in `App.js`, `MovieCard.js`, `Header.js`, and `MovieDetailPage.js`).

## How It Works

The application's frontend is built using React and leverages several components:

*   **App.js:** Serves as the root component and manages the main routing structure. It includes a `Header`, a `main` content area, and a `footer`. It also manages the search term.
*   **Header.js:** Displays the application's header, including the logo and a search form. It passes the search term to the home page for filtering.
*   **HomePage.js:** Displays a list of movies, fetches movie data from an external API, and applies a search filter to the movies. It renders a `MovieList` component.
*   **MovieList.js:** Renders a list of movie cards based on the data passed to it. Includes loading and error state handling.
*   **MovieCard.js:** Renders a single movie's information in a card format, including a poster, title, year, and a link to a detail page.
*   **MovieDetailPage.js:** Displays detailed information about a specific movie, fetched by its ID from an API, and provides a "back" link.
*   **Data Fetching:** The `HomePage` and `MovieDetailPage` components fetch movie data, likely from an external API using functions from `../services/api`.
*   **Styling:** Styles are managed using CSS files (`App.css`, `index.css`, `Header.css`, `HomePage.css`, `MovieCard.css`, `MovieDetailPage.css`, and `MovieList.css`).

## Tech Stack

*   **Programming Languages:** JavaScript
*   **Frontend Framework:** React
*   **Routing:** react-router-dom
*   **Package Management:** npm 
*   **CSS:** CSS, Tailwind CSS, PostCSS, CSS Modules.
*   **Testing:** Jest, @testing-library/react
*   
## Getting Started

1.  Install dependencies using `npm install` or `yarn install`.
2.  Run the development server using `npm start` or `yarn start`.
3.  Build for production using `npm run build` or `yarn build`.

## Conclusion

The Movie-Database-Project is a React-based frontend application designed for browsing and searching a movie database. The project utilizes React, routing, component-based architecture, and external API calls to achieve its core functionality. The project appears to be well-structured and includes key features like search, movie details, and error handling. Further, the use of service workers will help users by allowing access to the application even if the user is offline.

