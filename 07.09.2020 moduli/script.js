//glavni js fajl aplikacije

import {zdravo, ime} from "./modules/zdravo.js";
//moguce je koristiti vise stvari iz vise modula,vise importa
//      ./ znaci gde je trenutni js fajl
zdravo("Zika");
zdravo("Mika");
// ime = "Laza"; ovo ne moze,menjanje entiteta iz modula ne moze
console.log(ime);
zdravo(ime);
