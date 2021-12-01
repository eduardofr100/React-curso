import heroes from '../data/heroes';

///console.log(publisher);

export const getHeroesById = (id) => {
    return heroes.find(hero => hero.id === id);
}
///console.log(getHeroesById(6));
///console.log(heroes); 

export const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.publisher === owner);
}

///console.log(getHeroesByOwner('DC Comics'));
