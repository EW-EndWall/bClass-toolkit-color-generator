# Quick Start

## 1. Stage

First, we perform our import process.

```js
import bClassColorGenerator from "./bClass-color-generator.js";
```

## 2. Stage

We write our methods that will perform the operations.

```js
export default {
  data() {
    return {
      colorPalette: null,
    };
  },
  methods: {
    generateFromChosenClick() {
      const selectAlgorithm = document.getElementById("color-algorithm").value;
      const selectColor = document.getElementById("base-color").value;
      this.colorPalette = bClassColorGenerator(selectAlgorithm, selectColor);
    },
    randomGenerateClick() {
      const selectAlgorithm = document.getElementById("color-algorithm").value;
      this.colorPalette = bClassColorGenerator(selectAlgorithm, null);
    },
  },
};
```

## 3. Stage

We are designing an interface where options can be determined

### Generate mod

- generateColorPalette
- generate3ColorHarmony
- generate4ColorHarmony
- generateAnalogicalHarmony
- generateCrossAnalogicalHarmony
- generateMonochromaticHarmony
- generateComplementaryHarmony

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
    @click="generateFromChosenClick"
    type="submit"
    name="generate-palette"
  >
    Secilen
  </button>
  <button @click="randomGenerateClick" type="submit" name="generate-random">
    Rasgele
  </button>
</div>
```

## 4. Stage

We are designing an interface where the outputs will be displayed

```html
<div id="generateColor">
  <div v-if="colorPalette">
    <div>
      <div
        v-for="(color, index) in colorPalette"
        :key="index"
        :style="{ 'background-color': color }"
      ></div>
    </div>
  </div>
</div>
```
