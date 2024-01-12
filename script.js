const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const statement = document.querySelector(".statement");
const image = document.querySelector("img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you!!"; 
    statement.innerHTML = "btw check ur email!";// Added semicolon and corrected innerHTML assignment
    image.src = "IMG_2994.jpeg"; // Corrected variable name and added semicolon
    image.alt = "amy";
    width="500";
    height="600"; // Added alt attribute and semicolon
});

noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px'; // Corrected variable names
    noBtn.style.top = randomY + 'px'; // Corrected variable names
});
