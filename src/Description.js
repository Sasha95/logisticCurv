import React from "react";
import { Tex } from "react-tex";

const mapping = "x_{n+1} =  \\mu \\cdot x_{n}(1-x_{n})";

export const HeadFormule = () => {
  return (
    <>
      <div>Рассмотрим отображение:</div>
      <Tex texContent={mapping} />
    </>
  );
};
