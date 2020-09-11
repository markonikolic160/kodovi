console.log('callbackHell');

let getTodos = ( resourse , callback)=>{
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState ===4 && request.status ===200){
            callback(undefined,request.responseText);
        }else if(request.readyState ===4){
            callback("greska",undefined);
        }
    });
    request.open('GET',resourse);
    request.send();
}

getTodos('./json/fruits.json', (err,data)=>{
    console.log("callback");
    console.log(data);
    getTodos( './json/vegetables.json' , (err,data)=>{
        console.log("callback2");
        console.log(data);
        getTodos('./json/cereals.json' , (err,data)=>{
            console.log("callback3");
            console.log(data);
        });
    });
});