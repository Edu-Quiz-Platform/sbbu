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
                    

                    return question.includes(searchInput) || author.includes(searchInput) || category.includes(searchInput) || date.includes(searchInput) || description.includes(searchInput);
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
                                               <p>Subject: <strong>${item.category}</strong></p>`;
                    resultsContainer.appendChild(resultElement);
                });
            } else {
                resultsContainer.innerHTML += "<p>No results found.</p>";
            }
        }
