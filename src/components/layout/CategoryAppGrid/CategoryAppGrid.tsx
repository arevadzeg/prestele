import { useState, useEffect, ReactElement } from "react";
import { useSprings, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import CategoryCard from "../../CategoryCard/CategoryCard";
import scss from "./categoryAppGrid.module.scss";
import PlusIcon from "../../../assets/PlusIcon";
import Button from "../../common/Button/Button";

const Grid = ({ children }: { children: ReactElement[] }) => {
  const [ref, bounds] = useMeasure();
  const [columns, setColumns] = useState(3);

  // Media queries for responsive design
  const calculateColumns = (width: number) => {
    if (width < 900) return 1;
    else if (width < 1200) return 2;
    else return 3;
  };

  useEffect(() => {
    setColumns(calculateColumns(bounds.width));
  }, [bounds.width]);

  const getPosition = (index: number, columnCount: number) => {
    const margin = 10; // Adjust the margin as needed
    const row = Math.floor(index / columnCount);
    const col = index % columnCount;
    const height = 300; // Adjust based on your card height
    return {
      x: col * (bounds.width / columnCount) + col * margin,
      y: row * height + row * margin,
    };
  };

  const [springs, api] = useSprings(children.length, (index) => {
    const { x, y } = getPosition(index, columns);
    return {
      from: { opacity: 0, transform: "scale(0)" },
      to: {
        opacity: 1,
        transform: "scale(1)",
        left: x,
        top: y,
      },
    };
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    api.start((index) => {
      const { x, y } = getPosition(index, columns);
      return {
        left: x,
        top: y,
      };
    });
  }, [columns, api, bounds.width]);

  // Use the correct width for each card based on the column count
  const cardStyle = {
    width: `calc(${100 / columns}% - ${columns > 1 ? 20 : 10}px)`, // Adjust the subtraction for margin
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        minHeight: "72vh",
      }}
    >
      {springs.map((style, i) => (
        <animated.div
          key={i}
          style={{ ...style, ...cardStyle, position: "absolute" }}
        >
          {children[i]}
        </animated.div>
      ))}
    </div>
  );
};

const App = () => {
  const cards = [
    { asd: "asd" },
    { asd: "asd" },
    { asd: "asd" },
    { asd: "asd" },
    { asd: "asd" },
    { asd: "asd" },
  ];

  return (
    <div className={scss.categoryApp}>
      <div className={scss.headerWrapper}>
        <div className={scss.titleContainer}>
          <span className={scss.title}>Manage Category Page</span>
          <span className={scss.subTitle}>
            Is simply dummy text of the printing and typesetting industry.
          </span>
        </div>
        <Button icon={<PlusIcon />}>Create New Category</Button>
      </div>

      <Grid>
        {cards.map((_, index) => (
          <CategoryCard key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default App;
