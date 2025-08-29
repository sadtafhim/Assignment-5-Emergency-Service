// heart click increase

function heartCountIncrease() {
  const heartCount = parseInt(document.getElementById("heart-count").innerText);
  const newCount = heartCount + 1;
  document.getElementById("heart-count").innerText = newCount;
}

document.getElementById("nat-em-heart").addEventListener("click", function () {
  heartCountIncrease();
});
document.getElementById("police-heart").addEventListener("click", function () {
  heartCountIncrease();
});
document.getElementById("fire-heart").addEventListener("click", function () {
  heartCountIncrease();
});
document.getElementById("ambulance-heart").addEventListener("click", function () {
  heartCountIncrease();
});
document.getElementById("women-heart").addEventListener("click", function () {
  heartCountIncrease();
});
document.getElementById("anti-heart").addEventListener("click", function () {
  heartCountIncrease();
});
document.getElementById("electro-heart").addEventListener("click", function () {
  heartCountIncrease();
});
document.getElementById("rail-heart").addEventListener("click", function () {
  heartCountIncrease();
});
document.getElementById("brac-heart").addEventListener("click", function () {
  heartCountIncrease();
});
