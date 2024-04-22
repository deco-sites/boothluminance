export interface Props {
  /* 
   * format color-input 
   */
  color?: string;
}

export default function ColorP({ color = "#009900" }: Props) {
  return <>
    <input class="w-10" type="color" value={color} />
        </>
}