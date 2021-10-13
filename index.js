const body = document.querySelector("body");
const needle = document.getElementById("needle");

function getRotationAngle(x, y) {
  const dx = body.clientWidth / 2 - x;
  const dy = body.clientHeight / 2 - y;
  let radAngle = Math.atan2(dy, dx);

  return radAngle * (180 / Math.PI) - 90;
}

body.addEventListener("mousemove", (e) => {
  console.log(getRotationAngle(e.pageX, e.pageY));
  needle.style.transform =
    "rotate(" + getRotationAngle(e.pageX, e.pageY) + "deg)";
});
