import { Link } from 'react-router-dom';
import { Package, Truck, ShieldCheck, Zap, ArrowRight, Clock, MapPin } from 'lucide-react';

const Home = () => {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="text-center mb-6 slide-in">
                <div className="badge badge-primary mb-2">Distributed Inventory Acceleration</div>
                <h1 className="mb-2">
                    Speed up Delivery.<br />
                    <span className="text-gradient">Accelerate Your Capital.</span>
                </h1>
                <p className="text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                    We place your inventory closer to your customers and process returns locally.
                    Stop losing sales because of geography.
                </p>
                <div className="flex justify-center gap-4 mb-6">
                    <Link to="/seller/dashboard" className="btn btn-primary">
                        I'm a Seller
                        <ArrowRight size={18} />
                    </Link>
                    <Link to="/host/onboarding" className="btn btn-outline">
                        I Have Space (Host)
                    </Link>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="grid grid-cols-2 md-grid-cols-1 gap-6 mb-6">
                <div className="card text-center slide-in" style={{ animationDelay: '0.1s' }}>
                    <Zap size={40} className="text-accent mb-2" style={{ margin: '0 auto' }} />
                    <h3>Delivery Time</h3>
                    <p className="text-muted mb-2">Reduce transit delays to Metro buyers.</p>
                    <div className="text-danger" style={{ textDecoration: 'line-through' }}>5 Days</div>
                    <div className="text-success" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2 Days</div>
                </div>
                <div className="card text-center slide-in" style={{ animationDelay: '0.2s' }}>
                    <Clock size={40} className="text-primary mb-2" style={{ margin: '0 auto' }} />
                    <h3>Return Downtime</h3>
                    <p className="text-muted mb-2">Inspect & resell locally instead of returning to origin.</p>
                    <div className="text-danger" style={{ textDecoration: 'line-through' }}>15 Days</div>
                    <div className="text-success" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3 Days</div>
                </div>
            </section>

            {/* How It Works */}
            <section className="mb-6 card slide-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-center mb-4">How Stash-It Works</h2>
                <div className="grid grid-cols-3 md-grid-cols-1 gap-4 text-center">
                    <div>
                        <div className="mb-2" style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: 'var(--radius-full)', display: 'inline-block' }}>
                            <Package size={32} className="text-primary" />
                        </div>
                        <h4>1. Micro-storage</h4>
                        <p className="text-muted text-sm">Forward deploy high-velocity SKUs to verified Tier 1 & 2 Hosts in metros.</p>
                    </div>
                    <div>
                        <div className="mb-2" style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: 'var(--radius-full)', display: 'inline-block' }}>
                            <Truck size={32} className="text-accent" />
                        </div>
                        <h4>2. Hyper-local Dispatch</h4>
                        <p className="text-muted text-sm">Orders routed to the nearest hub and dispatched via intracity logistics.</p>
                    </div>
                    <div>
                        <div className="mb-2" style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: 'var(--radius-full)', display: 'inline-block' }}>
                            <ShieldCheck size={32} className="text-success" />
                        </div>
                        <h4>3. Smart Returns</h4>
                        <p className="text-muted text-sm">Returns drop locally, checked & prepped for next sale—bypassing long RTO transit.</p>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="flex flex-col items-center slide-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-muted mb-2 text-sm uppercase" style={{ letterSpacing: '2px' }}>Enterprise-Grade Reliability</p>
                <div className="flex gap-4 justify-center items-center flex-wrap">
                    <div className="badge badge-success flex items-center gap-2">
                        <ShieldCheck size={14} /> KYC Verified Hosts
                    </div>
                    <div className="badge badge-primary flex items-center gap-2">
                        <MapPin size={14} /> Geolocation Tagged
                    </div>
                    <div className="badge badge-warning flex items-center gap-2">
                        <Clock size={14} /> Fixed Pickup SLAs
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
