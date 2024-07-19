function addingEventListener() {
    button.addEventListener('click', function() {
        console.log('clicked');
    })
}

console.log(addingEventListener())

const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);