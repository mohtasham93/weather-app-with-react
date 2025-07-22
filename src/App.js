import { useState } from 'react';
import './App.css';

function App() {
  const [CityName , setCityName ] = useState("")
  function refresh(e) {
        e.preventDefault()
     }
     function onclickvaluechange(e){
         console.log(e.target.value)
     }


     
  return (
    <div >
         <form action="">
              <input type="text" name='cityname' onChange={onclickvaluechange} />
          <button >check weather</button>
          </form>
          
    </div>
  )
}

export default App;
