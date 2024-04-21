interface col {
  value : String
}

export default function (props : col) {

  return <>
    {/* <span class="bg-amber-300 text-stone-950">Hello World </span> */}
    {props.value}
    <div class="flex justify-center">
      <input class="w-10" type="color" id="html5colorpicker" value="#ff0000" />
      <input class="w-10" type="color" id="html5colorpicker" value="#00ff00" />
      <input class="w-10" type="color" id="html5colorpicker" value="#0000ff" />
    </div>
  </>
}