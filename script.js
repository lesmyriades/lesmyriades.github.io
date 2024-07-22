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

// end


document.addEventListener('DOMContentLoaded', function() {
    const width = 960;
    const height = 600;

    const data = {
        name: "Centre",
        children: [
            { name: "Personne 1" },
            {
                name: "Plante",
                children: [
                    { name: "Plante 1" },
                    { name: "Plante 2" }
                ]
            },
            {
                name: "Titre d'ouvrage",
                children: [
                    { name: "Titre 1" },
                    { name: "Titre 2" }
                ]
            },
            {
                name: "Ville",
                children: [
                    { name: "Ville 1" },
                    { name: "Ville 2" }
                ]
            }
        ]
    };

    const svg = d3.select("#chart")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height)
                  .append("g")
                  .attr("transform", `translate(${width / 2},${height / 2})`);

    const root = d3.hierarchy(data);
    const tree = d3.tree().size([2 * Math.PI, 300]);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    function update(source) {
        tree(root);

        const nodes = root.descendants();
        const links = root.links();

        const link = svg.selectAll(".link")
                        .data(links, d => d.target.id);

        link.enter().append("path")
            .attr("class", "link")
            .attr("d", d3.linkRadial()
                        .angle(d => d.x)
                        .radius(d => d.y))
            .style("opacity", 0)
            .transition()
            .duration(1000)
            .style("opacity", 1);

        link.exit().remove();

        const node = svg.selectAll(".node")
                        .data(nodes, d => d.id || (d.id = ++i));

        const nodeEnter = node.enter().append("g")
                               .attr("class", "node")
                               .attr("transform", d => `
                                   rotate(${d.x * 180 / Math.PI - 90})
                                   translate(${d.y},0)
                               `)
                               .style("opacity", 0)
                               .on("click", click);

        nodeEnter.transition()
                 .duration(1000)
                 .style("opacity", 1);

        nodeEnter.append("circle")
                 .attr("r", d => d.depth === 0 ? 20 : d.depth === 1 ? 15 : 10)
                 .style("fill", (d, i) => color(i))
                 .attr("class", d => d.depth === 0 ? "central-node" : "");

        nodeEnter.append("text")
                 .attr("dy", "0.31em")
                 .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
                 .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
                 .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
                 .text(d => d.data.name);

        node.exit().remove();
    }

    function click(event, d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d);
    }

    root.children.forEach(collapse);
    update(root);

    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }
});
