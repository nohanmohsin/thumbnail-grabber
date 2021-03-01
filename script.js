

const btn = document.getElementById('submit');
let title = 'yeet';
btn.addEventListener('click', () => {
    
    const input=document.getElementById('url').value;
    if(input.length > 42 && input.includes('https://www.youtube.com/watch?v=')){
        const index = input.indexOf('=');
        const videoId = input.slice(index+1, index+12);

        url=`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        console.log(url);
        const image = document.createElement('img');
        image.src = url;
        image.className= 'searched-image';
        document.getElementById('input').style.display= 'none';
        document.getElementById('img').appendChild(image);
        const ytApiKey = env.API_KEY;//bonk
        
    }

    else{
        alert("it aint it bub...do it right");
    }

})

