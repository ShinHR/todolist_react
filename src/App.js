import './App.css';
import ListForm from './component/ListForm'


function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="todolist_body">
          <h3 className="todolist_title">TODO LIST(feat.react)</h3>
          <div className="input_contents">
            <ListForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
