<template>
  <div class="frame box">
    <span class="title">RGB カラーミキサー</span>
    <div class="field">
      <input
        class="slider is-fullwidth is-danger"
        type="range"
        min="0"
        max="255"
        step="1"
        v-model.number="red"
      />
      <div>Red(赤): {{ red }}</div>
    </div>
    <div class="field">
      <input
        class="slider is-fullwidth is-success"
        type="range"
        min="0"
        max="255"
        step="1"
        v-model.number="green"
      />
      <div>Green (緑): {{ green }}</div>
    </div>
    <div class="field">
      <input
        class="slider is-fullwidth is-info"
        type="range"
        min="0"
        max="255"
        step="1"
        v-model.number="blue"
      />
      <div>Blue (青): {{ blue }}</div>
    </div>
    <div>
      <input
        class="input is-large"
        type="text"
        readonly
        v-bind:style="{ 'background-color': rgb }"
        v-model="colorCode"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RgbColorMixer",
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
    };
  },
  computed: {
    //Red(赤)１６進数
    redHex() {
      let h = this.decimalToHex(this.red);
      h = this.zeroPadding(h);
      return h;
    },
    //Red(緑)１６進数
    greenHex() {
      let h = this.decimalToHex(this.green);
      h = this.zeroPadding(h);
      return h;
    },
    //Red(青)１６進数
    blueHex() {
      let h = this.decimalToHex(this.blue);
      h = this.zeroPadding(h);
      return h;
    },
    //カラーコード
    colorCoded() {
      return `#${this.redHex}${this.greenHex}${this.blueHex}`;
    },
    //RGB
    rgb() {
      return `rgb(${this.red},${this.green},${this.blue})`;
    },
  },
  methods: {
    //10進数から16進数に変換
    decimalToHex(value) {
      return Number(value).toString(16);
    },
    //0パディング(2けた)
    zeroPadding(value) {
      return ("00" + value).slice(-2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
