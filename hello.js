
function hello() {
    const heading = document.querySelector('h1')

    if (heading.innerHTML === 'Hello!') {
        heading.innerHTML = 'Goodbye!';
    } else {
        heading.innerHTML = 'Hello!';

    }
}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick = hello;

});
