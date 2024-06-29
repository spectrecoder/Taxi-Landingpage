// Optional: Add JavaScript if you want to perform additional actions on click
document
  .getElementById("customCheckbox")
  .addEventListener("change", function () {
    if (this.checked) {
      // Do something when checked
      console.log("Checkbox is checked");
    } else {
      // Do something when unchecked
      console.log("Checkbox is unchecked");
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  var select = document.getElementById("sel1");
  var options = select.options;

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "#add8e6"; // Light blue background
      this.style.color = "#fff"; // White text color
    });

    options[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = ""; // Reset to default
      this.style.color = ""; // Reset to default
    });
  }
});
var first_data1;
var first_data2;

function toggleDivs() {
  var firstButton = document.getElementById("first");
  first_data1 = document.getElementById("first-button1-content").textContent;
  first_data2 = document.getElementById("first-button2-content").textContent;
  var secondDiv = document.getElementById("second");

  // Hide the first button
  firstButton.style.display = "none";

  // Display the second div
  secondDiv.style.display = "block";
}

// //////////////////////////////////////////////////////////////////
// ============================Second =================================
var red_taxi = "";
var black_taxi = "";
var no_license = "";
function updateNextButtonState() {
  if (red_taxi === "" && black_taxi === "" && no_license === "") {
    document.getElementById("second-next").classList.add("disabled");
  } else {
    document.getElementById("second-next").classList.remove("disabled");
  }
}

function disableOtherButtons(clickedId) {
  var buttons = ["redtaxi", "blacktaxi", "nolicense"];
  buttons.forEach(function (buttonId) {
    if (buttonId !== clickedId) {
      document.getElementById(buttonId).classList.add("disabled");
    }
  });
}

function enableAllButtons() {
  var buttons = ["redtaxi", "blacktaxi", "nolicense"];
  buttons.forEach(function (buttonId) {
    document.getElementById(buttonId).classList.remove("disabled");
  });
}

function secondCheck1() {
  var redtaxi = document.getElementById("redtaxi");
  if (red_taxi === "普通免許") {
    red_taxi = "";
    enableAllButtons();
  } else {
    red_taxi = document.getElementById("red-taxi").textContent;
    disableOtherButtons("redtaxi");
  }
  const imgContainer = document.querySelector(".next-img-second");
  imgContainer.style.top = "340px";
  if (redtaxi.style.backgroundColor === "") {
    redtaxi.style.backgroundColor = "#93d7dc";
  } else {
    redtaxi.style.backgroundColor = "";
  }

  updateNextButtonState();
}

function secondCheck2() {
  var blacktaxi = document.getElementById("blacktaxi");
  if (black_taxi === "⼆種免許") {
    black_taxi = "";
    enableAllButtons();
  } else {
    black_taxi = document.getElementById("black-taxi").textContent;
    disableOtherButtons("blacktaxi");
  }
  const imgContainer = document.querySelector(".next-img-second");
  imgContainer.style.top = "340px";
  if (blacktaxi.style.backgroundColor === "") {
    blacktaxi.style.backgroundColor = "#93d7dc";
  } else {
    blacktaxi.style.backgroundColor = "";
  }

  updateNextButtonState();
}

function secondCheck3() {
  var nolicense = document.getElementById("nolicense");
  if (no_license === "免許は持っていない") {
    no_license = "";
    enableAllButtons();
  } else {
    no_license = document.getElementById("no-license").textContent;
    disableOtherButtons("nolicense");
  }
  const imgContainer = document.querySelector(".next-img-second");
  imgContainer.style.top = "340px";
  if (nolicense.style.backgroundColor === "") {
    nolicense.style.backgroundColor = "#93d7dc";
  } else {
    nolicense.style.backgroundColor = "";
  }

  updateNextButtonState();
}

