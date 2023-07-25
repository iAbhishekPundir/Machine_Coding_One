import { Navlink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Navlink to="/"></Navlink> || <Navlink to="/search">Search</Navlink>
    </div>
  )
}


