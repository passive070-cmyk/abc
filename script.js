const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", function() {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;

    noBtn.style.position = "relative";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", function() {
    document.body.innerHTML = `
        <h1>YAYYY 💕💖🥰</h1>
        <p>You just made me the happiest person alive 😍</p>
    `;
});
