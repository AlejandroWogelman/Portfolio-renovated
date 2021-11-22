import "./App.css";
import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Work } from "./components/work/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <h2 className="work-title">work</h2>
        <Work />
      </main>
    </div>
  );
}

export default App;
