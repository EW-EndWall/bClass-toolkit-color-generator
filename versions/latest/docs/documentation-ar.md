# bClass toolkit color generator

يوفر هذا الأداة مجموعة من الوظائف لإنشاء وتعديل(palettes) الألوان بناءً على قواعد التوافق المختلفة. كما يدعم التحويل بين تنسيقات الألوان المختلفة (HEX, RGB, HSL) ويمكنه إنشاء توازنات ألوان مثل التكميلي، والمتقارب، والوحيد اللون وغير ذلك.

## الوظائف

### `getRandomHexColor()`

يولد رمزًا عشوائيًا للون HEX.

### `colorAlgorithm(algorithm, sellectColor)`

الوظيفة الرئيسية لاستدعاء خوارزميات إنشاء الألوان المختلفة مع لون مختار اختياريًا.

### `generate3ColorHarmony(baseColor, count)`

يُنشئ توازنًا من 3 ألوان استنادًا إلى اللون الأساسي.

### `generate4ColorHarmony(baseColor, count)`

يُنشئ توازنًا من 4 ألوان استنادًا إلى اللون الأساسي.

### `generateAnalogicalHarmony(baseColor, count)`

يُنشئ توازنًا ألوان متقاربًا استنادًا إلى اللون الأساسي.

### `generateCrossAnalogicalHarmony(baseColor, count)`

يُنشئ توازنًا ألوان متقاربًا متقاطعًا استنادًا إلى اللون الأساسي.

### `generateMonochromaticHarmony(baseColor, count)`

يُنشئ توازنًا ألوان وحيد اللون استنادًا إلى اللون الأساسي.

### `generateComplementaryHarmony(baseColor, count)`

يُنشئ توازنًا ألوان تكميليًا استنادًا إلى اللون الأساسي.

### `generateColorPalette(baseColor, count)`

يُنشئ لوحًا ألوان استنادًا إلى اللون الأساسي.

---

### `rgbToHsl(color)`

يحوّل لون RGB إلى تنسيق HSL.

### `hslToRgb(h, s, l)`

يحوّل لون HSL إلى تنسيق RGB.

### `hexToRGB(hex)`

يحول اللون HEX إلى تنسيق RGB.

### `rgbToHex(r, g, b)`

يحول قيم RGB إلى تنسيق HEX.

### `convertToRGBA(color)`

يحول اللون HEX إلى تنسيق RGBA.

## الاستخدام

### الاستخدام مع جافا سكريبت

```javascript
import colorAlgorithm from "./bClass-toolkit-color-generator.js";

// إنشاء لوحة ألوان عشوائية باستخدام الخوارزمية الافتراضية
const palette = colorAlgorithm();

// إنشاء توازن من 3 ألوان باستخدام لون معين
const threeColorHarmony = colorAlgorithm("generate3ColorHarmony", "#FF0000");

// إنشاء توازن ألوان متقارب بـ 5 ألوان
const analogicalHarmony = colorAlgorithm(
  "generateAnalogicalHarmony",
  "#00FF00",
);
```

### باستخدام Vanilla HTML

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>مولد الألوان</title>
  </head>
  <body style="text-align: right;">
    <select name="" id="color-algorithm">
      <option value="generateColorPalette">التناغم المتسلسل</option>
      <option value="generate3ColorHarmony">تناغم ثلاثي الألوان</option>
      <option value="generate4ColorHarmony">تناغم رباعي الألوان</option>
      <option value="generateAnalogicalHarmony">التناغم المتماثل</option>
      <option value="generateCrossAnalogicalHarmony">
        التناغم المتماثل المتقاطع
      </option>
      <option value="generateMonochromaticHarmony">التناغم أحادي اللون</option>
      <option value="generateComplementaryHarmony">التناغم المتكامل</option>
    </select>
    <input type="color" id="base-color" value="#FF0000" required />
    <div>
      <button
        onclick="colorPalette.generateFromChosenClick()"
        type="submit"
        name="generate-palette"
      >
        اختيار
      </button>
      <button
        onclick="colorPalette.randomGenerateClick()"
        type="submit"
        name="generate-random"
      >
        عشوائي
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

## الترخيص

> يتم التوزيع بموجب ترخيص Bik Public License 4.0. راجع ملف [LICENSE](./../../../LICENSE) لمزيد من المعلومات.
