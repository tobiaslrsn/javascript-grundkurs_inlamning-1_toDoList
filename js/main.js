/*
Fråga och fixa:
console.log vid borttagande av todo skriver ut den senaste inskrivna. 
Styling-fixes:
todo och knappar ska ligga snyggare.
*/
class Todo {
  constructor(todoItem) {
    this.listItem = todoItem;
    this.done = false;
  }
}

let todo1 = new Todo(
  "Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter)."
);
let todo2 = new Todo(
  "Presentera denna på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista."
);
let todo3 = new Todo(
  "Implementera klickhändelse för att hantera borttagandet av en todo. "
);
let todo4 = new Todo(
  "Todo tas bort från skärmen och markeras som klar i listan."
);
let todo5 = new Todo(
  "Implementera ett valfritt grafiskt ramverk till din todolista,t.ex. bootstrap, flexeller liknande."
);

let todos = [todo1, todo2, todo3, todo4, todo5];

window.onload = () => {
  let todoListContainer = document.createElement("div");
  todoListContainer.id = "startPageContainer";
  document.body.appendChild(todoListContainer);

  theBeautifulToDoList();

  let addInputValueToListButton = document.getElementById("toDo_add-btn");
  addInputValueToListButton.addEventListener("click", handleAddToList);
};

function handleAddToList() {
  let getInputValue = document.getElementById("toDo_inputField");
  let myNewValue = getInputValue.value;
  let userTodo = new Todo(myNewValue);

  todos.push(userTodo);

  theBeautifulToDoList();
  console.log(todos);
}

function theBeautifulToDoList() {
  let unorderedListContainer = document.createElement("ul");
  unorderedListContainer.className = "listSection";
  document.getElementById("startPageContainer").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let listItems = document.createElement("li");
    let listItemParagraph = document.createElement("p");

    listItems.className = "theList";
    listItemParagraph.className = "listParagraph";
    listItemParagraph.innerHTML = todos[i].listItem;
    //__________________________________________________________
    //Tar bort från skärmen nedan (saker behöver döpas om)

    let checkTodo = document.createElement("div");
    checkTodo.className = "doneButton";

    let checkedItem = document.createElement("p");
    checkedItem.innerHTML = "✓"; // BOCKA AV OCH PÅ

    unorderedListContainer.appendChild(listItems);
    checkTodo.appendChild(checkedItem);
    listItems.appendChild(listItemParagraph);

    checkTodo.addEventListener("click", () => {
      todos[i].done = !todos[i].done; //true/false clickevent

      theBeautifulToDoList();
    });

    listItems.appendChild(checkTodo);
    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);

    if (todos[i].done === true) {
      listItems.className = "theList done";
    }
    let removeTodo = document.createElement("div");
    removeTodo.className = "closeButton";
    let removedItem = document.createElement("p");
    removedItem.innerHTML = "X";

    unorderedListContainer.appendChild(listItems);
    removeTodo.appendChild(removedItem);

    removeTodo.addEventListener("click", () => {
      todos.splice(i, 1);

      theBeautifulToDoList();

      console.log(
        `${
          document.getElementById("toDo_inputField").value
        } är borttagen, bra jobbat!`
      );
    });
    listItems.appendChild(removeTodo);
    document
      .getElementById("startPageContainer")
      .appendChild(unorderedListContainer);
  }
  console.log("Saker att bocka av:" + " " + todos);
}
