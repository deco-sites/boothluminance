interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  console.log(name)
  return <> 
        <div class="flex justify-center">
            <input class="w-10" type="color" value="#ff0000"/>
            <input class="w-10" type="color" value="#00ff00"/>
            <input class="w-10" type="color" value="#0000ff"/>
        </div>
  </>
}