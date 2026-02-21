import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';

import HostDashboard from './pages/Host/Dashboard';
import HostOnboarding from './pages/Host/Onboarding';

import SellerOnboarding from './pages/Seller/Onboarding';
import SellerDashboard from './pages/Seller/Dashboard';
import SellerInventory from './pages/Seller/Inventory';
import SellerReturns from './pages/Seller/Returns';

import AdminDashboard from './pages/Admin/Dashboard';

import SOP from './pages/Trust/SOP';
import Liability from './pages/Trust/Liability';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
