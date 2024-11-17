document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const searchBox = document.getElementById('search-box');
    const suggestionsContainer = document.getElementById('suggestions');
    const reviewBoxes = document.querySelectorAll('.review-box');

    // Predefined names for the search box
    const names = [
        "Isha Fatima",
        "Jam Muzammil Hussain Unar",
        "Simrah Irfan",
        "TARIQ HUSSAIN CHANDIO",
        "Adina",
        "Nida Dahri",
        "Younis",
        "Asma"
    ];

    // Filter reviews based on the search query
    const filterReviews = (query) => {
        const lowerCaseQuery = query.toLowerCase();

        // Show only matching reviews
        reviewBoxes.forEach((box) => {
            const name = box.querySelector('h3').innerText.toLowerCase();
            if (name.includes(lowerCaseQuery)) {
                box.style.display = 'block'; // Show matching review
            } else {
                box.style.display = 'none'; // Hide non-matching review
            }
        });
    };

    // Display suggestions for the search box
    const showSuggestions = (query) => {
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions

        if (query) {
            const matchingNames = names.filter((name) =>
                name.toLowerCase().includes(query.toLowerCase())
            );

            matchingNames.forEach((name) => {
                const suggestion = document.createElement('div');
                suggestion.classList.add('suggestion');
                suggestion.innerText = name;

                // Add click event to set search box value
                suggestion.addEventListener('click', () => {
                    searchBox.value = name;
                    suggestionsContainer.innerHTML = '';
                    filterReviews(name); // Filter based on selected suggestion
                });

                suggestionsContainer.appendChild(suggestion);
            });
        }
    };

    // Listen for input events on the search box
    searchBox.addEventListener('input', (event) => {
        const query = event.target.value.trim();
        filterReviews(query); // Filter reviews as you type
        showSuggestions(query); // Show matching suggestions
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchBox.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.innerHTML = '';
        }
    });
});
