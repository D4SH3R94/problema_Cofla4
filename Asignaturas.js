class Clases{
    constructor(asignatura, profesores, alumnos){
        this.asignaturas = asignatura;
        this.profesores = profesores;
        this.alumnos = alumnos;
        /* this.preguntaAsignatura = prompt("Desea incscribirse en las asignaturas"); */
    }infoOfSignatures(){
        let trueSignature = this.asignaturas.filter(function(sig){
            document.write(sig + "<br>");
        })
        document.write(trueSignature);
    }infoOfProfesors(){
        let trueProfesor = this.profesores.filter(function(pro){
            document.write(pro + "<br>");
        })
        document.write(trueProfesor);
    }infoOfStudent(){
        let trueStudent = this.alumnos.filter(function(stu){
            document.write(stu + "<br>");
        })
        document.write(trueStudent);
    }
}


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

const opcionesOfSystem = ()=>{
    let opcions = prompt("Que operacion desea hacer: 1- Ver informacion, 2- Ingresar en las Escuela e inscribirse en las asignaturas");
    if (opcions == 1){
        let menu = prompt("Este es el menu de informacion. 1- Conocer asignaturas, 2- Conocer Profesores, 3- Conocer Alumnos 4-Clases");
        if(menu == 1){
            clasesCofla.infoOfSignatures();
        }else if (menu == 2){
            clasesCofla.infoOfProfesors();
        }else if(menu == 3){
            clasesCofla.infoOfStudent();
        }else if (menu == 4){

        }else{

        }
    }else if(opcions == 2){

    }
}

let signature =  ["Matematica", "Algebra", "Programacion POO", "Logica", "Ingeneria de sistemas", "Calculo", "Programacion Phyton", "Programacion Php", "Git y Github", "Scrum", "Marketin Digital", "Ingles"];
let profesors =  ["Alberto Perez", "Rodrigo Martinez", "Pablo Fench", "Lixandra Labandera","Marcos Piotosi", "Maritza Cabello"];
let student = ["Cofla Rompepelotas", "Miguel Paulino", "Daniela Marquez", "Yordi Garcia", "Jesler Gutierrez", "Raiko Saiz", "Anelys Padilla", "Lisandra Portales", "Camila Cabello", "Alain Alderete", "Pocho Gonzales", "Mario Napoles", "Charry Misifu"];

const clasesCofla = new Clases(signature,profesors,student);

opcionesOfSystem();