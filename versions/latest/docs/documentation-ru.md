# Генератор цветов Bclass Toolkit

Этот набор инструментов предоставляет набор функций для генерации и обработки цветовых палитр на основе различных правил гармонии. Он поддерживает преобразование между различными цветовыми форматами (HEX, RGB, HSL) и может генерировать цветовые гармонии, такие как дополнительные, аналоговые, монохромные и другие.

## Функции

### `getRandomHexColor()`

Генерирует случайный HEX-код цвета.

### `colorAlgorithm(algorithm, sellectColor)`

Основная функция для вызова различных алгоритмов генерации цветов с необязательным выбранным цветом.

### `generate3ColorHarmony(baseColor, count)`

Генерирует 3-цветную гармонию на основе базового цвета.

### `generate4ColorHarmony(baseColor, count)`

Генерирует 4-цветную гармонию на основе базового цвета.

### `generateAnalogicalHarmony(baseColor, count)`

Генерирует аналоговую цветовую гармонию на основе базового цвета.

### `generateCrossAnalogicalHarmony(baseColor, count)`

Генерирует перекрестную аналоговую цветовую гармонию на основе базового цвета.

### `generateMonochromaticHarmony(baseColor, count)`

Генерирует монохромную цветовую гармонию на основе базового цвета.

### `generateComplementaryHarmony(baseColor, count)`

Генерирует дополнительную цветовую гармонию на основе базового цвета.

### `generateColorPalette(baseColor, count)`

Генерирует цветовую палитру на основе базового цвета.

---

### `rgbToHsl(color)`

Преобразует цвет RGB в формат HSL.

### `hslToRgb(h, s, l)`

Преобразует цвет HSL в формат RGB.

### `hexToRGB(hex)`

Преобразует HEX-цвет в формат RGB.

### `rgbToHex(r, g, b)`

Преобразует значения RGB в формат HEX.

### `convertToRGBA(color)`

Преобразует HEX-цвет в формат RGBA.

## Использование

### Использование с JavaScript

```javascript
import colorAlgorithm from "./bClass-toolkit-color-generator.js";

// Генерация случайной цветовой палитры с использованием алгоритма по умолчанию
const palette = colorAlgorithm();

// Генерация 3-цветной гармонии с использованием определенного цвета
const threeColorHarmony = colorAlgorithm("generate3ColorHarmony", "#FF0000");

// Генерация аналоговой цветовой гармонии с 5 цветами
const analogicalHarmony = colorAlgorithm(
  "generateAnalogicalHarmony",
  "#00FF00",
);
```

### Использование чистого HTML

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Генератор цветов</title>
  </head>
  <body>
    <select name="" id="color-algorithm">
      <option value="generateColorPalette">Последовательная гармония</option>
      <option value="generate3ColorHarmony">3-цветная гармония</option>
      <option value="generate4ColorHarmony">4-цветная гармония</option>
      <option value="generateAnalogicalHarmony">Аналоговая гармония</option>
      <option value="generateCrossAnalogicalHarmony">
        Перекрестная аналоговая гармония
      </option>
      <option value="generateMonochromaticHarmony">
        Монохроматическая гармония
      </option>
      <option value="generateComplementaryHarmony">
        Комплиментарная гармония
      </option>
    </select>
    <input type="color" id="base-color" value="#FF0000" required />
    <div>
      <button
        onclick="colorPalette.generateFromChosenClick()"
        type="submit"
        name="generate-palette"
      >
        Выбрать
      </option>
      <button
        onclick="colorPalette.randomGenerateClick()"
        type="submit"
        name="generate-random"
      >
        Случайно
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
