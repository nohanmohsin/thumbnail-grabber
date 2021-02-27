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
        document.getElementById('input').style.display= 'none';
        
        const ytApiKey = 'bonk';
        fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + ytApiKey)
        .then(res => res.json())
        .then(data => {
            title = data.items[0].snippet.title
            const nameOfVid = document.getElementById("title");
            nameOfVid.innerText= title;
            if(title.length > 0){
                document.getElementById('img').appendChild(image);
            }
            
        });
        console.log(title);
        
    }

})

