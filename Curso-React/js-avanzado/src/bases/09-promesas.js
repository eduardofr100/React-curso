import { getHeroesById } from './bases/08-export-import';

/**const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
      const heroes = getHeroesById(2);
      console.log(heroes);
      resolve(heroes);
      ///reject(heroes);
      ///reject('No se pudo encontrar el héroe solicitado');
    }, 2000);
});

promesa.then((heroe) => {
    console.log('Heroe: ', heroe);
})
.catch((error) => console.warn(error));*/

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroes = getHeroesById(id);
            if (heroes) {
                resolve(heroes);
            }
            else {
                ///reject(heroes);
                reject('No se pudo encontrar el héroe solicitado');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(15).
    then(console.log)
    .catch(console.warn);
