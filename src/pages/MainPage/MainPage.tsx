import TestCard from "../../components/TestCard/TestCard";

const Tests = [
  {
    title: "Admin Panel Manage Category Page",
    id: "1",
    url: "/test1",
  },
  {
    title: "Admin Panel Manage Category Page",
    id: "2",
    url: "/test2",
  },
  {
    title: "Admin Panel Manage Category Page",
    id: "3",
    url: "/test3",
  },
];

const MainPage = () => {
  return (
    <>
      <h1>Test Projects</h1>

      {Tests.map((test) => (
        <TestCard text={test.title} url={test.url} key={test.id} />
      ))}
    </>
  );
};

export default MainPage;
