import "./App.css";
import ConsumeContext from "./components/ConsumeContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App" style={{ marginTop: "2rem" }}>
        <h1>useContext Demo</h1>
        <ConsumeContext />
      </div>
    </UserProvider>
  );
}

export default App;
