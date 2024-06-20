// Select all elements with the class 'follow-style'
const followButtons = document.querySelectorAll('.follow-style');

// Add click event listeners to each follow button
followButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the text content of the button
        if (button.textContent === 'Follow') {
            button.textContent = 'Following';
        } else {
            button.textContent = 'Follow';
        }

        // Toggle the CSS class to change text color
        button.classList.toggle('following');
    });
});

// const EventsJoin = document.getElementsByClassName("Event-join");
// const JoinButton = document.querySelectorAll("Event-join");

// EventsJoin.forEach(button => {
//     button.addEventListener('click',function() {
//         if (button.textContent === 'Join') {
//             button.textContent = 'Joined';
//         } else {
//             button.textContent = 'Join'
//         }
//         button.classList.toggle('Joined');
//     });
// })