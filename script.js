let addButton = document.getElementById("addButton")
let taskInput = document.getElementById("taskInput")
let taskList = document.getElementById("taskList")


// Assign a element dynamically 
assignFun = () => {
   if (taskInput.value === '') {
      alert("Please enter some thing....")
   } else {
      let li = document.createElement("li")
      li.innerHTML = taskInput.value;
      taskList.appendChild(li)
      let span = document.createElement("span")
      span.innerHTML = "\u00d7";
      li.appendChild(span)
   }
   taskInput.value = '';
   storeData();
}

addButton.addEventListener("click", () => {
   assignFun();
})


taskList.addEventListener("click", (e) => {
   if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked")   // for line through on completed task
      storeData()
   } else if (e.target.tagName === "SPAN") {    // used to remove particular li using span
      e.target.parentElement.remove()
      storeData();
   }

})

//after Refressing page the todo list still have data
let storeData = () => {
   localStorage.setItem("data", taskList.innerHTML)         //safe data of ul#taskList in a memory 
}
let showData = () => {
   taskList.innerHTML = localStorage.getItem("data")         // get data of ul#taskList from memory
}

showData()

// todo list add also through enter button 
taskInput.addEventListener("keydown", (e) => {
   if (e.key === "Enter") {
      assignFun();
   }
})
