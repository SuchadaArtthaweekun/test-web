import React from 'react';
import './App.css';
import FloatingActionButtons from './component/fab';
// import FloatingButton from './component/FAB/FloatingButton';
import MainComponent from './component/FAB/MainComponent';
import Floatmenu from './component/floatmenu';
import FloatingButtonDrag from './component/DragDrop/FloatingButtonDrag';
import FloatingButton from './component/DragDrop/FloatingButtonDrag';

function App() {
    
  return (
    <div className="App">
      <MainComponent />
      {/* <Floatmenu /> */}
      <FloatingActionButtons />
      <FloatingButton initialPosition={{
        x: 0,
        y: 0
      }} />
    </div>
  );
}

export default App;
