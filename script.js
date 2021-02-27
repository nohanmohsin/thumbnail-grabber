const btn = document.getElementById('submit');
btn.addEventListener('click', () => {
    
    const input=document.getElementById('url').value;
    if(input.length > 42 && input.includes('https://www.youtube.com/watch?v=')){
        const index = input.indexOf('=');
        const videoId = input.slice(index+1, index+12);
        url=`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        console.log(url);
 
        document.getElementById('input').style.display= 'none';
        let img= document.getElementById('img').innerHTML; 
        img +=`<img src=${url}></img>`;

    }

})

