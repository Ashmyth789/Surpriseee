// script.js
// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        document.getElementById('question').style.color="white"
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no' ) {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'Aukaat hai!?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
        
    }else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['./seen2.jpg','./seen4.jpeg','./seen5.jpeg', './seen3.jpeg','./seen1.jpeg'];
    var i = 0;
    var interval = setInterval(function() {

        document.body.style.background = `url(${colors[i]}),rgba(0, 0, 0, 0.95)`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundPosition = "center";
        document.body.style.transition = "background 0.8s ease-in-out";

        i = (i + 1) % colors.length;
    }, 1000); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = 'black'; // Reset background color
        if (callback) {
            callback();
        }
    }, 5000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var imageArr=['c7.jpg','left.jpg','right5.jpeg']

    for (let i = 0; i < imageArr.length; i++) {
        let mainImage = new Image();
        mainImage.src = imageArr[i];  
        mainImage.alt = 'main-image';
        
        // Adjust size based on index
        if (i === Math.floor(imageArr.length / 2)) {
            mainImage.width = 400;
            mainImage.height = 400;
        } else {
            mainImage.width = 350;
            mainImage.height = 350;
        }
        console.log(imageArr.length);
        mainImage.style.marginInline = '0 30px';
        mainImage.style.margin = '50px 0';
        mainImage.style.borderRadius = '5%';
    
        imageContainer.appendChild(mainImage);
    }

}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();