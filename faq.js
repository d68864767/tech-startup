// Array of FAQs
const faqs = [
    {
        question: "What is the mission of this tech startup?",
        answer: "Our mission is to leverage cutting-edge technology to provide innovative solutions for various industries."
    },
    {
        question: "What products or services do you offer?",
        answer: "We offer a range of products and services, including..."
    },
    // Add more FAQs as needed
];

// Function to create FAQ elements
function createFAQElement(faq) {
    // Create question element
    const questionElement = document.createElement('h3');
    questionElement.textContent = faq.question;
    questionElement.classList.add('faq-question');

    // Create answer element
    const answerElement = document.createElement('p');
    answerElement.textContent = faq.answer;
    answerElement.classList.add('faq-answer');
    answerElement.style.display = 'none'; // Hide answer by default

    // Create FAQ item element and append question and answer
    const faqItemElement = document.createElement('div');
    faqItemElement.classList.add('faq-item');
    faqItemElement.appendChild(questionElement);
    faqItemElement.appendChild(answerElement);

    // Add click event listener to question to toggle answer visibility
    questionElement.addEventListener('click', function() {
        const isAnswerVisible = answerElement.style.display === 'block';
        answerElement.style.display = isAnswerVisible ? 'none' : 'block';
    });

    return faqItemElement;
}

// Function to initialize FAQ section
function initFAQ() {
    const faqSection = document.getElementById('faq');

    // Create and append FAQ elements
    faqs.forEach(function(faq) {
        const faqElement = createFAQElement(faq);
        faqSection.appendChild(faqElement);
    });
}

// Call initFAQ function
initFAQ();
