import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import scss from "./carouselApp.module.scss";
import { getWeightedColor, isBetween } from "./utils/utils";

const boxes = [
  {
    img: "../../../public/box1.png",
  },
  {
    img: "../../../public/box2.png",
  },
  {
    img: "../../../public/box3.png",
  },
];

const CarouselApp = () => {
  // New state to keep track of the last X position
  // Non primitive value to trigger useEffect even if value is the same
  const [lastX, setLastX] = useState({ value: 0 });
  const [scales, setScales] = useState([1.35, 1, 1]); // Scales for each image
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const ref = useRef<HTMLDivElement>(null);

  const width = ref.current?.clientWidth || 0;

  const updateScale = (mx: number) => {
    const newScales = boxes.map((_, index) => {
      // TODO make values Dynamic
      const boxCenter = mx + (index * width) / 2;
      const start = -300;
      const end = width / 4;
      const distanceFromCenter = Math.abs(boxCenter);
      let scale =
        1 +
        (1.35 - 1) * (1 - distanceFromCenter / Math.max(Math.abs(start), end));
      scale = Math.max(1, Math.min(scale, 1.35)); // Ensure scale is between 1 and 1.35
      return scale;
    });
    if (mx === 0) setScales([1.35, 1, 1]);
    else setScales(newScales);
  };

  useEffect(() => {
    updateScale(lastX.value);
  }, [lastX]);

  const bind = useDrag(({ down, movement: [mx] }) => {
    if (lastX.value + mx > 300) return;
    if (lastX.value + mx < -width) return;

    if (down) {
      updateScale(lastX.value + mx);

      set({ x: lastX.value + mx, immediate: true });
    } else {
      const isShowBox1 = isBetween(lastX.value + mx, -width / 4, 2000);
      const isShowBox2 = isBetween(
        lastX.value + mx,
        -width / 2 - 300,
        -width / 4
      );
      const isShowBox3 = isBetween(lastX.value + mx, -4000, -width / 2 - 300);

      if (isShowBox1) {
        set({ x: 0, immediate: false });
        setLastX({ value: 0 });
        return;
      }
      if (isShowBox2) {
        set({ x: -width / 2, immediate: false });
        setLastX({ value: -width / 2 });
        return;
      }
      if (isShowBox3) {
        set({ x: -width, immediate: false });
        setLastX({ value: -width });
        return;
      }
    }
  });

  useEffect(() => {
    const backgroundColor = getWeightedColor(scales);
    document.body.style.backgroundColor = backgroundColor;
  }, [scales]);

  return (
    <>
      <div className={scss.carousel} ref={ref}>
        <animated.div
          {...bind()}
          style={{
            x: x.to((val) => `${val}px`),
          }}
          className={scss.reel}
        >
          <div style={{ width: "100%", display: "flex", gap: "33vw" }}>
            {boxes.map((box, index) => {
              return (
                <div
                  key={box.img}
                  className={scss.box}
                  style={{
                    backgroundImage: `URL(${box.img})`,
                    transform: `scale(${scales[index]})`,
                  }}
                ></div>
              );
            })}
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default CarouselApp;
