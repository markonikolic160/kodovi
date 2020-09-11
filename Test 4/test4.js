// 1. zadatak 

let sportista1 = {
    imeprezime :"Petar Petrovic" ,
    visina: 195,
    timovi : ["Radnicki","Zvezda","Partizan"],
    brojEkipa : function(){
        let prva = this.timovi[0];
        let brojac = 0 ;
        for(let i =0 ; i <this.timovi.length ; i++){
            if(prva!=this.timovi[i]){
                brojac++;
            }
        }
        return brojac + 1;
    }
}
let sportista2 = {
    imeprezime : "Marko Markovic" ,
    visina: 187,
    timovi : ["Dalas","Zvezda","Sacramento"],
    brojEkipa : function(){
        let prva = this.timovi[0];
        let brojac = 0 ;
        for(let i =0 ; i <this.timovi.length ; i++){
            if(prva!=this.timovi[i]){
                brojac++;
            }
        }
        return brojac+1;
    }
}

let sportista3 = {
    imeprezime: "Filip Filipovic",
    visina: 179,
    timovi : ["Bajern","Bajern","Zvezda"],
    brojEkipa : function(){
        let prva = this.timovi[0];
        let brojac = 0 ;
        for(let i =0 ; i <this.timovi.length ; i++){
            if(prva!=this.timovi[i]){
                brojac++;
            }
        }
        return brojac+1;
    }
}

let nizSportista = [sportista1,sportista2,sportista3];

//2. prosecna visina 

let avgVisina = arr => {
    let prosek = 0 ;
    let suma = 0;
    arr.forEach(elem =>{
        suma += elem.visina
    });
    return prosek = suma/arr.length;
};
console.log(avgVisina(nizSportista));

//3. igrali za tim 

let igraliZaTim = ((arr,ekipa) => {
    let brojac = 0;
    nizSportista.forEach(elem =>{
        let a = elem.timovi;
        a.forEach(tim =>{
            if(tim==ekipa){
                brojac++;
            }
        });  
    });
    return brojac;
});
console.log(igraliZaTim(nizSportista,"Dalas"));


//4.zadatak 
let najmanjeTransfera = arr =>{
    let najmanje = sportista1.brojEkipa();
    nizSportista.forEach(elem =>{
        if(elem.brojEkipa()<najmanje){
            najmanje=elem.brojEkipa();
        }
    });
    return najmanje;
}
console.log(najmanjeTransfera(nizSportista));


// podela na treningu
/*
let podelaA = arr =>{
    let prviTim= [];
    let drugiTim = [];
    if(arr.length%2 == 0){
        arr.forEach((elem,i) =>{
            if(i<=arr.length/2){
                prviTim.push(elem[i]);
            }
        });
    }
}*/

let trenerVidi = arr => {
    let granica = sportista1.visina;
    let brojac = 1 ;
    nizSportista.forEach(elem => {
        if(elem.visina>granica){
            brojac++;
        }
    });
    return brojac;
}
console.log(trenerVidi(nizSportista));