function kq() {
    var traloi = document.getElementById('traloi').value;
    if (traloi == 'ECMAScript') {
        document.getElementById('abc').innerHTML='Right!';
    } else {
        document.getElementById('abc').innerHTML="You don't know? ECMAScript!";
    }
}