// Predefined list of auto-complete suggestions
const suggestions = ["General Knowledge", "Every Day Science", "English", "Pakistan Studies", "Islamic Studies", "Current Affairs"];

function showSuggestions() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const suggestionsContainer = document.getElementById("suggestionsContainer");

    // Clear previous suggestions
    suggestionsContainer.innerHTML = "";

    // Filter suggestions based on user input
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(searchInput));

    // Show filtered suggestions
    if (searchInput !== "") {
        filteredSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement("div");
            suggestionElement.classList.add("suggestion-item");
            suggestionElement.textContent = suggestion;
            suggestionElement.onclick = () => selectSuggestion(suggestion);
            suggestionsContainer.appendChild(suggestionElement);
        });
    }
}

function selectSuggestion(suggestion) {
    // Set the clicked suggestion as the value of the input
    document.getElementById("searchInput").value = suggestion;

    // Clear the suggestions once a suggestion is selected
    document.getElementById("suggestionsContainer").innerHTML = "";
}

function performSearch() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("resultsContainer");

    if (searchInput.trim() === "") {
        resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    // Perform your search logic here (filter from MCQs or Jobs)
    // For now, it will just show the search term
    resultsContainer.innerHTML = `<p>Searching for: ${searchInput}</p>`;

    // Clear suggestions after performing search
    document.getElementById("suggestionsContainer").innerHTML = "";
}


function showSearchBox() {
            const searchOptions = document.getElementById("searchOptions").value;
            const searchBox = document.getElementById("searchBox");
            const searchText = document.getElementById("searchText");

            if (searchOptions === "mcqs" || searchOptions === "jobs") {
                searchBox.style.display = "flex"; // Show the search box
                const totalCount = searchOptions === "mcqs" ? mcqsData.length : 0; // Change jobsData.length if jobsData is defined
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
                // Filter MCQs based on the search input (question, author, or category)
                filteredResults = mcqsData.filter(mcq => {
                    const question = mcq.question ? mcq.question.toLowerCase() : "";
                    const author = mcq.author ? mcq.author.toLowerCase() : "";
                    const category = mcq.category ? mcq.category.toLowerCase() : "";
                    const date = mcq.date ? mcq.date.toLowerCase() : "";
                    const description = mcq.description ? mcq.description.toLowerCase() : "";
                    const explanation = mcq.explanation ? mcq.explanation.toLowerCase() : "";
                    

                    return question.includes(searchInput) || author.includes(searchInput) || category.includes(searchInput) || date.includes(searchInput) || explanation.includes(searchInput) || description.includes(searchInput);
                });
            } else if (searchOptions === "jobs") {
                // Placeholder for job search (define jobsData similarly to mcqsData)
                filteredResults = []; // Update this line when jobsData is defined
            }

            // Clear previous results
            resultsContainer.innerHTML = "";

            // Show the number of filtered results
            if (searchOptions === "mcqs") {
                resultsContainer.innerHTML += `<p class="result-count">${filteredResults.length} MCQs found for "${searchInput}".</p>`;

            }

            if (filteredResults.length > 0) {
                filteredResults.forEach(item => {
                    const resultElement = document.createElement("div");
                    resultElement.classList.add("mcq-card");
                    resultElement.innerHTML = `<h3>${item.question}</h3>
                                               <p>Answer: <strong>${item.description}</strong></p>
                                               <p>Added By: <strong>${item.author}</strong></p>`;
                    resultsContainer.appendChild(resultElement);
                });
            } else {
                resultsContainer.innerHTML += "<p>No Results found.</p>";
            }
        }
