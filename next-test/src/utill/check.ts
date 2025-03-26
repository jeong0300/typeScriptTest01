// 정규 표현식용 함수 모음

export const addFunction = (
  number: number,
  type: string,
  typeNumber: number
) => {
  return type === "-" ? number - typeNumber : number + typeNumber;
};
