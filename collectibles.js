function importar(marca){
    if (marca == 'Hot Toys'){
        return require('./datos/figuras1.json')
    } else if (marca == 'Bandai'){
        return require('./datos/figuras2.json')
    }else if (marca == 'Star Wars'){
        return require('./datos/figuras3.json')
    }
}
module.exports = importar