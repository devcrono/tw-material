'use strict';

var materialColorUtilities = require('@material/material-color-utilities');

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/tailwindcss@3.4.1/node_modules/tailwindcss/lib/util/createPlugin.js
var require_createPlugin = __commonJS({
  "../../node_modules/.pnpm/tailwindcss@3.4.1/node_modules/tailwindcss/lib/util/createPlugin.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function createPlugin(plugin3, config) {
      return {
        handler: plugin3,
        config
      };
    }
    createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
      const optionsFunction = function(options) {
        return {
          __options: options,
          handler: pluginFunction(options),
          config: configFunction(options)
        };
      };
      optionsFunction.__isOptionsFunction = true;
      optionsFunction.__pluginFunction = pluginFunction;
      optionsFunction.__configFunction = configFunction;
      return optionsFunction;
    };
    var _default = createPlugin;
  }
});

// ../../node_modules/.pnpm/tailwindcss@3.4.1/node_modules/tailwindcss/lib/public/create-plugin.js
var require_create_plugin = __commonJS({
  "../../node_modules/.pnpm/tailwindcss@3.4.1/node_modules/tailwindcss/lib/public/create-plugin.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _createPlugin = /* @__PURE__ */ _interop_require_default(require_createPlugin());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = _createPlugin.default;
  }
});

// ../../node_modules/.pnpm/tailwindcss@3.4.1/node_modules/tailwindcss/plugin.js
var require_plugin = __commonJS({
  "../../node_modules/.pnpm/tailwindcss@3.4.1/node_modules/tailwindcss/plugin.js"(exports, module) {
    var createPlugin = require_create_plugin();
    module.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
  }
});

// ../../node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "../../node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(exports, module) {
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// ../../node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "../../node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js"(exports, module) {
    module.exports = function isArrayish(obj) {
      if (!obj || typeof obj === "string") {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
    };
  }
});

// ../../node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js
var require_simple_swizzle = __commonJS({
  "../../node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js"(exports, module) {
    var isArrayish = require_is_arrayish();
    var concat = Array.prototype.concat;
    var slice = Array.prototype.slice;
    var swizzle = module.exports = function swizzle2(args) {
      var results = [];
      for (var i = 0, len = args.length; i < len; i++) {
        var arg = args[i];
        if (isArrayish(arg)) {
          results = concat.call(results, slice.call(arg));
        } else {
          results.push(arg);
        }
      }
      return results;
    };
    swizzle.wrap = function(fn) {
      return function() {
        return fn(swizzle(arguments));
      };
    };
  }
});

