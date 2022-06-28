(() => {

    
    document.querySelector('#ham').addEventListener('click', () => {
        document.querySelector('#ham').classList.toggle('open');
        document.querySelector('nav').classList.toggle('visible');
        document.querySelector('h1').classList.toggle('hidden');
        document.querySelector('#btn').classList.toggle('hidden');
    });

    const options = {
        rootMargin: '1000px 0px 0px 0px',
        treshold: 0.5
    };

    const observe = entries => entries.forEach(entry => {
        entry.target.classList.toggle('inviewport', entry.isIntersecting);
    });

    const obs = new IntersectionObserver(observe, options);
    document.querySelectorAll('#grid>div').forEach(el => obs.observe(el));


})();