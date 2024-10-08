/***
 * * Bclass toolkit color generator v1.1.0
 * * Copyright 2023 ("https://github.com/EW-EndWall/bClass-color-generator/blob/main/LICENSE")
 * * Licensed ("Bik Public License 4.0")
 * * License Update ("20/11/2024")
 */

// *-----------------------------------------------------------
const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const rgbToHsl = (color) => {
  const [r, g, b] = color.match(/\w\w/g).map((x) => parseInt(x, 16) / 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

const hslToRgb = (h, s, l) => {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hueToRgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const hexToRGB = (hex) => {
  const hexValue = hex.slice(1); // * Remove the "#" character
  const r = parseInt(hexValue.substr(0, 2), 16);
  const g = parseInt(hexValue.substr(2, 2), 16);
  const b = parseInt(hexValue.substr(4, 2), 16);
  return {
    r: r,
    g: g,
    b: b,
  };
};

const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};

const convertToRGBA = (color) => {
  const hex = color.slice(1); // * Remove the "#" character
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return "rgba(" + r + ", " + g + ", " + b + ", 1)";
};

// *_____________________________________________
// * test code console.log(generate3ColorHarmony("#FF0000"));
const generate3ColorHarmony = (baseColor, count = "3") => {
  const palette = [];

  const baseHSL = rgbToHsl(baseColor);

  // * Helper color angles
  const angle1 = 120; // * 120 degrees
  const angle2 = 240; // * 240 degrees

  // * Calculate helper colors
  const color1 = hslToRgb((baseHSL.h + angle1) % 360, baseHSL.s, baseHSL.l);
  const color2 = hslToRgb((baseHSL.h + angle2) % 360, baseHSL.s, baseHSL.l);

  // * Create the palette
  palette.push(baseColor);
  palette.push(color1);
  palette.push(color2);

  // * Calculate tones of additional colors
  const increment = 360 / (count - 2);
  let hue = (baseHSL.h + increment) % 360;

  for (let i = 3; i < count; i++) {
    const newColor = hslToRgb(hue, baseHSL.s, baseHSL.l);
    palette.push(newColor);
    hue = (hue + increment) % 360;
  }

  return {
    hex: palette,
    rgb: palette.map((e) => {
      const rgbValue = hexToRGB(e);
      return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
    }),
  };
};
// *-----------------------------------------------------------
// * test code console.log(generate4ColorHarmony("#FF0000"));
const generate4ColorHarmony = (baseColor, count = "4") => {
  const palette = [];

  const baseHSL = rgbToHsl(baseColor);

  // * Helper color angles
  const angle1 = 30; // * 30 degrees
  const angle2 = 60; // * 60 degrees

  // * Calculate helper colors
  const color1 = hslToRgb((baseHSL.h + angle1) % 360, baseHSL.s, baseHSL.l);
  const color2 = hslToRgb((baseHSL.h + angle2) % 360, baseHSL.s, baseHSL.l);

  // * Create the palette
  palette.push(baseColor);
  palette.push(color1);
  palette.push(color2);

  // * Calculate tones of additional colors
  const increment = 360 / (count - 1);
  let hue = (baseHSL.h + increment) % 360;

  for (let i = 3; i < count; i++) {
    const newColor = hslToRgb(hue, baseHSL.s, baseHSL.l);
    palette.push(newColor);
    hue = (hue + increment) % 360;
  }

  return {
    hex: palette,
    rgb: palette.map((e) => {
      const rgbValue = hexToRGB(e);
      return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
    }),
  };
};
// *-----------------------------------------------------------
// * test code console.log(generateAnalogicalHarmony("#FF0000"));
const generateAnalogicalHarmony = (baseColor, count = "5") => {
  const palette = [];

  const baseHSL = rgbToHsl(baseColor);
  const hue = baseHSL.h;
  const saturation = baseHSL.s;
  const lightness = baseHSL.l;

  palette.push(baseColor);

  const hueIncrement = 30; // * You can adjust the desired value within the range

  for (let i = 1; i < count; i++) {
    const newHue = (hue + hueIncrement * i) % 360;

    const newColor = hslToRgb(newHue, saturation, lightness);
    palette.push(newColor);
  }

  return {
    hex: palette,
    rgb: palette.map((e) => {
      const rgbValue = hexToRGB(e);
      return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
    }),
  };
};
// *-----------------------------------------------------------
// * test code console.log(generateCrossAnalogicalHarmony("#FF0000"));
const generateCrossAnalogicalHarmony = (baseColor, count = "3") => {
  const palette = [];

  const baseHSL = rgbToHsl(baseColor);
  const hue = baseHSL.h;

  palette.push(baseColor);

  const hueIncrement = 360 / count;

  const complementaryHue = (hue + 180) % 360;
  const complementaryColor = hslToRgb(complementaryHue, baseHSL.s, baseHSL.l);
  palette.push(complementaryColor);

  for (let i = 1; i < count; i++) {
    const newHue = (hue + hueIncrement * i) % 360;
    const newColor = hslToRgb(newHue, baseHSL.s, baseHSL.l);
    palette.push(newColor);
  }

  return {
    hex: palette,
    rgb: palette.map((e) => {
      const rgbValue = hexToRGB(e);
      return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
    }),
  };
};
// *-----------------------------------------------------------
// * test code console.log(generateMonochromaticHarmony("#FF0000"));
const generateMonochromaticHarmony = (baseColor, count = "5") => {
  const palette = [];

  const baseHSL = rgbToHsl(baseColor);
  const lightnessIncrement = 100 / (count + 1);

  for (let i = 1; i <= count; i++) {
    const lightness = lightnessIncrement * i;
    const newColor = hslToRgb(baseHSL.h, baseHSL.s, lightness);
    palette.push(newColor);
  }

  return {
    hex: palette,
    rgb: palette.map((e) => {
      const rgbValue = hexToRGB(e);
      return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
    }),
  };
};
// *-----------------------------------------------------------
// * test code console.log(generateComplementaryHarmony("#FF0000"));
const generateComplementaryHarmony = (baseColor, count = "5") => {
  const palette = [];

  const baseHSL = rgbToHsl(baseColor);
  const hue = baseHSL.h;

  palette.push(baseColor);

  const hueIncrement = 360 / count;

  for (let i = 1; i < count; i++) {
    const newHue = (hue + hueIncrement * i) % 360;
    const newColor = hslToRgb(newHue, baseHSL.s, baseHSL.l);
    palette.push(newColor);
  }

  return {
    hex: palette,
    rgb: palette.map((e) => {
      const rgbValue = hexToRGB(e);
      return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
    }),
  };
};
// *-----------------------------------------------------------
// * test code console.log(generateColorPalette("#FF0000"));
const generateColorPalette = (baseColor, count = "5") => {
  const modifyColorComponent = (component, threshold) => {
    let newValue = component - threshold;
    if (newValue < 0) {
      newValue = 0;
    }
    return newValue;
  };

  if (!baseColor) {
    baseColor = getRandomHexColor();
  }
  const palette = [];

  palette.push(baseColor);

  const colorThreshold = 30;

  const baseRGB = hexToRGB(baseColor);
  const r = baseRGB.r;
  const g = baseRGB.g;
  const b = baseRGB.b;

  for (let i = 1; i < count; i++) {
    const newR = modifyColorComponent(r, colorThreshold * i);
    const newG = modifyColorComponent(g, colorThreshold * i);
    const newB = modifyColorComponent(b, colorThreshold * i);

    const newColor = rgbToHex(newR, newG, newB);
    palette.push(newColor);
  }

  return {
    hex: palette,
    rgb: palette.map((e) => {
      const rgbValue = hexToRGB(e);
      return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
    }),
  };
};

const colorAlgorithm = (algorithm = "", sellectColor = "") => {
  // * Start
  // * is check sellect color
  if (!sellectColor) {
    sellectColor = getRandomHexColor();
  }
  switch (algorithm) {
    case "generate3ColorHarmony":
      return generate3ColorHarmony(sellectColor);
      break;
    case "generate4ColorHarmony":
      return generate4ColorHarmony(sellectColor);
      break;
    case "generateAnalogicalHarmony":
      return generateAnalogicalHarmony(sellectColor);
      break;
    case "generateCrossAnalogicalHarmony":
      return generateCrossAnalogicalHarmony(sellectColor);
      break;
    case "generateMonochromaticHarmony":
      return generateMonochromaticHarmony(sellectColor);
      break;
    case "generateComplementaryHarmony":
      return generateComplementaryHarmony(sellectColor);
      break;
    case "generateColorPalette":
      return generateColorPalette(sellectColor);
      break;
    default:
      return generateColorPalette();
      break;
  }
};

export default colorAlgorithm;
