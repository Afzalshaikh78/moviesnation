const API_KEY = "f243c45f"; // your key
const BASE_URL = "https://www.omdbapi.com/";

// Search movies by keyword (like "Batman")
export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.Response === "True" ? data.Search : [];
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

// Fallback popular movies (simulate with a default search)
export const getPopularMovies = async () => {
  return await searchMovies("Avengers"); // simulate popular movies
};
