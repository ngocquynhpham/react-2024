import { useEffect, useState } from "react";
import { IItemReview } from "../../movies/type";
import "./CardReview.scss";

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
            <div className="flex items-center gap-2">
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
          </div>
        </div>
      </div>
    )
  );
};

export default CardReview;
