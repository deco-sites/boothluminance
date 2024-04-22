interface Props {
  /**
   * @format color-input
   * @title Escolha a cor de seu estande
   */
  "color"?: string;
}

export default function Section({ color = "#01f67c" }: Props) {
  return (
    <div>
      <div class="flex justify-center">
        <input class="w-10" type="color" value={color} />
      </div>
    </div>
  )
}