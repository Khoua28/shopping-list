var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function addDoneClass(list) {
    list.addEventListener("click", function() {
        list.classList.toggle("done");
    });
}

function addDelBtn(li,div){
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("del"));
	div.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", function () {
		li.remove();
		deleteBtn.remove();
		div.remove()
	});
}

// create new list items
function createListElement() {
    var li = document.createElement("li");
	var div = document.createElement("div");
    li.appendChild(document.createTextNode(input.value));
    addDoneClass(li);
    div.appendChild(li);
	ul.appendChild(div);
	addDelBtn(li,div);
    input.value = "";
}
// add function to the already exist list
li.forEach((li)=> {
	//add div but in lazy way.
	var div = document.createElement("div");
	div.appendChild(li);
	ul.appendChild(div);

	addDelBtn(li,div);
	addDoneClass(li);

});

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
