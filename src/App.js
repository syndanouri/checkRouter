import { useState,useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import MyNav from './components/MyNav/MyNav';
import MovieList from './components/MovieList/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
const [movies, setMovies] = useState([
  {
    id: uuidv4(),
    title: "Forrest Gump",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/512y3FISDIL._SL160_.jpg",
    description:
      "Forrest Gump is number #1 is a joke. Rainman 1988 is a better film about a man with a disability In my mind",
    raiting: 3,
  },
  {
    id: uuidv4(),
    title: "The Godfather",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/41%2BHJCUl3EL._SL160_.jpg",
    description:
      " I believe that The Godfather is the greatest movie ever. This movie was influential in so many ways",
    raiting: 5,
  },
  {
    id: uuidv4(),
    title: "The Dark Knight",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/51yPRRGdSHL._SL160_.jpg",
    description:
      "Best comic book movie ever made. Ledger was damn mesmerizing as the psychopathic Joker",
    raiting: 1,
  },
  {
    id: uuidv4(),
    title: "The Shawshank Redemption",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SL160_.jpg",
    description:
      "he Shawshank Redemption has fiction in it. not enough reality. There are no friends in prison.",
    raiting: 2,
  },
  {
    id: uuidv4(),
    title: "The Empire Strikes Back",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/61q2e4LQ03L._SL160_.jpg",
    description:
      " A great introduction scene on Hoth for the rebels and the first rendition of the Imperial March theme while looking at the Empire's Fleet",
    raiting: 3,
  },
  {
    id: uuidv4(),
    title: "Pulp Fiction",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/51xTf3g7OhL._SL160_.jpg",
    description:
      "Most of the scenes are characters talking about random things like MacDonald in Europe or pot bellies, and that's what makes it so refreshing and hilarious",
    raiting: 4,
  },
  {
    id: uuidv4(),
    title: "The Dark Knight",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/51yPRRGdSHL._SL160_.jpg",
    description:
      "Best comic book movie ever made. Ledger was damn mesmerizing as the psychopathic Joker",
    raiting: 1,
  },
  {
    id: uuidv4(),
    title: "The Empire Strikes Back",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/61q2e4LQ03L._SL160_.jpg",
    description:
      " A great introduction scene on Hoth for the rebels and the first rendition of the Imperial March theme while looking at the Empire's Fleet",
    raiting: 3,
  },
]);


const [stars , setStars]=useState(0)
const [titre , setTitre]=useState("")
const [filtred , setFiltred]=useState(movies)

useEffect(() => {

  setFiltred(movies.filter((movie)=>  movie.title.toLowerCase().includes(titre.toLowerCase()) && movie.raiting >= stars    ))
}, [titre,stars,movies])




  return <div className="App">
    <MyNav setMovies={setMovies} 
    movies={movies} 
    setStars={setStars} 
    setTitre={setTitre} stars={stars} />

    <Routes>
    <Route path="/movie/:id" element={<MovieDetails movies={movies}/>} />
    <Route path="/" element= {<MovieList movies={filtred}/>}/> 
    
    
    </Routes>
    
    </div>;
  
  }

export default App;
