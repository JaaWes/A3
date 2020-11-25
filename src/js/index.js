const psalms = [
	{ title: "Psalm 1:1", content: "Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers;"},
  
	{ title: "Psalm 1:2", content: "but his delight is in the law of the Lord, and on his law he meditates day and night."},
  
	{ title: "Psalm 1:3", content: "He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither. In all that he does, he prospers."},
];

let count = psalms.length;

let index = Math.floor(Math.random() * Math.floor(count));


let psalm = psalms[index];


let contentElement = document.querySelector("#content");
let titleElement = document.querySelector("#title");
console.log ("log title element") 
console.log (titleElement)

titleElement.innerText = psalm.title;
contentElement.innerText = psalm.content;
