console.log("async and await");

//asinhrona funkcija uvek kao rezultatt vraca promis

let testAsync = async () => { 

}

let test = testAsync();
console.log(test); //vratila je promis

let getTodos = async () => {
// await se koristi samo u async funkciji,
//on zaustavlja kod sve dok od promisa ne dobije resolved
//i tek ond taj resolved upise u response promenljivu
   let response = await fetch('./json/fruits.json');
   console.log(response);//ispisao se response,sto znaci da je resolved


    let data = await response.json();//response.json vraca 
    //promise a u async f.ji mozemo koristiti await
    //umesto .then()
    console.log(data);
    return data;
}
console.log(1);
console.log(2);
getTodos().then( data => console.log("Resolved:)",data))
    .catch(err =>console.log('Rejected',greska));
    //ne mora {} ako ima samo jedna linija
console.log(3);
console.log(4);

// getTodos().then( data => {
//     console.log("Resolved :)",data);
//     data.forEach (element =>{
//         console.log(element.name);
//     });
// })
// .catch( err => {
//     console.log("rejected:(",err);
// })
