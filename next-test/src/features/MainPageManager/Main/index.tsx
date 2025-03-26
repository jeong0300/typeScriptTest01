import clsx from "clsx";
import { MainStyled } from "./styled";
import Main2 from "../Main2";
import { useState } from "react";
import { useRouter } from "next/router";

const Main = () => {
  // const [number, setNumber] = useState<File>();

  // const data = [
  //   { id: 1, name: "ad", age: 123, gender: "male" },
  //   { id: 1, name: "ad", age: 123, gender: "male" },
  //   { id: 1, name: "ad", age: 123, gender: "male" },
  // ];

  // x: { id: number; name: string; age: number; gender: string },
  // const sample = data?.map((x: any, i: number) => {});

  const router = useRouter();

  const id = 2;

  return (
    <MainStyled className={clsx("main-wrap")}>
      <div className="main-title">메인 페이지</div>

      {/* <button
        onClick={() => {
          router.push(`/login`);
        }}
      >
        로그인 페이지 이동
      </button>
      <Main2 id={123} age={0} name={"as"} gender={"male"} /> */}

      <button
        onClick={() => {
          router.push(`https://www.naver.com/`);
        }}
      >
        네이버로 가기
      </button>

      <button
        onClick={() => {
          router.push(`https://www.google.co.kr/?hl=ko`);
        }}
      >
        구글로 가기
      </button>
    </MainStyled>
  );
};

export default Main;
