"use strict";

const formData = { email: "", message: "" };

if (localStorage.length > 0) {
  const storedData = localStorage.getItem("feedback-form-state");
  if (storedData !== null) {
    const { email, message } = JSON.parse(storedData);
    formData["email"] = email ?? "";
    formData["message"] = message ?? "";
  }
}

const form = document.querySelector("form");

form.elements.email.value = formData["email"];
form.elements.message.value = formData["message"];

form.addEventListener("input", e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", e => {
  e.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  formData.email = "";
  formData.message = "";
  localStorage.removeItem("feedback-form-state");
  form.reset();
});