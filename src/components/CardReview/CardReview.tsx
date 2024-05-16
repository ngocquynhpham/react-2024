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
            <div className="flex items-center gap-4"><span className="p">2.9</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.53595 19.25L4.53696 20V19.25C4.61187 19.25 4.69103 19.2266 4.76562 19.1711C4.76577 19.171 4.76591 19.1709 4.76606 19.1708L9.55002 15.5846L9.99988 15.2474L10.4497 15.5846L15.235 19.1718L15.2359 19.1725C15.3057 19.2249 15.3852 19.2502 15.4632 19.2499C15.5412 19.2496 15.6206 19.2238 15.6902 19.1707L15.6921 19.1692C15.7623 19.1161 15.8199 19.0369 15.8506 18.9392C15.8813 18.8414 15.8818 18.7349 15.8519 18.6366L15.8518 18.6366L15.8502 18.6311L14.0655 12.6102L13.9159 12.1054L14.3398 11.7932L19.0737 8.30626C19.142 8.25191 19.1976 8.17289 19.2273 8.07645C19.2576 7.97783 19.2576 7.87089 19.2273 7.77231C19.1965 7.67456 19.1389 7.5951 19.0687 7.54146C18.9992 7.4884 18.9198 7.4622 18.8418 7.46128L12.971 7.45206L12.4237 7.4512L12.2576 6.92966L10.3877 1.05857C10.3565 0.960749 10.2985 0.881516 10.2279 0.82834C10.1578 0.775572 10.078 0.75 9.99958 0.75C9.92121 0.75 9.84133 0.775572 9.77128 0.82834C9.70105 0.881244 9.64326 0.95994 9.61193 1.05707C9.61177 1.05757 9.61161 1.05807 9.61145 1.05857L7.77445 6.92614L7.61007 7.4512L7.05988 7.45206L1.15963 7.46127C1.15924 7.46127 1.15886 7.46127 1.15848 7.46128C1.08047 7.46199 1.00107 7.48808 0.931568 7.54118C0.861181 7.59494 0.803604 7.67476 0.773069 7.77296C0.742462 7.8714 0.742302 7.97835 0.772633 8.07691C0.802237 8.17312 0.857794 8.25182 0.926003 8.30579L5.66057 11.7932L6.08448 12.1054L5.93485 12.6102L4.15015 18.6311L4.15018 18.6311L4.14835 18.6371C4.11836 18.7352 4.11878 18.8416 4.14949 18.9395C4.18013 19.037 4.23762 19.1162 4.30772 19.1693L4.31096 19.1718C4.37989 19.2246 4.45875 19.2501 4.53595 19.25Z" stroke="#FFAC33" stroke-width="1.5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.77625e-08V16.1848L9.99988 16.1847L5.2146 19.7719C5.01107 19.9238 4.7746 20 4.53696 20C4.29156 20.0003 4.05248 19.9187 3.85461 19.767C3.65718 19.6173 3.50997 19.4063 3.43393 19.1641C3.35788 18.9219 3.35689 18.6608 3.43108 18.4179L5.21578 12.397L0.473441 8.90393C0.276714 8.75269 0.130582 8.5405 0.0558052 8.2975C-0.0189724 8.0545 -0.0185919 7.79304 0.0568905 7.55028C0.132374 7.30752 0.279119 7.09579 0.476284 6.94518C0.673449 6.79456 0.911005 6.71272 1.1552 6.71128L7.05871 6.70206L8.89694 0.8306C8.97411 0.588723 9.12213 0.378354 9.32002 0.229284C9.51791 0.0802147 9.75566 0 9.99958 0C9.99972 0 9.99986 7.77625e-08 10 7.77625e-08Z" fill="#FFAC33"></path></svg></div>
          </div>
        </div>
      </div>
    )
  );
};

export default CardReview;
