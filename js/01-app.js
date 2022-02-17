const numeros = [10,20,30,40,50];

const meses = new Array('enero','febrero','marzo','abril','mayo','junio')
/* Reasignando valores, Metodo (1)-Estatico */
meses[1] = 'Nuevo Mes'
meses[7] = 'julio'
meses[8] = 'Agosto'


/* -------------------------------------------------------------------------- */
/*                          AÑADIR VALORES (Metodo 2)                         */
/* -------------------------------------------------------------------------- */
/* Agregar al final -Dinamico */
meses.push('Septiembre')

const mixto = [ 'string',10,true,null ,{
    welcome : 'Hello World'
}, [1,2,3]]
/* Para mirar, arreglo-objetos mas complejos */
console.log(numeros[2])
console.table(numeros[0])
console.table(mixto)
/* Recorriendo Todos los elementos (n) cantidad de veces, dependiendo su longitud*/
for(let i = 0; i < meses.length; i++ ){
    //console.log(i)
    console.log(meses[i])
}

/* -------------------------------------------------------------------------- */
/*                          AÑADIR VALORES (Metodo 2)                         */
/* -------------------------------------------------------------------------- */

/* Imperativa = Modifica el Objeto Actual
    Declarativa = NO Modifica el Objeto Actual */


/* Declaracion Imperativa */

const carrito = [];

const producto = {
    nombre : "Lavadora",
    precio : 5000,
    disponible : true
}

const producto2 = {
    nombre : "Celular",
    precio : 2000
}

const producto3 = {
    nombre : "Smart TV",
    precio : 7000
}
/* Agrega al Final del arreglo */
carrito.push(producto)
/* Agregar Al inicio del Arreglo */
carrito.unshift(producto2)

console.log(carrito)

/* -------------------------------------------------------------------------- */
/*                          AÑADIR VALORES (Metodo 3)-Spread Operators        */
/* -------------------------------------------------------------------------- */

/* Declarativa- CREA UNA NUEVA VARIABLE */
let resultado
resultado = [...carrito, producto]
resultado = [...resultado,producto2]
resultado = [mixto, ...resultado]
console.table(resultado)


/* -------------------------------------------------------------------------- */
/*                         ELIMINAR CON SPLICE                                */
/* -------------------------------------------------------------------------- */

/* Eliminar ultimo elemento */
meses.pop()
//console.log(meses)
meses.pop()
//console.log(meses)
meses.pop()
console.log(meses)

/* Eliminiar desde el inicio */
meses.shift()
console.table(meses)

/*  Eliminar desde cualquier posicion */
/* Splice = Toma 2 elementos, el primero desde la posicion donde cortara, el segundo elemento, cuantos elementos va a eliminar/cortar */
meses.splice(0,2)
console.log(meses)


/* -------------------------------------------------------------------------- */
/*                            DESTRUCTURING ARRAYS                            */
/* -------------------------------------------------------------------------- */

const [] = numeros;
const [a,b,c,d,e] = numeros;
const [ , , , ,ultimo] = numeros
console.table(b,e)
console.log(ultimo)

/* -------------------------------------------------------------------------- */
/*                            ITERAR CON MAP                                  */
/* -------------------------------------------------------------------------- */

/* La diferencia entre un for tradicional,forEach y map, es que map crea un arreglo nuevo */

const nuevoArreglo = carrito.map( z => {
    console.table(z)
})



            /* -------------------------------------------------------------------------- */
            /*                                ARRAY-METHODS                               */
            /* -------------------------------------------------------------------------- */

            /* Comprobar si un valor existe dentro de un Array */
            meses.forEach( mes => {
                //console.log(mes)
                /* FORMA MANUAL */
                if(mes === 'mayo'){
                    //alert('El elemento, si existe.')
                }
            })

            /* Includes solo funciona para Arrays, para Objetos devuelve Error */
            const revisarArreglo = meses.includes('abril')
            //alert(revisarArreglo)

            /* Some revisa tanto Arrays como Objetos */
            /* Objeto */
            const revisarObjeto = carrito.some( producto =>  producto.nombre === 'Lavadora' )
            //alert(revisarObjeto)
            /* Array */
            const revisararray = meses.some( anio => anio === 'enero')
            //alert(revisararray)

            /* Comprueba la existencia de un elemento retorna un 1 = encuntro el item, -1 = no lo encontro */
            const indice = meses.findIndex( mes => mes === 'mayo')
            //alert(indice)

            /* reduce = Une valores */
            let SumarValores = carrito.reduce( (total,producto) => total + producto.precio, 0 )
            //alert(SumarValores)

            /* Filter = Crea un nuevo Arreglo basado en un parametro evaluado, (*RETORNA  UN ARRAY COMPLETO QUE CUMPLA DICHA CONDICION) */
            let resFilter = carrito.filter( 
                //p => p.nombre === 'Jhon Doe'
                p => p.precio > 1000
                )
            //console.log(resFilter)


            /* Find = Crea un nuevo Arreglo basado en un parametro evaluado, (*RETORNA SOLO EL ARRAY QUE CUMPLA DICHA CONDICION) */
            const resultado2 = carrito.find( producto => producto.nombre === 'Celular')
            console.log(resultado2)

            /* Every retorna un valor booleano, siempre y cuando todos los elmentos del Areglo cumplan con dicha condicion */

            const EvaluarConEvery = carrito.every(
                //Z => Z.precio >1000
                Z => Z.precio >10000
            )
            //alert(EvaluarConEvery)

            /* Uniendo dos arreglos */

            let Union = meses.concat(numeros, carrito, 'Valor Extra',...'TEST')
            console.log(Union)

            const Spread = ['ENERO', ...meses, 'DICIEMBRE']
            //alert(Spread)