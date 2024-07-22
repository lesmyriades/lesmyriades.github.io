const randomTextContainer = document.getElementById('randomTextContainer');

function generateRandomText() {
    const words = ["root","roots","rooted"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
}

function addRandomText() {
    const randomText = generateRandomText();
    const textNode = document.createTextNode(randomText + " ");
    randomTextContainer.appendChild(textNode);
}

setInterval(addRandomText, 1000); // Change 1000 to the desired interval in milliseconds

// Initialisation du lecteur audio
document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-audio');

    if (audio) {
        // Ajouter des contrôles pour la lecture et la pause
        document.getElementById('pause-button').addEventListener('click', () => {
            audio.pause();
        });

        document.getElementById('play-button').addEventListener('click', () => {
            audio.play();
        });
    } else {
        console.error("Element #background-audio not found.");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const predicates = [
        "Nos racines sont profondes mais elles ne sont pas irremplaçables",
        "Notre histoire peut prendre des tournants différents et s'enraciner dans des milieux divers",
        "Nos déracinements font notre histoire"
    ];

    function generateStory() {
        const shuffledPredicates = predicates.sort(() => 0.5 - Math.random());
        return shuffledPredicates.join('. ') + '.';
    }

    const storyParagraph = document.getElementById('generated-story');
    const generateButton = document.getElementById('generate-button');

    function displayNewStory() {
        const newStory = generateStory();
        storyParagraph.textContent = newStory;
    }

    // Generate and display the first story on page load
    displayNewStory();

    // Generate and display a new story on button click
    generateButton.addEventListener('click', displayNewStory);
});

document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.getElementsByClassName("caret");
    for (var i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
});

