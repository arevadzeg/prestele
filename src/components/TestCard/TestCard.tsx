import { useNavigate } from "react-router-dom";
import scss from "./testCard.module.scss";
import { Button } from "antd";

interface TestCardProps {
  url: string;
  text: string;
}

const TestCard = ({ url, text }: TestCardProps) => {
  const navigate = useNavigate();
  const handleNavigateToApp = () => {
    navigate(url);
  };
  return (
    <div className={scss.testCard}>
      <div className={scss.title}>{text}</div>;
      <Button onClick={handleNavigateToApp}>Check App</Button>
    </div>
  );
};

export default TestCard;
