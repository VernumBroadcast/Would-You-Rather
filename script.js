// Game questions with emojis/icons for visual appeal
const questions = [
    {
        left: { text: "Playstation", emoji: "🎮" },
        right: { text: "Xbox", emoji: "🎯" }
    },
    {
        left: { text: "Ronaldo", emoji: "⚽" },
        right: { text: "Messi", emoji: "🏆" }
    },
    {
        left: { text: "Pizza", emoji: "🍕" },
        right: { text: "Burgers", emoji: "🍔" }
    },
    {
        left: { text: "Netflix", emoji: "📺" },
        right: { text: "YouTube", emoji: "▶️" }
    },
    {
        left: { text: "iPhone", emoji: "📱" },
        right: { text: "Android", emoji: "🤖" }
    },
    {
        left: { text: "Dogs", emoji: "🐕" },
        right: { text: "Cats", emoji: "🐈" }
    },
    {
        left: { text: "TikTok", emoji: "🎵" },
        right: { text: "Instagram", emoji: "📸" }
    },
    {
        left: { text: "Spotify", emoji: "🎧" },
        right: { text: "Apple Music", emoji: "🎵" }
    },
    {
        left: { text: "Sneakers", emoji: "👟" },
        right: { text: "Dress Shoes", emoji: "👞" }
    },
    {
        left: { text: "Super Strength", emoji: "💪" },
        right: { text: "Super Speed", emoji: "⚡" }
    },
    {
        left: { text: "Teleportation", emoji: "🌀" },
        right: { text: "Mind Reading", emoji: "🧠" }
    },
    {
        left: { text: "Speak Every Language", emoji: "🗣️" },
        right: { text: "Play Every Instrument", emoji: "🎹" }
    },
    {
        left: { text: "Coke", emoji: "🥤" },
        right: { text: "Pepsi", emoji: "🥤" }
    },
    {
        left: { text: "Be the Smartest", emoji: "🧠" },
        right: { text: "Be the Funniest", emoji: "😂" }
    },
    {
        left: { text: "Coffee", emoji: "☕" },
        right: { text: "Tea", emoji: "🍵" }
    },
    {
        left: { text: "Early Bird", emoji: "🌅" },
        right: { text: "Night Owl", emoji: "🌙" }
    },
    {
        left: { text: "Marvel", emoji: "🦸" },
        right: { text: "DC", emoji: "🦇" }
    },
    {
        left: { text: "Handball", emoji: "🤾🏻‍♂️" },
        right: { text: "Baseball", emoji: "⚾️" }
    },
    {
        left: { text: "Beach Holiday", emoji: "🏖️" },
        right: { text: "City Break", emoji: "🏙️" }
    },
    {
        left: { text: "Sweet", emoji: "🍩" },
        right: { text: "Savory", emoji: "🍟" }
    },
    {
        left: { text: "Books", emoji: "📚" },
        right: { text: "Movies", emoji: "🎬" }
    },
    {
        left: { text: "Gaming", emoji: "🎮" },
        right: { text: "Sports", emoji: "🏃" }
    },
    {
        left: { text: "Pancakes", emoji: "🥞" },
        right: { text: "Waffles", emoji: "🧇" }
    },
    {
        left: { text: "Mountains", emoji: "🏔️" },
        right: { text: "Sea", emoji: "🌊" }
    },
    {
        left: { text: "Action Games", emoji: "💥" },
        right: { text: "Puzzle Games", emoji: "🧩" }
    },
    {
        left: { text: "Hot Sauce", emoji: "🌶️" },
        right: { text: "No Spice", emoji: "🥛" }
    },
    {
        left: { text: "Gold", emoji: "🥇" },
        right: { text: "Silver", emoji: "🥈" }
    },
    {
        left: { text: "Ketchup", emoji: "🍅" },
        right: { text: "Mayo", emoji: "🥚" }
    },
    {
        left: { text: "Reality TV", emoji: "📺" },
        right: { text: "Documentaries", emoji: "🎥" }
    }
];

let currentQuestionIndex = 0;
let selectedOption = null;

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array]; // Create a copy to avoid mutating the original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize the game
function initGame() {
    // Shuffle questions on each page load
    const shuffledQuestions = shuffleArray(questions);
    questions.length = 0;
    questions.push(...shuffledQuestions);
    
    displayQuestion();
    setupEventListeners();
}

// Display the current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const leftOption = document.getElementById('left-text');
    const rightOption = document.getElementById('right-text');
    const leftImage = document.getElementById('left-image');
    const rightImage = document.getElementById('right-image');
    const allOptions = document.querySelectorAll('.option');
    
    // Reset selection and animations
    selectedOption = null;
    allOptions.forEach(opt => {
        opt.classList.remove('selected', 'fade-out');
    });
    
    // Update content
    leftOption.textContent = question.left.text;
    rightOption.textContent = question.right.text;
    leftImage.textContent = question.left.emoji;
    rightImage.textContent = question.right.emoji;
}

// Setup event listeners
function setupEventListeners() {
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            if (selectedOption !== null) return; // Prevent re-selection
            
            selectedOption = parseInt(this.dataset.option);
            
            // Remove selection from all options
            options.forEach(opt => opt.classList.remove('selected', 'fade-out'));
            
            // Add selection to clicked option
            this.classList.add('selected');
            
            // Fade out the non-selected option
            const otherOption = selectedOption === 0 ? options[1] : options[0];
            otherOption.classList.add('fade-out');
            
            // Auto-advance to next question after animation
            setTimeout(() => {
                currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                displayQuestion();
            }, 1500); // 1.5 seconds to show the selection
        });
    });
}

// Start the game when page loads
window.addEventListener('DOMContentLoaded', initGame);
