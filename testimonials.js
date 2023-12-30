// Array of testimonials
let testimonials = [
    {
        id: 1,
        name: 'Testimonial 1',
        quote: 'This is a quote from the testimonial.',
        imageUrl: 'testimonial-1.jpg'
    },
    {
        id: 2,
        name: 'Testimonial 2',
        quote: 'This is a quote from the testimonial.',
        imageUrl: 'testimonial-2.jpg'
    },
    // Add more testimonials as needed
];

// Function to display testimonials
function displayTestimonials() {
    let testimonialSection = document.getElementById('testimonials');

    testimonials.forEach(testimonial => {
        let testimonialElement = document.createElement('div');
        testimonialElement.classList.add('testimonial');

        let nameElement = document.createElement('h2');
        nameElement.textContent = testimonial.name;
        testimonialElement.appendChild(nameElement);

        let quoteElement = document.createElement('p');
        quoteElement.textContent = testimonial.quote;
        testimonialElement.appendChild(quoteElement);

        let imageElement = document.createElement('img');
        imageElement.src = testimonial.imageUrl;
        imageElement.alt = testimonial.name;
        testimonialElement.appendChild(imageElement);

        testimonialSection.appendChild(testimonialElement);
    });
}

// Initialize testimonials when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    displayTestimonials();
});

// Function to initialize testimonial carousel
function initTestimonials() {
    // Code to initialize testimonial carousel
    // This could include event listeners for click events, animations, etc.
}
