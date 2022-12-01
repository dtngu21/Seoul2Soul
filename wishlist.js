'use strict';

  

// Adds/Subscribes to a group's newsletter //
var addItem = document.getElementsByClassName('add-item-button')
for (var i = 0; i < addItem.length; i++) {
   var button = addItem[i]
   button.addEventListener('click', addItemClicked)
}
 
function addItemClicked(e) {
   var button = e.target
   var sectionedGroup = button.parentElement.parentElement
   var title = sectionedGroup.getElementsByClassName('group-name')[0].innerText
   var imageSrc = sectionedGroup.getElementsByClassName('group-image')[0].src
   console.log(title, imageSrc)
   addItemToList(title, imageSrc)
}
  
function addItemToList (title, imageSrc, details) {
    var listRow = document.createElement('div')
    listRow.classList.add('list-row')
    var groupItems = document.getElementsByClassName('group-items')[0]
    var listTitle = groupItems.getElementsByClassName('list-item-title')
    for (var i = 0; i < listTitle.length; i++) {
        if (listTitle[i].innerText == title) {
            alert('You are already subscribed to this group')
            return
        }
    }
    var listRowContents = `
        <div class="list-item list-header list-column">
            <img class="list-item-image" src="${imageSrc}" width="100" height="100">
            <br /><br>
            <span class="list-item-title">${title}</span>
        </div>
        <div class="group-details list-column">${details}
            <p>Type: Girl Group</p>
            <p>Company: YG Entertainment</p>
            <p>Fandom: BLINKS</p>
            <p>Concept: Girl Crush</p>
            <button class="btn btn-remove" type="button">Unsubscribe</button>
        </div>`
        listRow.innerHTML = listRowContents
        groupItems.append(listRow)
        listRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeItem)
}

// Removes/Unsubscribes from a group's newsletter //
var unsubscribeButtons = document.getElementsByClassName('btn-remove')
console.log(unsubscribeButtons)
for (var i = 0; i < unsubscribeButtons.length; i++) {
    var button = unsubscribeButtons[i]
    button.addEventListener('click', removeItem)   
    }


function removeItem(e) {
    var buttonClicked = e.target
    buttonClicked.parentElement.parentElement.remove()
}

