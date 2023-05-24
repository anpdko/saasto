import React, {useEffect} from 'react';
import './App.css';
import Home from './pages/Home/Home';

function App() {

  useEffect(() => {

    const paths:NodeListOf<SVGPathElement> = document.querySelectorAll('path');
    if(paths.length > 0){
      for(let path of paths) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
     }
    }
  })

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
