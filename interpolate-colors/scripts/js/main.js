/*!
** Generate a color palette by interpolating a start and end color.
** https://github.com/ranbureand/colors
** Licensed MIT © 2017 Andrea Buran [www.andreaburan.com].
*/

var startColor = [100, 100, 80], // define the start color [HSLuv code]
    endColor = [320, 20, 20]; // define the end color [HSLuv code]

var interpolations = 10; // define the number of interpolations between the start color and end color

// define the lerp function
function lerp (start, end, amount){
  return (1 - amount) * start + amount * end;
}

var palette = document.getElementsByClassName('palette');

// generate a swatch column
var swatches = document.createElement('div');
swatches.setAttribute('class', 'swatches');
swatches.setAttribute('style', 'width: ' + 100 + '%;');
palette[0].appendChild(swatches);

// generate the swatches in the swatch column
for(var i = 0; i < interpolations; i++) {

  var h = lerp(startColor[0], endColor[0], i / (interpolations-1)),
      s = lerp(startColor[1], endColor[1], i / (interpolations-1)),
      l = lerp(startColor[2], endColor[2], i / (interpolations-1));

  var hsl = [h, s, l],
      rgb = window.hsluv.hsluvToRgb([h, s, l]), // convert the new color from HSLuv code to RGB code
      hex = window.hsluv.hsluvToHex([h, s, l]); // convert the new color from HSLuv code to HEX code

  hsl = [Math.round(hsl[0]), Math.round(hsl[1]), Math.round(hsl[2])];
  rgb = [Math.round(rgb[0] * 255), Math.round(rgb[1] * 255), Math.round(rgb[2] * 255)];

  // generate the swatch of the new color
  var swatch = document.createElement('a');
  swatch.setAttribute('class', 'swatch');
  swatch.setAttribute('data-clipboard-text', hex);
  swatch.setAttribute('data-hsluv', hsl);
  swatch.setAttribute('data-rgb', rgb);
  swatch.setAttribute('data-hex', hex);
  swatch.setAttribute('href', hex);
  swatch.setAttribute('style', 'background-color: ' + hex + ';');
  swatches.appendChild(swatch);
}

// copy the HEX code of a color on press
var hexes = document.querySelectorAll('a'),
    clipboard = new Clipboard(hexes);

clipboard.on('success', function(e) {
  console.log(e);
});

clipboard.on('error', function(e) {
  console.log(e);
});