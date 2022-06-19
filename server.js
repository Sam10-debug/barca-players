const { response } = require('express')
const express= require('express')
const app= express()
const PORT=8000
const playerNames={
    "puig":{
        "name": "Ricard Marti Puig",
        "age":22,
        "nationality": "Spain"
    },
    "pedri":{
        "name": "Pedri Gonzalez",
        "age":19,
        "nationality": "Spain"
    },
    "depay":{
        "name": "Memphis Depay",
        "age":28,
        "nationality": "Netherlands"
    },
    "auba":{
        "name": "Aubameyang",
        "age":33,
        "nationality": "Gabon"
    },
    "dembele":{
        "name": "Ousmane Dembele",
        "age":25,
        "nationality": "France"
    },
    "-":{
        "-":"-",
        "-":"-",
        "-":"-"
    }
}
app.get('/',(request,response)=>{
    response.sendFile(__dirname+"/index.html")
})
app.get('/api',(request,response)=>{
    response.json(playerNames)
})
app.get('/api/:name',(request,response)=>{
    const param= request.params.name.toLowerCase()
    if(playerNames[param]){
        response.json(playerNames[param])
    }else{
        response.json(playerNames["-"])
    }
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${8000}, you better go catch it`)
})