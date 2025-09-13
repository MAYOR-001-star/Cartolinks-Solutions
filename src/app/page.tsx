"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ToolsGrid } from "./components/ToolsGrid";
const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection isDark={isDark} />
        <ToolsGrid isDark={isDark} />
      </main>
    </div>
  );
};

export default App;