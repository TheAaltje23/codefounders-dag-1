const opdr1Input = document.getElementById("opdr1-input");
const opdr1Btn = document.getElementById("opdr1-btn");
const opdr2Input = document.getElementById("opdr2-input");
const opdr2Btn = document.getElementById("opdr2-btn");
const opdr3Input = document.getElementById("opdr3-input");
const opdr3Btn = document.getElementById("opdr3-btn");
const opdr3Input2 = document.getElementById("opdr3-input2");
const opdr3Btn2 = document.getElementById("opdr3-btn2");
const opdr4Btn1 = document.getElementById("opdr4-btn1");
const opdr4Btn2 = document.getElementById("opdr4-btn2");
const opdr4Btn3 = document.getElementById("opdr4-btn3");
const opdr4Btn4 = document.getElementById("opdr4-btn4");
const opdr4Div = document.getElementById("opdr4-div");
const opdr5Btn1 = document.getElementById("opdr5-btn1");
const opdr5Btn2 = document.getElementById("opdr5-btn2");
const opdr5Btn3 = document.getElementById("opdr5-btn3");
const opdr5Btn4 = document.getElementById("opdr5-btn4");
const opdr5Div = document.getElementById("opdr5-div");
const imageButton = document.getElementById("image-button");
const imageResult = document.getElementById("image-result");

const opdr1 = () => {
  if (opdr1Input.value === "hallo") {
    alert("Welkom");
    opdr1Input.value = "";
  } else if (opdr1Input.value === "doei") {
    alert("Tot de volgende keer!");
    opdr1Input.value = "";
  }
};

const opdr2 = () => {
  const val = opdr2Input.value;
  if (val.includes("e")) {
    alert('Dit woord heeft een letter "e"!');
    opdr2Input.value = "";
  } else {
    alert('Dit woord heeft NIET een letter "e"!');
    opdr2Input.value = "";
  }
};

const opdr3 = () => {
  const woord = opdr3Input.value;
  const letter = opdr3Input2.value;
  let counter = 0;
  if (woord.includes(letter)) {
    woord.split("").map((el) => (el === letter ? (counter += 1) : null));
    alert(`Dit woord bevat ${counter} keer de letter ${letter}!`);
    opdr3Input.value = "";
    opdr3Input2.value = "";
  }
};

const opdr4 = (clickedButton) => {
  opdr4Div.textContent += `U heeft op knop ${clickedButton.textContent} geklikt!`;
};

let counterA = 0;
let counterB = 0;
let counterC = 0;
let counterD = 0;
const opdr5 = (clickedButton) => {
  if (clickedButton === opdr5Btn1 && counterA > 0) {
    alert(
      `U heeft al een keer op ${clickedButton.textContent} geklikt, namelijk al ${counterA} keer!`
    );
    opdr5Div.textContent += `U heeft op knop ${clickedButton.textContent} geklikt!`;
    counterA += 1;
  } else if (clickedButton === opdr5Btn2 && counterB > 0) {
    alert(
      `U heeft al een keer op ${clickedButton.textContent} geklikt, namelijk al ${counterB} keer!`
    );
    opdr5Div.textContent += `U heeft op knop ${clickedButton.textContent} geklikt!`;
    counterB += 1;
  } else if (clickedButton === opdr5Btn3 && counterC > 0) {
    alert(
      `U heeft al een keer op ${clickedButton.textContent} geklikt, namelijk al ${counterC} keer!`
    );
    opdr5Div.textContent += `U heeft op knop ${clickedButton.textContent} geklikt!`;
    counterC += 1;
  } else if (clickedButton === opdr5Btn4 && counterD > 0) {
    alert(
      `U heeft al een keer op ${clickedButton.textContent} geklikt, namelijk al ${counterD} keer!`
    );
    opdr5Div.textContent += `U heeft op knop ${clickedButton.textContent} geklikt!`;
    counterD += 1;
  } else {
    opdr5Div.textContent += `U heeft op knop ${clickedButton.textContent} geklikt!`;
    if (clickedButton === opdr5Btn1) {
      counterA += 1;
    } else if (clickedButton === opdr5Btn2) {
      counterB += 1;
    } else if (clickedButton === opdr5Btn3) {
      counterC += 1;
    } else if (clickedButton === opdr5Btn4) {
      counterD += 1;
    }
  }
};

const opdr6 = () => {
  imageResult.textContent = "Er zijn 3 jaren voorbij";
};

// EVENT LISTENERS
opdr1Btn.addEventListener("click", opdr1);
opdr1Input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    opdr1();
  }
});

opdr2Btn.addEventListener("click", opdr2);
opdr2Input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    opdr2();
  }
});

opdr3Btn.addEventListener("click", opdr3);
opdr3Input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    opdr3();
  }
});

opdr4Btn1.addEventListener("click", () => opdr4(opdr4Btn1));
opdr4Btn2.addEventListener("click", () => opdr4(opdr4Btn2));
opdr4Btn3.addEventListener("click", () => opdr4(opdr4Btn3));
opdr4Btn4.addEventListener("click", () => opdr4(opdr4Btn4));

opdr5Btn1.addEventListener("click", () => opdr5(opdr5Btn1));
opdr5Btn2.addEventListener("click", () => opdr5(opdr5Btn2));
opdr5Btn3.addEventListener("click", () => opdr5(opdr5Btn3));
opdr5Btn4.addEventListener("click", () => opdr5(opdr5Btn4));

imageButton.addEventListener("click", opdr6);
