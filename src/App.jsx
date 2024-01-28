import './css/main.css'
import './App.css'
import {useState, useEffect} from 'react';
import Header from './components/Header'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import noteService from './service/note-service';

function App() {
  const [notes, setNotes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const update = async () => {
    const notesJson = await noteService.getNotes();
    setNotes(notesJson);
  }

  useEffect(() => {
    if (!loaded) {
      update();
      setLoaded(true);
    }
  }, [notes, loaded])

  return (
    <div className='page'>
      <div className='header'>
        <Header update={update}></Header>
      </div>
      <div className='notes'>
        <Notes notes={notes} update={update}></Notes>
      </div>
      <div className='new-note'>
        <NewNote update={update}></NewNote>
      </div>
    </div>
  )
}

export default App
