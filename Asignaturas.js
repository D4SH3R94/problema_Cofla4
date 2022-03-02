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
    }correspondetTeacher(){
        document.write(`<b>Profesor - Asignatura</b>: Alberto Perez  - Matematica, Algebra. <br>
        _______ Rodrigo Martinez - Programacion POO, Logica. <br>
        _______ Pablo Fench - Ingeneria de sistemas, Calculo. <br>
        _______ Lixandra Labandera - Programacion Phyton, Programacion Php. <br>
        _______ Marcos Piotosi - Git y Github, Scrum. <br>
        _______ Maritza Cabello - Marketin Digital, Ingles. <br></Br>`)
        
    }opcionesOfSystem2(){
        let autenticationStudent = prompt("Cual es tu nombre?");
        if (this.alumnos.includes(autenticationStudent) == true){
            let decitionsStudent = prompt("Quiere inscribirse, si o no?");
            if(decitionsStudent.toLocaleLowerCase() == "si"){
                while(decitionsStudent.toLocaleLowerCase() == "si"){
                    let arraysSignatures = prompt("Escribe una asignatura a cursar, en caso de no continuar escriba 'no'.");
                    let createArraysSignatures = [];
                    let definitiveArraysSignature = createArraysSignatures.push(arraysSignatures);
                    document.write(`${createArraysSignatures}<br>`);
                    if(this.asignaturas.includes(arraysSignatures) == true){
                        alert("Prosiga");
                    }else if(arraysSignatures == "no"){
                        alert("En Pantalla se muesta las asignaturas a cursar. Muchas Gracias, puede irse");
                        break;
                    }else{
                        alert("En Pantalla se muesta las asignaturas a cursar. Se ha equivocado o la asignatura no se encuentra para impartir, por favor escriba una asignatura valida.");
                        break;
                }
            }
            }else if(decitionsStudent.toLocaleLowerCase() == "no"){
                alert("Muchas Gracias, por favor continue.");
            }else{
                alert("Se ha equivocado de respuesta, por favor escriba 'si' o 'no'.");
            }
        }else{
            alert("No se encuentra registrado, por favor retirese.")
        }
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
    let opcions = prompt("Que operacion desea hacer: 1- Ver informacion, 2- Ingresar en las Escuela e inscribirse en las asignaturas 3- Operaciones de estudiantes.");
    if (opcions == 1){
        let menu = prompt("Este es el menu de informacion. 1- Conocer asignaturas, 2- Conocer Profesores, 3- Conocer Alumnos 4-Clases");
        if(menu == 1){
            clasesIngeneriaDeSistemas.infoOfSignatures();
            return opcionesOfSystem();
        }else if (menu == 2){
            clasesIngeneriaDeSistemas.infoOfProfesors();
            return opcionesOfSystem();
        }else if(menu == 3){
            clasesIngeneriaDeSistemas.infoOfStudent();
            return opcionesOfSystem();
        }else if (menu == 4){
            clasesIngeneriaDeSistemas.correspondetTeacher();
            return opcionesOfSystem();
        }else{
            alert("Muchas Gracias, puede irse o realice una operacion valida.");
        }
    }else if(opcions == 2){
        clasesIngeneriaDeSistemas.opcionesOfSystem2();
        opcionesOfSystem();
    }else if(opcions ==  3){
        clasesIngeneriaDeSistemas.opcionStudent()
    }else{
        alert("Muchas Gracias, puede irse o realice una operacion valida.");
        opcionesOfSystem();
    }
}

let signature =  ["Matematicas", "Algebra", "Programacion POO", "Logica", "Ingeneria de sistemas", "Calculo", "Programacion Phyton", "Programacion Php", "Git y Github", "Scrum", "Marketin Digital", "Ingles"];
let profesors =  ["Alberto Perez", "Rodrigo Martinez", "Pablo Fench", "Lixandra Labandera","Marcos Piotosi", "Maritza Cabello"];
let student = ["Cofla Rompepelotas", "Miguel Paulino", "Daniela Marquez", "Yordi Garcia", "Jesler Gutierrez", "Raiko Saiz", "Anelys Padilla", "Lisandra Portales", "Camila Cabello", "Alain Alderete", "Pocho Gonzales", "Mario Napoles", "Charry Misifu"];

const clasesIngeneriaDeSistemas = new Clases(signature,profesors,student);

opcionesOfSystem();