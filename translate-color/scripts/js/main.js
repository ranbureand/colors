/*!
** Generate a color palette by interpolating a start and end color.
** https://github.com/ranbureand/colors
** Licensed MIT © 2017 Andrea Buran [www.andreaburan.com].
*/

var colorHSL,
    colorRGB,
    colorHEX;

// create codes

var codes = document.createElement('div');
    codes.setAttribute('class', 'codes');
    document.body.prepend(codes);

// create HEX code

var valuesHEX = document.createElement('div');
    valuesHEX.setAttribute('class', 'values-hex');
    valuesHEX.setAttribute('data-clipboard-text', colorHEX);
    valuesHEX.textContent = 'HEX ';
    codes.prepend(valuesHEX);

var valueX = document.createElement('span');
    valueX.setAttribute('class', 'value-x');
    valuesHEX.append(valueX);

// create RGB code

var valuesRGB = document.createElement('div');
    valuesRGB.setAttribute('class', 'values-rgb');
    valuesRGB.textContent = 'RGB ';
    codes.prepend(valuesRGB);

var valueR = document.createElement('span');
    valueR.setAttribute('class', 'value-r');
    valuesRGB.append(valueR);
    valuesRGB.append('/');

var valueG = document.createElement('span');
    valueG.setAttribute('class', 'value-g');
    valuesRGB.append(valueG);
    valuesRGB.append('/');

var valueB = document.createElement('span');
    valueB.setAttribute('class', 'value-b');
    valuesRGB.append(valueB);

// create HSL code

var valuesHSL = document.createElement('div');
    valuesHSL.setAttribute('class', 'values-hsl');
    valuesHSL.textContent = 'HSL ';
    codes.prepend(valuesHSL);

var valueH = document.createElement('span');
    valueH.setAttribute('class', 'value-h');
    valuesHSL.append(valueH);
    valuesHSL.append('/');

var valueS = document.createElement('span');
    valueS.setAttribute('class', 'value-s');
    valuesHSL.append(valueS);
    valuesHSL.append('/');

var valueL = document.createElement('span');
    valueL.setAttribute('class', 'value-l');
    valuesHSL.append(valueL);

// create palette

var palette = document.createElement('div');
    palette.setAttribute('class', 'palette');
    document.body.prepend(palette);

// create swatches

var swatches = document.createElement('div');
    swatches.setAttribute('class', 'swatches');
    palette.append(swatches);

// define swatch

var swatch;





function hexToRgb(c) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return result = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ];
}

function translateHSL(h, s, l) {
  colorHSL = [h, s, l];

  colorRGB = window.hsluv.hsluvToRgb([colorHSL[0], colorHSL[1], colorHSL[2]]);
  colorRGB = [Math.round(colorRGB[0] * 255), Math.round(colorRGB[1] * 255), Math.round(colorRGB[2] * 255)];

  colorHEX = window.hsluv.hsluvToHex([colorHSL[0], colorHSL[1], colorHSL[2]]);

  console.log(colorHSL[0] + ', ' + colorHSL[1] + ', ' + colorHSL[2]);
  console.log(colorRGB[0] + ', ' + colorRGB[1] + ', ' + colorRGB[2]);
  console.log(colorHEX);

  // generate the swatch of the new color
  swatch = document.createElement('a');
  swatch.setAttribute('class', 'swatch');
  swatch.setAttribute('data-rgb', colorRGB);
  swatch.setAttribute('style', 'background-color: rgba(' + colorRGB[0] + ', ' + colorRGB[1] + ', ' + colorRGB[2] + ', 1.0);');
  swatch.setAttribute('href', '#');
  swatches.appendChild(swatch);
}

function translateRGB(r, g, b) {
  colorRGB = [r, g, b];

  colorHSL = window.hsluv.rgbToHsluv([colorRGB[0]/255, colorRGB[1]/255, colorRGB[2]/255]);

  colorHEX = window.hsluv.hsluvToHex([colorHSL[0], colorHSL[1], colorHSL[2]]);

  console.log(Math.round(colorHSL[0]) + ', ' + Math.round(colorHSL[1]) + ', ' + Math.round(colorHSL[2]));
  console.log(colorRGB[0] + ', ' + colorRGB[1] + ', ' + colorRGB[2]);
  console.log(colorHEX);

  // generate the swatch of the new color
  swatch = document.createElement('a');
  swatch.setAttribute('class', 'swatch');
  swatch.setAttribute('data-rgb', colorRGB);
  swatch.setAttribute('style', 'background-color: rgba(' + colorRGB[0] + ', ' + colorRGB[1] + ', ' + colorRGB[2] + ', 1.0);');
  swatch.setAttribute('href', '#');
  swatches.appendChild(swatch);
}

function translateHEX(c) {
  colorHEX = c;

  colorRGB = hexToRgb(colorHEX);

  colorHSL = window.hsluv.rgbToHsluv([colorRGB[0]/255, colorRGB[1]/255, colorRGB[2]/255]);
  colorHSL = [Math.round(colorHSL[0]), Math.round(colorHSL[1]), Math.round(colorHSL[2])];

  console.log(colorHSL[0] + ', ' + colorHSL[1] + ', ' + colorHSL[2]);
  console.log(colorRGB[0] + ', ' + colorRGB[1] + ', ' + colorRGB[2]);
  console.log(colorHEX);

  // generate the swatch of the new color
  swatch = document.createElement('div');
  swatch.setAttribute('class', 'swatch');
  swatch.setAttribute('data-rgb', colorRGB);
  swatch.setAttribute('style', 'background-color: rgba(' + colorRGB[0] + ', ' + colorRGB[1] + ', ' + colorRGB[2] + ', 1.0);');
  swatches.appendChild(swatch);
}

function defineCodes() {
  valueH.textContent = Math.round(colorHSL[0]);
  valueS.textContent = Math.round(colorHSL[1]);
  valueL.textContent = Math.round(colorHSL[2]);
  valuesHSL.setAttribute('data-clipboard-text', colorHSL);

  valueR.textContent = Math.round(colorRGB[0]);
  valueG.textContent = Math.round(colorRGB[1]);
  valueB.textContent = Math.round(colorRGB[2]);
  valuesRGB.setAttribute('data-clipboard-text', colorRGB);

  valueX.textContent = colorHEX;
  valuesHEX.setAttribute('data-clipboard-text', colorHEX);
}

//translateHSL(20, 80, 60);
//translateRGB(239, 101, 64);
translateHEX('#FAFAD1');
defineCodes();

// copy the HEX code of a color on press
var clipboardValues = document.querySelectorAll('[class*="values"]'),
    clipboard = new Clipboard(clipboardValues);

clipboard.on('success', function(e) {
  console.log(e);
});

clipboard.on('error', function(e) {
  console.log(e);
});