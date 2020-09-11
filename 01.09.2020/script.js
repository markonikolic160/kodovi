/*console.log(1);
console.log(2);

setTimeout(()=>{
    console.log("pozvali smo calback funkciju");
}, 1000);

console.log(3);
console.log(4);*/

let request = new XMLHttpRequest();
/*
request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4){
//request.reaponseText je string koji dobijamo kao odgovor
   let data = JSON.parse(request.responseText);
    console.log(data);
    }
});
*/

request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4 && request.status === 200){
        console.log("odgovor sa servera preuzet i server je potvrdio validnost");
        let data = JSON.parse(request.responseText);
        console.log(data);
    }
    else if(request.readyState === 4 ){
        console.log("server nije mogao da obradi zahtev");
    }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/');
console.log(request.readyState);

request.send();
console.log("test poruka");
console.log("test poruka1");
console.log("test poruka2");
console.log("test poruka3");

setTimeout(()=>{
 console.log("test poruka kasnjenje")
},1000);

console.log("test poruka4");
console.log("test poruka5");

////// slajd 16
//zadatak 1. i 2.

let req = new XMLHttpRequest();
req.addEventListener('readystatechange', () =>{
    if(req.readyState === 4 && req.status ===200){//ako je sve u redu
        let data = JSON.parse(req.responseText);//data je niz objekata
        data.forEach(user => { // prolaz kroz sve obekte
          // console.log(user.website);
            if(user.website.includes('.com')){//da li string sadrzi .com
                console.log(user.name);
            }
        });
    }
    else if (req.readyState ===4){
        console.log("server ne moze da obradi");
    }
});
req.open('GET','https://jsonplaceholder.typicode.com/users');
req.send();
////////////////////////////////////////////

let req1 = new XMLHttpRequest();

req1.addEventListener('readystatechange', ()=>{
    if(req1.readyState === 4 && req1.status ===200){
        let data = JSON.parse(req1.responseText);
        data.forEach(user=>{
            if(user.name.includes('Clementin')){
                console.log(user.name);
            }
        });
    }
    else if (req1.readyState ===4){
        console.log("server ne moze da obradi");
    }
});

req1.open('GET', 'https://jsonplaceholder.typicode.com/users');
req1.send();

/////////////////////////
//4.zadatak

let req2 = new XMLHttpRequest();

req2.addEventListener('readystatechange', ()=>{
    if(req2.readyState === 4 && req2.status ===200){
        let data = JSON.parse(req1.responseText);
        data.forEach(user=>{
            if(user.company.name.includes('Group') || user.company.name.includes('LLC')){
                console.log(user.name);
            }
        });
    }
    else if (req2.readyState ===4){
        console.log("server ne moze da obradi");
    }
});

req2.open('GET', 'https://jsonplaceholder.typicode.com/users');
req2.send();

//////////////////////
//5.zadatak 

let req3 = new XMLHttpRequest();

req3.addEventListener('readystatechange', ()=>{
    if(req3.readyState === 4 && req3.status ===200){
        let city = [];
        //let unique = [];
        let data = JSON.parse(req3.responseText);
        data.forEach(user=>{
            //svaki grad uzmemo pa includes (moze i za nizove)
            //ako ne sadrzi tek onda pus-ujem u niz
            //niz.includes(elem)
            //=>true ako elem postoji u nizu
            //false ako elem ne postoji u nizu
            //niz.push(elem)za dodavanje novog elementa
            if(city.includes(user.address.city) == false){
                city.push(user.address.city);
            }
            /*
            city.push(user.address.city);
            unique = [... new Set(city)];  
            //new Set pravi unikatni niz,bez ponavljanje  
            */
        });
        console.log(city);
    }
    else if (req3.readyState ===4){
        console.log("server ne moze da obradi");
    }
});

req3.open('GET', 'https://jsonplaceholder.typicode.com/users');
req3.send();

//6.zadatak 

let req4 = new XMLHttpRequest();

req4.addEventListener('readystatechange', ()=>{
    if(req4.readyState === 4 && req4.status ===200){
        let counter =0;
        let data = JSON.parse(req4.responseText);
        data.forEach(user=>{
            if(user.address.geo.lat.startsWith('-') && user.address.geo.lng.startsWith('-')){
                console.log(user.name);
                counter++;
                //bolje prvo konverzija u number pa provera <0
            }
        });
        console.log(counter);
    }
    else if (req4.readyState ===4){
        console.log("server ne moze da obradi");
    }
});

req4.open('GET', 'https://jsonplaceholder.typicode.com/users');
req4.send();

/*
//zadatak 2. preko callback funkcije
let getKorisnici = callback => {
let req = new XMLHttpRequest();
req.addEventListener('readystatechange', () =>{
    if(req.readyState === 4 && req.status ===200){//ako je sve u redu
        let data = JSON.parse(req.responseText);//data je niz objekata
        callback(data);
    }
    else if (req.readyState ===4){
        console.log("server ne moze da obradi");
    }
});
req.open('GET','https://jsonplaceholder.typicode.com/users');
req.send();
};

//poziv funkcije 

getKorisnici(data => {
    data.forEach(user => {
       if( user.website.includes('com')){
           console.log(user.name);
       }
    });
});
*/

// 2. zadatak opet 
// preko callback funkcije

