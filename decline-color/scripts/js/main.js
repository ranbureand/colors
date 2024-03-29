/*!
** Generate a color palette by declining a base color.
** https://github.com/ranbureand/colors
** Licensed MIT © 2017 Andrea Buran [www.andreaburan.com].
*/

var baseColor = [261, 97, 50]; // define the base color [HSLuv code]

var hueIterations = 36, // define the number of hue iterations of the palette
    lightnessIterations = 8; // define the number of lightness iterations of the palette

var hueIncrement = 360/hueIterations,
    saturationIncrement = 0,
    lightnessIncrement = 4;

var palette = document.getElementsByClassName('palette');

// define the function to generate the palette
function decline(h, s, l) {
  // convert the base color from RGB code to HSLuv code
  var hsluv = [h, s, l];

  lightnessIterations = lightnessIterations + 1;

  // generate the swatch columns
  for(var i = 0; i < hueIterations; i++) {
    // generate a swatch column
    var swatches = document.createElement('div');
    swatches.setAttribute('class', 'swatches');
    palette[0].appendChild(swatches);

    // generate the swatches in a swatch column
    for(var k = -lightnessIterations+1; k < lightnessIterations; k++) {

      // generate the new color
      var h = hsluv[0] + i*(hueIncrement), // shift the hue of the base color
          s = hsluv[1] + k*saturationIncrement, // shift the saturation of the base color
          l = hsluv[2] + k*lightnessIncrement; // shift the lightness of the base color

      var rgb = window.hsluv.hsluvToRgb([h, s, l]), // convert the new color from HSLuv code to RGB code
          hex = window.hsluv.hsluvToHex([h, s, l]); // convert the new color from HSLuv code to HEX code

      // generate the swatch of the new color
      var swatch = document.createElement('a');
      swatch.setAttribute('class', 'swatch');
      swatch.setAttribute('data-clipboard-text', hex);
      swatch.setAttribute('href', hex);
      swatch.setAttribute('style', 'background-color: ' + hex + ';');
      swatches.appendChild(swatch);
    }
  }
}

// generate the palette
decline(baseColor[0], baseColor[1], baseColor[2]);

// copy the HEX code of a color on press
var hexes = document.querySelectorAll('a'),
    clipboard = new Clipboard(hexes);

clipboard.on('success', function(e) {
  console.log(e);
});

clipboard.on('error', function(e) {
  console.log(e);
});
