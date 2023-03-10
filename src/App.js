import React, {useState} from 'react'
import Form from './components/Form';
import Display from './components/Display';


const App = () => {

  const [boxList, setBoxList] = useState([])

  const receiveBox = (newBox) => {
    setBoxList([...boxList, newBox])
  }

  return (
    <div className="App">
      <Form handleSentBox={receiveBox}/>
      <Display boxList={boxList}/>
    </div>
  );
}

export default App;
