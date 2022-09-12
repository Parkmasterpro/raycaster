let keys = [];

function keyDown(keyCode) {
    return keys.includes(keyCode);
};

window.addEventListener("keydown", function(e) {
    if (!keys.includes(e.code)) { 
        keys.push(e.code);
    }
});

window.addEventListener("keyup", function(e) {
    if (keys.includes(e.code)) {
        delete keys[keys.indexOf(e.code)];
    }
});