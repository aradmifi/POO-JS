/* const Pelicula = {

    nombre: 'Harry', //Objeto literal
    id: 01,          //Objeto literal
    reproducir(){
        return `reproducir pelicula... ${this.nombre}`;  
    }
} */

class Pelicula{ //Clase
    constructor(nombre,id){ //Contrusctor que recibe parametros
        this.nombre = nombre; //Propiedades
        this.id = id; //Propiedades
    }

    reproducir() {  //Metodo
        return `Reproduciendo pelicula ${this.nombre}`;
    } 
}

 const peliculaUno = new Pelicula('Hangover',1);
 const peliculaDos = new Pelicula('Spiderman',2);

 console.log(peliculaUno.reproducir());
 console.log(peliculaDos.reproducir());
    // console.log(Pelicula.reproducir()); Pintar en consola