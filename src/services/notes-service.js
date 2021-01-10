import CONFIG from '../config';
const NotesService = {
  getAllNotes() {
    return fetch(`${CONFIG.API_ENDPOINT}notes/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((notes) => notes);
  },
  createNote(note) {
    return fetch(`${CONFIG.API_ENDPOINT}notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
      .then((res) => {
        if (!res.ok) {
          res.json();
          Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then((data) => data);
  },
  deleteNote(id) {
    return fetch(`http://localhost:8000/api/notes/${id}`, {
      method: 'DELETE'
    }).then((res) => {
      if (!res.ok) {
        res.json();
        throw new Error(res.statusText);
      }
    });
  }
};

export default NotesService;
