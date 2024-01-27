import { useNavigate } from "react-router-dom";
import scss from "./testCard.module.scss";
import { Button } from "antd";

interface TestCardProps {
  url: string;
  text: string;
  testId: string;
  img: string;
}

const TestCard = ({ url, text, testId, img }: TestCardProps) => {
  const navigate = useNavigate();
  const handleNavigateToApp = () => {
    navigate(url);
  };
  return (
    <div className={scss.testCard}>
      <div className={scss.info}>
        <div>
          <div className={scss.testId}>Test {testId}</div>
          <div className={scss.title}>{text}</div>
        </div>
        <Button onClick={handleNavigateToApp}>Case Study</Button>
      </div>

      <img src={img} />
    </div>
  );
};

export default TestCard;
