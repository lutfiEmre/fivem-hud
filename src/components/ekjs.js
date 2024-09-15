touchScroll('.container');

function touchScroll($bind = '') {
    const slider = document.querySelector($bind);
    let isDown = false;
    let startY;
    let scrollTop;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startY = e.pageY - slider.offsetTop;
        scrollTop = slider.scrollTop;
        cancelMomentumTracking();
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        beginMomentumTracking();
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const y = e.pageY - slider.offsetTop;
        const walk = (y - startY) * 3; //scroll-fast
        var prevScrollTop = slider.scrollTop;
        slider.scrollTop = scrollTop - walk;
        velY = slider.scrollTop - prevScrollTop;
    });

    slider.addEventListener('wheel', (e) => {
        cancelMomentumTracking();
    });

    // 偵測動畫
    var velY = 0;
    var momentumID;

    function beginMomentumTracking() {
        cancelMomentumTracking();
        momentumID = requestAnimationFrame(momentumLoop);
    }

    function cancelMomentumTracking() {
        cancelAnimationFrame(momentumID);
    }

    function momentumLoop() {
        slider.scrollTop += velY;
        velY *= 0.95;
        if (Math.abs(velY) > 0.5) {
            momentumID = requestAnimationFrame(momentumLoop);
        }
    }
}
