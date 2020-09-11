console.log("nizovi objekata");

let blog1 = {
    title : "Akvarel",
    likes : 70,
    dislikes: 7
};

let blog2 = {
    title : "Ulje na platnu",
    likes : 150,
    dislikes: 10
};

let blog3 = {
    title : "Vitraz!",
    likes : 30,
    dislikes: 40
};

let arrBlogs = [blog1,blog2,blog3,];
console.log(arrBlogs);
//foreach koji ispisuje sve naslove
arrBlogs.forEach( blog => {
    console.log(blog.title);
});

console.log(arrBlogs[0]);
console.log(arrBlogs[0].likes);
arrBlogs[0].title = "Akvarel vodenim bojama";
console.log(arrBlogs[0].title);

//prosledjuje niz objekata a vraca se ukupan br lajkova

let sumLikes = arr => {
    let sum = 0 ;
    arr.forEach( blog => {
        sum += blog.likes;
    } );
    return sum ;
}
console.log("Ukupan broj lajkova je : " + sumLikes(arrBlogs));

// prosecan broj lajkova 

let prosekLikes = arr => {
    let suma = 0 ;
    let brojac = 0;
    let prosek = 0 ;
    arr.forEach( blog => {
        suma += blog.likes;
        brojac++;
    });
    prosek = Math.round(suma/brojac);
    return prosek;
}
console.log("Prosecan broj lajkova je: " + prosekLikes(arrBlogs));

// blogovi sa vise pozitivnih ocena

let positiveLikes = arr => {
    arr.forEach( blog => {
        if(blog.likes > blog.dislikes){
            console.log(blog.title);
        }
    });
}
positiveLikes(arrBlogs);

// blogovi sa duplo vise positivnih ocena

let duploPositive = arr => {
    arr.forEach( blog => {
        if(blog.likes >= blog.dislikes *2){
            console.log(blog.title);
        }
    });
}
duploPositive(arrBlogs);

// naslovi koji se zavrsavaju uzvicnikom 
// endsWith proverava kojim karakterom se zavrsava
// moze i sa uglastim zagradama[blog.title.length] bez charAt
let uzvicnik = arr => {
    arr.forEach( blog => {
        if(blog.title.charAt(blog.title.length-1) == "!"){
            console.log(blog.title);
        }
    });
}
uzvicnik(arrBlogs);


// substr i slice

console.log("Jelena".slice(1,4)); // broji od 1 do 4 bez 4
console.log("Jelena".substr(1,4));// u prvom broju je pocetak i broji 4 karakter


let user1 = {
    name: "Jelena",
    age: 25,
    blogs: [blog1] //svaki blog je objekat,to je niz objekata
};

let user2 = {
    name: "Stefan",
    age: 13,
    blogs: [blog2,blog3]
};

let users = [user1,user2];

//autori ispod 18 godina
users.forEach( user => {
    if(user.age < 18){
        console.log(user.name);
    }
} );

//blogovi sa vise od 50 lajkova

users.forEach(user =>{
    let userBlogs = user.blogs;
    userBlogs.forEach( blog => {
        if(blog.likes > 50){
            console.log(blog.title);
        }
    } );
} );

// svi blogovi koji imaju odredjenog autora

users.forEach(user => {
    let userBlogs = user.blogs;
    if(user.name == "Stefan"){
        userBlogs.forEach(blog => {
        console.log(blog.title);
        });
    }
});

// imena autora sa preko sto lajkova 

users.forEach( user => {
    let brojacLajkova=0;
    let userBlogs = user.blogs;
    userBlogs.forEach(blog =>{
        brojacLajkova += blog.likes;
    });
    if(brojacLajkova >= 100){
        console.log(user.name);
    }
});

// natprosecan broj lajkova

let sum = 0 ;
let br = 0 ;
users.forEach (user => {
    let b = user.blogs;
    b.forEach( blog => {
        sum += blog.likes;
        br++;
    });
});
let avgLikes = sum/br;

