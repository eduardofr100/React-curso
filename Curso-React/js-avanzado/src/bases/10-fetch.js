const apiKey = 'C1khQe3Z7R1W2lFtO9myKeuShdqFYSGC';

const peticion = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`);

peticion
    /**response.json().then(data => {
        console.log(data);
    }*/
    .then(response => response.json())
    .then(({data}) => {
        ///console.log(data.images.original.url)
        const {url} = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);
