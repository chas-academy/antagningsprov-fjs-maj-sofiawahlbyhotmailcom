

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

let persons = [
{   name: "Sofia",
    age: 33, },
{   name: "Olle",
    age: 33, },
{   name: "Duno",
    age: 1, },
{   name: "Minou",
    age: 9, },
{   name: "Jacob",
    age: 58, }
];

function ageCheck(arr) {
    arr.forEach(person => {
        if (person.age > 30) {
        console.log(person.name);
        }
    });
}

    ageCheck(persons);
}

uppg8();

module.exports = { uppg8 };
