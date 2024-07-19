# React Movie Search App

This is a React application that allows users to search for movies using the OMDB API. Each movie result is displayed as a card, with a random dog image from another API.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Keerthanakotla/movie_search.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd movie_search
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Create a `.env` file**:
    - Copy the example environment file and add your OMDB API key:
      ```bash
      cp .env.example .env
      ```
    - Open the `.env` file and add your OMDB API key:
      ```
      REACT_APP_OMDB_API_KEY=your_omdb_api_key
      ```

5. **Start the development server**:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

2. **Search for movies**:
    - Enter a movie title in the search bar and click the "Search" button.
    - The app will display a list of movies that match your query.

3. **View movie details**:
    - Each movie card will show the movie's title, year, poster, and plot.
    - A random dog image is also displayed alongside each movie card.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **OMDB API**: API used to fetch movie data.
- **Axios**: Promise-based HTTP client for making API requests.
- **CSS**: For styling the application.


## Acknowledgments

- OMDB API for movie data.
- Dog CEO API for random dog images.


