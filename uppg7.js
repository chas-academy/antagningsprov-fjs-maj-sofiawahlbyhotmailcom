

function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10
    function add (number1, number2) {
        return number1 + number2;
    }
    return add(5, 10);
}

module.exports = { uppg7 };

console.log(uppg7());