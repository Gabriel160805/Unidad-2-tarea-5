//IMPLEMENTANDO PILA CON ARREGLO
class Pila{
    constructor(){
        this.almacenPila=[];
    }

    push(){
        this.almacenPila.push(elemento)
        return this.almacenPila;
    };
    pop(){
        if(this.almacenPila,length === 0){
            return null;
        };
        return this.almacenPila.pop();
    };
    peek(){
        if(this.almacenPila.length === 0){
            return null;
        };
        return this.almacenPila[this.almacenPila.length - 1];
    };
    size(){
        return this.almacenPila.length;
    };
    print(){
        return this.almacenPila
    };
}

const PILA = new Pila();

//IMPLEMENTANDO COLA CON ARREGLO
class Cola {
    constructor() {
        this.almacenCola = [];
    };

    enqueue(elemento){
        this.almacenCola.push(elemento);
        return this.almacenCola;
    };
    dequeue(){
        if(this.almacenCola.length === 0){
            return null;
        };
        return this.almacenCola.shift();
    };
    peek(){
        if(this.almacenCola.length === 0){
            return null;
        };
        return this.almacenCola[this.almacenCola.length - this.almacenCola.length];
    };
    size(){
        return this.almacenCola;
    };
    print(){
        return this.almacenCola;
    };
    isEmpty(){
        if(this.almacenCola.length === 0){
            return true;
        };
        return false;
    };
};

const COLA = new Cola();