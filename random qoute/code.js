const quotes = [
    "Believe in yourself.",
    "Never give up.",
    "Keep moving forward.",
    "Success takes time.",
    "Dream big, work hard.",
    "Stay focused on your goals.",
    "Every day is a new beginning.",
    "Small steps lead to big results.",
    "Learn from your mistakes.",
    "Be better than yesterday.",
    "Hard work creates opportunities.",
    "Your future depends on what you do today.",
    "Difficult roads lead to great destinations.",
    "Consistency is the key to progress.",
    "Don't be afraid to start.",
    "Challenges make you stronger.",
    "Focus on progress, not perfection.",
    "Great things take time.",
    "Your effort will pay off.",
    "Keep learning, keep growing."
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click", () => {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
});