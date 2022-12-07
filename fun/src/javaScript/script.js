// synchronous code
// const p = document.querySelector("p");
// p.textContent = `my name is ripan`;
// alert("text set");
// p.style.color = "red";

// most code  is synchronous
// synchronous code is executed line by lines
// each lines of codes wait for the previous line to finish
// long running code block the  code execution

// Asynchronous code

// const p = document.querySelector("p");
// setTimeout(() => {
//   p.textContent = `my  name is ripan`;
// }, 5000);
// p.style.color = "green";

// Asynchronous code is executed  after a task runs in the "background "finishes
// Asynchronous code is  non blocking
// execution doesn,t wait for an asynchronous task to finish its works
// callback functions alone do not make code asynchronous

// api call

// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/posts");
// request.send();

// request.addEventListener("load", function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

//   const html = `
//     ${data.title}  `;
// });

// using jquery to fetch api

// $(document).ready(function () {
//   $("button").click(function () {
//     $("#getImage").attr("src", `https://joeschmoe.io/api/v1/random`);
//   });
// });

//  fetch api in javaScript

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((apiData) => {
    return apiData.json();
  })
  .then((currData) => {
    const data = currData[0];
    console.log(data);
    document.querySelector(
      "#getData"
    ).innerHTML = `the title is ${data.title}  and the body contain ${data.body}`;
  })
  .catch((error) => {
    console.log(`the error: ${error}`);
  });
