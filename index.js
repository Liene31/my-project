const wisdomArray = ["Code is like humor. When you have to explain it, it's bad.", "Simplicity is the soul of good software.", "Don't optimize prematurely; clarity comes first.", "Every great developer you know got there by solving problems they didn't know how to solve before.", "Debugging is twice as hard as writing the code in the first place; if you write the code as cleverly as possible, you're not smart enough to debug it.", "Code is a spell; clarity is its true component.", "Patience is mana; spend it wisely."]
const wisdomBtn = document.getElementById("wisdom-btn")
const wisdomQuotation = document.getElementById("wisdom-quotation")

function randomNumber() {
    return Math.floor(Math.random() * 7);
}

wisdomBtn.addEventListener("click", function () { 
    wisdomQuotation.innerHTML = wisdomArray[randomNumber()]    
})