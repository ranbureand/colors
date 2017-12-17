/*
** Generate a color palette starting from a base color 
** 2017 Andrea Buran [www.andreaburan.com].
*/

var baseColor = [0, 170, 255]; // define the base color in RGB code

var hueIterations = 12, // define the number of hue iterations of the palette
    lightnessIterations = 4; // define the number of lightness iterations of the palette

var hueIncrement = 360/hueIterations, 
    lightnessIncrement = 4;

// define the function to generate the palette
function palette(r, g, b) {
  // convert the base color from RGB code to HSLuv code
  var hsluv = window.hsluv.rgbToHsluv([r/255, g/255, b/255]);

  lightnessIterations = lightnessIterations + 1;

  // generate the swatch columns
  for(var i = 0; i < hueIterations; i++) {
    // generate a swatch column
    var swatches = document.createElement('div');
    swatches.setAttribute('class', 'swatches');
    swatches.setAttribute('style', 'width: ' + 100/hueIterations + '%;');
    document.body.appendChild(swatches);

    // generate the swatches in a swatch column
    for(var k = -lightnessIterations; k < lightnessIterations-1; k++) {

      // generate the new color
      var h = hsluv[0] + i*(hueIncrement), // shift the hue of the base color
          s = hsluv[1], // shift the saturation of the base color
          l = hsluv[2] + k*lightnessIncrement; // shift the lightness of the base color

      var rgb = window.hsluv.hsluvToRgb([h, s, l]), // conver the new color from HSLuv code to RGB code
          hex = window.hsluv.hsluvToHex([h, s, l]); // conver the new color from HSLuv code to HEX code

      // generate the swatch of the new color
      var swatch = document.createElement('a');
      swatch.setAttribute('class', 'swatch');
      swatch.setAttribute('data-clipboard-text', hex);
      swatch.setAttribute('href', hex);
      swatch.setAttribute('style', 'background-color: ' + hex + '; height: ' + 100/(lightnessIterations*2-1) + '%;');
      swatches.appendChild(swatch);
    }
  }
}

// generate the palette
palette(baseColor[0], baseColor[1], baseColor[2]);

// copy the HEX code of a color on press
var hexes = document.querySelectorAll('a'),
    clipboard = new Clipboard(hexes);

clipboard.on('success', function(e) {
  console.log(e);
});

clipboard.on('error', function(e) {
  console.log(e);
});