// STEP 1: Create a header component.✅
// -----------------------
// Using a function create the component you see below:✅
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component✅

function Header(myHeader) {
//create elements
    const header = document.createElement('div'),
          date = document.createElement('span'),
          mainHead = document.createElement ('h1'),
          showTemp = document.createElement('span');
//add classes
    header.classList.add('header')
    date.classList.add('date')
    showTemp.classList.add('temp')
//add structure/parents to child
    header.append(date, mainHead, showTemp)
//adding textContent
    date.textContent = myHeader.date
    mainHead.textContent = 'Lambda Times'
    showTemp.textContent = showTemp.temp

    return header
}

//create parent to attach
const headerParent = document.querySelector('.header-container')

headerParent.append(Header)