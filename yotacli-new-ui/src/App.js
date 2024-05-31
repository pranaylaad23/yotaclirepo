import './App.css';
import { AppRoutes } from "./routes/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Header } from "./components/header-component/Header";
import { ReviewQuestionProvider } from './app/ReviewQuestionProvider';

function App() {

    return (
        <div className="App">
            <ReviewQuestionProvider >
                <Header />
                <main className={"page-content"}>
                    <AppRoutes />
                </main>
                {/*<Footer/>*/}
            </ReviewQuestionProvider>
        </div>
    );
}

export default App;
