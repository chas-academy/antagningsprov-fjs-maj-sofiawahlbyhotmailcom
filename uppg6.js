

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen
    let names = ["Olle", "Duno", "Minou", "Jacob", "Eva", "Simon", "Sofia"];

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

uppg6();

module.exports = { uppg6 };