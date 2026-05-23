async function scanPorts(){

document.getElementById(
"progressBar"
).style.width="0%";

setTimeout(()=>{
document.getElementById(
"progressBar"
).style.width="100%";
},200);

const target=
document.getElementById(
"target"
).value;

const response=
await fetch('/scan',{

method:'POST',

headers:{
'Content-Type':
'application/json'
},

body:JSON.stringify({
target:target
})

});

const data=
await response.json();

let output='';

if(data.open_ports.length===0){

output=`
<div class="resultCard">
No open ports found
</div>
`;

}

else{

data.open_ports.forEach(
port=>{

output+=`

<div class="resultCard">

<div>
Port ${port}
</div>

<div>
🟢 OPEN
</div>

</div>

`;

});

}

document.getElementById(
"result"
).innerHTML=output;

}