document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousedown', function(e) {
        e.preventDefault();
    });

    document.addEventListener('mouseup', function(e) {
        e.preventDefault();
    });

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
});
