import TestCard from "../../components/TestCard/TestCard";
import scss from "./mainPage.module.scss";

const Tests = [
  {
    title: "Admin Panel Manage Category Page",
    id: "1",
    url: "/test1",
    img: "../../../public/test1.png",
  },
  {
    title: "Admin Panel Manage Category Page",
    id: "2",
    url: "/test2",
    img: "../../../public/test2.png",
  },
  {
    title: "Admin Panel Manage Category Page",
    id: "3",
    url: "/test3",
    img: "../../../public/test3.png",
  },
];

const MainPage = () => {
  return (
    <div className={scss.mainPage}>
      {Tests.map((test) => (
        <TestCard
          text={test.title}
          url={test.url}
          key={test.id}
          testId={test.id}
          img={test.img}
        />
      ))}
    </div>
  );
};

export default MainPage;
