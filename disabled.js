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

/* Whatsapp Icon */
function openWhatsApp() {
            // Redirect to WhatsApp with a pre-filled message
            window.location.href = "https://wa.me/03033032032?text=Hi! I just visited your website *https://sbbu-prep.github.io/edu-quiz* and would like to get more information."; 
        }
        function showWhatsAppText() {
            var whatsappText = document.getElementById("whatsappText");
            whatsappText.style.display = "block";
            setTimeout(function() {
                window.location.href = "https://wa.me/03033032032?text=Hi! I just visited your website *https://sbbu-prep.github.io/edu-quiz* and would like to get more information."; // Replace with your WhatsApp number
            }, 2000); // Delay of 2 seconds before redirecting
        }