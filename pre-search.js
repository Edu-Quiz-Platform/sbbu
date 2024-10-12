function showSearchBox() {
    const searchOptions = document.getElementById("searchOptions").value;
    const searchBox = document.getElementById("searchBox");
    const searchText = document.getElementById("searchText");

    if (searchOptions === "mcqs" || searchOptions === "jobs") {
        searchBox.style.display = "flex"; // Show the search box
        const totalCount = searchOptions === "mcqs" ? mcqsData.length : jobsData.length;
        searchText.textContent = `You are searching for ${searchOptions === "mcqs" ? "MCQs" : "Jobs"}. Total Available ${searchOptions === "mcqs" ? "MCQs" : "Jobs"}: ${totalCount}.`;
    } else {
        searchBox.style.display = "none"; // Hide the search box if no option is selected
    }
}

function performSearch() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("resultsContainer");
    const searchOptions = document.getElementById("searchOptions").value;

    if (searchInput.trim() === "") {
        resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    let filteredResults = [];
    if (searchOptions === "mcqs") {
        // Filter MCQs based on the search input
        filteredResults = mcqsData.filter(mcq => mcq.question.toLowerCase().includes(searchInput));
    } else if (searchOptions === "jobs") {
        // Filter Jobs based on the search input
        filteredResults = jobsData.filter(job => job.title.toLowerCase().includes(searchInput));
    }

    // Clear previous results
    resultsContainer.innerHTML = "";

    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const resultElement = document.createElement("div");
            resultElement.classList.add(searchOptions === "mcqs" ? "mcq-card" : "job-card");
            resultElement.innerHTML = searchOptions === "mcqs"
                ? `<h3>${item.question}</h3><p>Answer: <strong>${item.description}</strong></p><p>Date: <strong>${item.date}</strong></p><p>Added By: <strong>${item.author}</strong></p>`
                : `<h3>${item.title}</h3><p>${item.description}</p><p><strong>Company:</strong> ${item.company}</p><p><strong>Date Posted:</strong> ${item.datePosted}</p><p><a href="${item.link}" target="_blank">More...</a></p>`;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.innerHTML += "<p>No results found.</p>";
    }
}
