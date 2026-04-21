# Bclass Toolkit Farbgenerator

Dieses Toolkit bietet eine Reihe von Funktionen zur Generierung und Manipulation von Farbpaletten basierend auf verschiedenen Harmonie-Regeln. Es unterstützt Konvertierungen zwischen verschiedenen Farbformaten (HEX, RGB, HSL) und kann Farbharmonien wie ergänzend, analog, monochrom und mehr generieren.

## Funktionen

### `getRandomHexColor()`

Erzeugt eine zufällige HEX-Farbcodes.

### `colorAlgorithm(algorithm, sellectColor)`

Hauptfunktion zum Aufrufen verschiedener Farbgenerierungs-Algorithmen mit einer optionalen ausgewählten Farbe.

### `generate3ColorHarmony(baseColor, count)`

Erzeugt eine 3-Farben-Harmonie basierend auf der Basiskolor.

### `generate4ColorHarmony(baseColor, count)`

Erzeugt eine 4-Farben-Harmonie basierend auf der Basiskolor.

### `generateAnalogicalHarmony(baseColor, count)`

Erzeugt eine analoge Farbharmonie basierend auf der Basiskolor.

### `generateCrossAnalogicalHarmony(baseColor, count)`

Erzeugt eine Kreuz-analoge Farbharmonie basierend auf der Basiskolor.

### `generateMonochromaticHarmony(baseColor, count)`

Erzeugt eine monochrome Farbharmonie basierend auf der Basiskolor.

### `generateComplementaryHarmony(baseColor, count)`

Erzeugt eine ergänzende Farbharmonie basierend auf der Basiskolor.

### `generateColorPalette(baseColor, count)`

Erzeugt eine Farbpalette basierend auf der Basiskolor.

---

### `rgbToHsl(color)`

Konvertiert eine RGB-Farbe in das HSL-Format.

### `hslToRgb(h, s, l)`

Konvertiert eine HSL-Farbe in das RGB-Format.

### `hexToRGB(hex)`

Konvertiert eine HEX-Farbe in das RGB-Format.

### `rgbToHex(r, g, b)`

Konvertiert RGB-Werte in das HEX-Format.

### `convertToRGBA(color)`

Konvertiert eine HEX-Farbe in das RGBA-Format.

## Verwendung

### Verwendung mit JavaScript

```javascript
import colorAlgorithm from "./bClass-toolkit-color-generator.js";

// Erzeugen Sie eine zufällige Farbpalette unter Verwendung des Standardalgorithmus
const palette = colorAlgorithm();

// Erzeugen Sie eine 3-Farben-Harmonie mit einer bestimmten Farbe
const threeColorHarmony = colorAlgorithm("generate3ColorHarmony", "#FF0000");

// Erzeugen Sie eine analoge Farbharmonie mit 5 Farben
const analogicalHarmony = colorAlgorithm(
  "generateAnalogicalHarmony",
  "#00FF00",
);
```

### Verwendung von Vanilla HTML

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Farbgenerator</title>
  </head>
  <body>
    <select name="" id="color-algorithm">
      <option value="generateColorPalette">Sequenzielle Harmonie</option>
      <option value="generate3ColorHarmony">3er-Farbharmonie</option>
      <option value="generate4ColorHarmony">4er-Farbharmonie</option>
      <option value="generateAnalogicalHarmony">Analoge Harmonie</option>
      <option value="generateCrossAnalogicalHarmony">
        Kreuzanaloge Harmonie
      </option>
      <option value="generateMonochromaticHarmony">
        Monochromatische Harmonie
      </option>
      <option value="generateComplementaryHarmony">Komplementärharmonie</option>
    </select>
    <input type="color" id="base-color" value="#FF0000" required />
    <div>
      <button
        onclick="colorPalette.generateFromChosenClick()"
        type="submit"
        name="generate-palette"
      >
        Auswählen
      </button>
      <button
        onclick="colorPalette.randomGenerateClick()"
        type="submit"
        name="generate-random"
      >
        Zufällig
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
