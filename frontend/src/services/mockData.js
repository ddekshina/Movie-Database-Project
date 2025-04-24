export const mockMovies = [
    {
      id: "1",
      title: "The Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      director: "Frank Darabont",
      rating: 9.3,
      poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    },
    {
      id: "2",
      title: "The Godfather",
      year: 1972,
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      rating: 9.2,
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      cast: ["Marlon Brando", "Al Pacino", "James Caan"]
    },
    {
      id: "3",
      title: "The Dark Knight",
      year: 2008,
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan",
      rating: 9.0,
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    },
    {
      id: "4",
      title: "Pulp Fiction",
      year: 1994,
      genre: "Crime, Drama",
      director: "Quentin Tarantino",
      rating: 8.9,
      poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
      id: "5",
      title: "Inception",
      year: 2010,
      genre: "Action, Adventure, Sci-Fi",
      director: "Christopher Nolan",
      rating: 8.8,
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      id: "6",
      title: "The Matrix",
      year: 1999,
      genre: "Action, Sci-Fi",
      director: "The Wachowskis",
      rating: 8.7,
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    }
  ];
  
  export const getMockMovies = () => {
    return Promise.resolve(mockMovies);
  };
  
  export const getMockMovieById = (id) => {
    const movie = mockMovies.find(movie => movie.id === id);
    return Promise.resolve(movie || null);
  };