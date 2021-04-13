<template>
  <div id="app">
    <rgb-color-mixer />
    <hsl-color-mixer />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HslColorMixer from "./components/HslColorMixer.vue";
import RgbColorMixer from "./components/RgbColorMixer.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    RgbColorMixer,
    HslColorMixer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
