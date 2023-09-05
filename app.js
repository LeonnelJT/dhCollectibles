const importar = require('./collectibles')

let hotToys = importar('Hot Toys')
let bandai = importar('Bandai')
let starWars = importar('Star Wars')
//console.log(hotToys);
//console.log(bandai);
//console.log(starWars);

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars]
//console.log(unifiedCollectibles);

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function(){
        console.log('TODAS LAS FIGURAS DISPONIBLES:');
        this.figuras.forEach(figura => console.log(figura))
    },
    figuresByBrand: function(marcaDeLaFigura){
        console.log(`Figuras marca ${marcaDeLaFigura} disponibles:`);
        return this.figuras.filter(figura => figura.marca == marcaDeLaFigura)
    }
}
collectibles.listFigures()
console.log(collectibles.figuresByBrand('Bandai'))