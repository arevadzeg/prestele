import User from "../../User/User";
import Input from "../../common/Input/Input";

import scss from "./header.module.scss";

const Header = () => {
  return (
    <div className={scss.header}>
      <Input />

      <User />
    </div>
  );
};

export default Header;
