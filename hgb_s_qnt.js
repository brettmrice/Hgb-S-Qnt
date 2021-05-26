function setup() {
  createCanvas(windowWidth, windowHeight);
  wW = windowWidth;
  wH = windowHeight;
  noStroke();
  
  // white box
  if(wW > 400) {
    inputArea_startX = (wW/2) - (400/2);
    inputArea_endX = 400;
  } else {
    inputArea_startX = 0;
    inputArea_endX = wW;
  }
  if(wH > 400) {
    inputArea_startY = (wH/2) - (400/2);
    inputArea_endY = 400;
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
  totalSum = 0;
  
  hgbsInput = [0, 0, 0];
  hgbsDisplay = 'Click!';
  hgbsClick = 0;
  hgbsKeyCount = 0;
  hgbsSum = 0;
  
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
  
  resetTLX = (inputArea_startX + inputArea_endX)*0.88;
  resetTLY = (inputArea_startY + inputArea_endY)*0.93;
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
       inputArea_endX, min(max(wH/2, 400), 400));
  textSize(min(min(wW, wH), 400)*0.15);
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
  textSize(min(min(wW, wH), 400)*0.05);
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
  rect(totalTLX, totalTLY, totalBRX*1.2, totalBRY - totalTLY);
  rect(hgbsTLX, hgbsTLY, totalBRX*1.2, hgbsBRY - hgbsTLY);
  fill(0);
  textAlign(CENTER, CENTER);
  //text(totalDisplay, (wW/2 + 10) + wW/12, valueStart);
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
  textSize(min(min(wW, wH), 400)*0.04);
  text('Reset', 
       resetTLX + (resetBRX)/2, 
       resetTLY + (resetBRY)/2);
  
  if(totalClick === 1) {
    stroke(68, 214, 44, click_highlight);
    strokeWeight(5*abs(sin(ch_inc)));
    noFill();
    rect(totalTLX, totalTLY, totalBRX*1.2, totalBRY - totalTLY);
    noStroke();
    strokeWeight(1);
    
    click_highlight = 255*abs(sin(ch_inc));
    ch_inc += PI/55;
    if(totalSum === 0) {
      totalDisplay = '##.#';
    }
  }
  if(hgbsClick === 1) {
    stroke(68, 214, 44, click_highlight);
    strokeWeight(5*abs(sin(ch_inc)));
    noFill();
    rect(hgbsTLX, hgbsTLY, hgbsBRX*1.2, hgbsBRY - hgbsTLY);
    noStroke();
    strokeWeight(1);
    
    click_highlight = 255*abs(sin(ch_inc));
    ch_inc += PI/50;
    if(hgbsSum === 0) {
      hgbsDisplay = '##.#';
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  wW = windowWidth;
  wH = windowHeight;
  
  // white box
  if(wW > 400) {
    inputArea_startX = (wW/2) - (400/2);
    inputArea_endX = 400;
  } else {
    inputArea_startX = 0;
    inputArea_endX = wW;
  }
  if(wH > 400) {
    inputArea_startY = (wH/2) - (400/2);
    inputArea_endY = 400;
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
  
  resetTLX = (inputArea_startX + inputArea_endX)*0.88;
  resetTLY = (inputArea_startY + inputArea_endY)*0.93;
  resetBRX = (inputArea_startX + inputArea_endX)*0.99 - resetTLX;
  resetBRY = (inputArea_startY + inputArea_endY)*0.99 - resetTLY;
}

function mouseClicked() {
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
