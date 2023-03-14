// Funcion para sumar edades de estudiantes

const estudiantes = [
    {nombre: 'Omar', apellido: 'Romero', edad: 15, estatura: 1.62},
    {nombre: 'Karla', apellido: 'Casanas', edad: 14, estatura: 1.25},
    {nombre: 'Edward', apellido: 'Bastidas', edad: 12, estatura: 1.45},
    {nombre: 'Yeespri', apellido: 'Morales', edad: 17, estatura: 1.65},
    {nombre: 'Diosa', apellido: 'Yglesias', edad: 15, estatura: 1.49},
    {nombre: 'Juan', apellido: 'Casanas', edad: 12, estatura: 1.27}
]

let mostrar = prompt ('¿Quieres mostrar los datos de algún estudiante por consola?');

switch (mostrar) {
    case 'si':
        let estudiante = prompt ('¿cuál?\nPresiona 0: para Omar Romero\nPresiona 1: para Karla Casanas\nPresiona 2: para Edward Bastidas\nPresiona 3: para Yeespri Morales\nPresiona 4: para Diosa Yglesias\nPresiona 5: para Juan casanas\n');
        console.log(estudiantes[estudiante]);
        break;
    case 'no':
        let opcion= prompt ('¿Te parece si vemos que edad tendrá cada uno en 5 años?');
        switch (opcion) {
            case 'si':
                    for (const suma of estudiantes) {
                        suma.edad=suma.edad+5;
                        alert(suma.nombre+' tendrá '+suma.edad+ ' años');
                    }
                sumarEdades(estudiantes);
            case 'no':
            alert ('Vuelva pronto');
                break;
        
            default:
                break;
        }
        
}
