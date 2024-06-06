import "./index.scss";
import CardMovie from "../components/CardMovie/CardMovie";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { IMovie } from "./type";
import { useEffect, useState } from "react";
const apiUrl = "https://huge-currently-rat.ngrok-free.app";
const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  async function getMovies() {
    try {
      const res = await fetch(apiUrl + "/movies/");
      const dataAPI = await res.json();
      setMovies(dataAPI);
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log("movies - 2 ", movies);

  let data: IMovie[] = movies;
  return (
    <div className="w-full min-w-96">
      <Header />
      <div id="content-main" className="p-8">
       <div className="grid grid-cols-3 gap-6">
       {data.map((item, index) => {
          return <CardMovie key={index} {...item} />;
        })}
       </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoviesPage;
