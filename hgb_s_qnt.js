function setup() {
  createCanvas(windowWidth, windowHeight);
  wW = windowWidth;
  wH = windowHeight;
  noStroke();
  
  // min display box
  minDisp = 500;
  
  // white box
  if(wW > minDisp) {
    inputArea_startX = (wW/2) - (minDisp/2);
    inputArea_endX = minDisp;
  } else {
    inputArea_startX = 0;
    inputArea_endX = wW;
  }
  if(wH > minDisp) {
    inputArea_startY = (wH/2) - (minDisp/2);
    inputArea_endY = minDisp;
  } else {
    inputArea_startY = 0;
    inputArea_endY = wH;
  }
  
  valueInt = inputArea_endY*(3/4)*(1/6);
  valueStart = inputArea_startY + inputArea_endY/4 + valueInt;
  
  totalInput = [0, 0, 0];
  //totalDisplay = 'Click!';
  totalDisplay = '';
  totalClick = 0;
  totalKeyCount = 0;
  totalSum = 0;
  
  hgbsInput = [0, 0, 0];
  //hgbsDisplay = 'Click!';
  hgbsDisplay = '';
  hgbsClick = 0;
  hgbsKeyCount = 0;
  hgbsSum = 0;
  
  click_highlight = 0;
  ch_inc = 0;
  
  totalTLX = wW/2 + 10;
  totalTLY = valueStart - valueInt/2;
  totalBRX = inputArea_endX/4;
  totalBRY = totalTLY + valueInt/1.1;
  totalInp = createInput('', 'decimal');
  totalInp.attribute('inputmode', 'decimal');
  totalInp.attribute('placeholder', 'Click!');
  totalInp.style('text-align', 'center');
  totalInp.style('font-size', '200%');
  /*totalInp.style('font-size', 
                str('\'' + 
                    min(min(inputArea_endX, 
                            inputArea_endY), 
                        minDisp/250*100) + 
                    '%\''));//'200%');*/
  totalInp.style('border', '0');
  //totalInp.style('box-shadow', '0 0 15px 4px rgba(0,0,0,0.06)');
  totalInp.style('background-color', 'rgb(165, 172, 175)');
  totalInp.size(totalBRX);
  totalInp.position(totalTLX*1.02, totalTLY*1.03);
  //totalInp.attribute('type', 'hidden');
  
  hgbsTLX = wW/2 + 10;
  hgbsTLY = (valueStart + valueInt*2) - valueInt/2;
  hgbsBRX = inputArea_endX/4;
  hgbsBRY = hgbsTLY + valueInt/1.1;
  hgbsInp = createInput('', 'decimal');
  hgbsInp.attribute('inputmode', 'decimal');
  hgbsInp.attribute('placeholder', 'Click!');
  hgbsInp.style('text-align', 'center');
  hgbsInp.style('font-size', '200%');
  hgbsInp.style('border', '0');
  //hgbsInp.style('box-shadow', '0 0 15px 4px rgba(0,0,0,0.06)');
  hgbsInp.style('background-color', 'rgb(165, 172, 175)');
  hgbsInp.size(hgbsBRX);
  hgbsInp.position(hgbsTLX*1.02, hgbsTLY*1.02);
  //hgbsInp.attribute('type', 'hidden');
  
  resetTLX = (inputArea_startX + (min(inputArea_endX, minDisp)*0.8));
  resetTLY = (inputArea_startY + (min(inputArea_endY, minDisp)*0.9));
  resetBRX = (inputArea_startX + inputArea_endX)*0.99 - resetTLX;
  resetBRY = (inputArea_startY + inputArea_endY)*0.99 - resetTLY;
  
  hgbsABSDisplay = '?';
  hgboRELDisplay = '?';
  hgboABSDisplay = '?';
}

