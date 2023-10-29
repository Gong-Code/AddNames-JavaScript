const leftNames = ['Gong', 'Johnny', 'Ben', 'Cecilia', 'Tommy', 'Kevin'];
const rightNames = ['Adam', 'Johan', 'Steven'];

const leftBox = document.getElementById('box-1');

const rightBox = document.getElementById('box-2');

function renderNames() {
    leftBox.textContent = '';
    rightBox.textContent = '';

    leftNames.forEach(function(name, i) {
        const paraGraph = document.createElement('p');
        paraGraph.classList.add('item');
        paraGraph.textContent = name;

        paraGraph.addEventListener('click', function() {
            const name = leftNames.splice(i, 1)
            rightNames.push(name)
            renderNames();
        })

        leftBox.appendChild(paraGraph);
    })

    rightNames.forEach(function(name, i) {
        const paraGraph = document.createElement('p');
        paraGraph.classList.add('item');
        paraGraph.textContent = name;

        paraGraph.addEventListener('click', function() {
            const name = rightNames.splice(i, 1)
            leftNames.push(name)
            renderNames();
        })

        rightBox.appendChild(paraGraph);
    })       
}

renderNames();

const input = document.getElementById('input');
const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');

leftBtn.addEventListener("click", function () {
    leftNames.unshift(input.value);
    input.value = "";
    renderNames();
});
rightBtn.addEventListener("click", function () {
    rightNames.unshift(input.value);
    input.value = "";
    renderNames();
});

