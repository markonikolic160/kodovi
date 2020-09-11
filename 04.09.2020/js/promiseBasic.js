console.log("promise basic");

//promis je alternativa za callback hell
//promis je nesto sto ceka odgovor,dok ne dodje odg ne krece dalje
//odgovor moze da ima dve vrednosti
//i svaki odgovor ima jednu od ove dve vrednosti
//1.vrednost je RESOLVED - ako je sve dobro proslo,bez greske
//2.vrednost REJECTED - ukoliko je doslo do neke greske



let getSomething = () => {
    return new Promise(  (resolve,reject)=> {
       // resolve('Resolve...');
        reject('Reject...');
    });
}
/*
let test = getSomething();
console.log(test); //ispisalo da je to promise
*/

// rukovanje promisom 1-nacin
/*
.then hvata kada je resolved
.catch hvata kada je rejected
*/
getSomething().then( data =>{
                console.log(data);

            }).catch( err => {
                console.log(err);
            });

//rukovanje promism 2-nacin
/*
prva funkcija u .then hvata kada je resolved
dryga funkcija hvata kada je rejected
*/
getSomething().then( data =>{
                console.log(data);
            }, err => {
                console.log(err);
            });