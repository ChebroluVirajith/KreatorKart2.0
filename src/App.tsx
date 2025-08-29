// File: src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Index from './pages/index';
import Campaigns from './pages/Campaigns';
import ForCreators from './pages/ForCreators';
import Profile from './pages/Profile';
import ApplicationSuccess from './pages/ApplicationSuccess'; // Add this import

/**
 * @author ChebroluVirajith
 * @lastModified 2025-08-14 17:00:00
 * Main App component with conditional rendering and all necessary routes.
 */

const AppContent = () => {
  const { authReady } = useAuth();
  
  if (!authReady) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-4xl font-bold animate-pulse">Loading...</h1>
        <p className="mt-4 text-muted-foreground">Please wait while we connect.</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/creators" element={<ForCreators />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/application-success" element={<ApplicationSuccess />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;