const noteInput = document.getElementById('noteInput')
const saveButton = document.getElementById('saveNote')
const container = document.getElementById('notesContainer')

// const notes = JSON.stringify(['dog', 'food', 'dring'])
// localStorage.setItem('notes', notes)

function createNote(note) {
    const noteElement = document.createElement('li')
    noteElement.textContent = note
    container.appendChild(noteElement)
}

const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) ?? []
    notes.forEach(createNote)
}

saveButton.addEventListener('click', () => {
    const noteContent = noteInput.value.trim()
    createNote(noteContent)
    noteInput.value = ''
    const newNotes = JSON.parse(localStorage.getItem('notes'))
    newNotes.push(noteContent)
    // localStorage.clear()
    localStorage.setItem('notes', JSON.stringify(newNotes))
})

loadNotes()
