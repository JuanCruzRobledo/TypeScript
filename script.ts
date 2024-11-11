
console.log("Curso de TypeScript")
//Tipo de datos
let nombre: string  = "Juan"
let edad: number = 20
let estudiejs : boolean = true  

if (estudiejs) {
  console.log("Puedo seguir con TypeSript")
} else{
  console.log("No puedo seguir con TypeScript, primero debo aprender JS")
}

//Ejemplo con juego
//Goles De equipo
let equipo1: number 
let equipo2: number 

//FUNCION
//El parametro puede ser o no recibido
function jugarPartido(juegamessi? : boolean) : void{
  equipo1 = Math.floor(Math.random() * 5)
  equipo2 = Math.floor(Math.random() * 5)

  console.log(`Equipo 1: ${equipo1} | Equipo 2: ${equipo2}`)
  console.log("RESULTADO:")
  if (juegamessi == true) {
    console.log("Gana el equipo de messi")
  } else{
    if(equipo1 > equipo2){
      console.log("Gana el equipo 1")
    } else if(equipo1 == equipo2){
      console.log("Empatan el partido")
    } else{
      console.log("Gana el equipo 2")
    }
  }
}
//Llamada a la funcion
jugarPartido()
//Llamada a la funcion con parametro
jugarPartido(true)


//NO USAR ANY
let cualquierVariable: any
cualquierVariable = "string"

console.log("Soy una variable Any de tipo: ",cualquierVariable)

cualquierVariable = true
console.log("Soy una variable Any de tipo: ",cualquierVariable)

cualquierVariable = 20
console.log("Soy una variable Any de tipo: ",cualquierVariable)

//ARREGLOS

let arregloNumber:number[] = [1.22,2.44,3.42,4.88]
let arregloString: string[] = ["ESTO","ES","UN","STRING"]

console.log("Arreglo de tipo number metodos: ", arregloNumber[0].toFixed())
console.log("Arreglo de tipo string metodos: ", arregloString[0].charAt(1))

//**OBJETOS TSC

//types
type Programador = {
  nombre: string,
  edad: number | null, // | indica que puede ser de varios tipos
  habilidades: string[],
  trabajo?: boolean //? Indica que es opcional que sea de ese tipo
}

//objeto de tipo programador
let programador:Programador = {
  nombre: "Juan",
  edad: 25,
  habilidades: ["JS","TS","HTML","CSS"],
  trabajo: true,
}
console.log("OBJETO PROGRAMADOR: ",programador)

//INTERFACE
interface Persona {
  nombre: string,
  edad: number,
  trabajo?: boolean
}

let persona1 : Persona = {
  nombre: "Juan",
  edad: 25,
  trabajo: true
}

function saludar(persona : Persona) {
  console.log(`Hola soy ${persona.nombre}`)
}

//CLASES Y POO
class ClassPersona {
  //atributos
  private nombre: string;
  private edad: number;
  private trabajo: boolean;
  
  //Constructor
  constructor(nombre: string, edad: number, trabajo: boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.trabajo = trabajo;
  }
}

//inicializar
let persona2 = new ClassPersona("Juan", 25, true);


//GENERICO
class Sorteo<T>{
  //Encapsulamiento
  private ticket?:T;
  constructor(private nombre : string){
  }
  setNumero(ticket : T){
    this.ticket = ticket;
  }
  getNumero(){
    return this.ticket;
  }
  getNombre(){
    return this.nombre;
  }
  public sortear(): string{
    return `Para ${this.nombre} el ticket es ${this.ticket}`
  }
}

let sorteo = new Sorteo<Number>("Juan Cruz Robledo")
let sorteo2 = new Sorteo<String>("Juan Cruz Robledo")
let random = Math.floor(Math.random() * 1000000) + 1;
console.log("GENERICOS")
sorteo.setNumero(random);
console.log(`Para ${sorteo.getNombre}, el numero es ${sorteo.getNumero}`)

sorteo2.setNumero(random.toString());
console.log(`Para ${sorteo2.getNombre}, el numero es ${sorteo2.getNumero}`)
