// Ensure the DOM is fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Reference the container where the quiz will be displayed
    const quizContainer = document.getElementById('questions-list');

    // Create HTML for each question
    let questionHtml = '';
    questions.forEach((q, index) => {
        questionHtml += `<div class="question">
                            <h3>${q.question}</h3>
                            <ul>
                                ${q.options.map(option => `<li>${option}</li>`).join('')}
                            </ul>
                         </div>`;
    });
    quizContainer.innerHTML = questionHtml;
});
