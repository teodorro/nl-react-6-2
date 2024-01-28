const address = 'http://localhost:7070/notes';

export default {
  async getNotes() {
    const response = await fetch(`${address}`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Ошибка HTTP: " + response.status);
  },

  async addNote(note) {
    const response = await fetch(`${address}`, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    if (response.ok) {
      return await response.status;
    }
    throw new Error("Ошибка HTTP: " + response.status);
  },

  async deleteNote(id){
    const response = await fetch(`${address}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return true;
    }
    throw new Error("Ошибка HTTP: " + response.status);
 }
}