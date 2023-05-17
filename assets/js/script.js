const dark = document.getElementById('mode_icon');

dark.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if (dark.classList.contains ('fa-moon')) {
        dark.classList.remove('fa-moon');
        dark.classList.add('fa-sun');

        form.classList.add ('dark');
        return;

    }
        
    dark.classList.add('fa-moon');
    dark.classList.remove('fa-sun');
    form.classList.remove ('dark');

});
   
