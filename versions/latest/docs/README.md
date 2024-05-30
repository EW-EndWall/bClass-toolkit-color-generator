# Quick Start

First we need to import the toolkit

```js
import bClassColorGenerator from "./bClass-color-generator.js";
```

or

```html
<script src="./bClass-color-generator.js"></script>
```

We must transfer the information we need to the variable

> [!TIP] > **Generate mod**
>
> - generateColorPalette
> - generate3ColorHarmony
> - generate4ColorHarmony
> - generateAnalogicalHarmony
> - generateCrossAnalogicalHarmony
> - generateMonochromaticHarmony
> - generateComplementaryHarmony

```js
const generateColor = document.getElementById("generateColor");
```

We must enter the information into the function for the operation.

```js
const colorPalette = {
  generateFromChosenClick: () =>
    bClassColorGenerator(
      document.getElementById("color-algorithm").value,
      document.getElementById("base-color").value
    )["hex"].map((color) => {
      const node = document.createElement("li");
      node.style.background = color;
      generateColor.appendChild(node);
    }),
  randomGenerateClick: () =>
    bClassColorGenerator(
      document.getElementById("color-algorithm").value,
      null
    )["hex"].map((color) => {
      const node = document.createElement("li");
      node.style.background = color;
      generateColor.appendChild(node);
    }),
};
```

We are designing an interface where options can be determined

```html
<select name="" id="color-algorithm">
  <option value="generateColorPalette">Sequential Harmony</option>
  <option value="generate3ColorHarmony">3 Color Harmony</option>
  <option value="generate4ColorHarmony">4 Color Harmony</option>
  <option value="generateAnalogicalHarmony">Analogical Harmony</option>
  <option value="generateCrossAnalogicalHarmony">
    Cross Analogical Harmony
  </option>
  <option value="generateMonochromaticHarmony">Monochromatic Harmony</option>
  <option value="generateComplementaryHarmony">Complementary Harmony</option>
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
```
