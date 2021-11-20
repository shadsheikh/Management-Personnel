console.log("success connection to js");
showNotes();

// user adds a note
let Addbtn = document.getElementById("Addbtn");
Addbtn.addEventListener("click", function (e) {
e.preventDefault();
  let AddTxt = document.getElementById("AddTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(AddTxt.value);

  localStorage.setItem("notes", JSON.stringify(notesObj));
  AddTxt.value = "";
  console.log(notesObj);
  showNotes();
});

//display notes

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html +=`<div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Task Done</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>                         
                        <tr>
                          <td>
                          Notes ${index+1}
                          </td>
                          <td>
                            <a href="#" class="font-weight-600"><img src="img/avatar/avatar-1.png" alt="avatar" width="30" class="rounded-circle mr-1">  ${element} </a>
                          </td>
                          <td>
                            <button class="btn btn-danger btn-action"id=${index} onclick="deleteNote(this.id)"><i class="fas fa-trash"  ></i></button>
                          </td>
                        </tr>
                          </tbody>
                    </table>
                  </div>
                </div>
              </div>`
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

//delete
deleteNote = (index) => {
  console.log("i am delete",index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
};

//search
search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();

  console.log("fired input event", inputVal);
  let noteCards = document.getElementsByClassName("notecard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
