import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PatientInfo from "./Components/PatientInfo";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <div className="app__mainSidebar">
          <Sidebar />
        </div>
        <div className="app__mainPatientInfo">
          <PatientInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
