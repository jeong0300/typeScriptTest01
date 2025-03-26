import { Main2Styled } from "./styled";

interface MainProps {
  id: number;
  name: string;
  age: number;
  gender: "male" | "femail";
  // 있을 수도 있고 없을 수도 있을 때 (예외 처리)
  // gender?: number;
}

const Main2 = ({ id, name, age, gender }: MainProps) => {
  return (
    <Main2Styled>
      <div></div>
    </Main2Styled>
  );
};

export default Main2;
