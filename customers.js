// Array of customer stories
let customerStories = [
    {
        id: 1,
        title: 'Customer Story 1',
        description: 'This is a description of the customer story.',
        videoUrl: 'customer-story-1.mp4'
    },
    {
        id: 2,
        title: 'Customer Story 2',
        description: 'This is a description of the customer story.',
        videoUrl: 'customer-story-2.mp4'
    },
    // Add more customer stories as needed
];

// Function to display customer stories
function displayCustomerStories() {
    let customerSection = document.getElementById('customers');

    customerStories.forEach(story => {
        let storyElement = document.createElement('div');
        storyElement.classList.add('customer-story');

        let titleElement = document.createElement('h2');
        titleElement.textContent = story.title;
        storyElement.appendChild(titleElement);

        let descriptionElement = document.createElement('p');
        descriptionElement.textContent = story.description;
        storyElement.appendChild(descriptionElement);

        let videoElement = document.createElement('video');
        videoElement.src = story.videoUrl;
        videoElement.controls = true;
        storyElement.appendChild(videoElement);

        customerSection.appendChild(storyElement);
    });
}

// Initialize customer stories when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    displayCustomerStories();
});
