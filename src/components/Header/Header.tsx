import React, { ReactNode } from "react";
import "./Header.scss";
import { SquareMenu } from "lucide-react";
import SearchInput from "../Input/SearchInput/SearchInput";

type Props = {
  logo: string;
  brand: string;
  className?: string;
};
const Header = (props: Props) => {
  return (
    <div className={`header ${props.className}`}>
      <div className="header__left">
        <img className="header_logo" src={props.logo} alt={props.brand} />
        <span className="header_brand">{props.brand}</span>
      </div>
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
