import "./App.css";
import { Frame418Collection, NavBar, MarketingFooter } from "./ui-components";

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"} />
      <Frame418Collection isPaginated itemsPerPage={3} />
      <MarketingFooter width={"100vw"} />
    </div>
  );
}

export default App;
