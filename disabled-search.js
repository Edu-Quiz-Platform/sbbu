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
    // Allow dropdown menu to function
    document.getElementById('searchOptions').addEventListener('mousedown', function(e) {
        e.stopPropagation(); 
    });

    // Allow text input in the search box
    document.getElementById('searchInput').addEventListener('mousedown', function(e) {
        e.stopPropagation(); 
    });

    // Prevent default behavior for all other mouse down events
    document.addEventListener('mousedown', function(e) {
        e.preventDefault();
    });

    // Prevent default behavior for mouse up events
    document.addEventListener('mouseup', function(e) {
        e.preventDefault();
    });

    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
});

/* mct */
document.addEventListener('mousedown', function(e) {
    e.preventDefault();
});

    

/* WhatsApp Icon */
function openWhatsApp() {
    // Redirect to WhatsApp with a pre-filled message
    window.location.href = "https://wa.me/03033032032?text=Hi! I just visited your website *https://edu-quiz-platform.github.io/sbbu* and would like to get more information."; 
}

function showWhatsAppText() {
    var whatsappText = document.getElementById("whatsappText");
    whatsappText.style.display = "block";
    setTimeout(function() {
        window.location.href = "https://wa.me/03033032032?text=Hi! I just visited your website *https://edu-quiz-platform.github.io/sbbu* and would like to get more information."; // Replace with your WhatsApp number
    }, 2000); // Delay of 2 seconds before redirecting
}

/* JavaScript to handle loading state */
document.querySelectorAll('.pdf-box').forEach(function(box) {
    var iframe = box.querySelector('iframe');
    var loadingMessage = box.querySelector('.loading');

    iframe.onload = function() {
        loadingMessage.style.display = 'none'; // Hide the loading message
        iframe.style.display = 'block'; // Show the iframe
    };
});