let getKorisnici = callback =>{
let req = new XMLHttpRequest();
req.addEventListener('readystatechange', function(){
    if(this.readyState === 4 && this.status ===200){//ako je sve u redu
        let data = JSON.parse(req.responseText);//data je niz objekata
        callback(undefined , data);
    }
    else if (this.readyState ===4){
        callback('Server nije u mogucnosti da obradi zahtev', undefined);
    }
});
req.open('GET','https://jsonplaceholder.typicode.com/users');
req.send();
}

//zadatak 2 .
//trazi korisnike koji imaju odredjeni sajt
getKorisnici((error, data)=>{
    if(error){
        console.log(error);
    }else {
    data.forEach(user => { // prolaz kroz sve obekte
        // console.log(user.website);
          if(user.website.includes('.com')){//da li string sadrzi .com
              console.log(user.name);
          }
      });
    }
});

//zadatak 3.
function usersNameClementine(error , users){
    if(error){
        const div = document.getElementById('error');
        div.innerHTML = error;
    }else {

    
    users.forEach(user => {
        if(user.name.includes('Clementin')){
            console.log(user.name);
        }
    });
}
};
//korisnici koji se zovu clementine
getKorisnici( usersNameClementine );

//zadatak4.
//korisnici cije ime kompanije sadrzi group ili llc

function companyNameGroupLLC (error ,users){
    if(error){
        console.log(error);
    }else {
        users.forEach(user => {
            if(user.company.name.includes('Group') || user.company.name.includes('LLC')){
                console.log(user.name);
            }
        });
       
    }
};

getKorisnici(companyNameGroupLLC);

//zadatak 5. drugi nacin 

function razlicitiGradovi(error, users){
    let city = [];
    if(error){
        console.log(error);
    }else {
        users.forEach(user=>{ 
            if(city.includes(user.address.city) == false){
                city.push(user.address.city);
            }  
                  
        });
        console.log(city);  
    }
};
getKorisnici( razlicitiGradovi);

//6.zadatak drugi nacin 

function negativnaGeografija(error,users){
    if(error){
        console.log(error);
    }else {
        let counter =0;
        users.forEach(user=>{
            if(user.address.geo.lat.startsWith('-') && user.address.geo.lng.startsWith('-')){
                console.log(user.name);
                counter++;
                //bolje prvo konverzija u number pa provera <0
            }
        });
        console.log(counter);
    }
};
getKorisnici (negativnaGeografija);

/*
/////////////////////////////////////
//3.zadatak sportisti


let getSportisti = callback =>{
    let req = new XMLHttpRequest();
    req.addEventListener('readystatechange', function(){
        if(this.readyState === 4 && this.status ===200){//ako je sve u redu
            let data = JSON.parse(req.responseText);//data je niz objekata
            callback(undefined , data);
        }
        else if (this.readyState ===4){
            callback('Server nije u mogucnosti da obradi zahtev', undefined);
        }
    });
    req.open('GET','http://localhost:3000/sportisti');
    req.send();
};

//prosecna visina

function prosecnaVisina(error,sportisti){
    if(error){
        console.log(error);
    }else{
        let suma = 0;
        sportisti.forEach(sportista =>{
            suma += sportista.visina;
            
        });
        let prosek = suma/sportisti.length;
        console.log(prosek);
    }
    
    
}
getSportisti(prosecnaVisina);

//najmanje transfera 

function najmanjeTransfera(error,sportisti){
    if(error){
        console.log(error);
    }else{
        let najmanje = sportisti[0].timovi.length;
        let ime = sportisti[0].imePrezime;
        sportisti.forEach(sportista=>{
            if(sportista.timovi.length<najmanje){
                najmanje=sportista.timovi.length;
                ime = sportista.imePrezime;
            }
        });
        console.log(ime);
    }
    
}
getSportisti(najmanjeTransfera);

//svi koji su igrali za lakerse 

function lakers(error,sportisti){
    if(error){
        console.log(error);
    }else{
        sportisti.forEach(sportista=>{
            if(sportista.timovi.includes('Lakers')){
                console.log(sportista.imePrezime)
            }
        });
    }
};
getSportisti(lakers);
*/


//povezivanje na lokalni server sportisti.json

let getSportisti = callback => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',function(){
        if(this.readyState ===4 && this.status ===200){
            const data = JSON.parse(this.responseText);
            callback(undefined,data);
        }else if(this.readyState === 4){
            callback('server ne odgovara',undefined);
        }
    });

    request.open('GET',"http://localhost:3000/sportisti");
    request.send();
};

//prikaz svih sportista
getSportisti((err,data)=>{
    if(err){
        console.log(err);
    }else {
        data.forEach(sportista =>{
            console.log(sportista.imePrezime, sportista.visina);
        });
    }
});

//proecna visina sportista
getSportisti((err,data)=>{
    if(err){
        console.log(err);
    }else{
        let zbir=0;
        data.forEach(sportista=>{
            zbir += sportista.visina;
        });
        let prosek = zbir/data.length;
        console.log(prosek);
    }
});

//najmanje transfera
getSportisti((err,data)=>{
    if(err){
        console.log(err);
    }else{   
        let najmanje=data[0].timovi.length;
        let ime = data[0].imePrezime;
        data.forEach(sportista=>{
            if(sportista.timovi.length<najmanje){
                najmanje=sportista.timovi.length;
                ime=sportista.imePrezime;
            }
        });
        console.log(ime);
    }
});

//svi koji su igrali za lakers
getSportisti((err,data)=>{
    if(err){
        console.log(err);
    }else{
        data.forEach(sportista=>{
            if(sportista.timovi.includes('Lakers')){
                console.log(sportista.imePrezime);
            }
        });
    }
});