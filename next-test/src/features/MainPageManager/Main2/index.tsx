import { Main2Styled } from "./styled";

interface MainProps {
  id: number;
  name?: string; // 있을 수도 있고 없을 수도 있을 때 (예외 처리)
  age: number;
  gender: number;
}

const Main2 = () => {
  return (
    <Main2Styled>
      <div></div>
    </Main2Styled>
  );
};

export default Main2;
