import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header-component/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className={"page-content"}>
        <AppRoutes />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
