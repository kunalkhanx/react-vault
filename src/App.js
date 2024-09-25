import { DeleteProvider } from "./Contexts/DeleteContext";
import { PassKeyProvider } from "./Contexts/PassKey";
import { SettingsProvider } from "./Contexts/SettingsCtx";
import { ToastProvider } from "./Contexts/ToastContext";
import { Page } from "./Page";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <SettingsProvider>
          <PassKeyProvider>
            <DeleteProvider>
              <Page />
            </DeleteProvider>
          </PassKeyProvider>
        </SettingsProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
