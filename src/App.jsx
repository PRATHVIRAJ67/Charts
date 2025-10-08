import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RechartsPage from "./Recharts/Recharts";
// import NivoPage from "./Nivo/Nivocharts";
// import ApacheEChartsPage from "./ApacheEcharts/ApacheChart";
// import VisxPage from "./Visk/Viskcharts";
import "./App.css"; // Import the CSS file

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 className="app-header">Custon Note IQ Charts</h1>

        <nav className="navbar">
          <Link to="/recharts">
            <button>Custon Note IQ Charts</button>
          </Link>
          {/*
          <Link to="/nivo">
            <button>Nivo</button>
          </Link>
          <Link to="/echarts">
            <button>Appache ECharts</button>
          </Link>
          <Link to="/visx">
            <button>Visx</button>
          </Link>
          */}
        </nav>

        <Routes>
          {/* Default home page route */}
          <Route path="/" element={<RechartsPage />} />

          <Route path="/recharts" element={<RechartsPage />} />
          {/*
          <Route path="/nivo" element={<NivoPage />} />
          <Route path="/echarts" element={<ApacheEChartsPage />} />
          <Route path="/visx" element={<VisxPage />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}
