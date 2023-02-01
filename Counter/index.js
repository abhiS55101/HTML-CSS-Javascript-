let count = 0;

const value = document.querySelector('#value');
const button = document.querySelectorAll('.btn');

button.forEach( function (button) {
    button.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')) {
            count++;
        } else if (styles.contains('decrease')) {
            count --;
        } else if (styles.contains('reset')) {
            count = 0;
        }
        value.textContent = count;
    });  
});