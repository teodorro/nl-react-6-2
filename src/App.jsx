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
    console.log(notesJson);
    setNotes(notesJson);
  }

  useEffect(() => {
    console.log('asdf')
    if (!loaded) {
      update();
      setLoaded(true);
    }
  }, [notes, loaded])

  return (
    <>
      <div>
        <Header update={update}></Header>
      </div>
      <div>
        <Notes notes={notes}></Notes>
      </div>
      <div>
        <NewNote update={update}></NewNote>
      </div>
    </>
  )
}

export default App
