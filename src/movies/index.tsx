import CardReview from "../components/CardReview/CardReview";
import Header from "../components/Header/Header";
import { IItemReview } from "./type";

const MoviesPage = () => {
  let data: IItemReview[] = [
    {
      id: 1,
      reviewer: {
        userName: "june",
        id: 1,
        name: "June Pham",
        avt: "https://api.dicebear.com/8.x/bottts/svg",
      },
      review_at: new Date(),
      content: "Doraemon Movie 43: Nobita and the Earth Symphony did well in both listening and viewing.",
      rating: 2.5,
    },
  ];
  return (
    <div className="w-full min-w-96">
      <Header brand="Movies.io" logo="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png"/>
      {data.map((item, index) => {
        const avtRandom =
          item.reviewer.avt + "?seed=" + `${Math.random() * 100}`;
        item.reviewer.avt = avtRandom;
        return <CardReview key={index} {...item} />;
      })}
    </div>
  );
};

export default MoviesPage;
