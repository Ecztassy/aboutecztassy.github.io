document.addEventListener("DOMContentLoaded", function () {
    const background = document.getElementById('background');
    const tabs = document.querySelectorAll('.tab');

    const images = [
        '1.gif',
        '2.png',
        '3.jpg',
        '4.png',
        '5.png',
        '6.png',
        '7.jpg',
        '8.png',
        '9.jpg',
    ];

    const lastImage = localStorage.getItem('lastImage');
    let randomImage = lastImage;
    while (randomImage === lastImage) {
        randomImage = images[Math.floor(Math.random() * images.length)];
    }

    localStorage.setItem('lastImage', randomImage);

    background.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/wallpaper/${randomImage}')`;
    background.style.backgroundSize = 'cover';

    tabs.forEach(tab => {
        tab.style.backgroundColor = 'rgba(4, 37, 40, 0.8)';  // Set the background color to black
        tab.style.color = '#ffffff';  // Set the text color to white for better visibility
    });
});

function toggleMenu() {
    var menuLinks = document.getElementById('menuLinks');
    menuLinks.style.display = (menuLinks.style.display === 'none' || menuLinks.style.display === '') ? 'flex' : 'none';
  }
  

const discordIcon = document.getElementById('discord-icon');
const copyMessage = discordIcon.querySelector('.copy-message');

discordIcon.addEventListener('click', (event) => {
    event.preventDefault();
    const textToCopy = 'ecztassy';
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    copyMessage.style.opacity = 1;
});

discordIcon.addEventListener('mouseout', () => {
    setTimeout(() => {
        copyMessage.style.opacity = 0;
    }, 1500);
});

// Set initial state - hide the copy message
copyMessage.style.opacity = 0;

// Function to calculate age based on birthdate
function calculateAge(birthdate) {
    const today = new Date();
    const birthdateObj = new Date(birthdate);
    let age = today.getFullYear() - birthdateObj.getFullYear();
    const birthMonth = birthdateObj.getMonth();
    const birthDay = birthdateObj.getDate();

    // Adjust age if the birthdate hasn't occurred yet this year
    if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
        age--;
    }

    return age;
}

// Update the age element with the calculated age
function updateAge(birthdate) {
    const ageElement = document.getElementById('age');
    ageElement.textContent = calculateAge(birthdate);
}

// Call the updateAge function initially
const birthdate = '2007-12-17'; // Placeholder birthdate
updateAge(birthdate);

// Function to check if the birthday has passed this year
function hasBirthdayPassed(birthdate) {
    const today = new Date();
    const birthMonth = new Date(birthdate).getMonth();
    const birthDay = new Date(birthdate).getDate();
    return (
        today.getMonth() > birthMonth ||
        (today.getMonth() === birthMonth && today.getDate() >= birthDay)
    );
}

// Update age on every page load and check for birthday
if (hasBirthdayPassed(birthdate)) {
    updateAge(birthdate);
}

// Periodically check and update the age if birthday has passed
setInterval(() => {
    if (hasBirthdayPassed(birthdate)) {
        updateAge(birthdate);
    }
}, 24 * 60 * 60 * 1000); // Check every day

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    const sectionName = tab.getAttribute('data-section');
    tab.addEventListener('mouseover', () => {
        tab.textContent = sectionName;
    });
    tab.addEventListener('mouseout', () => {
        tab.textContent = '';
    });
});

document.addEventListener('click', function (event) {
    var menuLinks = document.getElementById('menuLinks');
    var hamburgerMenu = document.querySelector('.hamburger-menu-img');

    // Check if the clicked element is not inside the menu or the hamburger menu itself
    if (!menuLinks.contains(event.target) && event.target !== hamburgerMenu) {
        menuLinks.style.display = 'none';
    }
});