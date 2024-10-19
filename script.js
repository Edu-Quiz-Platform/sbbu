function showWhatsAppText() {
            var whatsappText = document.getElementById("whatsappText");
            whatsappText.style.display = "block";
            setTimeout(function() {
                window.location.href = "https://wa.me//03033032032"; // Replace with your WhatsApp number
            }, 2000); // Delay of 2 seconds before redirecting
        }