// Initial check to ensure the second-next button is disabled on page load
function gotoFirst() {
  var firstButton = document.getElementById("first");

  var secondDiv = document.getElementById("second");
  var redtaxi = document.getElementById("redtaxi");

  // Hide the first button
  firstButton.style.display = "block";

  // Display the second div
  secondDiv.style.display = "none";
  red_taxi = "";
  black_taxi = "";
  no_license = "";
  const imgContainer = document.querySelector(".next-img-second");
  var blacktaxi = document.getElementById("blacktaxi");
  var nolicense = document.getElementById("nolicense");

  imgContainer.style.top = "200px";
  nolicense.style.backgroundColor = "";
  redtaxi.style.backgroundColor = "";
  blacktaxi.style.backgroundColor = "";
  enableAllButtons();

}
///////////////////////////////////////////////////////////////
// ==========================Third=============================
function secondHidden() {
  var firstButton = document.getElementById("second");

  var secondDiv = document.getElementById("third");

  // Hide the first button
  firstButton.style.display = "none";

  // Display the second div
  secondDiv.style.display = "block";
}

var plane_content = "";
var train_content = "";
var bus_content = "";
var bike_content = "";
var rickshaw_content = "";

function updateThirdNextButtonState() {
  if (
    plane_content === "" &&
    train_content === "" &&
    bus_content === "" &&
    bike_content === "" &&
    rickshaw_content === ""
  ) {
    document.getElementById("third-next").classList.add("disabled");
  } else {
    document.getElementById("third-next").classList.remove("disabled");
  }
}
function disableThirdOtherButtons(clickedId) {
  var buttons = ["plane", "train", "bus", "bike", "rickshaw"];
  buttons.forEach(function (buttonId) {
    if (buttonId !== clickedId) {
      document.getElementById(buttonId).classList.add("disabled");
    }
  });
}

function enableThirdAllButtons() {
  var buttons = ["plane", "train", "bus", "bike", "rickshaw"];
  buttons.forEach(function (buttonId) {
    document.getElementById(buttonId).classList.remove("disabled");
  });
}

function thirdCheck1() {
  var plane = document.getElementById("plane");
  if (plane_content === "直ぐにでも") {
    plane_content = "";
    enableThirdAllButtons();
  } else {
    plane_content = document.getElementById("plane-content").textContent;
    disableThirdOtherButtons("plane");
  }
  const imgContainer = document.querySelector(".next-img-third");
  imgContainer.style.top = "340px";
  if (plane.style.backgroundColor === "") {
    plane.style.backgroundColor = "#93d7dc";
  } else {
    plane.style.backgroundColor = "";
  }

  updateThirdNextButtonState();
}

function thirdCheck2() {
  var train = document.getElementById("train");
  if (train_content === "来⽉あたり") {
    train_content = "";
    enableThirdAllButtons();
  } else {
    train_content = document.getElementById("train-content").textContent;
    disableThirdOtherButtons("train");
  }
  const imgContainer = document.querySelector(".next-img-third");
  imgContainer.style.top = "340px";
  if (train.style.backgroundColor === "") {
    train.style.backgroundColor = "#93d7dc";
  } else {
    train.style.backgroundColor = "";
  }

  updateThirdNextButtonState();
}

function thirdCheck3() {
  var bus = document.getElementById("bus");
  if (bus_content === "3ヶ⽉以内") {
    bus_content = "";
    enableThirdAllButtons();
  } else {
    bus_content = document.getElementById("bus-content").textContent;
    disableThirdOtherButtons("bus");
  }
  const imgContainer = document.querySelector(".next-img-third");
  imgContainer.style.top = "340px";
  if (bus.style.backgroundColor === "") {
    bus.style.backgroundColor = "#93d7dc";
  } else {
    bus.style.backgroundColor = "";
  }

  updateThirdNextButtonState();
}

function thirdCheck4() {
  var bike = document.getElementById("bike");
  if (bike_content === "半年以内") {
    bike_content = "";
    enableThirdAllButtons();
  } else {
    bike_content = document.getElementById("bike-content").textContent;
    disableThirdOtherButtons("bike");
  }
  const imgContainer = document.querySelector(".next-img-third");
  imgContainer.style.top = "340px";
  if (bike.style.backgroundColor === "") {
    bike.style.backgroundColor = "#93d7dc";
  } else {
    bike.style.backgroundColor = "";
  }

  updateThirdNextButtonState();
}

