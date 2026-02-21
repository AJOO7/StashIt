import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Marketplace = lazy(() => import('./pages/Marketplace'));

const HostDashboard = lazy(() => import('./pages/Host/Dashboard'));
const HostOnboarding = lazy(() => import('./pages/Host/Onboarding'));

const SellerOnboarding = lazy(() => import('./pages/Seller/Onboarding'));
const SellerDashboard = lazy(() => import('./pages/Seller/Dashboard'));
const SellerInventory = lazy(() => import('./pages/Seller/Inventory'));
const SellerReturns = lazy(() => import('./pages/Seller/Returns'));

const AdminDashboard = lazy(() => import('./pages/Admin/Dashboard'));

const SOP = lazy(() => import('./pages/Trust/SOP'));
const Liability = lazy(() => import('./pages/Trust/Liability'));

// Loading Fallback Component
const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
    <div className="text-primary font-heading" style={{ fontSize: '1.25rem', animation: 'float 2s ease-in-out infinite' }}>Loading Stash-It...</div>
  </div>
);

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />

            <Route path="/host/dashboard" element={<HostDashboard />} />
            <Route path="/host/onboarding" element={<HostOnboarding />} />

            <Route path="/seller/onboarding" element={<SellerOnboarding />} />
            <Route path="/seller/dashboard" element={<SellerDashboard />} />
            <Route path="/seller/inventory" element={<SellerInventory />} />
            <Route path="/seller/returns" element={<SellerReturns />} />

            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            <Route path="/sops" element={<SOP />} />
            <Route path="/liability" element={<Liability />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
