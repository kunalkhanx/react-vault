import { PassKeyProvider } from "./Components/Contexts/PassKey";
import { SettingsProvider } from "./Components/Contexts/SettingsCtx";
import { Page } from "./Page";

function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <PassKeyProvider>
          <Page />
        </PassKeyProvider>
      </SettingsProvider>
    </div>
  );
}

export default App;
