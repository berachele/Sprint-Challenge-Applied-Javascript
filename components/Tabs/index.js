// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics✅
// Once the data is returned console.log it and review the structure.✅
// Iterate **loop??** over the topics creating a new Tab component and add it to the DOM 
// under the .topics element.✅
//
//  The tab component should look like this: ✅
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log('repsonse of Tabs', response.data.topics)
    response.data.topics.map(function(item){
        // console.log('DONT GIVE UP ON ME MA!', item)
        tabParent.append(tab(item))

        // return response.data.topics
    })
})
.catch(error => {
    console.log('ERROR, THE DATA WAS NOT RETURNED', error)
})


function tab(info){
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = info

    // console.log('THIS IS THE TAB!!!!!!!', tab)
    return tab
}

//create parent to attach

const tabParent = document.querySelector('.topics')
