import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App d-flex flex-column">
      <div>
        <MyNav />
        <Welcome />

        <BookList list={fantasy} />

        <MyFooter />
      </div>
    </div>
  );
}

export default App;
