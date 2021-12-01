/**const getImagenPromesa = () => new Promise(resolve =>
    resolve('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'))  

getImagenPromesa().then(console.log);*/

const getImagen = async() => {
    try{
        ///return 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        const apiKey = 'C1khQe3Z7R1W2lFtO9myKeuShdqFYSGC';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`);
        const {data} = await peticion.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }
    catch(error){
        console.error(error);
    }
}

getImagen().then(console.log);
