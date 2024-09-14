function checkFile(fileUrl) {
    fetch(fileUrl)
        .then(response => {
            if (response.ok) {
                // File exists, do something with it
                console.log(`File ${fileUrl} exists.`);
                // You can display the file or take some action
            } else {
                // File doesn't exist, show the 404 file
                console.error(`File ${fileUrl} not found. Showing 404 file.`);
                show404Page();
            }
        })
        .catch(error => {
            // If there's a network error or other issues
            console.error('Error fetching the file:', error);
            show404Page();
        });
}

function show404Page() {
    // Redirect to the 404 page or display an error message
    window.location.href = '/path-to-your-404-file.html'; // Replace with your actual 404 file path
}

// Usage
checkFile('/path-to-your-git-file.js'); // Replace with the file URL you want to check
