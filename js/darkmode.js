(function() {

    const toggleSwitch = document.getElementById('theme-toggle');

    function switchTheme() {
        if (toggleSwitch.classList.contains('fa-moon')) {
            toggleSwitch.classList.add('fa-sun');
            toggleSwitch.classList.remove('fa-moon');
            document.body.classList.add('dark');
        } else {
            toggleSwitch.classList.add('fa-moon');
            toggleSwitch.classList.remove('fa-sun');
            document.body.classList.remove('dark');
        }
    }

    toggleSwitch.addEventListener('click', () => {
        //alert('clicked');
        switchTheme();
    });

})();