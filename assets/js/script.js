// let num = [1, 4, 6, 8, 9, 2, 4, 3, 4, 5, 6, 5, 7, 8, 5, 4, 5, 9, 5, 8, 2];
// let numLength = num.length;
//   let sum = 0;
//   let count = 0;

// num.forEach((number) => {
//   if (count < numLength) {
//     sum = sum + number;
//     count++;
//   }
// });
// console.log(sum);

// ------------------------------------------------------------------------------------------------------------------------------------------------

function generate() {
  let inpValue = document.getElementById("inp").value;

  let rdmNums = "";

  const smallAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const largeAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const simvol = ["*", "#", "$", "&", "-", "?", "/", "|"];

  let passSim = smallAlpha.concat(largeAlpha, simvol);
  for (let x = 1; x <= inpValue; x++) {
    let rdmNum = String(Math.round(Math.random() * (passSim.length - 1)));
    rdmNums = rdmNums + rdmNum + ",";
  }

  let rdmNumsSplit = rdmNums.split(",");
  rdmNumsSplit.pop();
  console.log(rdmNumsSplit);
  
  endAnswer= ""
  rdmNumsSplit.forEach((ind) => {

    endAnswer += passSim[ind]

  });
  document.getElementById("passShow").innerHTML = endAnswer
  
}

