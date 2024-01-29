import CategoryAppGrid from "../../components/layout/CategoryAppGrid/CategoryAppGrid";
import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";
import scss from "./categoryApp.module.scss";

const CategoryApp = () => {
  return (
    <div className={scss.categoryApp}>
      <Sidebar />
      <div className={scss.headerAndGrid}>
        <Header />
        <CategoryAppGrid />
      </div>
    </div>
  );
};

export default CategoryApp;
