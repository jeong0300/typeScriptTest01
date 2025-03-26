import clsx from "clsx";
import { MainStyled } from "./styled";

const Main = () => {
  return (
    <MainStyled className={clsx("main-wrap")}>
      <div className="main-title">메인 페이지</div>
    </MainStyled>
  );
};

export default Main;
