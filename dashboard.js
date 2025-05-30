// const takeNote = () =>{
//     not.style.top = "180px"
//     note.style.height ="140px"
// }



// const allNote = []

let obj = {}
const addNote = () => {
    const note = title.value.trim();
    const notes = noteInput.value.trim();
    const input = document.getElementById("image")
    const file = input.files[0]
    console.log(file);

    if (!/^[A-Z]/.test(note)) {
        alert("Title must contain only capital letters (A-Z) with no spaces.");
        return;
    }

    else if (note === "") {
        alert("Please Add  Title");
        return;
    }
    else if (notes === "") {
        alert("Please add a Note");
        return;

    }
    else if (file == undefined) {
        imageShow = ""
        obj = {
            note,
            notes,
            imageShow
        }
        allNote.push(obj)
        localStorage.setItem("user", JSON.stringify(allNote))
        console.log(allNote);
        displayNotes();
        title.value = "";
        noteInput.value = "";
    }
    else {

        const reader = new FileReader
        reader.addEventListener("load", (e) => {
            imageShow = e.target.result
            obj = {
                note,
                notes,
                imageShow
            }
            allNote.push(obj)
            localStorage.setItem("user", JSON.stringify(allNote))
            console.log(allNote);
            displayNotes();
            title.value = "";
            noteInput.value = "";
        })
        reader.readAsDataURL(file)

    }
}

const deleteNote = (book) => {
    const confirmDelete = confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
        allNote.splice(book, 1);
        localStorage.setItem("user", JSON.stringify(allNote))
        console.log(allNote);

        displayNotes();
    }
}

const allNote = JSON.parse(localStorage.getItem('user')) || [];
show.innerHTML = (allNote)
console.log(allNote);
displayNotes()

function displayNotes() {
    show.innerHTML = "";
    allNote.map((output, index) => {
        show.innerHTML += `
            <div class="mb-3 pt-3 ps-3 pb-2 border border-light rounded-3 text-white card" style="background-color: rgb(32,33,36); position: relative;">
                <h3>${output.note}</h3>
                <p class="pt-2 pe-3">${output.notes}</p>
                <img class="imageStyle" id="image${index}" src="${output.imageShow}">
                <div class="d-flex justify-content-center gap-2" style="position: absolute; bottom:10px;">
                    <button class="btn btn-danger" onclick="deleteNote(${index})" style="width:100px;">Delete</button>
                    <button class="btn btn-warning" onclick="editNote(this)" style="width:100px;">Edit</button>
                </div>
            </div>`
        if (output.imageShow == "") {
            document.getElementById("image" + index).style.display = "none"
        }
    })
    // for (let i = 0; i < allNote.length; i += 2) {
    //     show.innerHTML += `
    //         <div class="mb-3 pt-3 ps-3 pb-2 border border-light rounded-3 text-white " style="background-color: rgb(32,33,36);">
    //             <h3>${allNote[i].note}</h3>
    //             <p class="pt-2">${allNote[i].notes}</p>
    //             <img src="${allNote[i].imageShow}">
    //             <div class="d-flex justify-content-center gap-2">
    //                 <button class="btn btn-danger" onclick="deleteNote(${i})" style="width:100px;">Delete</button>
    //                 <button class="btn btn-warning" onclick="editNote(this)" style="width:100px;">Edit</button>
    //             </div>
    //         </div>`
    // }
}

// Hide & Show

const title = document.getElementById("title")
const noteInput = document.getElementById("noteInput")
const stay = document.getElementById("stay")
const btn = document.getElementById("btn")

document.addEventListener("click", (e) => {
    if (e.target == title || e.target == noteInput || e.target == stay || e.target == btn) {
        const allShow = document.querySelectorAll(".show")
        allShow.forEach((show) => {
            show.style.display = "block"
        })
        document.querySelector(".note").style.height = "250px"
    }
    else {
        const allShow = document.querySelectorAll(".show")
        allShow.forEach((show) => {
            show.style.display = "none"
        })
        document.querySelector(".note").style.height = "100px"
    }
})





