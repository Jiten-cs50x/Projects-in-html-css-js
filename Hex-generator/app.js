function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

function setBackground() {
    document.body.style.background = getColor();
}

// Use 'keydown' for better responsiveness and 'code' for modern compatibility
document.body.addEventListener('keydown', function(e) {
    // 'Space' works regardless of keyboard layout
    if (e.code === 'Space') { 
        setBackground();
    }
});   