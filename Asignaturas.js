let asignaturas = ["Matematica", "Algebra", "Programacion POO", "Logica", "Ingeneria de sistemas", "Calculo", "Programacion Phyton", "Programacion Php", "Git y Github", "Scrum", "Marketin Digital", "Ingles"];
let profesores = ["Alberto Perez", "Rodrigo Martinez", "Pablo Fench", "Lixandra Labandera","Marcos Piotosi", "Maritza Cabello"];
let alumnos = ["Cofla Rompepelotas", "Miguel Paulino", "Daniela Marquez"];
let preguntaAsignatura = prompt("Desea incscribirse en las asignaturas");

const converTString = (a) =>{
    switch(a.toLowerCase()){
        case "si": case "yes": case "afirmative":case "afirmativo": return true;
        case "no": case "negative": case "negativo": return false;
        default: return Boolean(a);
    }
}
const converTStringSignatures = (b) =>{
    switch(b.toLowerCase()){
        case "no": return false;
        default: return true;
    }
}
const validationQuest = (c) =>{
    let boleanQuestion = converTString(c)
    if (boleanQuestion == true){
        let arraysSignatures = prompt("Escribe una asignatura a cursar, en caso de no querer escriba 'no'.");
        let boleanSignatures = converTStringSignatures(arraysSignatures);
        let createArraysSignatures = [];
        let definitiveArraysSignature = createArraysSignatures.push(arraysSignatures);
        console.log(definitiveArraysSignature)
        console.log(boleanSignatures);
        if (boleanSignatures == true){
            while(boleanSignatures == true){
                arraysSignatures = prompt("Escribe una asignatura a cursar, en caso de no querer escriba 'no'.");
                console.log(arraysSignatures);
                let boleanSignatures = converTStringSignatures(arraysSignatures);
                let definitiveArraysSignature = createArraysSignatures.push(arraysSignatures);
                console.log(definitiveArraysSignature);
                console.log(createArraysSignatures);
                if (boleanSignatures == true){
                    alert("Prosiga");
                }else{
                    alert("Muchas Gracias, puede irse");
                }
            }
        }else{
            alert("Muchas Gracias, puede irse");
        }
    }else{
        alert("Muchas Gracias, puede irse.")
    }
}

validationQuest(preguntaAsignatura);