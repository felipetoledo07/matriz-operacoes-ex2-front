let buttonMatrix;
let monthMatrix;
let resultMatrix;

function updateData() {
    
    buttonMatrix = [
        [parseInt(document.getElementById("Ap").value), parseInt(document.getElementById("Bp").value), parseInt(document.getElementById("Cp").value)],
        [parseInt(document.getElementById("AG").value), parseInt(document.getElementById("BG").value), parseInt(document.getElementById("CG").value)]
    ];
    
    
    monthMatrix = [
        [parseInt(document.getElementById("MA").value), parseInt(document.getElementById("JA").value)],
        [parseInt(document.getElementById("MB").value), parseInt(document.getElementById("JB").value)],
        [parseInt(document.getElementById("MC").value), parseInt(document.getElementById("JC").value)]
    ]
    resultMatrix = [
        [0, 0],
        [0, 0]
    ]
}

function calculate() {

    for (let i = 0; i < buttonMatrix.length; i++) {
        for (let j = 0; j < monthMatrix[i].length; j++) {
            for (let k = 0; k < buttonMatrix[i].length; k++) {
                resultMatrix[i][j] += buttonMatrix[i][k] * monthMatrix[k][j]
            }
        }
    }
}

function write() {
   
    document.getElementById("Mp").innerHTML=resultMatrix[0][0]
    document.getElementById("Jp").innerHTML=resultMatrix[0][1]
    document.getElementById("MG").innerHTML=resultMatrix[1][0]
    document.getElementById("JG").innerHTML=resultMatrix[1][1]
}


let inputs = document.querySelectorAll("input")

inputs.forEach(function(input) {
    input.addEventListener('change', event => {
        updateData()
        calculate()
        write()
    })
})

updateData()
calculate()
write()