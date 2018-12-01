const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Actualiza una tarea'
}
const compleado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tareaS'
}
const argv = require('yargs').command(
        'crear', 'Crea un elemento por hacer', { descripcion }

    ).command(
        'actualizar', 'actualiza una tarea', {
            descripcion,
            compleado
        }

    ).command('eliminar', 'elimina un registro del json', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}