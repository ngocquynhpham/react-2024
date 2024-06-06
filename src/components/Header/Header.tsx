import "./Header.scss";
import { SquareMenu } from "lucide-react";
import SearchInput from "../Input/SearchInput/SearchInput";

type Props = {
  logo?: string;
  brand?: string;
  className?: string;
};
const Header = (props: Props) => {
  let iLogo = props.logo || "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-1024.png";
  let iBrand = props.logo || "Movies.io";
  let klass = props.className || "";
  return (
    <div className={`header ${klass}`}>
      <a href="/"className="header__left">
        <img className="header_logo" src={iLogo} alt={iBrand} />
        <span className="header_brand">{iBrand}</span>
      </a>
      <div className="header__center">
        <SearchInput onChange={() => {}} />
      </div>
      <div className="header__right">
        <SquareMenu strokeWidth={1} />
      </div>
    </div>
  );
};

export default Header;
