/* dc */
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

/* dcc */
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'c' || e.metaKey && e.key === 'c') {
        e.preventDefault();
    }
});

/* dcmd */
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'c' || e.metaKey && e.key === 'c') {
        e.preventDefault();
    }
});

/* drc */
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

/* long press copy */
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

/* mct */
document.addEventListener('mousedown', function(e) {
    e.preventDefault();
});
