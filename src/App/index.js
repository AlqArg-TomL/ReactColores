import './App.css';
import { AppUI } from './AppUI';
import { AppProvider } from '../Context';

function MyApp() {
  return (
    <AppProvider>
        <AppUI/>
    </AppProvider>
  );
}

export {MyApp};
