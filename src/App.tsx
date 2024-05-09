import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    
    <>
      <div className='flex items-center justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to Vite + React Mini Project</h1>
      <div className="list mt-4">
        <button onClick={()=>{
          navigate('/todo');
        }}>
          Todo App
        </button>
      </div>
    </>
  )
}

export default App
