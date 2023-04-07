window.onload = function() {
    // Check if the browser supports notifications
    if ("Notification" in window) {
        // Ask for permission to show notifications
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                // Get the modal element by its ID
                var modal = document.getElementById("myModal");

                // Get the close button element by its class name
                var span = document.getElementsByClassName("close")[0];

                // Set the initial display style of the modal to "block", so that it is visible when the page loads
                modal.style.display = "block";

                // Add a click event listener to the close button element
                span.onclick = function() {
                    // When the close button is clicked, set the display style of the modal to "none" to hide it
                    modal.style.display = "none";
                }

                // Add a click event listener to the window object
                window.onclick = function(event) {
                    // When the user clicks anywhere outside of the modal, check if the clicked element is the modal itself
                    if (event.target == modal) {
                        // If the clicked element is the modal, set the display style of the modal to "none" to hide it
                        modal.style.display = "none";
                    }
                }

                // Show the notification
                var notification = new Notification("Title", { body: "Body text" });
            }
        });
    }
};