users.forEach(user =>{
    let b = user.blogs;
    b.forEach(blog => {
        if(blog.likes > avgLikes){
            console.log(blog.title + " autora " + user.name);
        }
    });
});

// prognoza

let dan1 = {
    datum: "2020-08-10",
    kisa: true,
    sunce: true,
    oblaci:true,
    temperture: [18,20,26,29,30,32,25],
    avgTemperature: function(){
        let s = 0;
        for(let i = 0 ; i<this.temperture.length ; i++){
            s += this.temperture[i];
        }
        return s/this.temperture.length;
    }
};
console.log(dan1.avgTemperature());

let dan2 = {
    datum: "2020-08-11",
    kisa: false,
    sunce: true,
    oblaci:false,
    temperture: [20,25,29,30,32,25],
    avgTemperature: function(){
        let s = 0;
        for(let i = 0 ; i<this.temperture.length ; i++){
            s += this.temperture[i];
        }
        return s/this.temperture.length;
    }
};

let dan3 = {
    datum: "2020-08-12",
    kisa: false,
    sunce: true,
    oblaci:true,
    temperture: [22,35,22],
    avgTemperature: function(){
        let s = 0;
        for(let i = 0 ; i<this.temperture.length ; i++){
            s += this.temperture[i];
        }
        return s/this.temperture.length;
    }
};

let dan4 = {
    datum: "2020-08-13",
    kisa: true,
    sunce: false,
    oblaci:true,
    temperture: [18,20,26,29,30,32,25],
    avgTemperature: function(){
        let s = 0;
        for(let i = 0 ; i<this.temperture.length ; i++){
            s += this.temperture[i];
        }
        return s/this.temperture.length;
    }
};

let dani = [dan1,dan2,dan3,dan4];

// datum sa najvise merenja 
// a. ispisati prvi od njih

let najviseMerenja = arrDani => {
    let maxMerenja = arrDani[0].temperture.length;
    let maxDatum = arrDani[0].datum;
    arrDani.forEach( dan => {
        if(dan.temperture.length > maxMerenja){
            maxMerenja = dan.temperture.length;
            maxDatum = dan.datum;
        }
    });  
    return maxDatum; 
}
console.log(najviseMerenja(dani));

// b. da vrati poslednji datum (sve isto samo je >= umesto strogo >)
let najviseMerenjaPoslednji = arrDani => {
    let maxMerenja = arrDani[0].temperture.length;
    let maxDatum = arrDani[0].datum;
    arrDani.forEach( dan => {
        if(dan.temperture.length >= maxMerenja){
            maxMerenja = dan.temperture.length;
            maxDatum = dan.datum;
        }
    });  
    return maxDatum; 
}
console.log(najviseMerenjaPoslednji(dani));

// koliko je kisnih,suncanih i oblacnih dana

let brojanjeDana = arrDani => {
    let brojacKisa=0;
    let brojacSunce=0;
    let brojacOblaci=0;
    arrDani.forEach(dan => {
        if(dan.kisa == true){
            brojacKisa++;
        }if(dan.sunce == true){
            brojacSunce++;
        }if(dan.oblaci == true){
            brojacOblaci++;
        }
    });
    console.log("Broj kisnih dana je: "+ brojacKisa);
    console.log("Broj suncanih dana je:"  + brojacSunce);
    console.log("Broj oblacnih dana je: " + brojacOblaci);
}

brojanjeDana(dani);

// koliko je bilo dana sa natprosecnom temperaturom
let avgTotalTemp = arrDani => {
    let sum = 0 ;
    let br = 0 ;
    arrDani.forEach( dan => {
        let nizTemp = dan.temperture;
        nizTemp.forEach( temp => {
            sum += temp;
            br++;
        });
    });
    return sum/br;
}

let dayAvg = arrDani => {
    let avgTotal = avgTotalTemp(arrDani);
    let br = 0;
    arrDani.forEach(dan => {
        if(dan.avgTemperature()> avgTotal){
            br++;
        }
    });
    return br;
}

console.log(dayAvg(dani));
