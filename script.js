let songIndex =0;
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let audioElement = new Audio("0.mp3");
let songItemPlay =Array.from(document.getElementsByClassName("songItemPlay"));
let text =document.getElementById('text');
let play = document.getElementById("play");
let mainbox = document.getElementById('mainbox');
let secondmainbox = document.getElementById('secondmainbox');
let songs=[
    {songName:"Zumka vali por",filePath:"",coverPath:"0.jpeg"},           
    {songName:"Raja tu mana raja r",filePath:"",coverPath:"1.jpeg"},      
    {songName:"Mani sahiba tu",filePath:"",coverPath:"2.jpeg"},           
    {songName:"Raja tu mana raja r 2",filePath:"",coverPath:"3.jpeg"},    
    {songName:"Vadi Vadi",filePath:"",coverPath:"4.jpeg"},                
    {songName:"Zim zim pani ma",filePath:"",coverPath:"5.jpeg"},          
    {songName:"Zumka vali por 2.0",filePath:"",coverPath:"6.jpeg"},       
    {songName:"Ghadi na kata",filePath:"",coverPath:"7.jpeg"},            
    {songName:"Chal hini nagin",filePath:"",coverPath:"8.jpeg"},          
    {songName:"Savan Mahina ma 2",filePath:"",coverPath:"9.jpeg"},
]
songItems.forEach((element ,i)=>{
      element.getElementsByTagName("img")[0].src=songs[i].coverPath;
      element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.src=`${songIndex}.jpeg`;
        text.innerHTML=songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
        secondmainbox.style.display="flex";
        mainbox.style.display="none";

      
        
     }
    else{
        makeAllplays();
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        secondmainbox.style.display="none";
        mainbox.style.display="flex";

      
    }
})

audioElement.addEventListener("timeupdate",()=>{
    let progress = ((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener("change",()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration/100);
})

let makeAllplays=()=>{
    songItemPlay.forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
  songItemPlay.forEach((element)=>{
        element.addEventListener("click",(e)=>{
        makeAllplays();
        if(audioElement.paused||audioElement.currentTime<=0){
            songIndex =parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`${songIndex}.mp3`
            audioElement.currentTime=0;
            play.src=`${songIndex}.jpeg`;
            text.innerHTML=songs[songIndex].songName;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play')
            masterPlay.classList.add('fa-circle-pause')
            secondmainbox.style.display="flex";
            mainbox.style.display="none";

        }else{
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause')
            masterPlay.classList.add('fa-circle-play');
          
        }
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    makeAllplays();
    audioElement.src=`${songIndex}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    play.src=`${songIndex}.jpeg`;
    text.innerHTML=songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    secondmainbox.style.display="flex";
    mainbox.style.display="none";
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex -=1;
    }
    makeAllplays();
    audioElement.src=`${songIndex}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    play.src=`${songIndex}.jpeg`;
    text.innerHTML=songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');
    secondmainbox.style.display="flex";
    mainbox.style.display="none";
})