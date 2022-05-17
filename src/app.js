/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const btn = document.querySelector("button");
btn.addEventListener("click", function Excusándome() {
  let who = ["El perro", "Mi abuela", "Mi tortuga", "Mi canario", "Mi gato"];
  let what = ["se comió", "aplastó", "robó", "rompió", "ensució"];
  let when = [
    "cuando iba a dormir",
    "cuando llegué",
    "mientras desayunaba con mi hermano",
    "mientras pensaba que comprar"
  ];

  function excuseGenerator(quien, que, cuando) {
    numQuien = Math.floor(Math.random() * quien.length);
    numQue = Math.floor(Math.random() * que.length);
    numCuando = Math.floor(Math.random() * cuando.length);
    return (
      quien[numQuien] +
      " " +
      que[numQue] +
      " " +
      "mi tarea" +
      " " +
      cuando[numCuando]
    );

    function onLoad() {
      var excusa = document.getElementById("excuse");
      excusa.innerHTML = excuseGenerator(who, what, when);
    }
  }
});
