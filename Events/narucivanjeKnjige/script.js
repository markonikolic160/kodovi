/*
let inputIme = document.getElementById("ime");
let inputAdresa = document.getElementById("adresa");
let poruci = document.getElementById("naruci");

let hardBook = document.getElementById("hardcover");
let wrapBook = document.getElementById("wpaper");
let fastBook = document.getElementById("fshipping");
let price = document.getElementById("price");

let priceNum = parseInt(price.textContent);
let hardNum = parseInt(hardBook.value);
let wrapNum = parseInt(wrapBook.value);
let fastNum = parseInt(fastBook.value);

hardBook.addEventListener('click',event=>{
    if(hardBook.checked == true){
        priceNum += hardNum;
        price.textContent = `${priceNum}$`
    } else {
        priceNum -= hardNum;
        price.textContent = `${priceNum}$`
    }
});
wrapBook.addEventListener('click',event=>{
    if(wrapBook.checked == true){
        priceNum += wrapNum;
        price.textContent = `${priceNum}$`
    } else {
        priceNum -= wrapNum;
        price.textContent = `${priceNum}$`
    }
});
fastBook.addEventListener('click',event=>{
    if(fastBook.checked == true){
        priceNum += fastNum;
        price.textContent = `${priceNum}$`
    } else {
        priceNum -= hardNum;
        price.textContent = `${priceNum}$`
    }
});

poruci.addEventListener('click',event =>{
    event.preventDefault();
    let divIspis = document.createElement("div");
    divIspis.id = "porucite";
    document.body.appendChild(divIspis);
    divIspis.innerHTML = `Order details <br> Your name : ${inputIme.value} <br>
    Your address : ${inputAdresa.value} <br> Your total order : ${price.textContent}.`
});
*/

////////
//na casu zadatak
/*
let checkboxHardcover = document.querySelector("#hardcover");

let checkboxWpaper = document.querySelector("#wpaper");
*/

let checkboxAdditional = document.querySelectorAll('input[name="additional"]');
let spanPrice = document.querySelector("#price");
//checkboxHardcover.checked = false;

//1.funkcije 
// - imaju ime i pozivaju se tako sto se navede ime a u zagradi parametri
// - this (objekat koji je pozvao f.ju)
//2. arrow funkcije
// - anonimne funkcije , nemaju ime, "smeste" se u promenljivu i pozivaju se tako sto se
// pozove ime promeljive a u zagradi parametri
// - this (window objekat)

function checkboxClicked(checkbox){
    let priceString = spanPrice.innerHTML;
    //let price1 = Number(priceString);
    let price = parseInt(priceString);// =>broj
    let newPrice = 0 ;
    let change = parseInt(checkbox.value);
    if(checkbox.checked){
        newPrice = price + change ;
    } else {
        newPrice = price - change ;
    }
    spanPrice.innerHTML = `${newPrice}$`
}

checkboxAdditional.forEach(checkbox => {
    checkbox.addEventListener('click',function(){
        checkboxClicked(this);
    });
});