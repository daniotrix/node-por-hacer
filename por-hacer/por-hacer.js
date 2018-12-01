const fs = require('fs');
const guardarDb = () => {
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('no se pudo grabar');
    });
}
const cargarDb = () => {
    try {
        listadoPorhacer = require('../db/data.json');
    } catch (error) {
        listadoPorhacer = [];
    }
    // console.log(listadoPorhacer);
}
const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorhacer.push(porHacer);
    guardarDb();
    return porHacer;
}
const getListado = () => {
    cargarDb();
    return listadoPorhacer;
}
const actualizar = (descripcion, estado) => {
    cargarDb();
    let index = listadoPorhacer.findIndex(tarea => { return tarea.descripcion === descripcion });
    if (index >= 0) {
        listadoPorhacer[index].completado = estado;
        guardarDb();
        return true;
    } else { return false }
}

const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorhacer.filter(tarea => { return tarea.descripcion !== descripcion });
    if (listadoPorhacer === nuevoListado) {
        return false;
    } else {
        listadoPorhacer = nuevoListado;
        guardarDb();
        return true
    }

}

module.exports = { crear, getListado, actualizar, borrar }