function calculateValue() {
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = "<p>The sum of first and second num is:<b>" + "&nbsp&nbsp" + (parseInt(num1) + parseInt(num2)) + "</b></p>"
        + "<p>The subtraction of first and second num is:<b>" + "&nbsp&nbsp" + (parseInt(num1) - parseInt(num2)) + "</b></p>"
        + "<p>The multily of first and second num is: <b>" + "&nbsp&nbsp" + (parseInt(num1) * parseInt(num2)) + "</b></p>"
        + "<p>The divide of first and second num is:<b>" + "&nbsp&nbsp" + (parseInt(num1) / parseInt(num2)) + "</b></p>"
        + "<p>The square of first and second num is:<b>" + "&nbsp&nbsp" + (Math.pow(parseInt(num1), 2)) + "&nbsp;and&nbsp" + (Math.pow(parseInt(num2), 2)) + "</b></p>"
        + "<p>The cube of first and second num is:<b>" + "&nbsp&nbsp" + (Math.pow(parseInt(num1), 3)) + "&nbsp;and&nbsp" + (Math.pow(parseInt(num2), 3)) + "</b></p>"
        + "<p>The sin value is:<b>" + "&nbsp&nbsp" + (Math.sin(parseInt(num1) + parseInt(num2))) + "</b></p>"
        + "<p>The cos value is:<b>" + "&nbsp&nbsp" + (Math.cos(parseInt(num1) + parseInt(num2))) + "</b></p>"
        + "<p>The tan value is:<b>" + "&nbsp&nbsp" + (Math.tan(parseInt(num1) + parseInt(num2))) + "</b></p>"
}

function startFunction() {
    var x = document.getElementById("start");
    var y = document.getElementById("card1");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";

    } else {
        x.style.display = "none";
        y.style.display = "block";

    }
}
//Next function card1
function card1Function() {
    var x = document.getElementById("card1");
    var y = document.getElementById("card2");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";

    } else {
        x.style.display = "none";
        y.style.display = "block";

    }
}
// Previous function card1
function card1Function1() {
    var x = document.getElementById("start");
    var y = document.getElementById("card1");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";

    } else {
        x.style.display = "none";
        y.style.display = "block";

    }
}

//Previous function card2
function card2Function1() {
    var x = document.getElementById("card1");
    var y = document.getElementById("card2");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";

    } else {
        x.style.display = "none";
        y.style.display = "block";

    }
}

//Next function card2
function card2Function2() {
    var x = document.getElementById("card2");
    var z = document.getElementById("card3");

    if (x.style.display === "none") {
        x.style.display = "block";
        z.style.display = "none";

    } else {
        x.style.display = "none";
        z.style.display = "block";

    }
}

//Previous function card3

function card3Function() {
    var y = document.getElementById("card2");
    var z = document.getElementById("card3");

    if (y.style.display === "none") {
        y.style.display = "block";
        z.style.display = "none";

    } else {
        y.style.display = "none";
        z.style.display = "block";

    }
}

var f_No1 = document.getElementById("firstNumber1");
var s_No1 = document.getElementById("secondNumber1");
var validation = document.getElementById("validation");
s_No1.addEventListener('keyup', () => {
    (Number(f_No1.value) > Number(s_No1.value)) ? validation.innerHTML = "Plz enter higher value" : validation.innerHTML = " ";
})

function odd_even_calculation() {
    var obj = { evenarr: [], oddarr: [] }
    var sum_of_odd = 0
    var sum_of_even = 0
    for (let i = Number(f_No1.value); i <= s_No1.value; i++) {
        if (i % 2 == 0) {
            obj.evenarr.push(i);
            sum_of_even += i;
        }
        else {
            obj.oddarr.push(i);
            sum_of_odd += i;
        }
    }
    document.getElementById('odd_even_calc').innerHTML = "<p>The sum of total numbers b/w The two inputfield is:<b> " + (sum_of_even + sum_of_odd) + "</b></p>"
        + "<p>The total numbers b/w the two inputfield is: <b> " + "&nbsp&nbsp" + (Number(obj.evenarr.length) + Number(obj.oddarr.length)) + "</b></p>"
        + "<p>Even numbers b/w the two inputfield are:<b> " + "&nbsp&nbsp" + obj.evenarr + "&nbsp&nbsp" + "</b></p>"
        + "<p>Odd numbers b/w the two inputfield are:<b>" + "&nbsp&nbsp" + obj.oddarr + "&nbsp&nbsp" + "</b></p>"
        + "<p>The sum of even num is:<b> " + sum_of_even + "&nbsp&nbsp" + "</b></p>" + "<p>The sum of odd num is : <b>" + "&nbsp&nbsp" + sum_of_odd + "&nbsp&nbsp" + "</b></p>";
}

// textarea.addEventListener('keyup', () => {
//     function count_occur() {

//         var str = textarea.value
//         if (str.length == 0) {
//             console.log("Invalid string")
//             return;
//         }
//         for (let i = 0; i < str.length; i++) {
//             let count = 0;
//             for (let j = 0; j < str.length; j++) {
//                 if (str[i] == str[j] && i > j) {
//                     break;
//                 }
//                 if (str[i] == str[j]) {
//                     count++;
//                 }
//             }
//             if (count > 0)
//                 document.write(`${str[i]} occurs ${count} times`);
//             console.log(str.length)
//         }
//     }
// })
var textarea = document.getElementById("text");
textarea.addEventListener('keyup', () => {

    document.getElementById('character_calc').innerHTML = ""

    var text_value = document.getElementById("text");

    var trim_value = text_value.value.trim().split(" ").join("");

    var ori = trim_value;

    var ori_len = trim_value.length;

    var totlen = trim_value.length;

    var chararr = trim_value.split("");

    console.log(chararr)

    var charlen

    for (let i = 0; i < chararr.length; i++) {

        ori = ori.replaceAll(chararr[i], '');

        console.log(ori)

        charlen = ori_len - ori.length;
        ori_len = ori.length;
        if (charlen == 0) {

            console.log(charlen);
        }
        else {
            if (document.getElementById('character_calc').innerHTML == "") {

                document.getElementById('character_calc').innerHTML = "<p> The length in the text is:<b> " + "&nbsp&nbsp" + totlen + "</b></p>" + "<p> The " + chararr[i] + " length in the text is:<b> " + charlen + "</b></p>"
            }
            else {
                document.getElementById('character_calc').innerHTML += "<p> The " + chararr[i] + " length in the text is: <b>" + "&nbsp&nbsp" + charlen + "</b></p>"
            }
        }
    }
})