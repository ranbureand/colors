/*!
** Generate a color palette by interpolating a start and end color.
** https://github.com/ranbureand/colors
** Licensed MIT © 2017 Andrea Buran [www.andreaburan.com].
*/

var colorHSL,
    colorRGB,
    colorHEX;

var palette = document.getElementsByClassName('palette');

var swatches = document.createElement('div');
swatches.setAttribute('class', 'swatches');
palette[0].appendChild(swatches);

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

  swatch = document.createElement('a');
  swatch.setAttribute('class', 'swatch');
  swatch.setAttribute('data-hex', colorHEX);
  swatch.setAttribute('style', 'background-color: ' + colorHEX + ';');
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

  swatch = document.createElement('a');
  swatch.setAttribute('class', 'swatch');
  swatch.setAttribute('data-hex', colorHEX);
  swatch.setAttribute('style', 'background-color: ' + colorHEX + ';');
  swatch.setAttribute('href', '#');
  swatches.appendChild(swatch);
}

function translateHEX(c) {
  colorHEX = c;

  colorRGB = hexToRgb(colorHEX);

  colorHSL = window.hsluv.rgbToHsluv([colorRGB[0]/255, colorRGB[1]/255, colorRGB[2]/255]);

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

  swatch = document.createElement('a');
  swatch.setAttribute('class', 'swatch');
  swatch.setAttribute('data-hex', colorHEX);
  swatch.setAttribute('style', 'background-color: ' + colorHEX + ';');
  swatch.setAttribute('href', '#');
  swatches.appendChild(swatch);
}

//translateHSL(20, 80, 60);
//translateRGB(239, 101, 64);
translateHEX('#ef6540');