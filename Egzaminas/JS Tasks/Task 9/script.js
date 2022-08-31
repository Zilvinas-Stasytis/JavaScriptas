/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
const Movie = {
    title: "Bladerunner",
    director: "Ridley Scott",
    budget: 1,
    cost: function wasExpensive()  {
        (this budget > 1000000000 ? true : false);
    }
}
console.log(Movie.cost);


