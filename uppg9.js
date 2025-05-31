function uppg9 (){

    
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function sort(numbers){
        numbers.forEach(number => {
            if (number % 2 === 0) {
                console.log(number, " jämt");
            } else {
                console.log(number, " udda");
            }
        });
    }

    let numbers1 = [1, 4, 7, 11, 14, 21, 30, 35];

    sort(numbers1);
}

uppg9();

module.exports = { uppg9 };
