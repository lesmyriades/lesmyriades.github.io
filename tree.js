document.addEventListener('DOMContentLoaded', () => {
    const treeData = {
        label: "Racine",
        children: [
            {
                label: "Branche 1",
                children: [
                    { label: "Feuille 1.1" },
                    { label: "Feuille 1.2" }
                ]
            },
            {
                label: "Branche 2",
                children: [
                    { label: "Feuille 2.1" },
                    {
                        label: "Branche 2.2",
                        children: [
                            { label: "Feuille 2.2.1" },
                            { label: "Feuille 2.2.2" }
                        ]
                    }
                ]
            }
        ]
    };

    function createTreeNode(nodeData) {
        const li = document.createElement('li');
        li.classList.add('tree-node');
        const label = document.createElement('div');
        label.classList.add('label');
        label.textContent = nodeData.label;
        li.appendChild(label);

        if (nodeData.children) {
            const ul = document.createElement('ul');
            nodeData.children.forEach(child => {
                ul.appendChild(createTreeNode(child));
            });
            li.appendChild(ul);
        }

        return li;
    }

    const treeContainer = document.getElementById('tree');
    const treeElement = createTreeNode(treeData);
    treeContainer.appendChild(treeElement);
});
