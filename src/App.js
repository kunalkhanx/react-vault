import { PassKeyProvider } from "./Components/Contexts/PassKey";
import { SettingsProvider } from "./Components/Contexts/SettingsCtx";
import { ToastProvider } from "./Components/Contexts/ToastContext";
import { Page } from "./Page";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <SettingsProvider>
          <PassKeyProvider>
            <Page />
          </PassKeyProvider>
        </SettingsProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
