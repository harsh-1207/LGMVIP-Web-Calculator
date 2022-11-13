const output = document.querySelector("#display");
const btn = document.querySelectorAll("button");

btn.forEach((ret) => {
  ret.onclick = () => {
    if (ret.id == "clear") {
      output.innerText = "";
    }
    else if (ret.id == "back") {
      let string = output.innerText.toString();
      output.innerText = string.substr(0, string.length - 1);
    }
    else if (output.innerText != "" && ret.id == "equal") {
      output.innerText = eval(output.innerText);
    }
    else if (output.innerText == "" && ret.id == "equal") {
      output.innerText = "Empty!";
      setTimeout(() => (output.innerText = ""), 2000);
    }
    else {
      output.innerText += ret.id;
    }
  };
});