// ../../node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js
var require_color_string = __commonJS({
  "../../node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js"(exports, module) {
    var colorNames = require_color_name();
    var swizzle = require_simple_swizzle();
    var hasOwnProperty = Object.hasOwnProperty;
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (name in colorNames) {
      if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
      }
    }
    var name;
    var cs = module.exports = {
      to: {},
      get: {}
    };
    cs.get = function(string) {
      var prefix = string.substring(0, 3).toLowerCase();
      var val;
      var model;
      switch (prefix) {
        case "hsl":
          val = cs.get.hsl(string);
          model = "hsl";
          break;
        case "hwb":
          val = cs.get.hwb(string);
          model = "hwb";
          break;
        default:
          val = cs.get.rgb(string);
          model = "rgb";
          break;
      }
      if (!val) {
        return null;
      }
      return { model, value: val };
    };
    cs.get.rgb = function(string) {
      if (!string) {
        return null;
      }
      var abbr = /^#([a-f0-9]{3,4})$/i;
      var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
      var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var keyword = /^(\w+)$/;
      var rgb = [0, 0, 0, 1];
      var match;
      var i;
      var hexAlpha;
      if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i = 0; i < 3; i++) {
          var i2 = i * 2;
          rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string.match(rgba)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i + 1], 0);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(per)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
          return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i = 0; i < 3; i++) {
        rgb[i] = clamp(rgb[i], 0, 255);
      }
      rgb[3] = clamp(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string) {
      if (!string) {
        return null;
      }
      var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l, a];
      }
      return null;
    };
    cs.get.hwb = function(string) {
      if (!string) {
        return null;
      }
      var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b, a];
      }
      return null;
    };
    cs.to.hex = function() {
      var rgba = swizzle(arguments);
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function() {
      var rgba = swizzle(arguments);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function() {
      var rgba = swizzle(arguments);
      var r = Math.round(rgba[0] / 255 * 100);
      var g = Math.round(rgba[1] / 255 * 100);
      var b = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function() {
      var hsla = swizzle(arguments);
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function() {
      var hwba = swizzle(arguments);
      var a = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
    };
    cs.to.keyword = function(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp(num, min, max) {
      return Math.min(Math.max(min, num), max);
    }
    function hexDouble(num) {
      var str = Math.round(num).toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }
  }
});

// ../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js"(exports, module) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// ../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js
var require_route = __commonJS({
  "../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js"(exports, module) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// ../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "../../node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js"(exports, module) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module.exports = convert;
  }
});

// ../../node_modules/.pnpm/color@4.2.3/node_modules/color/index.js
var require_color = __commonJS({
  "../../node_modules/.pnpm/color@4.2.3/node_modules/color/index.js"(exports, module) {
    var colorString = require_color_string();
    var convert = require_color_convert();
    var skippedModels = [
      // To be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // Gray conflicts with some method names, and has its own method defined.
      "gray",
      // Shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    for (const model of Object.keys(convert)) {
      hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
    }
    var limiters = {};
    function Color2(object, model) {
      if (!(this instanceof Color2)) {
        return new Color2(object, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in convert)) {
        throw new Error("Unknown model: " + model);
      }
      let i;
      let channels;
      if (object == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (object instanceof Color2) {
        this.model = object.model;
        this.color = [...object.color];
        this.valpha = object.valpha;
      } else if (typeof object === "string") {
        const result = colorString.get(object);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
      } else if (typeof object === "number") {
        this.model = "rgb";
        this.color = [
          object >> 16 & 255,
          object >> 8 & 255,
          object & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
          keys.splice(keys.indexOf("alpha"), 1);
          this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = convert[this.model];
        const color = [];
        for (i = 0; i < labels.length; i++) {
          color.push(object[labels[i]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for (i = 0; i < channels; i++) {
          const limit = limiters[this.model][i];
          if (limit) {
            this.color[i] = limit(this.color[i]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    Color2.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(places) {
        let self = this.model in colorString.to ? this : this.rgb();
        self = self.round(typeof places === "number" ? places : 1);
        const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return colorString.to[self.model](args);
      },
      percentString(places) {
        const self = this.rgb().round(typeof places === "number" ? places : 1);
        const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return colorString.to.rgb.percent(args);
      },
      array() {
        return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
      },
      object() {
        const result = {};
        const { channels } = convert[this.model];
        const { labels } = convert[this.model];
        for (let i = 0; i < channels; i++) {
          result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray() {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject() {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round(places) {
        places = Math.max(places || 0, 0);
        return new Color2([...this.color.map(roundToPlace(places)), this.valpha], this.model);
      },
      alpha(value) {
        if (value !== void 0) {
          return new Color2([...this.color, Math.max(0, Math.min(1, value))], this.model);
        }
        return this.valpha;
      },
      // Rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(95.047)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(108.833)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword(value) {
        if (value !== void 0) {
          return new Color2(value);
        }
        return convert[this.model].keyword(this.color);
      },
      hex(value) {
        if (value !== void 0) {
          return new Color2(value);
        }
        return colorString.to.hex(this.rgb().round().color);
      },
      hexa(value) {
        if (value !== void 0) {
          return new Color2(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
          alphaHex = "0" + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
      },
      rgbNumber() {
        const rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity() {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i, element] of rgb.entries()) {
          const chan = element / 255;
          lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast(color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level(color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark() {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
        return yiq < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const rgb = this.rgb();
        for (let i = 0; i < 3; i++) {
          rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
      },
      lighten(ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken(ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten(ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken(ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale() {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color2.rgb(value, value, value);
      },
      fade(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate(degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === void 0 ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = color1.alpha() - color2.alpha();
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;
        return Color2.rgb(
          w1 * color1.red() + w2 * color2.red(),
          w1 * color1.green() + w2 * color2.green(),
          w1 * color1.blue() + w2 * color2.blue(),
          color1.alpha() * p + color2.alpha() * (1 - p)
        );
      }
    };
    for (const model of Object.keys(convert)) {
      if (skippedModels.includes(model)) {
        continue;
      }
      const { channels } = convert[model];
      Color2.prototype[model] = function(...args) {
        if (this.model === model) {
          return new Color2(this);
        }
        if (args.length > 0) {
          return new Color2(args, model);
        }
        return new Color2([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
      };
      Color2[model] = function(...args) {
        let color = args[0];
        if (typeof color === "number") {
          color = zeroArray(args, channels);
        }
        return new Color2(color, model);
      };
    }
    function roundTo(number, places) {
      return Number(number.toFixed(places));
    }
    function roundToPlace(places) {
      return function(number) {
        return roundTo(number, places);
      };
    }
    function getset(model, channel, modifier) {
      model = Array.isArray(model) ? model : [model];
      for (const m of model) {
        (limiters[m] || (limiters[m] = []))[channel] = modifier;
      }
      model = model[0];
      return function(value) {
        let result;
        if (value !== void 0) {
          if (modifier) {
            value = modifier(value);
          }
          result = this[model]();
          result.color[channel] = value;
          return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    function maxfn(max) {
      return function(v) {
        return Math.max(0, Math.min(max, v));
      };
    }
    function assertArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    function zeroArray(array, length) {
      for (let i = 0; i < length; i++) {
        if (typeof array[i] !== "number") {
          array[i] = 0;
        }
      }
      return array;
    }
    module.exports = Color2;
  }
});

// ../../node_modules/.pnpm/lodash.foreach@4.5.0/node_modules/lodash.foreach/index.js
var require_lodash = __commonJS({
  "../../node_modules/.pnpm/lodash.foreach@4.5.0/node_modules/lodash.foreach/index.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function arrayEach(array, iteratee) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeKeys = overArg(Object.keys, Object);
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    var baseEach = createBaseEach(baseForOwn);
    var baseFor = createBaseFor();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function forEach2(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, typeof iteratee == "function" ? iteratee : identity);
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function identity(value) {
      return value;
    }
    module.exports = forEach2;
  }
});

// ../../node_modules/.pnpm/flat@5.0.2/node_modules/flat/index.js
var require_flat = __commonJS({
  "../../node_modules/.pnpm/flat@5.0.2/node_modules/flat/index.js"(exports, module) {
    module.exports = flatten2;
    flatten2.flatten = flatten2;
    flatten2.unflatten = unflatten;
    function isBuffer(obj) {
      return obj && obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    }
    function keyIdentity(key) {
      return key;
    }
    function flatten2(target, opts) {
      opts = opts || {};
      const delimiter = opts.delimiter || ".";
      const maxDepth = opts.maxDepth;
      const transformKey = opts.transformKey || keyIdentity;
      const output = {};
      function step(object, prev, currentDepth) {
        currentDepth = currentDepth || 1;
        Object.keys(object).forEach(function(key) {
          const value = object[key];
          const isarray = opts.safe && Array.isArray(value);
          const type = Object.prototype.toString.call(value);
          const isbuffer = isBuffer(value);
          const isobject = type === "[object Object]" || type === "[object Array]";
          const newKey = prev ? prev + delimiter + transformKey(key) : transformKey(key);
          if (!isarray && !isbuffer && isobject && Object.keys(value).length && (!opts.maxDepth || currentDepth < maxDepth)) {
            return step(value, newKey, currentDepth + 1);
          }
          output[newKey] = value;
        });
      }
      step(target);
      return output;
    }
    function unflatten(target, opts) {
      opts = opts || {};
      const delimiter = opts.delimiter || ".";
      const overwrite = opts.overwrite || false;
      const transformKey = opts.transformKey || keyIdentity;
      const result = {};
      const isbuffer = isBuffer(target);
      if (isbuffer || Object.prototype.toString.call(target) !== "[object Object]") {
        return target;
      }
      function getkey(key) {
        const parsedKey = Number(key);
        return isNaN(parsedKey) || key.indexOf(".") !== -1 || opts.object ? key : parsedKey;
      }
      function addKeys(keyPrefix, recipient, target2) {
        return Object.keys(target2).reduce(function(result2, key) {
          result2[keyPrefix + delimiter + key] = target2[key];
          return result2;
        }, recipient);
      }
      function isEmpty(val) {
        const type = Object.prototype.toString.call(val);
        const isArray = type === "[object Array]";
        const isObject = type === "[object Object]";
        if (!val) {
          return true;
        } else if (isArray) {
          return !val.length;
        } else if (isObject) {
          return !Object.keys(val).length;
        }
      }
      target = Object.keys(target).reduce(function(result2, key) {
        const type = Object.prototype.toString.call(target[key]);
        const isObject = type === "[object Object]" || type === "[object Array]";
        if (!isObject || isEmpty(target[key])) {
          result2[key] = target[key];
          return result2;
        } else {
          return addKeys(
            key,
            result2,
            flatten2(target[key], opts)
          );
        }
      }, {});
      Object.keys(target).forEach(function(key) {
        const split = key.split(delimiter).map(transformKey);
        let key1 = getkey(split.shift());
        let key2 = getkey(split[0]);
        let recipient = result;
        while (key2 !== void 0) {
          if (key1 === "__proto__") {
            return;
          }
          const type = Object.prototype.toString.call(recipient[key1]);
          const isobject = type === "[object Object]" || type === "[object Array]";
          if (!overwrite && !isobject && typeof recipient[key1] !== "undefined") {
            return;
          }
          if (overwrite && !isobject || !overwrite && recipient[key1] == null) {
            recipient[key1] = typeof key2 === "number" && !opts.object ? [] : {};
          }
          recipient = recipient[key1];
          if (split.length > 0) {
            key1 = getkey(split.shift());
            key2 = getkey(split[0]);
          }
        }
        recipient[key1] = unflatten(target[key], opts);
      });
      return result;
    }
  }
});

// src/index.ts
var import_plugin2 = __toESM(require_plugin());

// src/border.ts
var borderRadius = {
  none: "0",
  "extra-small": "4px",
  small: "8px",
  medium: "12px",
  large: "16px",
  "extra-large": "28px",
  full: "9999px"
};
var borderColor = ({ theme }) => ({
  ...theme("colors"),
  DEFAULT: theme("colors.light.outline"),
  light: {
    ...theme("colors.light"),
    DEFAULT: theme("colors.light.outline")
  },
  dark: {
    ...theme("colors.dark"),
    DEFAULT: theme("colors.dark.outline")
  }
});
var tones = [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];
var materialColors = {
  background: materialColorUtilities.MaterialDynamicColors.background,
  "on-background": materialColorUtilities.MaterialDynamicColors.onBackground,
  surface: materialColorUtilities.MaterialDynamicColors.surface,
  "surface-dim": materialColorUtilities.MaterialDynamicColors.surfaceDim,
  "surface-bright": materialColorUtilities.MaterialDynamicColors.surfaceBright,
  "surface-container-lowest": materialColorUtilities.MaterialDynamicColors.surfaceContainerLowest,
  "surface-container-low": materialColorUtilities.MaterialDynamicColors.surfaceContainerLow,
  "surface-container": materialColorUtilities.MaterialDynamicColors.surfaceContainer,
  "surface-container-high": materialColorUtilities.MaterialDynamicColors.surfaceContainerHigh,
  "surface-container-highest": materialColorUtilities.MaterialDynamicColors.surfaceContainerHighest,
  "on-surface": materialColorUtilities.MaterialDynamicColors.onSurface,
  "surface-variant": materialColorUtilities.MaterialDynamicColors.surfaceVariant,
  "on-surface-variant": materialColorUtilities.MaterialDynamicColors.onSurfaceVariant,
  "inverse-surface": materialColorUtilities.MaterialDynamicColors.inverseSurface,
  "inverse-on-surface": materialColorUtilities.MaterialDynamicColors.inverseOnSurface,
  outline: materialColorUtilities.MaterialDynamicColors.outline,
  "outline-variant": materialColorUtilities.MaterialDynamicColors.outlineVariant,
  shadow: materialColorUtilities.MaterialDynamicColors.shadow,
  scrim: materialColorUtilities.MaterialDynamicColors.scrim,
  "surface-tint": materialColorUtilities.MaterialDynamicColors.surfaceTint,
  primary: materialColorUtilities.MaterialDynamicColors.primary,
  "on-primary": materialColorUtilities.MaterialDynamicColors.onPrimary,
  "primary-container": materialColorUtilities.MaterialDynamicColors.primaryContainer,
  "on-primary-container": materialColorUtilities.MaterialDynamicColors.onPrimaryContainer,
  "inverse-primary": materialColorUtilities.MaterialDynamicColors.inversePrimary,
  secondary: materialColorUtilities.MaterialDynamicColors.secondary,
  "on-secondary": materialColorUtilities.MaterialDynamicColors.onSecondary,
  "secondary-container": materialColorUtilities.MaterialDynamicColors.secondaryContainer,
  "on-secondary-container": materialColorUtilities.MaterialDynamicColors.onSecondaryContainer,
  tertiary: materialColorUtilities.MaterialDynamicColors.tertiary,
  "on-tertiary": materialColorUtilities.MaterialDynamicColors.onTertiary,
  "tertiary-container": materialColorUtilities.MaterialDynamicColors.tertiaryContainer,
  "on-tertiary-container": materialColorUtilities.MaterialDynamicColors.onTertiaryContainer,
  error: materialColorUtilities.MaterialDynamicColors.error,
  "on-error": materialColorUtilities.MaterialDynamicColors.onError,
  "error-container": materialColorUtilities.MaterialDynamicColors.errorContainer,
  "on-error-container": materialColorUtilities.MaterialDynamicColors.onErrorContainer
};
function themeFromSourceColor(color, isDark) {
  const scheme = new materialColorUtilities.SchemeContent(materialColorUtilities.Hct.fromInt(color), isDark, 0);
  const theme = {};
  for (const [key, value] of Object.entries(materialColors)) {
    theme[key] = materialColorUtilities.hexFromArgb(value.getArgb(scheme));
  }
  return theme;
}
function generateTheme(source, customColors = []) {
  const palette = materialColorUtilities.CorePalette.of(source);
  return {
    schemes: {
      light: themeFromSourceColor(source, false),
      dark: themeFromSourceColor(source, true)
    },
    palettes: {
      primary: palette.a1,
      secondary: palette.a2,
      tertiary: palette.a3,
      neutral: palette.n1,
      neutralVariant: palette.n2,
      error: palette.error
    },
    customColors: customColors.map((c) => materialColorUtilities.customColor(source, c))
  };
}
var paletteColors = (palette) => {
  const result = {};
  for (const key in palette) {
    tones.forEach((tone) => {
      result[`${key}-${tone}`] = materialColorUtilities.hexFromArgb(palette[key].tone(tone));
    });
  }
  return result;
};
var colors = (m3Theme) => {
  return {
    light: {
      ...m3Theme.schemes.light,
      ...m3Theme.palettes
    },
    dark: {
      ...m3Theme.schemes.dark,
      ...m3Theme.palettes
    }
  };
};
function createTheme({
  sourceColor,
  customColors
}) {
  const theme = generateTheme(
    materialColorUtilities.argbFromHex(sourceColor),
    customColors.map((c) => ({
      value: materialColorUtilities.argbFromHex(c.value),
      name: c.name,
      blend: c.blend
    }))
  );
  const palettes = theme.palettes;
  theme.customColors.forEach((c) => {
    theme.schemes.light[c.color.name] = materialColorUtilities.hexFromArgb(c.light.color);
    theme.schemes.light[`on-${c.color.name}`] = materialColorUtilities.hexFromArgb(c.light.onColor);
    theme.schemes.light[`${c.color.name}-container`] = materialColorUtilities.hexFromArgb(
      c.light.colorContainer
    );
    theme.schemes.light[`on-${c.color.name}-container`] = materialColorUtilities.hexFromArgb(
      c.light.onColorContainer
    );
    theme.schemes.dark[c.color.name] = materialColorUtilities.hexFromArgb(c.dark.color);
    theme.schemes.dark[`on-${c.color.name}`] = materialColorUtilities.hexFromArgb(c.dark.onColor);
    theme.schemes.dark[`${c.color.name}-container`] = materialColorUtilities.hexFromArgb(
      c.dark.colorContainer
    );
    theme.schemes.dark[`on-${c.color.name}-container`] = materialColorUtilities.hexFromArgb(
      c.dark.onColorContainer
    );
    palettes[c.color.name] = materialColorUtilities.CorePalette.of(c.value).a1;
  });
  return {
    schemes: {
      light: theme.schemes.light,
      dark: theme.schemes.dark
    },
    palettes: paletteColors(palettes)
  };
}

// src/opacity.ts
var opacity = {
  hover: "0.08",
  focus: "0.12",
  pressed: "0.12",
  dragged: "0.16",
  disabled: "0.38",
  1: "0.05",
  2: "0.08",
  3: "0.11",
  4: "0.12",
  5: "0.14"
};

// src/shadow.ts
var boxShadow = {
  0: "none",
  1: "0 1px 3px 1px rgb(0 0 0 / 0.15), 0 1px 2px 0 rgb(0 0 0 / 0.3)",
  2: "0 2px 6px 2px rgb(0 0 0 / 0.15), 0 1px 2px 0 rgb(0 0 0 / 0.3)",
  3: "0 4px 8px 3px rgb(0 0 0 / 0.15), 0 1px 3px 0 rgb(0 0 0 / 0.3)",
  4: "0 6px 10px 4px rgb(0 0 0 / 0.15), 0 2px 3px 0 rgb(0 0 0 / 0.3)",
  5: "0 8px 12px 6px rgb(0 0 0 / 0.15), 0 4px 4px 0 rgb(0 0 0 / 0.3)"
};
var boxShadowColor = ({ theme }) => ({
  DEFAULT: theme("colors.light.shadow"),
  light: theme("colors.light.shadow"),
  dark: theme("colors.dark.shadow")
});

// src/transition.ts
var transitionDuration = {
  "short-1": "50ms",
  "short-2": "100ms",
  "short-3": "150ms",
  "short-4": "200ms",
  "medium-1": "250ms",
  "medium-2": "300ms",
  "medium-3": "350ms",
  "medium-4": "400ms",
  "long-1": "450ms",
  "long-2": "500ms",
  "long-3": "550ms",
  "long-4": "600ms",
  "extra-long-1": "700ms",
  "extra-long-2": "800ms",
  "extra-long-3": "900ms",
  "extra-long-4": "1000ms"
};
var transitionTimingFunction = {
  linear: "cubic-bezier(0, 0, 1, 1)",
  standard: "cubic-bezier(0.2, 0, 0, 1)",
  "standard-accelerate": "cubic-bezier(0.3, 0, 1, 1)",
  "standard-decelerate": "cubic-bezier(0, 0, 0, 1)",
  emphasized: "cubic-bezier(0.2, 0, 0, 1)",
  "emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1)",
  "emphasized-accelerate": "cubic-bezier(0.3, 0, 0.8, 0.15)",
  legacy: "cubic-bezier(0.4, 0, 0.2, 1)",
  "legacy-decelerate": "cubic-bezier(0.0, 0, 0.2, 1)",
  "legacy-accelerate": "cubic-bezier(0.4, 0, 1.0, 1)"
};

// src/typography.ts
var typography = {
  "display-large": [
    "57px",
    {
      fontWeight: 400,
      lineHeight: "64px",
      letterSpacing: "-0.25px"
    }
  ],
  "display-medium": [
    "45px",
    {
      fontWeight: 400,
      lineHeight: "52px",
      letterSpacing: "0px"
    }
  ],
  "display-small": [
    "36px",
    {
      fontWeight: 400,
      lineHeight: "44px",
      letterSpacing: "0px"
    }
  ],
  "headline-large": [
    "32px",
    {
      fontWeight: 400,
      lineHeight: "40px",
      letterSpacing: "0px"
    }
  ],
  "headline-medium": [
    "28px",
    {
      fontWeight: 400,
      lineHeight: "36px",
      letterSpacing: "0px"
    }
  ],
  "headline-small": [
    "24px",
    {
      fontWeight: 400,
      lineHeight: "32px",
      letterSpacing: "0px"
    }
  ],
  "body-large": [
    "16px",
    {
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.5px"
    }
  ],
  "body-medium": [
    "14px",
    {
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.25px"
    }
  ],
  "body-small": [
    "12px",
    {
      fontWeight: 400,
      lineHeight: "16px",
      letterSpacing: "0.4px"
    }
  ],
  "label-large": [
    "14px",
    {
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0.1px"
    }
  ],
  "label-medium": [
    "12px",
    {
      fontWeight: 500,
      lineHeight: "16px",
      letterSpacing: "0.5px"
    }
  ],
  "label-small": [
    "11px",
    {
      fontWeight: 500,
      lineHeight: "16px",
      letterSpacing: "0.5px"
    }
  ],
  "title-large": [
    "22px",
    {
      fontWeight: 400,
      lineHeight: "28px",
      letterSpacing: "0px"
    }
  ],
  "title-medium": [
    "16px",
    {
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.15px"
    }
  ],
  "title-small": [
    "14px",
    {
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0.1px"
    }
  ]
};

// src/z-index.ts
var zIndex = {
  0: "0",
  1: "1",
  2: "3",
  3: "6",
  4: "8",
  5: "12"
};

// ../../node_modules/.pnpm/tw-colors@3.3.1_tailwindcss@3.4.1/node_modules/tw-colors/dist/lib/index.mjs
var import_color = __toESM(require_color(), 1);
__toESM(require_plugin(), 1);
var import_lodash = __toESM(require_lodash(), 1);
var import_flat = __toESM(require_flat(), 1);
var SCHEME = Symbol("color-scheme");
var emptyConfig = {};
var resolveTwcConfig = (config = emptyConfig, {
  produceCssVariable = defaultProduceCssVariable,
  produceThemeClass = defaultProduceThemeClass,
  produceThemeVariant = produceThemeClass,
  defaultTheme,
  strict = false
} = {}) => {
  const resolved = {
    variants: [],
    utilities: {},
    colors: {}
  };
  const configObject = typeof config === "function" ? config({ dark, light }) : config;
  (0, import_lodash.default)(configObject, (colors2, themeName) => {
    const themeClassName = produceThemeClass(themeName);
    const themeVariant = produceThemeVariant(themeName);
    const flatColors = flattenColors(colors2);
    resolved.variants.push({
      name: themeVariant,
      // tailwind will generate only the first matched definition
      definition: [
        generateVariantDefinitions(`.${themeClassName}`),
        generateVariantDefinitions(`[data-theme='${themeName}']`),
        generateRootVariantDefinitions(themeName, defaultTheme)
      ].flat()
    });
    const cssSelector = `.${themeClassName},[data-theme="${themeName}"]`;
    resolved.utilities[cssSelector] = colors2[SCHEME] ? { "color-scheme": colors2[SCHEME] } : {};
    (0, import_lodash.default)(flatColors, (colorValue, colorName) => {
      if (colorName === SCHEME)
        return;
      const safeColorName = escapeChars(colorName, "/");
      let [h, s, l, defaultAlphaValue] = [0, 0, 0, 1];
      try {
        [h, s, l, defaultAlphaValue] = toHslaArray(colorValue);
      } catch (error) {
        const message = `\r
Warning - In theme "${themeName}" color "${colorName}". ${error.message}`;
        if (strict) {
          throw new Error(message);
        }
        return console.error(message);
      }
      const twcColorVariable = produceCssVariable(safeColorName);
      const twcOpacityVariable = `${produceCssVariable(safeColorName)}-opacity`;
      const hslValues = `${h} ${s}% ${l}%`;
      resolved.utilities[cssSelector][twcColorVariable] = hslValues;
      addRootUtilities(resolved.utilities, {
        key: twcColorVariable,
        value: hslValues,
        defaultTheme,
        themeName
      });
      if (typeof defaultAlphaValue === "number") {
        const alphaValue = defaultAlphaValue.toFixed(2);
        resolved.utilities[cssSelector][twcOpacityVariable] = alphaValue;
        addRootUtilities(resolved.utilities, {
          key: twcOpacityVariable,
          value: alphaValue,
          defaultTheme,
          themeName
        });
      }
      resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
        if (!isNaN(+opacityValue)) {
          return `hsl(var(${twcColorVariable}) / ${opacityValue})`;
        }
        if (opacityVariable) {
          return `hsl(var(${twcColorVariable}) / var(${twcOpacityVariable}, var(${opacityVariable})))`;
        }
        return `hsl(var(${twcColorVariable}) / var(${twcOpacityVariable}, 1))`;
      };
    });
  });
  return resolved;
};
function escapeChars(str, ...chars) {
  let result = str;
  for (let char of chars) {
    const regexp = new RegExp(char, "g");
    result = str.replace(regexp, "\\" + char);
  }
  return result;
}
function flattenColors(colors2) {
  const flatColorsWithDEFAULT = (0, import_flat.default)(colors2, {
    safe: true,
    delimiter: "-"
  });
  return Object.entries(flatColorsWithDEFAULT).reduce((acc, [key, value]) => {
    acc[key.replace(/\-DEFAULT$/, "")] = value;
    return acc;
  }, {});
}
function toHslaArray(colorValue) {
  return (0, import_color.default)(colorValue).hsl().round(1).array();
}
function defaultProduceCssVariable(themeName) {
  return `--twc-${themeName}`;
}
function defaultProduceThemeClass(themeName) {
  return themeName;
}
function dark(colors2) {
  return {
    ...colors2,
    [SCHEME]: "dark"
  };
}
function light(colors2) {
  return {
    ...colors2,
    [SCHEME]: "light"
  };
}
function generateVariantDefinitions(selector) {
  return [
    `${selector}&`,
    `:is(${selector} > &:not([data-theme]))`,
    `:is(${selector} &:not(${selector} [data-theme]:not(${selector}) * ))`,
    `:is(${selector}:not(:has([data-theme])) &:not([data-theme]))`
  ];
}
function generateRootVariantDefinitions(themeName, defaultTheme) {
  const baseDefinitions = [
    `:root&`,
    `:is(:root > &:not([data-theme]))`,
    `:is(:root &:not([data-theme] *):not([data-theme]))`
  ];
  if (typeof defaultTheme === "string" && themeName === defaultTheme) {
    return baseDefinitions;
  }
  if (typeof defaultTheme === "object" && themeName === defaultTheme.light) {
    return baseDefinitions.map(
      (definition) => `@media (prefers-color-scheme: light){${definition}}`
    );
  }
  if (typeof defaultTheme === "object" && themeName === defaultTheme.dark) {
    return baseDefinitions.map(
      (definition) => `@media (prefers-color-scheme: dark){${definition}}`
    );
  }
  return [];
}
function addRootUtilities(utilities, {
  key,
  value,
  defaultTheme,
  themeName
}) {
  if (!defaultTheme)
    return;
  if (typeof defaultTheme === "string") {
    if (themeName === defaultTheme) {
      if (!utilities[":root"]) {
        utilities[":root"] = {};
      }
      utilities[":root"][key] = value;
    }
  } else if (themeName === defaultTheme.light) {
    if (!utilities["@media (prefers-color-scheme: light)"]) {
      utilities["@media (prefers-color-scheme: light)"] = {
        ":root": {}
      };
    }
    utilities["@media (prefers-color-scheme: light)"][":root"][key] = value;
  } else if (themeName === defaultTheme.dark) {
    if (!utilities["@media (prefers-color-scheme: dark)"]) {
      utilities["@media (prefers-color-scheme: dark)"] = {
        ":root": {}
      };
    }
    utilities["@media (prefers-color-scheme: dark)"][":root"][key] = value;
  }
}

// src/index.ts
var material3 = ({
  sourceColor,
  customColors,
  defaultTheme
}) => {
  const m3Theme = createTheme({ sourceColor, customColors });
  const resolved = resolveTwcConfig(colors(m3Theme), {
    produceCssVariable: (colorName) => `--m3-${colorName}`,
    defaultTheme
  });
  return (0, import_plugin2.default)(
    ({ addUtilities, addVariant }) => {
      addUtilities(resolved.utilities);
      resolved.variants.forEach(
        ({ name, definition }) => addVariant(name, definition)
      );
    },
    {
      theme: {
        extend: {
          borderRadius,
          borderColor,
          boxShadow,
          boxShadowColor,
          fontSize: typography,
          transitionDuration,
          transitionTimingFunction,
          zIndex,
          opacity,
          // @ts-ignore tailwind types are broken
          colors: resolved.colors
        }
      }
    }
  );
};

exports.material3 = material3;
