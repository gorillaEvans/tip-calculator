var input = document.querySelectorAll('.calculator__input'),
    inputIndex;

for (var i = 0; i < input.length; i++) {
    inputIndex = input[i];

    inputIndex.addEventListener('input', calculateBill);
}
function calculateBill() {
    var totalBill = parseFloat(document.querySelector('[name="total-bill"]').value),

    tipPercentage = parseFloat(document.querySelector('[name="tip"]').value),

    people = parseFloat(document.querySelector('[name="people"]').value),

    newBill = (totalBill + (totalBill * (tipPercentage / 100))) / people,

    tip = (totalBill * (tipPercentage / 100)) / people;

    if (newBill || tip !== NaN) {
        document.querySelector('.js-calculate-new-bill').innerHTML = "$ " + newBill.toFixed(2);

        document.querySelector('.js-calculate-tip').innerHTML = "$ " + tip.toFixed(2);
    } else {
        document.querySelector('.js-calculate-new-bill').innerHTML = "Please enter a valid number";

        document.querySelector('.js-calculate-tip').innerHTML = "Please enter a valid number";
    }
}
