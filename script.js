var newName = "Niklaus Mikaelson";

function nameswap(element){
var curName = element.getAttribute('name')
var firstName = document.getElementById(curName)

firstName.innerText = newName
console.log(newName)
}

// var todd = document.querySelector("#todd")



function removePerson (element) {
    var curElm = element.getAttribute('name2')
    var workplease = document.getElementById(curElm)

    workplease.remove();
    


}