import './App.css';

function App() {
  return (
    <div className="App">
       <h2>Hello React I'm Parent</h2>
      <Childcom setfun={receiveName}/>
      <p>Parent:My child said:{childname}</p>
    </div>
  );
}

export default App;
