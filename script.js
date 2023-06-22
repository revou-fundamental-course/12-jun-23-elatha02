function convert() {
  var input = document.getElementById("input").value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var result;

  if (from === "celcius") {
    if (to === "fahrenheit") {
      result = (input * 9/5) + 32;
    } else if (to === "kelvin") {
      result = parseFloat(input) + 273.15;
    } else {
      result = input;
    }
  } else if (from === "fahrenheit") {
    if (to === "celcius") {
      result = (input - 32) * 5/9;
    } else if (to === "kelvin") {
      result = (input - 32) * 5/9 + 273.15;
    } else {
      result = input;
    }
  } else if (from === "kelvin") {
    if (to === "celcius") {
      result = input - 273.15;
    } else if (to === "fahrenheit") {
      result = (input - 273.15) * 9/5 + 32;
    } else {
      result = input;
    }
  }

  document.getElementById("result").value = result.toFixed(2);
}

function reset() {
  document.getElementById("input").value = "";
  document.getElementById("from").value = "celcius";
  document.getElementById("to").value = "celcius";
  document.getElementById("result").value = "";
}
