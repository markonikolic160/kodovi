let blog = {
    title: 'Moj blog',
    content: 'Sadrzaj mog prvog bloga',
    author: 'Pera Peric'
};

let blog2 = {
    title: 'Moj drugi blog',
    content: 'Sadrzaj mog drugog bloga',
    author: 'Mika Mikic',
    likes: 50,
    dislike: 2
};

let blog3 = {
    naslov: 'Treci blog',
    content: 'Ovo je treci blog',
    likes: 2
};

console.log(blog);
console.log(typeof blog);
console.log(blog2);
console.log(blog.title);
console.log(blog.author);
console.log(blog['content']);
console.log(blog3.naslov); 
blog3.naslov = "Treci jubilarni blog";
blog3.title = "Treci jubilarni blog";
console.log(blog3);

let korisnik1 = {
    username : 'Marko',
    age : 33 ,
    blogs : ["Marko Blog","Marko Blog1","Marko Blog2"],
    login : function(){
        console.log(this);
        console.log('Ulogovani ste ' + this.username );
    },
    logout: function() {
        console.log(this);
        console.log("izlogovani ste " + this.username);
        // nikad ne koristimo arrow funkcije jer this povlaci window
    },
    logBlogs: function(){
        let sviBlogovi = this.blogs;
        sviBlogovi.forEach(blog => {
            console.log(blog);
        });
    }
}

console.log(this);


let korisnik2 = {
    username : 'Zika',
    age : 25 ,
    blogs : ["Zika Blog","Zika Blog1","Zika Blog2"],
    login: function(lang) {
        let u = this.username;
        if(lang === true) {
            console.log(`Cestitamo ${u}, ulogovani ste`);
        } else {
            console.log(`Congratulations ${u},you're logged in`);
        }
    }
};

let korisnik3 = {
    username : 'Petar',
    age : 30 ,
    blogs : ["Petar Blog","Petar Blog1","Petar Blog2"]
};

console.log(korisnik1);
console.log(korisnik1.age);
korisnik1.login();
korisnik2.login(true);
korisnik2.login(false);
korisnik1.logout();
korisnik1.logBlogs();

let dan = {
    datum : "2020/08/10",
    kisa : false,
    sunce: true,
    oblacno : false,
    temperature : [18,21,21,25,28,29,32,27,26],
    prosek : function(){
        let sveTemp = this.temperature;
        let pros =0;
        sveTemp.forEach(t=>{
            pros += t;   
        });
        pros /= sveTemp.length;
        return pros; 
    },
    brojIznadProseka : function() {
        let pros = this.prosek();
        let sveTemperature = this.temperature;
        let broj = 0 ;
        sveTemperature.forEach(t => {
            if(t>pros){
                broj++;
            }
        });
        return broj ;
    },
    maxTemp : function(){
        let sveTemp = this.temperature;
        let maks = sveTemp[0];
        sveTemp.forEach(t => {
            if(t>maks){
                maks = t;
            }
        });
        return maks ;
    },
    brojMaxMerenja : function(){
        let brojmaksimuma = 0 ;
        let maksimum = this.maxTemp();
        let sveTemp = this.temperature;
        sveTemp.forEach(t => {
            if(t == maksimum){
                brojmaksimuma++
            }
        });
        return brojmaksimuma ;

    },
    izmedju : function(a,b){
        let brojacIzmedju = 0;
        let sveTemp = this.temperature;
        sveTemp.forEach(t => {
            if(t>=a && t <=b){
                brojacIzmedju++;
            }
        });
        return brojacIzmedju;
    },
    ledeniDani: function(){
        let sveTemperature = this.temperature;
        let result = true;
        sveTemperature.forEach(t => {
            if(t >= 0){
            result =  false;
            }
        });
        return result;
    },
    tropskiDan : function() {
        let sveTemperature = this.temperature;
        let counter = 0;
        sveTemperature.forEach(t => {
            if(t >= 24){
                counter++;
            }
        });
        if(counter == sveTemperature.length){
            return true;
        } else {
            return false;
        }
    },
    iznadProseka : function(){
        let iznadProsecna = this.brojIznadProseka();
        let sveTemperature = this.temperature;
        if(iznadProsecna>= sveTemperature.length/2){
            return true ;
        } else {
            return false ;
        }
    },
    nepovoljanDan : function(){
        let sveTemperature = this.temperature;
        let tacnost = 0 ;
        for( let i = 0 ; i < sveTemperature.length -1 ; i++){
            if((Math.abs(sveTemperature[i] - sveTemperature[i+1]))>8){
                tacnost++;
            }
        }; 
        if(tacnost>0){
            return true;
        } else {
            return false;
        }
        
    },
    minTemp : function(){
        let sveTemp = this.temperature;
        let mini = -5;
        sveTemp.forEach(t => {
            if(t<mini){
                mini = t;
            }
        });
        return mini ;
   
    },
    nepovoljanDan1 : function (){
        let minimum = this.minTemp();
        let maksi = this.maxTemp();
        if( (this.kisa === true && minimum<-5) || ( (this.oblacno === true && maksi>25) ) || 
        ((this.kisa === true && this.oblacno === true && this.suncano === true)) )
        {
            console.log("nepovoljan dan");
        } else {
            console.log("povoljan dan");
        }
    }
};

console.log(`Prosecna tem za dan ${dan.datum} iznosi: ${dan.prosek()}`);
console.log(dan.brojIznadProseka());
console.log(dan.maxTemp());
console.log(dan.brojMaxMerenja());
console.log(dan.izmedju(20,30));
console.log(dan.ledeniDani());
console.log(dan.tropskiDan());
console.log(dan.iznadProseka());
console.log(dan.nepovoljanDan());
console.log(dan.minTemp());
dan.nepovoljanDan1();


