// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles ✅
// Stduy the response data you get back, closely. ✅
// You will be creating a component for each 'article' in the list.✅
// This won't be as easy as just iterating over an array though.--looping over object 
// Create a function that will programmatically create the following DOM component:✅
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM. ✅

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log('ERROR IN CARDS', error)
})

function articles(myArticle){
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          image = document.createElement('img'),
          credit = document.createElement('span');
//add classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
//add structure
    card.append(headline, author)
    author.append(imgContainer, credit)
    imgContainer.append(image)
//textContent/src's
    headline.textContent = myArticle.headline
    image.src = myArticle.authorPhoto
    credit.textContent = myArticle.authorName

    return card
}

//create parent to attach
const articleParent = document.querySelector('.cards-container')

/*
{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
data:
articles:
javascript: Array(4)
    0: {headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects", authorPhoto: "./assets/sir.jpg", authorName: "SIR RUFF'N'STUFF"}
        headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects"
        authorPhoto: "./assets/sir.jpg"
        authorName: "SIR RUFF'N'STUFF"
    1: {headline: "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences", authorPhoto: "./assets/bones.jpg", authorName: "BONES R. LIFE"}
    2: {headline: "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'", authorPhoto: "./assets/puppers.jpg", authorName: "PUPPER S. DOGGO"}
    3: {headline: "Typescript: Ten Things you Should Know Before Building Your Next Angular Application", authorPhoto: "./assets/sir.jpg", authorName: "SIR RUFF'N'STUFF"}
length: 4
__proto__: Array(0)
bootstrap: Array(3)
    0: {headline: "Bootstrap 5: Get a Sneak Peak at all the New Features", authorPhoto: "./assets/fido.jpg", authorName: "FIDO WALKSALOT"}
    1: {headline: "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)", authorPhoto: "./assets/max.jpg", authorName: "MAX GOODBOYE"}
    2: {headline: "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About", authorPhoto: "./assets/max.jpg", authorName: "MAX GOODBOYE"}
length: 3
__proto__: Array(0)
technology: Array(3)
    0: {headline: "AI: What Are the Ethical Ramifications of the Future?", authorPhoto: "./assets/max.jpg", authorName: "MAX GOODBOYE"}
    1: {headline: "AR or VR: How We Will See the World Through a Digital Lense", authorPhoto: "./assets/max.jpg", authorName: "MAX GOODBOYE"}
    2: {headline: "Quantum Computing: Where we Are Now, and Where We Will Be Very Soon", authorPhoto: "./assets/max.jpg", authorName: "MAX GOODBOYE"}
length: 3
__proto__: Array(0)
jquery: Array(3)
    0: {headline: "History of Javascript Libraries: from jQuery to React", authorPhoto: "./assets/puppers.jpg", authorName: "PUPPER S. DOGGO"}
    1: {headline: "jQuery Animations: When and Where to Use Them, and Not CSS", authorPhoto: "./assets/fido.jpg", authorName: "FIDO WALKSALOT"}
    2: {headline: "Why I Use jQuery in Every Application I Create and Why You Should Too", authorPhoto: "./assets/fido.jpg", authorName: "FIDO WALKSALOT"}
length: 3
__proto__: Array(0)
node: Array(2)
    0: {headline: "Node.js in 2018: Which Framework? Express, Sails, Hapi?", authorPhoto: "./assets/sir.jpg", authorName: "SIR RUFF'N'STUF"}
    1: {headline: "MongoDB: NoSQL vs. SQL, the Debate Continues..", authorPhoto: "./assets/bones.jpg", authorName: "BONES R. LIFE"}
length: 2

*/