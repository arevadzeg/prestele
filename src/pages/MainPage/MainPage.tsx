import TestCard from "../../components/TestCard/TestCard";
import scss from "./mainPage.module.scss";

interface MainPageProps {
  tests: {
    title: string;
    id: string;
    url: string;
    component: () => JSX.Element;
    disabled?: boolean;
    img: string;
  }[];
}

const MainPage = ({ tests }: MainPageProps) => {
  return (
    <div className={scss.mainPage}>
      {tests.map((test) => (
        <TestCard
          text={test.title}
          url={test.url}
          key={test.id}
          testId={test.id}
          img={test.img}
          disabled={test.disabled}
        />
      ))}
    </div>
  );
};

export default MainPage;
