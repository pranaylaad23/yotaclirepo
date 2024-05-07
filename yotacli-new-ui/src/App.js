import './App.css';
import {AppRoutes} from "./routes/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Header} from "./components/header-component/Header";

function App() {

    return (
        <div className="App">
            <Header/>
            <main className={"page-content"}>
                <AppRoutes/>
            </main>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
