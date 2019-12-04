
// Created by David Adamson - 2019
// Complete functions to calculate various items using Javascript and passing results to output in text forms:


function calculateCentimetres() {
    var inches = document.inputForm.input1.value * 0.39
    document.inputForm.output.value = inches;    
}

function calculatePounds() {
    var kilograms = document.inputPounds.pounds.value * 2.24
    document.inputPounds.output.value = kilograms;    
}

function calculateSquare() {
    var width = document.inputSquare.width.value;
    var length = document.inputSquare.length.value;
    var out = parseFloat(length) * parseFloat(width);

document.inputSquare.output.value = out;
}

function calculateArea() {
    var base = document.inputTriangle.width.value;
    var height = document.inputTriangle.height.value;
    var out = (1/2) * parseFloat(base) * parseFloat(height);
        
document.inputTriangle.output.value = out;
}
