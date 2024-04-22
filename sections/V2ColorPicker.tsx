export interface p {
  /*
  * @description Selecione a cor de seu estande
  * @format color-input
  * @title Seletor de cor
  */

  color? : string
}


export default function ColorP(color : p) {
  return <> 
    {color}
  </>
}