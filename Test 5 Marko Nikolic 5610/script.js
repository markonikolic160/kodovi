let igrica = document.getElementById('centralni');
for(let i = 0 ; i < 100 ; i++){
let element = document.createElement('span');
    igrica.appendChild(element);
    element.classList.add('broj');
    element.id = i;
    element.innerHTML = i;
}
let nasumicniBroj = Math.floor(Math.random() * 100);
console.log(nasumicniBroj);




document.addEventListener('click',function(event) {
   
    if(event.target.tagName == 'SPAN'){
      
       event.target.classList.add('otvoreno'); 
       event.target.style.backgroundColor = 'green'
       
    }
   
    if(event.target.id == nasumicniBroj){
        alert('Trazeni broj je :' + nasumicniBroj);
        window.location.reload();
    }
    
    let upisTabela = document.getElementById('upis');
    let upis ="";
    
    if(event.target.id < nasumicniBroj){
        upis += `<tr>`
        upis += `<td>` + brojiOtvorene()  + `</td>`
        upis += `<td>` + "broj je veci od: " + event.target.id +`</td>`;
        upis += "preostalo jos :" +(7-brojiOtvorene()) + "pokusaja";
        upis += `</tr>`
  upisTabela.innerHTML += upis;
    } else if(event.target.id> nasumicniBroj) {
        upis += `<tr>`
        upis += `<td>` + brojiOtvorene() +`</td>`
        upis += `<td>` + "broj je manji od: " + event.target.id+ `</td>`;
        upis += `<td>` + "preostalo jos :" + (7-brojiOtvorene()) + "pokusaja"+ `</td>`;
    
  upis += `</tr>`
  upisTabela.innerHTML += upis;
    }
  if(brojiOtvorene() == 8 ){
      alert("iskoristili ste sve pokusaje , trazeni broj je bio: " + nasumicniBroj);
     window.location.reload();
  }
});



function brojiOtvorene(){
   let divIgrica = document.getElementById('centralni');
   return divIgrica.querySelectorAll('.otvoreno').length;
}
console.log(brojiOtvorene())