function draw() {
  background('rgb(0, 51, 89)');
  
  fill(255);
  
  rect(inputArea_startX, inputArea_startY, 
       inputArea_endX, min(max(wH/2, minDisp), minDisp));
  textSize(min(min(wW, wH), minDisp)*0.15);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Hgb S Qnt', wW/2, inputArea_startY + inputArea_endY/8);
  stroke(0);
  line(inputArea_startX + inputArea_endX*0.2/2, 
       inputArea_startY + inputArea_endY/4, 
       inputArea_startX + inputArea_endX*0.9, 
       inputArea_startY + inputArea_endY/4); 
  noStroke();
  
  // left side
  textSize(min(min(wW, wH), minDisp)*0.05);
  textAlign(RIGHT, CENTER);
  text('Total Hgb :', wW/2, valueStart);
  text('# Hgb S :', wW/2, valueStart + valueInt);
  text('% Hgb S :', wW/2, valueStart + valueInt*2);
  text('% Hgb Other :', wW/2, valueStart + valueInt*3);
  text('# Hgb Other :', wW/2, valueStart + valueInt*4);
  noFill();
  noStroke();
  
  // right side
  fill('rgb(165, 172, 175)');
  //rect(totalTLX, totalTLY, totalBRX*1.2, totalBRY - totalTLY);
  //rect(hgbsTLX, hgbsTLY, totalBRX*1.2, hgbsBRY - hgbsTLY);
  fill(0);
  textAlign(CENTER, CENTER);
  text(totalDisplay, 
       totalTLX + (totalBRX*1.2)/2, valueStart);
  text(hgbsABSDisplay, 
       totalTLX + (totalBRX*1.2)/2, valueStart + valueInt);
  text(hgbsDisplay, 
       totalTLX + (totalBRX*1.2)/2, valueStart + valueInt*2);
  text(hgboRELDisplay, 
       totalTLX + (totalBRX*1.2)/2, valueStart + valueInt*3);
  text(hgboABSDisplay, 
       totalTLX + (totalBRX*1.2)/2, valueStart + valueInt*4);
  
  // reset button
  fill('rgb(165, 172, 175)');  
  rect(resetTLX, resetTLY, resetBRX, resetBRY);
  fill(0, 100);
  textAlign(CENTER, CENTER);
  textSize(min(min(wW, wH), minDisp)*0.04);
  text('Reset', 
       resetTLX + (resetBRX)/2, 
       resetTLY + (resetBRY)/2);
  
  if(totalClick === 1) {
    stroke(68, 214, 44, click_highlight);
    strokeWeight(5*abs(sin(ch_inc)));
    noFill();
    //rect(totalTLX, totalTLY, totalBRX*1.2, totalBRY - totalTLY);
    noStroke();
    strokeWeight(1);
    
    click_highlight = 255*abs(sin(ch_inc));
    ch_inc += PI/55;
    if(totalSum === 0) {
      //totalDisplay = '##.#';
      totalInp.attribute('placeholder', '##.#');
    }
  }
  if(hgbsClick === 1) {
    stroke(68, 214, 44, click_highlight);
    strokeWeight(5*abs(sin(ch_inc)));
    noFill();
    //rect(hgbsTLX, hgbsTLY, hgbsBRX*1.2, hgbsBRY - hgbsTLY);
    noStroke();
    strokeWeight(1);
    
    click_highlight = 255*abs(sin(ch_inc));
    ch_inc += PI/50;
    if(hgbsSum === 0) {
      //hgbsDisplay = '##.#';
      hgbsInp.attribute('placeholder', '##.#');
    }
  }
  
  totalValue = float(totalInp.value());
  if(isNaN(totalValue)){
    totalInp.style('background-color', 'rgb(165, 172, 175)');
    totalValid = 0;
  } else if(totalValue > 20 | totalValue < 0) {
    totalInp.style('background-color', 'red');
    totalValid = 0;
  } else {
    totalInp.style('background-color', 'rgb(165, 172, 175)');
    totalValid = 1;
  }
  hgbsValue = float(hgbsInp.value());
  if(isNaN(hgbsValue)){
    hgbsInp.style('background-color', 'rgb(165, 172, 175)');
    hgbsValid = 0;
  } else if(hgbsValue > 100 | hgbsValue < 0) {
    hgbsInp.style('background-color', 'red');
    hgbsValid = 0;
  } else {
    hgbsInp.style('background-color', 'rgb(165, 172, 175)');
    hgbsValid = 1;
  }
  
  if(totalValid === 1 & hgbsValid === 1) {
    hgbsABSDisplay = round(totalInp.value() * hgbsValue/100, 1).toFixed(1);
    hgboRELDisplay = round(100 - hgbsValue, 1).toFixed(1);
    hgboABSDisplay = round(totalInp.value() * hgboRELDisplay/100, 1).toFixed(1);
  } else {
    hgbsABSDisplay = '?';
    hgboRELDisplay = '?';
    hgboABSDisplay = '?';
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  wW = windowWidth;
  wH = windowHeight;
  
  // white box
  if(wW > minDisp) {
    inputArea_startX = (wW/2) - (minDisp/2);
    inputArea_endX = minDisp;
  } else {
    inputArea_startX = 0;
    inputArea_endX = wW;
  }
  if(wH > minDisp) {
    inputArea_startY = (wH/2) - (minDisp/2);
    inputArea_endY = minDisp;
  } else {
    inputArea_startY = 0;
    inputArea_endY = wH;
  }
  
  valueInt = inputArea_endY*(3/4)*(1/6);
  valueStart = inputArea_startY + inputArea_endY/4 + valueInt;
  
  totalInput = [0, 0, 0];
  totalDisplay = 'Click!';
  totalClick = 0;
  totalKeyCount = 0;
  
  hgbsInput = [0, 0, 0];
  hgbsDisplay = 'Click!';
  hgbsClick = 0;
  hgbsKeyCount = 0;
  
  click_highlight = 0;
  ch_inc = 0;
  
  totalTLX = wW/2 + 10;
  totalTLY = valueStart - valueInt/2;
  totalBRX = inputArea_endX/4;
  totalBRY = totalTLY + valueInt/1.1;
  
  hgbsTLX = wW/2 + 10;
  hgbsTLY = (valueStart + valueInt*2) - valueInt/2;
  hgbsBRX = inputArea_endX/4;
  hgbsBRY = hgbsTLY + valueInt/1.1;
  
  resetTLX = (inputArea_startX + (min(inputArea_endX, minDisp)*0.8));
  resetTLY = (inputArea_startY + (min(inputArea_endY, minDisp)*0.9));
  resetBRX = (inputArea_startX + inputArea_endX)*0.99 - resetTLX;
  resetBRY = (inputArea_startY + inputArea_endY)*0.99 - resetTLY;
  
  totalInp.size(totalBRX);
  totalInp.position(totalTLX*1.02, totalTLY*1.02);
  
  hgbsInp.size(hgbsBRX);
  hgbsInp.position(hgbsTLX*1.02, hgbsTLY*1.02);
}

function mouseClicked() {
  /*
  if (mouseX >= totalTLX & mouseY >= totalTLY &
      mouseX <= (totalTLX + totalBRX) & 
      mouseY <= totalBRY) {
    totalClick = 1;
    hgbsClick = 0;
  } else if(mouseX >= hgbsTLX & mouseY >= hgbsTLY &
            mouseX <= (hgbsTLX + hgbsBRX) & 
            mouseY <= hgbsBRY) {
    hgbsClick = 1;
    totalClick = 0;
  } */
  
  if(mouseX >= resetTLX & mouseY >= resetTLY &
            mouseX <= (resetTLX + resetBRX) & 
            mouseY <= (resetTLY + resetBRY)) {
    totalInput = [0, 0, 0];
    //totalDisplay = 'Click!';
    totalDisplay = '';
    totalClick = 0;
    totalKeyCount = 0;
    totalSum = 0;

    hgbsInput = [0, 0, 0];
    //hgbsDisplay = 'Click!';
    hgbsDisplay = '';
    hgbsClick = 0;
    hgbsKeyCount = 0;
    hgbsSum = 0;
    
    hgbsABSDisplay = '?';
    hgboRELDisplay = '?';
    hgboABSDisplay = '?';
    
    totalInp.value('');
    totalInp.attribute('placeholder', 'Click!');
    hgbsInp.value('');
    hgbsInp.attribute('placeholder', 'Click!');
  } else {
    totalClick = 0;
    hgbsClick = 0;
  }
  click_highlight = 0;
  ch_inc = 0;
}

function keyTyped() {
  if (totalClick === 1 & (key >= '0' & key <= '9')) {
    totalInput.push(key);
    totalInput = totalInput.slice(-3);
    totalDisplay = totalInput[0] + totalInput[1] + '.' + totalInput[2];
    totalDisplay = round(totalDisplay, 1).toFixed(1);
    totalSum = totalInput.reduce((accumulator, currentValue) => 
                                 float(accumulator) + float(currentValue))
  } 
  if(hgbsClick === 1 & (key >= '0' & key <= '9')) {
    hgbsInput.push(key);
    hgbsInput = hgbsInput.slice(-3);
    hgbsDisplay = hgbsInput[0] + hgbsInput[1] + '.' + hgbsInput[2];
    hgbsDisplay = round(hgbsDisplay, 1).toFixed(1);
    hgbsSum = hgbsInput.reduce((accumulator, currentValue) => 
                               float(accumulator) + float(currentValue))
  } 
  if(totalDisplay > 0 & hgbsDisplay > 0) {
    hgbsABSDisplay = round(totalDisplay * hgbsDisplay/100, 1).toFixed(1);
    hgboRELDisplay = round(100 - hgbsDisplay, 1).toFixed(1);
    hgboABSDisplay = round(totalDisplay * hgboRELDisplay/100, 1).toFixed(1);
  }

  // uncomment to prevent any default behavior
  //return false;
}

function touchStarted() {
  /*if (mouseX >= totalTLX & mouseY >= totalTLY &
      mouseX <= (totalTLX + totalBRX) & 
      mouseY <= totalBRY) {
    totalClick = 1;
    hgbsClick = 0;
  } else if(mouseX >= hgbsTLX & mouseY >= hgbsTLY &
            mouseX <= (hgbsTLX + hgbsBRX) & 
            mouseY <= hgbsBRY) {
    hgbsClick = 1;
    totalClick = 0;
  } else if(mouseX >= resetTLX & mouseY >= resetTLY &
            mouseX <= (resetTLX + resetBRX) & 
            mouseY <= (resetTLY + resetBRY)) {
    totalInput = [0, 0, 0];
    totalDisplay = 'Click!';
    totalClick = 0;
    totalKeyCount = 0;
    totalSum = 0;

    hgbsInput = [0, 0, 0];
    hgbsDisplay = 'Click!';
    hgbsClick = 0;
    hgbsKeyCount = 0;
    hgbsSum = 0;
    
    hgbsABSDisplay = '?';
    hgboRELDisplay = '?';
    hgboABSDisplay = '?';
    
    totalInp.attribute('placeholder', 'Click!');
    hgbsInp.attribute('placeholder', 'Click!');
  } else {
    totalClick = 0;
    hgbsClick = 0;
  }
  click_highlight = 0;
  ch_inc = 0;
  */
  minDisp = wW;
  windowResized();
}
