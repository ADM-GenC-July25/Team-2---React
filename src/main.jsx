import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const entryPoint = document.getElementById("root");
createRoot(entryPoint).render(<App />);
