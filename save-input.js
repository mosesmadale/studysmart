// select the data from the dom when the click event is trigered

document.querySelectorAll('.button-mini-max').forEach(e=>{
    e.onclick = function(){  
         writeToWindow(e.getAttribute('data-dir'),e.getAttribute('data-slides'));
         
    }
})

function writeToWindow(directory, slideNumber){
    localStorage.setItem('directory', directory);
    localStorage.setItem('slideNumber', slideNumber);
}