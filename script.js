// Mobile navigation toggle. Nothing else on this site requires JavaScript.
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) { return; }

    toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
})();
