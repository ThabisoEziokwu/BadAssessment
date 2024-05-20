document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});

document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showMainContent();
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showMainContent();
});

function showMainContent() {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
}

//Charlie, please do not let the other ones see my shitty work :(
//I'm sorry it didn't work. I really tried. Struggled with a few things and because I started doing the work late, I could not fix them all up. 
//But I tried yho. Bathong?? I even asked around for help.
//Anyway, by the time you view this one, I would have already fixed it and give you a better copy
//Please don't blame this on me not coming to class lol