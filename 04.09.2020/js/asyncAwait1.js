console.log("async and await1");

let getTodos = async () => {

   let response = await fetch('./json/fruits.json');

    if(response.status !=200){
        //doslo do greske
        throw new Error('Doslo je do greske u pozivu 1');
    }

    let data = await response.json();
    console.log(data);

    response = await fetch('./json/vegetables.json');
    if(response.status !=200){
        //doslo do greske
        throw new Error('Doslo je do greske u pozivu 2');
    }
    data = await response.json();
    console.log(data);

    return data;

}

console.log(1);
console.log(2);
getTodos().then(data => console.log(data))
            .catch(err => console.log(err));
console.log(3);
console.log(4);



///////////////////////////
//4.zadatak i 5.zadatak

//deo za voce
let getTodos1 = async () => {
    let response = await fetch('./json/fruits.json');

    if(response.status !=200){
        //doslo do greske
        throw new Error('Doslo je do greske u pozivu 1');
    }

    let data = await response.json();
    console.log(data);

    let naslovFruits = document.createElement('h3');
    document.body.appendChild(naslovFruits);
    naslovFruits.innerHTML = "Fruits";
    let listaFruits = document.createElement('ul');
    document.body.appendChild(listaFruits);
    let upis="";
    data.forEach(element => {
        upis += `<li>`;
        upis += element.name; 
        upis += `</li>`;  
    })
    listaFruits.innerHTML += upis;

    let paragrafFruits = document.createElement('p');
    document.body.appendChild(paragrafFruits);
    let tezina = 0;
    data.forEach(elem =>{
        tezina += Number(elem.kilogram);
        //parseint(elem.kilogram)
    })
    paragrafFruits.innerHTML = "Tezina svog voca je: " +tezina+ " kg.";



//deo za povrce
    response = await fetch('./json/vegetables.json');
    if(response.status !=200){
        //doslo do greske
        throw new Error('Doslo je do greske u pozivu 2');
    }
    data = await response.json();
    console.log(data);

    let naslovVegetables = document.createElement('h3');
    document.body.appendChild(naslovVegetables);
    naslovVegetables.innerHTML = "Vegetables";
    let listaVegetables = document.createElement('ul');
    document.body.appendChild(listaVegetables);
    let upis1="";
    data.forEach(element => {
        upis1 += `<li>`;
        upis1 += element.name; 
        upis1 += `</li>`;  
    })
    listaVegetables.innerHTML += upis1;  
    
    let paragrafVegetables = document.createElement('p');
    document.body.appendChild(paragrafVegetables);
    let tezina1 = 0;
    data.forEach(elem =>{
        tezina1 += Number(elem.kilogram);
    })
    paragrafVegetables.innerHTML = "Tezina povrca je: "+tezina1+ " kg.";
    //treba da ima return za sumu
    return tezina+tezina1 ;
}
getTodos1()
.then(zbir =>{
 console.log(zbir);
 let ukupno = document.createElement('p');
 document.body.appendChild(ukupno);
 ukupno.innerHTML = "Ukupna tezina voca i povrca je: " + zbir+ "kg."
})
.catch(err =>{
    console.log(err);
})



