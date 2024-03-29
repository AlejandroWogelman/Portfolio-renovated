import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Work } from "./components/work/Work";

import "./App.css";
import { MoreView } from "./components/more/MoreView";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <h2 className="work-title" id="work">
          work
        </h2>
        <Work />
        <MoreView />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
