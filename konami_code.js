const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  var body = document.body.addEventListener("keydown", function(e){
    if (e.key === codes[index]) {
      console.log(e.key)
      index++
      if (index === codes.length){
        window.alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
  init();
}