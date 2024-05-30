const randomTextContainer = document.getElementById('randomTextContainer');

function generateRandomText() {
    const words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Integer", "nec", "odio", "Praesent", "libero", "Sed", "cursus", "ante", "dapibus", "diam", "Sed", "nisi"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
}

function addRandomText() {
    const randomText = generateRandomText();
    const textNode = document.createTextNode(randomText + " ");
    randomTextContainer.appendChild(textNode);
}

setInterval(addRandomText, 1000); // Change 1000 to the desired interval in milliseconds
