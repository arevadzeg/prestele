import { Route, Routes } from "react-router-dom";
import CategoryApp from "./pages/CategoryApp/CategoryApp";
import HoverAnimationApp from "./pages/HoverAnimationApp/HoverAnimationApp";
import GraphicAnimationApp from "./pages/GraphicAnimationApp.tsx/GraphicAnimationApp";
import MainPage from "./pages/MainPage/MainPage";

const Tests = [
  {
    title: "Admin Panel Manage Category Page",
    id: "1",
    url: "/test1",
    component: CategoryApp,
  },
  {
    title: "Admin Panel Manage Category Page",
    id: "2",
    url: "/test2",
    component: HoverAnimationApp,
  },
  {
    title: "Admin Panel Manage Category Page",
    id: "3",
    url: "/test3",
    component: GraphicAnimationApp,
  },
];

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        {Tests.map((test) => (
          <Route path={test.url} element={<test.component />} key={test.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
