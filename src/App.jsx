
import './App.css'
import router from './router/router'
import { RouterProvider } from 'react-router-dom'


function App() {
  

  return (

      <main>
        <RouterProvider router={ router } />
        
    </main>
  )
}


export default App
