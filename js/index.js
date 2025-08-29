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
document
  .getElementById("ambulance-heart")
  .addEventListener("click", function () {
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

// number alert

function alertAndAdd(nameid, numberid) {
  const name = document.getElementById(nameid).innerText;
  const number = document.getElementById(numberid).innerText;

  alert("Calling " + name + " " + number);

  const div = document.createElement("div");
  div.classList.add("flex", "justify-between", "items-center", "gap-2", "mb-1");

  const now = new Date().toLocaleTimeString();

  div.innerHTML = `
    <div>
      <h1 class="hind-madurai-regular font-bold">${name}</h1>
      <p class="hind-madurai-regular">${number}</p>
    </div>
    <h1 class="hind-madurai-regular font-bold">${now}</h1>
  `;

  document.getElementById("call-log").appendChild(div);
}

document.getElementById("nat-em-call").addEventListener("click", function () {
  alertAndAdd("nat-em-name", "nat-em-number");
});
document.getElementById("police-call").addEventListener("click", function () {
  alertAndAdd("police-name", "police-number");
});
document.getElementById("fire-call").addEventListener("click", function () {
  alertAndAdd("fire-name", "fire-number");
});
document
  .getElementById("ambulance-call")
  .addEventListener("click", function () {
    alertAndAdd("ambulance-name", "ambulance-number");
  });
document.getElementById("women-call").addEventListener("click", function () {
  alertAndAdd("women-name", "women-number");
});
document.getElementById("anti-call").addEventListener("click", function () {
  alertAndAdd("anti-name", "anti-number");
});
document.getElementById("electro-call").addEventListener("click", function () {
  alertAndAdd("electro-name", "electro-number");
});
document.getElementById("brac-call").addEventListener("click", function () {
  alertAndAdd("brac-name", "brac-number");
});
document.getElementById("rail-call").addEventListener("click", function () {
  alertAndAdd("rail-name", "rail-number");
});

// clearing the window

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("call-log").innerHTML = "";
});
