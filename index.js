window.onload = () => {
    document.getElementById('text').innerHTML = things[0];
    document.getElementById('text').addEventListener('animationend', (event) => {
    changeText(event);
});
}

var things = ["I like to try and take artsy photos even if it doesn't turn out that well.", "I take great joy from watching historical documentaries  about monarchies.", "Going to the movie theaters is one of my favourite things to do in the evenings.", "Harry Potter is one of the only movies I would watch again."];
var i = 0;

function changeText(event) {
    console.log(event);
    console.log(document.getElementById('text').className)
    
    console.log(things[i]);
    document.getElementById('text').innerHTML = things[i];
    if (event.animationName == 'moveIn') {
        document.getElementById('text').className = '';
        setTimeout(() => {
            document.getElementById('text').className = 'moveOut';
        }, 2000);
    } else {
        i++;
        if (i >= things.length) i = 0;
        document.getElementById('text').innerHTML = things[i];
        document.getElementById('text').className = 'moveIn';
    }
    
}