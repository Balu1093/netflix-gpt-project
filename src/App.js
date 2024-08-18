import Body from "./components/Body"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
    <Provider store={appStore}>
    <Body/>
    </Provider>
    </div>

  );
}

export default App;
