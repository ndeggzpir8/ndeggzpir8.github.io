document.addEventListener('DOMContentLoaded', function() {
    // Home Page - Explore button redirects to Products Page
    const exploreButton = document.getElementById('exploreButton');
    if (exploreButton) {
        exploreButton.addEventListener('click', function() {
            window.location.href = 'products.html'; // Redirect to the products page
        });
    }

    // Dynamic Content for Products Page
    const carList = document.getElementById('carList');
    if (carList) {
        const cars = [
            { make: 'Toyota', model: 'Corolla', year: 2020, image: 'images/toyota-corolla.jpeg' },
            { make: 'Honda', model: 'Civic', year: 2019, image: 'images/honda-civic.png' },
            { make: 'Ford', model: 'Mustang', year: 2021, image: 'images/ford-mustang.jpeg' },
            { make: 'BMW', model: 'X5', year: 2022, image: 'images/bmw-x5.jpeg' },
            { make: 'Mercedes', model: 'SLS AMG', year: 2021, image: 'images/sls amg.jpeg' }
        ];

        cars.forEach(car => {
            const carItem = document.createElement('div');
            carItem.classList.add('car-item');

            // Create and append image
            const carImage = document.createElement('img');
            carImage.src = car.image;
            carImage.alt = `${car.make} ${car.model}`;

            // Create and append car details
            const carDetails = document.createElement('p');
            carDetails.textContent = `${car.year} ${car.make} ${car.model}`;

            // Append elements to car item div
            carItem.appendChild(carImage);
            carItem.appendChild(carDetails);

            // Append car item to carList div
            carList.appendChild(carItem);
        });
    }

    // Contact Form - Display a message after submitting
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for contacting us. We will get back to you shortly.');
            contactForm.reset(); // Clear the form fields
        });
    }

    // Feedback Form - Display a message after submitting
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your feedback!');
            feedbackForm.reset(); // Clear the form fields
        });
    }
});