function thirdCheck5() {
  var rickshaw = document.getElementById("rickshaw");
  if (rickshaw_content === "時期未定") {
    rickshaw_content = "";
    enableThirdAllButtons();
  } else {
    rickshaw_content = document.getElementById("rickshaw-content").textContent;
    disableThirdOtherButtons("rickshaw");
  }

  if (rickshaw.style.backgroundColor === "") {
    rickshaw.style.backgroundColor = "#93d7dc";
  } else {
    rickshaw.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-third");
  imgContainer.style.top = "340px";
  updateThirdNextButtonState();
}

// ///////////////////////////Fourth/////////////////////////////////////
// ////////////////////////////////////////////////////////////////
function gotoSecond() {
  var firstButton = document.getElementById("second");

  var secondDiv = document.getElementById("third");

  // Hide the first button
  firstButton.style.display = "block";

  // Display the second div
  secondDiv.style.display = "none";
}

function thirdHidden() {
  var firstButton = document.getElementById("third");

  var secondDiv = document.getElementById("four");

  // Hide the first button
  firstButton.style.display = "none";

  // Display the second div
  secondDiv.style.display = "block";
}
var f1_cont;
var f2_cont;
var f3_cont;
var f4_cont;
var f5_cont;
var f6_cont;
var f7_cont;
var f8_cont;

function updateFourNextButtonState() {
  if (
    f1_cont === "" &&
    f2_cont === "" &&
    f3_cont === "" &&
    f4_cont === "" &&
    f5_cont === "" &&
    f6_cont === "" &&
    f7_cont === "" &&
    f8_cont === ""
  ) {
    document.getElementById("four-next").classList.add("disabled");
  } else {
    document.getElementById("four-next").classList.remove("disabled");
  }
}

function fourClick1() {
  var f1 = document.getElementById("f1");
  if (f1_cont === "収⼊を上げたいから") {
    f1_cont = "";
  } else {
    f1_cont = document.getElementById("f1").textContent;
  }
  if (f1.style.backgroundColor === "") {
    f1.style.backgroundColor = "#93d7dc";
  } else {
    f1.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-four");
  imgContainer.style.top = "375px";
  updateFourNextButtonState();
}
function fourClick2() {
  var f2 = document.getElementById("f2");
  if (f2_cont === "⾃分のペースで仕事をしたいから") {
    f2_cont = "";
  } else {
    f2_cont = document.getElementById("f2").textContent;
  }

  if (f2.style.backgroundColor === "") {
    f2.style.backgroundColor = "#93d7dc";
  } else {
    f2.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-four");
  imgContainer.style.top = "375px";
  updateFourNextButtonState();
}
function fourClick3() {
  var f3 = document.getElementById("f3");
  if (f3_cont === "もっとやりがいを感じる仕事をしたいから") {
    f3_cont = "";
  } else {
    f3_cont = document.getElementById("f3").textContent;
  }

  if (f3.style.backgroundColor === "") {
    f3.style.backgroundColor = "#93d7dc";
  } else {
    f3.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-four");
  imgContainer.style.top = "375px";
  updateFourNextButtonState();
}
function fourClick4() {
  var f4 = document.getElementById("f4");
  if (f4_cont === "正社員になりたいから") {
    f4_cont = "";
  } else {
    f4_cont = document.getElementById("f4").textContent;
  }

  if (f4.style.backgroundColor === "") {
    f4.style.backgroundColor = "#93d7dc";
  } else {
    f4.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-four");
  imgContainer.style.top = "375px";
  updateFourNextButtonState();
}
function fourClick5() {
  var f5 = document.getElementById("f5");
  if (f5_cont === "副業ができる会社で働きたいから") {
    f5_cont = "";
  } else {
    f5_cont = document.getElementById("f5").textContent;
  }

  if (f5.style.backgroundColor === "") {
    f5.style.backgroundColor = "#93d7dc";
  } else {
    f5.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-four");
  imgContainer.style.top = "375px";
  updateFourNextButtonState();
}
function fourClick6() {
  var f6 = document.getElementById("f6");
  if (f6_cont === "⾃宅から近い会社で働きたいから") {
    f6_cont = "";
  } else {
    f6_cont = document.getElementById("f6").textContent;
  }

  if (f6.style.backgroundColor === "") {
    f6.style.backgroundColor = "#93d7dc";
  } else {
    f6.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-four");
  imgContainer.style.top = "375px";
  updateFourNextButtonState();
}
function fourClick7() {
  var f7 = document.getElementById("f7");
  if (f7_cont === "今の仕事を中⻑期的に続けるイメージができないから") {
    f7_cont = "";
  } else {
    f7_cont = document.getElementById("f7").textContent;
  }

  if (f7.style.backgroundColor === "") {
    f7.style.backgroundColor = "#93d7dc";
  } else {
    f7.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-four");
  imgContainer.style.top = "375px";
  updateFourNextButtonState();
}
function fourClick8() {
  var f8 = document.getElementById("f8");
  if (f8_cont === "間関係に疲れてしまったから") {
    f8_cont = "";
  } else {
    f8_cont = document.getElementById("f8").textContent;
  }

  if (f8.style.backgroundColor === "") {
    f8.style.backgroundColor = "#93d7dc";
  } else {
    f8.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-four");
  imgContainer.style.top = "375px";
  updateFourNextButtonState();
}

// /////////////////////////   Five    ///////////////////////////////////////
// ////////////////////////////////////////////////////////////////

function gotoThird() {
  var firstButton = document.getElementById("third");

  var secondDiv = document.getElementById("four");

  // Hide the first button
  firstButton.style.display = "block";

  // Display the second div
  secondDiv.style.display = "none";
}

function fourHidden() {
  var firstButton = document.getElementById("four");

  var secondDiv = document.getElementById("five");

  // Hide the first button
  firstButton.style.display = "none";

  // Display the second div
  secondDiv.style.display = "block";
}

var five1_cont = "";
var five2_cont = "";
var five3_cont = "";
var five4_cont = "";
var five5_cont = "";

function updateFiveNextButtonState() {
  if (
    five1_cont === "" &&
    five2_cont === "" &&
    five3_cont === "" &&
    five4_cont === "" &&
    five5_cont === ""
  ) {
    document.getElementById("five-next").classList.add("disabled");
  } else {
    document.getElementById("five-next").classList.remove("disabled");
  }
}

function fiveClick1() {
  var five1 = document.getElementById("five1");
  if (five1_cont === "年収が⾼いから") {
    five1_cont = "";
  } else {
    five1_cont = document.getElementById("five1").textContent;
  }
  if (five1.style.backgroundColor === "") {
    five1.style.backgroundColor = "#93d7dc";
  } else {
    five1.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-five");
  imgContainer.style.top = "350px";
  updateFiveNextButtonState();
}
function fiveClick2() {
  var five2 = document.getElementById("five2");
  if (five2_cont === "⾃分のペースで仕事ができるから") {
    five2_cont = "";
  } else {
    five2_cont = document.getElementById("five2").textContent;
  }

  if (five2.style.backgroundColor === "") {
    five2.style.backgroundColor = "#93d7dc";
  } else {
    five2.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-five");
  imgContainer.style.top = "350px";
  updateFiveNextButtonState();
}
function fiveClick3() {
  var five3 = document.getElementById("five3");
  if (five3_cont === "⼈の役に⽴っている感覚を持てるから") {
    five3_cont = "";
  } else {
    five3_cont = document.getElementById("five3").textContent;
  }

  if (five3.style.backgroundColor === "") {
    five3.style.backgroundColor = "#93d7dc";
  } else {
    five3.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-five");
  imgContainer.style.top = "350px";
  updateFiveNextButtonState();
}
function fiveClick4() {
  var five4 = document.getElementById("five4");
  if (five4_cont === "シフト制で勤務に融通が効きそうだから") {
    five4_cont = "";
  } else {
    five4_cont = document.getElementById("five4").textContent;
  }

  if (five4.style.backgroundColor === "") {
    five4.style.backgroundColor = "#93d7dc";
  } else {
    five4.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-five");
  imgContainer.style.top = "350px";
  updateFiveNextButtonState();
}
function fiveClick5() {
  var five5 = document.getElementById("five5");
  if (five5_cont === "年齢を重ねても仕事を続けられそうだから") {
    five5_cont = "";
  } else {
    five5_cont = document.getElementById("five5").textContent;
  }

  if (five5.style.backgroundColor === "") {
    five5.style.backgroundColor = "#93d7dc";
  } else {
    five5.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-five");
  imgContainer.style.top = "350px";
  updateFiveNextButtonState();
}

// //////////////////////////  Six  ///////////////////////////////////
// /////////////////////////////////////////////////////////////
function gotoFour() {
  var firstButton = document.getElementById("four");

  var secondDiv = document.getElementById("five");

  // Hide the first button
  firstButton.style.display = "block";

  // Display the second div
  secondDiv.style.display = "none";
}

function fiveHidden() {
  var firstButton = document.getElementById("five");

  var secondDiv = document.getElementById("six");

  // Hide the first button
  firstButton.style.display = "none";

  // Display the second div
  secondDiv.style.display = "block";
}

var sixArea1_cont = "";
var sixArea2_cont = "";
var sixArea3_cont = "";
var sixArea4_cont = "";
var sixArea5_cont = "";

var sixWay1_cont = "";
var sixWay2_cont = "";
var sixWay3_cont = "";
var sixWay4_cont = "";
var sixWay5_cont = "";
var sixWay6_cont = "";

function updateSixNextButtonState() {
  if (
    sixArea1_cont === "" &&
    sixArea2_cont === "" &&
    sixArea3_cont === "" &&
    sixArea4_cont === "" &&
    sixArea5_cont === ""
  ) {
    document.getElementById("six-next").classList.add("disabled");
  } else {
    document.getElementById("six-next").classList.remove("disabled");
  }
}
updateSixNextButtonState();
function disableSixOtherButtons(clickedId) {
  var buttons = ["sixArea1", "sixArea2", "sixArea3", "sixArea4", "sixArea5"];
  buttons.forEach(function (buttonId) {
    if (buttonId !== clickedId) {
      document.getElementById(buttonId).classList.add("disabled");
    }
  });
}

function enableSixAllButtons() {
  var buttons = ["sixArea1", "sixArea2", "sixArea3", "sixArea4", "sixArea5"];
  buttons.forEach(function (buttonId) {
    document.getElementById(buttonId).classList.remove("disabled");
  });
}
function sixAreaClick1() {
  var sixArea1 = document.getElementById("sixArea1");
  if (sixArea1_cont === "東京都") {
    sixArea1_cont = "";
    enableSixAllButtons();
  } else {
    sixArea1_cont = document.getElementById("sixArea1").textContent;
    disableSixOtherButtons("sixArea1");
  }
  if (sixArea1.style.backgroundColor === "") {
    sixArea1.style.backgroundColor = "#93d7dc";
  } else {
    sixArea1.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "350px";
  updateSixNextButtonState();
}
function sixAreaClick2() {
  var sixArea2 = document.getElementById("sixArea2");
  if (sixArea2_cont === "神奈川県") {
    sixArea2_cont = "";
    enableSixAllButtons();
  } else {
    sixArea2_cont = document.getElementById("sixArea2").textContent;
    disableSixOtherButtons("sixArea2");
  }
  if (sixArea2.style.backgroundColor === "") {
    sixArea2.style.backgroundColor = "#93d7dc";
  } else {
    sixArea2.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "350px";
  updateSixNextButtonState();
}
function sixAreaClick3() {
  var sixArea3 = document.getElementById("sixArea3");
  if (sixArea3_cont === "埼⽟県") {
    sixArea3_cont = "";
    enableSixAllButtons();
  } else {
    sixArea3_cont = document.getElementById("sixArea3").textContent;
    disableSixOtherButtons("sixArea3");
  }
  if (sixArea3.style.backgroundColor === "") {
    sixArea3.style.backgroundColor = "#93d7dc";
  } else {
    sixArea3.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "350px";
  updateSixNextButtonState();
}
function sixAreaClick4() {
  var sixArea4 = document.getElementById("sixArea4");
  if (sixArea4_cont === "千葉県") {
    sixArea4_cont = "";
    enableSixAllButtons();
  } else {
    sixArea4_cont = document.getElementById("sixArea4").textContent;
    disableSixOtherButtons("sixArea4");
  }
  if (sixArea4.style.backgroundColor === "") {
    sixArea4.style.backgroundColor = "#93d7dc";
  } else {
    sixArea4.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "350px";
  updateSixNextButtonState();
}
function sixAreaClick5() {
  var sixArea5 = document.getElementById("sixArea5");
  if (sixArea5_cont === "その他の地域") {
    sixArea5_cont = "";
    enableSixAllButtons();
  } else {
    sixArea5_cont = document.getElementById("sixArea5").textContent;
    disableSixOtherButtons("sixArea5");
  }
  if (sixArea5.style.backgroundColor === "") {
    sixArea5.style.backgroundColor = "#93d7dc";
  } else {
    sixArea5.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "350px";
  updateSixNextButtonState();
}

// /////////////////// sixway /////////////////////////

function updateSixNextButtonState() {
  if (
    sixWay1_cont === "" &&
    sixWay2_cont === "" &&
    sixWay3_cont === "" &&
    sixWay4_cont === "" &&
    sixWay5_cont === ""
  ) {
    document.getElementById("six-next").classList.add("disabled");
  } else {
    document.getElementById("six-next").classList.remove("disabled");
  }
}

function sixWayClick1() {
  var sixWay1 = document.getElementById("sixWay1");
  if (sixWay1_cont === "電⾞") {
    sixWay1_cont = "";
  } else {
    sixWay1_cont = document.getElementById("sixWay1").textContent;
  }
  if (sixWay1.style.backgroundColor === "") {
    sixWay1.style.backgroundColor = "#93d7dc";
  } else {
    sixWay1.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "550px";
}

function sixWayClick2() {
  var sixWay2 = document.getElementById("sixWay2");
  if (sixWay2_cont === "バス") {
    sixWay2_cont = "";
  } else {
    sixWay2_cont = document.getElementById("sixWay2").textContent;
  }
  if (sixWay2.style.backgroundColor === "") {
    sixWay2.style.backgroundColor = "#93d7dc";
  } else {
    sixWay2.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "550px";
}
function sixWayClick3() {
  var sixWay3 = document.getElementById("sixWay3");
  if (sixWay3_cont === "⾃家⽤⾞") {
    sixWay3_cont = "";
  } else {
    sixWay3_cont = document.getElementById("sixWay3").textContent;
  }
  if (sixWay3.style.backgroundColor === "") {
    sixWay3.style.backgroundColor = "#93d7dc";
  } else {
    sixWay3.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "550px";
}
function sixWayClick4() {
  var sixWay4 = document.getElementById("sixWay4");
  if (sixWay4_cont === "バイク") {
    sixWay4_cont = "";
  } else {
    sixWay4_cont = document.getElementById("sixWay4").textContent;
  }
  if (sixWay4.style.backgroundColor === "") {
    sixWay4.style.backgroundColor = "#93d7dc";
  } else {
    sixWay4.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "550px";
}
function sixWayClick5() {
  var sixWay5 = document.getElementById("sixWay5");
  if (sixWay5_cont === "⾃転⾞") {
    sixWay5_cont = "";
  } else {
    sixWay5_cont = document.getElementById("sixWay5").textContent;
  }
  if (sixWay5.style.backgroundColor === "") {
    sixWay5.style.backgroundColor = "#93d7dc";
  } else {
    sixWay5.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "550px";
}
function sixWayClick6() {
  var sixWay6 = document.getElementById("sixWay6");
  if (sixWay6_cont === "徒歩圏内が良い") {
    sixWay6_cont = "";
  } else {
    sixWay6_cont = document.getElementById("sixWay6").textContent;
  }
  if (sixWay6.style.backgroundColor === "") {
    sixWay6.style.backgroundColor = "#93d7dc";
  } else {
    sixWay6.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-six");
  imgContainer.style.top = "550px";
}

// six input

var post_number ="";
var nearest_station = "";

document.getElementById('custom-sixinput-one').addEventListener('input', () => {
  const nextButton = document.getElementById('six-next');

  if (post_number.length === 5) {
    nextButton.classList.remove('disabled');
  } else {
    nextButton.classList.add('disabled');
  }
});
function gotoFive() {
  var firstButton = document.getElementById("five");
  var secondDiv = document.getElementById("six");
  post_number = "";
  nearest_station = "";
  // Hide the first button
  firstButton.style.display = "block";
  // Display the second div
  secondDiv.style.display = "none";
}

function sixHidden() {
  var firstButton = document.getElementById("six");
  post_number = document.getElementById("custom-sixinput-one").value;
  nearest_station = document.getElementById("nearest_station").value;
  var secondDiv = document.getElementById("seven");
  alert(post_number)
  // Hide the first button
  firstButton.style.display = "none";

  // Display the second div
  secondDiv.style.display = "block";
}

// ////////////////////////        Seven         ///////////////////////////////////
// ///////////////////////////////////////////////////////////
var accident1_cont = "";
var accident2_cont = "";
var accident3_cont = "";
var accident4_cont = "";

function updateSixNextButtonState() {
  if (
    accident1_cont === "" &&
    accident2_cont === "" &&
    accident3_cont === "" &&
    accident4_cont === ""
  ) {
    document.getElementById("seven-next").classList.add("disabled");
  } else {
    document.getElementById("seven-next").classList.remove("disabled");
  }
}

function sevenAcc1() {
  var accident1 = document.getElementById("accident1");
  if (accident1_cont === "これまで事故をしたことはない") {
    accident1_cont = "";
  } else {
    accident1_cont = document.getElementById("accident1").textContent;
  }
  if (accident1.style.backgroundColor === "") {
    accident1.style.backgroundColor = "#93d7dc";
  } else {
    accident1.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-seven");
  imgContainer.style.top = "350px";
}

function sevenAcc2() {
  var accident2 = document.getElementById("accident2");
  if (accident2_cont === "駐⾞場でぶつけた / 縁⽯で擦った程度の軽い事故") {
    accident2_cont = "";
  } else {
    accident2_cont = document.getElementById("accident2").textContent;
  }
  if (accident2.style.backgroundColor === "") {
    accident2.style.backgroundColor = "#93d7dc";
  } else {
    accident2.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-seven");
  imgContainer.style.top = "350px";
}
function sevenAcc3() {
  var accident3 = document.getElementById("accident3");
  if (accident3_cont === "居眠り運転をしたことがある") {
    accident3_cont = "";
  } else {
    accident3_cont = document.getElementById("accident3").textContent;
  }
  if (accident3.style.backgroundColor === "") {
    accident3.style.backgroundColor = "#93d7dc";
  } else {
    accident3.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-seven");
  imgContainer.style.top = "350px";
}
function sevenAcc4() {
  var accident4 = document.getElementById("accident4");
  if (accident4_cont === "⼈⾝事故を起こしたことがある") {
    accident4_cont = "";
  } else {
    accident4_cont = document.getElementById("accident4").textContent;
  }
  if (accident4.style.backgroundColor === "") {
    accident4.style.backgroundColor = "#93d7dc";
  } else {
    accident4.style.backgroundColor = "";
  }
  const imgContainer = document.querySelector(".next-img-seven");
  imgContainer.style.top = "350px";
}

function gotoSix() {
  var firstButton = document.getElementById("six");

  var secondDiv = document.getElementById("seven");

  // Hide the first button
  firstButton.style.display = "block";

  // Display the second div
  secondDiv.style.display = "none";
}

function sevenHidden() {
  var firstButton = document.getElementById("seven");

  var secondDiv = document.getElementById("last");

  // Hide the first button
  firstButton.style.display = "none";

  // Display the second div
  secondDiv.style.display = "block";
}

// ///////////////// Last ////////////////////////

function gotoSeven() {
  var firstButton = document.getElementById("seven");

  var secondDiv = document.getElementById("last");

  // Hide the first button
  firstButton.style.display = "block";

  // Display the second div
  secondDiv.style.display = "none";
}
var surname = "";
var lastname = "";

var selectedValue = "10代";
var phone_number = "";
var email = "";
function completeStep() {
  surname = document.getElementById("surname").value;
  lastname = document.getElementById("lastname").value;
  var selectElement = document.getElementById("sel1");
  selectedValue = selectElement.value;
  selectElement.addEventListener("change", () => {
    selectedValue = selectElement.value;
  });
  phone_number = document.getElementById("phone_number").value;
  email = document.getElementById("email").value;
}

