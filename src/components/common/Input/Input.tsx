import SearchSVG from "../../../assets/SearchSVG";
import scss from "./input.module.scss";

const Input = () => {
  return (
    <div className={scss.input}>
      <SearchSVG />
      <input
        className={scss.textfield}
        placeholder="Search for the desired information"
      />
    </div>
  );
};
export default Input;
