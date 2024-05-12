const mybizAccount = document.getElementById("mybiz-acc");
const personalAccount = document.getElementById("personal-acc");
const leftSide = document.querySelector(".left-side");
const heading = document.querySelector(".heading");
const inputLabel = document.querySelector(".input-area label");
const inputBox = document.querySelector(".input-box");
const forgot = document.querySelector(".forgot");
const continueBtn = document.querySelector(".continue-btn");
const continueButton = document.querySelector(".continue-btn button");
const message = document.querySelector(".msg");
const socialLinks = document.querySelector(".social-links");
const secondChild = socialLinks.children[1];
const footerLinks = document.querySelector("footer a");
const anchors = document.getElementsByTagName("a");

// ================  Personal Account onclick Function ===============

personalAccount.onclick = function () {
  mybizAccount.classList.add("disable");
  personalAccount.classList.remove("disable");
  heading.classList.add("heading");
  leftSide.style.width = "40%";
  inputLabel.innerText = "Mobile Number";
  mybizAccount.style.backgroundColor = "";
  forgot.style.visibility = "hidden";
  inputBox.innerHTML =`<img src="./indian-flag.svg" alt="country-flag"><label name="country-code">+91</label><input type="number" name="mobile" class="mobile-input" placeholder="Enter Mobile Number">`;
  inputBox.style.border = "1.5px solid gray";
  inputBox.style.width = "100%";
  inputBox.style.gap = "0px"
  inputBox.style.margin = "0px"
  continueButton.style.width = "90%";
  continueBtn.style.display = "flex";
  message.innerText = "------------------------------------------ Or Login/Signup With ------------------------------------------";
  message.style.margin = "0";
  socialLinks.appendChild(secondChild);
  for (let index = 0; index < anchors.length; index++) {
    anchors[index].style.color = ""
  }
};

// ================  Mybiz Account onclick Function ===============

mybizAccount.onclick = function () {
  mybizAccount.classList.remove("disable");
  personalAccount.classList.add("disable");
  heading.classList.remove("heading");
  leftSide.style.width = "0";
  inputLabel.innerText = "Work Email";
  inputBox.innerHTML = `<input type="email" name="email" class="email-input" placeholder="Enter your work email id"><button class="mybiz-continue-btn disabled">CONTINUE</button>`;
  inputBox.style.border = "none";
  inputBox.style.width = "100%";
  inputBox.style.gap = "20px";
  inputBox.style.margin = "15px 0px";
  mybizAccount.style.backgroundColor = "orange";
  forgot.style.visibility = "visible";
  continueBtn.style.display = "none";
  message.innerText = "OR USE YOUR BUSINESS ACCOUNT WITH";
  message.style.margin = "25px";
  socialLinks.removeChild(secondChild);
  for (let index = 0; index < anchors.length; index++) {
    anchors[index].style.color = "orange"
  }
};