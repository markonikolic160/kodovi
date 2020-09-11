console.log("FETCH");

let test = fetch("./json/fruits.json");
console.log(test);//vraca promise - asocijacija na .then i .catch

/*
1.korak  fetch.json file
2.korak  return response (prva .then grana)
3.korak  uzeti podatke iz responsa (druga .than grana)
4.korak  dohvati gresku (.catch grana)
*/

//prvi i drugi zadatak iz vezbanja
fetch("./json/fruits.json").then( response => {
    console.log('Resolved! :)',response);
    return response.json();
})
.then( data =>{
    let counter = 0 ;
    data.forEach(elem =>{
        if(elem.name.includes("berries")){
            console.log(elem.name);
            counter++;
        }
    })
    console.log(counter);
    console.log(data);
})
.catch( err=>{
    //vraca rejected samo ako je problem sa mrezom
    console.log("Rejected :(",err);
});

//na casu 1.zadatak
fetch('./json/fruits.json')
.then(response =>{
    //console.log(response.json());
    return response.json();
})
.then(data =>{
    console.log(data);
    data.forEach(element =>{
        if(element.name.includes('berries')){
            console.log(element.name);
        }
    });
})
.catch(err =>{
    console.log(err);
})

//2.zadatak ne sadrze berries , gore odradjeno da sadrze
fetch('./json/fruits.json')
.then(response =>{
    //console.log(response.json());
    return response.json();
})
.then(data =>{
    console.log(data);
    let count = 0 ;
    data.forEach(element =>{
        if(!element.name.includes('berries')){
           count++;
        }
    });
    console.log(count);
})
.catch(err =>{
    console.log(err);
})

