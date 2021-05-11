let user = document.getElementById("display");
let buttones = Array.from(document.getElementsByClassName("buttons"));
console.log(buttones);

buttones.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "C":
        display.value = "";
        break;
      case "CE":
        display.value = display.value.slice(0, -1);
        break;

      case "=":
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Invalid expresion ;c";
        }
        break;
      default:
        display.value += e.target.value;
    }

    console.log("clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
  });
});
