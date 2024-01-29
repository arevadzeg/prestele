import { Route, Routes } from "react-router-dom";
import CategoryApp from "./pages/CategoryApp/CategoryApp";
import HoverAnimationApp from "./pages/CarouselApp/CarouselApp";
import GraphicAnimationApp from "./pages/GraphicAnimationApp.tsx/GraphicAnimationApp";
import MainPage from "./pages/MainPage/MainPage";

const Tests = [
  {
    title: "Admin Panel Manage Category Page",
    id: "1",
    url: "/test1",
    component: CategoryApp,
    img: "../../../public/test1.png",
  },
  {
    title: "Hover animation With drag and drop",
    id: "2",
    url: "/test2",
    component: HoverAnimationApp,
    img: "../../../public/test2.png",
  },
  {
    title: "Graphic animation",
    id: "3",
    url: "/test3",
    component: GraphicAnimationApp,
    disabled: true,
    img: "../../../public/test3.png",
  },
];

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage tests={Tests} />}></Route>
        {Tests.map((test) => (
          <Route path={test.url} element={<test.component />} key={test.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
