var pink = "#ed1c69";
var green = "#00a352";
var blue = "rgb(3, 131, 182)";
var topVal;
var arrList = [];
function prepareArray(len) {
  topVal = 87;
  document.querySelector(".workingArea").innerHTML = "";
  while (arrList.length != len) {
    randomNumber();
  }
}
function createBar(newNum) {
  topVal = topVal + 10;
  let div = document.createElement("div");
  div.innerHTML =
    '<div class="num" id="' + newNum + '"><my>' + newNum + "</my></div>";
  document.querySelector(".workingArea").appendChild(div);
  document.getElementById(newNum).style.top = topVal + "px";
  document.getElementById(newNum).style.width = newNum * 5 + "px";
}
//BubbleSort Code begins here
async function swap(arr, first_Index, second_Index) {
  div1 = document.getElementById(arr[first_Index]);
  div2 = document.getElementById(arr[second_Index]);
  div1.style.top = div1.offsetTop + 10 + "px";
  div2.style.top = div2.offsetTop - 10 + "px";
  document.getElementById(arr[first_Index]).style.backgroundColor = blue;
  document.getElementById(arr[second_Index]).style.backgroundColor = blue;
  var temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
}
async function bubble_Sort(arr, delay) {
  var len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        document.getElementById(arr[j]).style.backgroundColor = pink;
        document.getElementById(arr[j + 1]).style.backgroundColor = pink;
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        swap(arr, j, j + 1);
      }
    }
  }
}
//BubbleSort Code ends here
function randomNumber() {
  var newNum = Math.floor(Math.random() * 200) + 1;
  if (document.getElementById(newNum)) {
    randomNumber();
  } else {
    arrList.push(newNum);
    createBar(newNum);
  }
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("size-btn")) {
    arrList = [];
    var arrlen = Math.floor(Math.random() * 50) + 1;
    document.getElementsByClassName("workingArea")[0].style.height =
      arrlen * 10 + "px";
    prepareArray(arrlen);
  } else if (event.target.classList.contains("sort-btn")) {
    if (document.getElementById("0.5x").checked) {
      var delay = 1000;
    } else if (document.getElementById("1x").checked) {
      var delay = 100;
    } else {
      var delay = 10;
    }
    bubble_Sort(arrList, delay);
  }
});
