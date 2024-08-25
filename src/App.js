import { PassKeyProvider } from "./Components/Contexts/PassKey";
import { Page } from "./Page";

function App() {
  return (
    <div className="App">
      <PassKeyProvider>
        <Page />
      </PassKeyProvider>
    </div>
  );
}

export default App;
