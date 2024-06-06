import { IGenre, IMovie } from "../../movies/type";
import "./CardMovie.scss";
// import { Clock8, Star } from "lucide-react";
// import { formatDate } from "../../utils/datatime";

const CardMovie = (props: IMovie) => {
  return (
    <div className="card w-96 bg-white bg-opacity-10 shadow-xl p-0">
      <figure>
        <img
          className="object-cover h-auto w-full"
          src={props.poster === "" ? "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png" : props.poster}
          alt={props.title + "-" + props.overview.slice(0, 20)}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.title}
          {props.is_new && <div className="badge badge-primary">NEW</div>}
        </h2>
        <p className="text-left line-clamp-4">{props.overview || "No title"}</p>
        <div className="card-actions justify-end">
          {props.genres.map((item: IGenre, i: number) => {
            return (
              <div key={i} className="badge badge-outline">
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
