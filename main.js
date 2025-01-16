function createSnowflake() {
    const snow = document.getElementById('snow');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    const size = Math.random() * 4 + 1;
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = -10;
    const endPositionX = startPositionX + (Math.random() * 150 - 75);
    const endPositionY = window.innerHeight + 10;
    const animationDuration = Math.random() * 3 + 2;
    
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startPositionX}px`;
    snowflake.style.top = `${startPositionY}px`;
    
    const animation = snowflake.animate([
        { transform: `translate(0px, 0px)` },
        { transform: `translate(${endPositionX - startPositionX}px, ${endPositionY}px)` }
    ], {
        duration: animationDuration * 1000,
        easing: 'linear'
    });
    
    snow.appendChild(snowflake);
    
    animation.onfinish = () => {
        snowflake.remove();
    };
}

function startSnow() {
    setInterval(createSnowflake, 50);
}

window.addEventListener('load', startSnow);

document.addEventListener('click', function(e) {
    const numFlakes = 25;
    const clickX = e.clientX;
    const clickY = e.clientY;
    
    for (let i = 0; i < numFlakes; i++) {
        const angle = (Math.PI * 2 * i) / numFlakes;
        const radius = 20;
        
        const startX = clickX + Math.cos(angle) * radius;
        const startY = clickY + Math.sin(angle) * radius;
        
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const size = Math.random() * 4 + 1;
        const endPositionX = startX + (Math.random() * 150 - 75);
        const endPositionY = window.innerHeight + 10;
        const animationDuration = Math.random() * 3 + 2;
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}px`;
        snowflake.style.top = `${startY}px`;
        
        const animation = snowflake.animate([
            { transform: `translate(0px, 0px)` },
            { transform: `translate(${endPositionX - startX}px, ${endPositionY - startY}px)` }
        ], {
            duration: animationDuration * 1000,
            easing: 'linear'
        });
        
        document.getElementById('snow').appendChild(snowflake);
        
        animation.onfinish = () => {
            snowflake.remove();
        };
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});