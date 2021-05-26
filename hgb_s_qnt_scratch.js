function setup() {
  createCanvas(100, 100);
  background('grey');
  inp_value = float(0.0).toFixed(1);
  inp = createInput('','text');
  inp.attribute('placeholder', '##.#');
  inp.attribute('inputMode', 'decimal');
  inp.attribute('focus');
  inp.style('text-align', 'center');
  inp.style('border', '0');
  inp.style('box-shadow', '0 0 15px 4px rgba(0,0,0,0.06)');
  inp.style('background-color', 'red');
  inp.style('color', 'white');
  //inp.style('font', 'bold');
  inp.attribute('step', '0.1');
  inp.position(0, 0);
  inp.size(100);
  //myInputEvent();
  inp.input(myInputEvent);
}
function draw() {
  //inp_value = inp.value();
  //inp.value(inp_value + '%');
}

function myInputEvent() {
  inp_value = float(this.value()).toFixed(1);
  console.log('you are typing: ', inp_value);
  //inp.value(inp_value + '%');
  //inp_value = this.value;
}
