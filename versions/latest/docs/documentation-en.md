# bClass toolkit color generator

This toolkit provides a set of functions for generating and manipulating color palettes based on different harmony rules. It supports conversion between various color formats (HEX, RGB, HSL) and can generate color harmonies such as complementary, analogous, monochromatic, and more.

## Functions

### `getRandomHexColor()`

Generates a random HEX color code.

### `colorAlgorithm(algorithm, sellectColor)`

Main function to call different color generation algorithms with an optional selected color.

### `generate3ColorHarmony(baseColor, count)`

Generates a 3-color harmony based on the base color.

### `generate4ColorHarmony(baseColor, count)`

Generates a 4-color harmony based on the base color.

### `generateAnalogicalHarmony(baseColor, count)`

Generates an analogical color harmony based on the base color.

### `generateCrossAnalogicalHarmony(baseColor, count)`

Generates a cross-analogical color harmony based on the base color.

### `generateMonochromaticHarmony(baseColor, count)`

Generates a monochromatic color harmony based on the base color.

### `generateComplementaryHarmony(baseColor, count)`

Generates a complementary color harmony based on the base color.

### `generateColorPalette(baseColor, count)`

Generates a color palette based on the base color.

---

### `rgbToHsl(color)`

Converts an RGB color to HSL format.

### `hslToRgb(h, s, l)`

Converts an HSL color to RGB format.

### `hexToRGB(hex)`

Converts a HEX color to RGB format.

### `rgbToHex(r, g, b)`

Converts RGB values to HEX format.

### `convertToRGBA(color)`

Converts a HEX color to RGBA format.

## Usage

### Usage with JavaScript

```javascript
import colorAlgorithm from "./bClass-toolkit-color-generator.js";

// Generate a random color palette using the default algorithm
const palette = colorAlgorithm();

// Generate a 3-color harmony using a specific color
const threeColorHarmony = colorAlgorithm("generate3ColorHarmony", "#FF0000");

// Generate an analogical color harmony with 5 colors
const analogicalHarmony = colorAlgorithm(
  "generateAnalogicalHarmony",
  "#00FF00",
);
```

### Using Vanilla HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Generator</title>
  </head>
  <body>
    <select name="" id="color-algorithm">
      <option value="generateColorPalette">Sequential Harmony</option>
      <option value="generate3ColorHarmony">3 Color Harmony</option>
      <option value="generate4ColorHarmony">4 Color Harmony</option>
      <option value="generateAnalogicalHarmony">Analogical Harmony</option>
      <option value="generateCrossAnalogicalHarmony">
        Cross Analogical Harmony
      </option>
      <option value="generateMonochromaticHarmony">
        Monochromatic Harmony
      </option>
      <option value="generateComplementaryHarmony">
        Complementary Harmony
      </option>
    </select>
    <input type="color" id="base-color" value="#FF0000" required />
    <div>
      <button
        onclick="colorPalette.generateFromChosenClick()"
        type="submit"
        name="generate-palette"
      >
        Sellect
      </button>
      <button
        onclick="colorPalette.randomGenerateClick()"
        type="submit"
        name="generate-random"
      >
        Random
      </button>
    </div>
    <div>
      <ul id="generateColor"></ul>
    </div>
    <script src="./bClass-color-generator.js"></script>
    <script>
      const generateColor = document.getElementById("generateColor");

      const colorPalette = {
        generateFromChosenClick: () =>
          bClassColorGenerator(
            document.getElementById("color-algorithm").value,
            document.getElementById("base-color").value,
          )["hex"].map((color) => {
            const node = document.createElement("li");
            node.style.background = color;
            generateColor.appendChild(node);
          }),
        randomGenerateClick: () =>
          bClassColorGenerator(
            document.getElementById("color-algorithm").value,
            null,
          )["hex"].map((color) => {
            const node = document.createElement("li");
            node.style.background = color;
            generateColor.appendChild(node);
          }),
      };
    </script>
  </body>
</html>
```

## License

> Distributed under the Bik Public License 4.0 License. See [LICENSE](./../../../LICENSE) for more information.
