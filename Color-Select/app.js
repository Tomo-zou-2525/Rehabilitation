window.addEventListener("DOMContentLoaded", function () {
  const colorPicker = document.getElementById("input_color");

  colorPicker.addEventListener("change", function () {
    console.log(colorPicker.value);
  });
});
