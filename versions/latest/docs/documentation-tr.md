# Bclass Toolkit Renk Oluşturucu

Bu araç seti, farklı tonlu kurallara dayalı renk paletleri oluşturmak ve işlemek için bir dizi işlev sunar. HEX, RGB, HSL gibi çeşitli renk formatları arasında dönüştürme desteği sağlar ve tamamlayıcı, analog, monokrom ve daha fazlası gibi renk uyumlarını üretebilir.

## Fonksiyonlar

### `getRandomHexColor()`

Rastgele bir HEX renk kodu oluşturur.

### `colorAlgorithm(algorithm, sellectColor)`

Farklı renk oluşturma algoritmalarını çağırmak için ana işlev, isteğe bağlı olarak seçilen bir renk ile birlikte kullanılır.

### `generate3ColorHarmony(baseColor, count)`

Temel renk üzerine 3-renk uyumu oluşturur.

### `generate4ColorHarmony(baseColor, count)`

Temel renk üzerine 4-renk uyumu oluşturur.

### `generateAnalogicalHarmony(baseColor, count)`

Temel renk üzerine analog renk uyumu oluşturur.

### `generateCrossAnalogicalHarmony(baseColor, count)`

Temel renk üzerine çapraz analog renk uyumu oluşturur.

### `generateMonochromaticHarmony(baseColor, count)`

Temel renk üzerine monokrom renk uyumu oluşturur.

### `generateComplementaryHarmony(baseColor, count)`

Temel renk üzerine tamamlayıcı renk uyumu oluşturur.

### `generateColorPalette(baseColor, count)`

Temel renk üzerine bir renk paleti oluşturur.

---

### `rgbToHsl(color)`

RGB rengini HSL formatına dönüştürür.

### `hslToRgb(h, s, l)`

HSL rengini RGB formatına dönüştürür.

### `hexToRGB(hex)`

HEX rengi RGB formatına dönüştürür.

### `rgbToHex(r, g, b)`

RGB değerlerini HEX formatına dönüştürür.

### `convertToRGBA(color)`

HEX rengi RGBA formatına dönüştürür.

## Kullanım

### JavaScript ile Kullanım

```javascript
import colorAlgorithm from "./bClass-toolkit-color-generator.js";

// Varsayılan algoritma ile rastgele bir renk paleti oluştur
const palette = colorAlgorithm();

// Belirli bir renk kullanarak 3-renk uyumu oluştur
const threeColorHarmony = colorAlgorithm("generate3ColorHarmony", "#FF0000");

// 5 renk ile analog renk uyumu oluştur
const analogicalHarmony = colorAlgorithm(
  "generateAnalogicalHarmony",
  "#00FF00",
);
```

### Vanilla HTML ile Kullanım

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
