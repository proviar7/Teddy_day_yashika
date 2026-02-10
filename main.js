function scrollToNext(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Background Hearts & Teddies
function createDecor() {
    const decor = document.createElement('div');
    const items = ['🧸', '❤️', '☁️', '✨'];
    decor.innerHTML = items[Math.floor(Math.random() * items.length)];
    decor.style.position = 'fixed';
    decor.style.left = Math.random() * 100 + 'vw';
    decor.style.top = '-50px';
    decor.style.fontSize = Math.random() * 20 + 20 + 'px';
    decor.style.zIndex = '-1';
    decor.style.opacity = '0.5';
    document.body.appendChild(decor);

    const duration = Math.random() * 3 + 4;
    
    decor.animate([
        { top: '-50px', transform: 'rotate(0deg)' },
        { top: '110vh', transform: `rotate(${Math.random() * 360}deg)` }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });

    setTimeout(() => decor.remove(), duration * 1000);
}

setInterval(createDecor, 500);

// Simple interaction message
console.log("Teddy Day Script Loaded for Yashika!");
