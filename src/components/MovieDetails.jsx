import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams(); // Extract movieId from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details using the movieId
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.example.com/movies/${movieId}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Release Date: {movie.releaseDate}</p>
      
    </div>
  );
};

export default MovieDetails;