let nizVezbanje= [2,5,9,14,3,-4];

let proizvod = arr => {
    let suma = 0 ;
    for (let i =0 ; i<arr.length ; i++){
        suma += arr[i];
    }
    return suma ;
}
console.log(proizvod(nizVezbanje));

let srednjaVred = arr => {
    let suma = 0 ;
    let brojac = 0 ;
    for (let i =0 ; i<arr.length ; i++){
        suma += arr[i];
        brojac++;
    }
    return suma/brojac ;
}
console.log(srednjaVred(nizVezbanje));

let max = arr => {
    let maksimum = arr[0];
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>maksimum){
            maksimum = arr[i];
        }
    }
    return maksimum;
}
console.log(max(nizVezbanje));

let maxindex = arr => {
    let maksimum = arr[0];
    let maxindeks = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>maksimum){
            maksimum=arr[i];
            maxindeks=i;
        }
    }
    return maxindeks;
}
console.log(maxindex(nizVezbanje));

let veciodavg = arr => {
    let sredina = maxindex(arr);
    let brojac = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]>sredina){
            brojac++;
        }
    }
    return brojac;
}
console.log(veciodavg(nizVezbanje));

let zbirpozitivnih = arr => {
    let suma = 0 ;
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i]>0){
            suma +=arr[i];
        }
    }
    return suma;
}
console.log(zbirpozitivnih(nizVezbanje));

let brojparnih = arr => {
    let brojac = 0 ;
    for(let i =0; i < arr.length ; i++){
        if(arr[i]%2 ==0){
            brojac++;
        }
    }
    return brojac;
}
console.log(brojparnih(nizVezbanje));

let sumaparniindex = arr => {
    let suma = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        if(i%2==0){
            suma += arr[i];
        }
    }
    return suma;
}
console.log(sumaparniindex(nizVezbanje));

let promenaneparelemparniindex = arr => {
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]%2 !=0 && i%2==0){
            arr[i]=arr[i]*-1;
        }
    }
    return arr;
}
console.log(promenaneparelemparniindex(nizVezbanje));