import { useState } from 'react';
import { Users, Building, Activity, AlertOctagon, Map, Zap, Settings, ShieldAlert, Truck, Search, Filter, ShieldCheck, XCircle } from 'lucide-react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="page-container" style={{ maxWidth: '1200px' }}>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="mb-1">Platform Command Center</h1>
                    <p className="text-muted">Global oversight of hosts, sellers, logistics, and disputes.</p>
                </div>
            </div>

            <div className="flex gap-4 mb-6 border-b" style={{ borderBottom: 'var(--glass-border)', paddingBottom: '0.5rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <button className={`btn ${activeTab === 'overview' ? 'text-primary' : 'btn-outline text-muted'}`} onClick={() => setActiveTab('overview')} style={{ border: 'none', background: 'transparent', padding: '0.5rem 0' }}>Overview</button>
                <button className={`btn ${activeTab === 'governance' ? 'text-primary' : 'btn-outline text-muted'}`} onClick={() => setActiveTab('governance')} style={{ border: 'none', background: 'transparent', padding: '0.5rem 0' }}>Governance Controls</button>
                <button className={`btn ${activeTab === 'disputes' ? 'text-primary' : 'btn-outline text-muted'}`} onClick={() => setActiveTab('disputes')} style={{ border: 'none', background: 'transparent', padding: '0.5rem 0' }}>Disputes & Risk</button>
                <button className={`btn ${activeTab === 'logistics' ? 'text-primary' : 'btn-outline text-muted'}`} onClick={() => setActiveTab('logistics')} style={{ border: 'none', background: 'transparent', padding: '0.5rem 0' }}>Logistics Tracker</button>
            </div>

            {activeTab === 'overview' && (
                <div className="animate-in slide-in">
                    {/* Top Metrics Hierarchy */}
                    <section className="grid grid-cols-4 md-grid-cols-2 gap-4 mb-6">
                        <div className="card">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-sm text-muted uppercase">Active Sellers</p>
                                <Users size={16} className="text-primary" />
                            </div>
                            <h3 className="m-0 font-heading">342</h3>
                            <p className="text-success text-xs mt-1">+12% this month</p>
                        </div>
                        <div className="card">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-sm text-muted uppercase">Verified Hosts</p>
                                <Building size={16} className="text-accent" />
                            </div>
                            <h3 className="m-0 font-heading">1,208</h3>
                            <p className="text-success text-xs mt-1">+85 added</p>
                        </div>
                        <div className="card">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-sm text-muted uppercase">Avg Delivery</p>
                                <Zap size={16} className="text-warning" />
                            </div>
                            <h3 className="m-0 font-heading">2.1 Days</h3>
                            <p className="text-success text-xs mt-1">Target: &lt; 2.5 Days</p>
                        </div>
                        <div className="card">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-sm text-muted uppercase">Dispute Rate</p>
                                <AlertOctagon size={16} className="text-danger" />
                            </div>
                            <h3 className="m-0 font-heading text-danger">1.2%</h3>
                            <p className="text-muted text-xs mt-1">14 open cases</p>
                        </div>
                    </section>

                    <section className="grid grid-cols-3 md-grid-cols-1 gap-6">
                        {/* Heat Map Placeholder */}
                        <div className="card" style={{ gridColumn: 'span 2' }}>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="m-0 flex items-center gap-2"><Map size={18} /> Demand & Host Heatmap</h3>
                                <button className="badge badge-primary"><Filter size={12} /> Filter by Tier 1</button>
                            </div>
                            <div style={{
                                height: '350px', background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.2) 0%, rgba(15, 23, 42, 0.8) 100%)',
                                border: '1px dashed rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
                            }}>
                                <Map size={48} className="text-primary mb-2 opacity-50" />
                                <p className="text-muted">Interactive Map Instance (Cluster View)</p>
                                <div className="flex gap-2 mt-4">
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 10px var(--success)' }}></div> <span className="text-xs text-muted">Healthy Density</span>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--danger)', boxShadow: '0 0 10px var(--danger)', marginLeft: '1rem' }}></div> <span className="text-xs text-muted">Deficit (Need Hosts)</span>
                                </div>
                            </div>
                        </div>

                        {/* Smart Marketplace Filters */}
                        <div className="card">
                            <h3 className="mb-4 flex items-center gap-2"><Settings size={18} /> Marketplace Filters</h3>
                            <p className="text-sm text-muted mb-4">View hosts matching specific criteria for manual allocation reviews.</p>

                            <div className="input-group mb-3">
                                <label className="input-label">Min. Reliability Score</label>
                                <input type="range" min="0" max="100" defaultValue="95" className="w-full mb-1" style={{ accentColor: 'var(--success)' }} />
                                <div className="text-xs text-right text-success font-bold">95+</div>
                            </div>

                            <div className="input-group mb-3">
                                <label className="input-label">Distance from Cluster Center</label>
                                <select className="input-field py-1">
                                    <option>&lt; 2 km</option>
                                    <option>&lt; 5 km</option>
                                    <option>&lt; 10 km</option>
                                </select>
                            </div>

                            <div className="input-group mb-4">
                                <label className="input-label">Return Handling SLA Ready</label>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked id="tier1chk" />
                                    <label htmlFor="tier1chk" className="text-sm text-main">Tier 1 Only</label>
                                </div>
                            </div>

                            <button className="btn btn-outline w-full justify-center"><Search size={16} /> Apply Filters</button>
                        </div>
                    </section>
                </div>
            )}

            {activeTab === 'governance' && (
                <div className="animate-in slide-in grid grid-cols-2 md-grid-cols-1 gap-6">
                    {/* Host Approvals UI */}
                    <section className="card">
                        <h3 className="mb-4 flex items-center gap-2 text-warning"><Building size={18} /> Pending Hub Applications</h3>
                        <div className="flex flex-col gap-3">
                            <div className="p-4" style={{ border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.2)' }}>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="m-0 text-md">Ramesh Kumar</h4>
                                        <p className="text-xs text-muted">Koramangala, BLR • Commercial Godown (500 sqft)</p>
                                    </div>
                                    <span className="badge badge-warning">Tier 1 Request</span>
                                </div>
                                <p className="text-sm text-muted mb-3">KYC Docs: <span className="text-success">Verified</span> | Pricing: ₹120/carton</p>
                                <div className="flex gap-2">
                                    <button className="btn btn-primary flex-1 py-2 text-sm"><ShieldCheck size={14} /> Approve Hub</button>
                                    <button className="btn btn-outline flex-1 py-2 text-sm border-danger text-danger hover:bg-danger hover:text-white"><XCircle size={14} /> Reject</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Booking / Capacity Control */}
                    <section className="card">
                        <h3 className="mb-4 flex items-center gap-2 text-primary"><Search size={18} /> Space Booking Requests</h3>
                        <div className="flex flex-col gap-3">
                            <div className="p-4" style={{ border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.2)' }}>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="m-0 text-md">Acme Apparel</h4>
                                        <p className="text-xs text-muted">Requesting H-4092 (LogiHub Koramangala)</p>
                                    </div>
                                    <span className="badge badge-accent">150 Cartons</span>
                                </div>
                                <p className="text-sm text-muted mb-3">Host Capacity: <span className="text-success">400 Available</span> | SLA Match: <span className="text-success">Yes</span></p>
                                <div className="flex gap-2">
                                    <button className="btn btn-primary flex-1 py-2 text-sm">Force Authorize</button>
                                    <button className="btn btn-outline flex-1 py-2 text-sm">Review Terms</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {activeTab === 'disputes' && (
                <div className="animate-in slide-in">
                    <section className="card mb-6">
                        <h3 className="mb-4 flex items-center gap-2 text-danger"><ShieldAlert size={18} /> Active Dispute Queue</h3>

                        <div className="p-4 mb-4" style={{ border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-md)', background: 'rgba(239, 68, 68, 0.05)' }}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="mb-1">DS-99120: Missing Cartons</h4>
                                    <p className="text-sm text-muted">Host: <strong>#4092</strong> | Seller: <strong>Apparel Co.</strong></p>
                                </div>
                                <span className="badge badge-danger">High Severity</span>
                            </div>
                            <p className="text-sm mb-4">Seller claims 50 cartons delivered, Host reported receiving 48. Discrepancy caught at inbound.</p>

                            <div className="flex flex-wrap gap-4">
                                <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Review Evidence</button>
                                <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Penalize Host (-5 Score)</button>
                                <button className="btn btn-outline border-danger text-danger hover:bg-danger hover:text-white" style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>Suspend Host Profile</button>
                            </div>
                        </div>

                        <div className="p-4" style={{ border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.2)' }}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="mb-1 text-muted">DS-99105: Damaged but marked resellable</h4>
                                    <p className="text-sm text-muted">Host: <strong>#2104</strong> | Buyer: <strong>Karan M.</strong></p>
                                </div>
                                <span className="badge badge-warning">Under Investigation</span>
                            </div>
                            <p className="text-sm text-muted">Host approved return locally, but next buyer received a stained shirt.</p>
                        </div>

                    </section>
                </div>
            )}

            {activeTab === 'logistics' && (
                <div className="animate-in slide-in grid grid-cols-2 md-grid-cols-1 gap-6">
                    <section className="card">
                        <h3 className="mb-4 flex items-center gap-2 text-accent"><Truck size={18} /> Active Intra-City Dispatches</h3>

                        <div className="p-3 mb-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                            <div className="flex justify-between mb-1">
                                <span className="font-bold">ORD-8812</span>
                                <span className="badge badge-success">In Transit</span>
                            </div>
                            <p className="text-sm text-muted mb-2">Hub: #4092 → Customer: Indiranagar</p>
                            <div className="flex justify-between text-xs text-muted">
                                <span>Rider: <strong>Suresh P.</strong></span>
                                <span>ETA: 14:30 PM</span>
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="flex justify-between mb-1">
                                <span className="font-bold">RET-1102</span>
                                <span className="badge badge-warning">Pending Pickup</span>
                            </div>
                            <p className="text-sm text-muted mb-2">Customer: HSR Layout → Hub: #4092</p>
                            <div className="flex justify-between text-xs text-muted">
                                <span>Rider: <strong>Unassigned</strong></span>
                                <span>SLA Pickup Window: 16:00 - 18:00</span>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
