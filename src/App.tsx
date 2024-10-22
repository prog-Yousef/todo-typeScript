import { useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'
import smiley from './assets/smiley (1).svg'
import TodoList from './components/TodoList'

function App() {
  const [open, setOpen] = useState(false);

  const displayModal = () => {
    setOpen(true);
  };

  return (
    <>
      {!open ? (
        <div onClick={() => displayModal()} className='homeWrapper'>
          <section className="logoSection">
            <img src={logo} alt="logo" />
            <h2> Todo APP || typescript + vite</h2>
          </section>
          <img src={smiley} alt="smiley" className="smiley" />
        </div>
      ) : (
        ""
      )}
      {open ? <TodoList /> : ""}  
    </>
  );
}

export default App
