import CardReview from "../components/CardReview/CardReview";
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
      content: "Amzing",
      rating: 4.5,
    },
  ];
  return (
    <div>
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
