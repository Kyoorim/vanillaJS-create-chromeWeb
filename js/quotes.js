const quotes = [
    {
        quote: "When life gives you lemon, make lemonade",
        author: "unknown",
    },
    {
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them",
        author: "Albert Einstein",
    },
    {
        quote: "Learn as if you will live forever, live like you will die tomorrow",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Success is not final: Failure is not fatal, it is the courage to continue that counts",
        author: "Winston S. Churchill",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;