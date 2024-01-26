import Header from "../../components/layout/Header/Header";
import Sidebar from "../../components/layout/Sidebar/Sidebar";

const CategoryApp = () => {
  return (
    <div style={{ display: "flex", alignItems: "start" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Header />
        <div>asd</div>
      </div>
    </div>
  );
};

export default CategoryApp;
