
import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

/*  prikaz slika preko general.js modula
import generateImage from  "./modules/general.js";

for(let i = 1 ; i <=3 ; i++){
    let src = `slike/${i}.jpg`;
    
    document.body.appendChild(generateImage(src));
}
*/

// prikaz slika  okviru liste preko list.js modula
let ul = List.generateList(document.body);
for(let i = 1 ; i <= 3 ; i++){
    let src = `slike/${i}.jpg`;
    List.generateItem(ul,src);
}

//prikaz slika u okviru tabele preko table.js modula
let table =  Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
for (let i = 1 ; i<= 3 ; i++){
    let src= `slike/${i}.jpg`;
    Table.generateItem(tr,src);
}






