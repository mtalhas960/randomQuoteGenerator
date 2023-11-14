let quote = document.getElementById("quote");
let person = document.getElementById("person");
let btn = document.getElementById("nextquote");

const quotes = [{ quote: `"Life isn't about getting and having, it's about giving and being."`, person: `"Kevin Kruse"` },
{ quote: `"Whatever the mind of man can conceive and believe, it can achieve."`, person: `"Napoleon Hill"` },
{ quote: `"Strive not to be a success, but rather to be of value."`, person: `"Albert Einstein"` },
{ quote: `"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."`, person: `"Robert Frost"` },
{ quote: `"I attribute my success to this: I never gave or took any excuse."`, person: `"Florence Nightingale"` },
{ quote: `"You miss 100% of the shots you don't take."`, person: `"Wayne Gretzky"` },
{ quote: `"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."`, person: `"Michael Jordan"` },
{ quote: `"The most difficult thing is the decision to act, the rest is merely tenacity."`, person: `"Amelia Earhart"` },
{ quote: `"Every strike brings me closer to the next home run."`, person: `"Babe Ruth"` },
{ quote: `"Definiteness of purpose is the starting point of all achievement."`, person: `"W. Clement Stone"` },
{ quote: `"We must balance conspicuous consumption with conscious capitalism."`, person: `"Kevin Kruse"` },
{ quote: `"Life is what happens to you while you're busy making other plans."`, person: `"John Lennon"` },
{ quote: `"We become what we think about."`, person: `"Earl Nightingale"` },
{ quote: `"14.Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."`, person: `"Mark Twain"` }
]
btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

