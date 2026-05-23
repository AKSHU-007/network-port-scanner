async function scanPorts(){

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

let output=
`<h3>Open Ports:</h3>`;

if(data.open_ports.length===0){

output+="No open ports found";

}

else{

data.open_ports.forEach(
port=>{

output+=
`<p>Port ${port} : OPEN</p>`;

});

}

document.getElementById(
"result"
).innerHTML=output;

}