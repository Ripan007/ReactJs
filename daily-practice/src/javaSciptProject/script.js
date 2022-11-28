let btn = document.querySelector("button");
let name = document.querySelector(".name");
let quote = document.querySelector(".quote");


let quotes = [
    { quote: "life is beauty", person: "xark" }, { quote: "enjoy life", person: "mork" }
]


btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);

    name.innerText = quotes[random].quote;
    quote.innerText = quotes[random].person
})


// jquery //


