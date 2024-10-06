// JavaScript to handle the modal
        window.onload = function() {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            var closeBtn = document.getElementById("closeBtn");

            // Show the modal
            modal.style.display = "block";

            // Close the modal when the user clicks on <span> (x) or Close button
            span.onclick = function() {
                modal.style.display = "none";
            }

            closeBtn.onclick = function() {
                modal.style.display = "none";
            }

            // Close the modal when the user clicks anywhere outside of the modal
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        };