import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import { useTheme } from './hooks/useTheme';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/project/:slug"
            element={<ProjectDetails theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="*"
            element={<Home theme={theme} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
