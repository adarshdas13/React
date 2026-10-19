import "./App.css";
import { useState } from "react";
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import ThemeToggler from "./components/ThemeToggler";
import RefProps from "./components/RefProps";

function Navigation() {
  const sections = [
    { id: "basics", label: "Basic Props", icon: "♜ " },
    { id: "children", label: "Children Props", icon: "🐥 " },
    { id: "complex", label: "Complex Props", icon: "♾️ " },
    { id: "ref", label: "Reference Props", icon: "援 " },
    { id: "theme", label: "Theme Toggler", icon: "🎡 " },
  ];
  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white m-3 hover:bg-green-600"
            >
              <span className="">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;
  return (
    <div className={`min-h-screen bg-gray-800 text-white`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${isDark ? "text-white" : "text-gray-800"}`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            A comprehensive guide to understanding props in React
          </p>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-2">
            <BasicProps />
          </div>
          <div id="ref" className="scroll-mt-2">
            <RefProps />
          </div>
          <div id="complex" className="scroll-mt-2">
            <ComplexProps />
          </div>
          <div id="child" className="scroll-mt-2">
            <ChildrenProps />
          </div>
          <div id="theme" className="scroll-mt-2">
            <ThemeToggler />
          </div>
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          <p className="text-sm">
            Made with ❤️ by Adarsh Das using React,Bun,Tailwind Css and Vite
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
