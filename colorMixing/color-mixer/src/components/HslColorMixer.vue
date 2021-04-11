<template>
  <div class="frame box">
    <span class="title">HSL カラーミキサー</span>
    <div class="field">
      <input
        class="slider is-fullwidth"
        type="range"
        min="0"
        max="360"
        step="1"
        v-model.number="hue"
      />
      <div>Hue (色相): {{ hue }}</div>
    </div>
    <div class="field">
      <input
        class="slider is-fullwidth"
        type="range"
        min="0"
        max="100"
        step="1"
        v-model.number="saturation"
      />
      <div>Saturation (彩度): {{ saturation }}</div>
    </div>
    <div class="field">
      <input
        class="slider is-fullwidth"
        type="range"
        min="0"
        max="100"
        step="1"
        v-model.number="lightness"
      />
      <div>Lightness (輝度): {{ lightness }}</div>
    </div>
    <div>
      <input
        class="input is-large"
        type="text"
        readonly
        v-bind:style="{ 'background-color': hsl }"
        v-model="colorCode"
      />
    </div>
  </div>
</template>

<script>
import "../style/bulma/css/bulma.css";
import "../style/bulma-extensions/dist/css/bulma-extensions.min.css";

export default {
  name: "HslColorMixer",
  data() {
    return {
      hue: 0,
      saturation: 0,
      lightness: 0,
    };
  },
  computed: {
    // カラーコード
    colorCode() {
      return this.toRgbColorCode();
    },
    // HSL
    hsl() {
      return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
    },
  },
  methods: {
    // HSL を RGB カラーコードに変換
    toRgbColorCode() {
      if (this.lightness === 0) {
        // 輝度 0
        return "#000000";
      }
      if (this.lightness === 100) {
        // 輝度 100
        return "#ffffff";
      }

      const h = this.hue % 360;
      const s = this.saturation / 100;
      const l = this.lightness / 100;

      // 範囲値
      let range;
      if (l < 0.5) {
        range = l;
      } else {
        range = 1 - l;
      }

      // 最大値
      const max = l + range * s;
      // 最小値
      const min = l - range * s;

      // RGB
      let red;
      let green;
      let blue;
      if (h <= 60) {
        red = max;
        green = (h / 60) * (max - min) + min;
        blue = min;
      } else if (h <= 120) {
        red = ((120 - h) / 60) * (max - min) + min;
        green = max;
        blue = min;
      } else if (h <= 180) {
        red = min;
        green = max;
        blue = ((h - 120) / 60) * (max - min) + min;
      } else if (h <= 240) {
        red = min;
        green = ((240 - h) / 60) * (max - min) + min;
        blue = max;
      } else if (h <= 300) {
        red = ((h - 240) / 60) * (max - min) + min;
        green = min;
        blue = max;
      } else {
        red = max;
        green = min;
        blue = ((360 - h) / 60) * (max - min) + min;
      }
      // 調整
      red = Math.floor(red * 255);
      if (red > 255) {
        red = 255;
      } else if (red < 0) {
        red = 0;
      }
      green = Math.floor(green * 255);
      if (green > 255) {
        green = 255;
      } else if (green < 0) {
        green = 0;
      }
      blue = Math.floor(blue * 255);
      if (blue > 255) {
        blue = 255;
      } else if (blue < 0) {
        blue = 0;
      }
      // RGB 16進数
      const r = this.zeroPadding(this.decimalToHex(red));
      const g = this.zeroPadding(this.decimalToHex(green));
      const b = this.zeroPadding(this.decimalToHex(blue));
      // カラーコード
      return `#${r}${g}${b}`;
    },
    // 10進数から16進数に変換する
    decimalToHex(value) {
      return Number(value).toString(16);
    },
    // 0パディング（2桁）
    zeroPadding(value) {
      return ("00" + value).slice(-2);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
frame {
  margin: 10px;
  margin-top: 20px;
}
.field {
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
}
</style>
