import { useEffect, useState } from "react";
import { IItemReview } from "../../movies/type";
import "./CardReview.scss";
import { Clock8, Star } from "lucide-react";
import { formatDate } from "../../utils/datatime";

const CardReview = (props: IItemReview) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    let img = new Image();
    img.src = props.reviewer.avt;

    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);
  return (
    isLoaded && (
      <div className="wrap-card">
        <div className="review">
          <div className="review__head">
            <div className="flex flex-auto items-center gap-2">
              <img
                className="avt-reviewer"
                src={props.reviewer.avt}
                alt={props.reviewer.name}
              />
              <div className="flex gap-1 flex-col items-start">
                <span className="font-bold text-base">
                  {props.reviewer.name}
                </span>
                <span className="text-gray-300 opacity-90 italic text-sx">
                  @{props.reviewer.userName}
                </span>
              </div>
            </div>
            <div className="flex gap-1">
              <Star fill="#F97316" strokeWidth={0} />
              <Star fill="#F97316" strokeWidth={0} />
              <Star fill="#111" strokeWidth={0} />
              <Star fill="#111" strokeWidth={0} />
              <Star fill="#111" strokeWidth={0} />
            </div>
          </div>
          <div className="review__body">
            <p className="content truncate">
              Doraemon Movie 43: Nobita and the Earth Symphony did well in both
              listening and viewing.
            </p>
          </div>
          <div className="review__footer">
            <Clock8 strokeWidth={1} color="#cecece" size={18} />
            <span className="text-gray-300 opacity-90 italic text-sx">
              {formatDate(new Date())}
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default CardReview;
