import { PackageCheck, Package, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';

const HostDashboard = () => {
    return (
        <div className="page-container">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="mb-1">Host Operations</h1>
                    <p className="text-muted">Welcome back! Here's your shift overview.</p>
                </div>
                <div className="badge badge-primary" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                    Tier 1 Host (Active)
                </div>
            </div>

            {/* Top Metrics Grid */}
            <section className="grid grid-cols-3 md-grid-cols-1 gap-6 mb-6">
                <div className="card slide-in" style={{ animationDelay: '0.1s' }}>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-muted">Space Utilization</h4>
                        <Package size={20} className="text-primary" />
                    </div>
                    <div className="font-heading" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        60%
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '60%', height: '100%', background: 'var(--primary)' }}></div>
                    </div>
                    <p className="text-sm text-muted mt-2">120 / 200 Cartons Stored</p>
                </div>

                <div className="card slide-in" style={{ animationDelay: '0.2s' }}>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-muted">Pending Tasks</h4>
                        <AlertTriangle size={20} className="text-warning" />
                    </div>
                    <div className="font-heading" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        6
                    </div>
                    <div className="flex gap-2">
                        <span className="badge badge-warning">3 Pickups</span>
                        <span className="badge badge-danger">2 Inspections</span>
                    </div>
                </div>

                <div className="card slide-in" style={{ animationDelay: '0.3s' }}>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-muted">Est. Earnings</h4>
                        <TrendingUp size={20} className="text-success" />
                    </div>
                    <div className="font-heading text-success" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        ₹4,250
                    </div>
                    <p className="text-sm text-muted">This week (Storage & Handling)</p>
                </div>
            </section>

            <div className="grid grid-cols-2 md-grid-cols-1 gap-6">
                {/* Daily Tasks Panel */}
                <section className="card slide-in" style={{ animationDelay: '0.4s' }}>
                    <h3 className="mb-4 text-gradient">Daily Task Checklist</h3>

                    <div className="flex flex-col gap-3">
                        <div className="p-3" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.2)' }}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="mb-1">Forward Dispatch (3 Orders)</h4>
                                    <p className="text-sm text-muted">Awaiting local logistics pickup. Keep ready.</p>
                                </div>
                                <div className="badge badge-primary">By 14:00</div>
                            </div>
                            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Mark Ready</button>
                        </div>

                        <div className="p-3" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', background: 'rgba(239, 68, 68, 0.05)' }}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="mb-1">Return Condition Checks (2 Items)</h4>
                                    <p className="text-sm text-muted">Items arrived back. Needs photo verification within SLA.</p>
                                </div>
                                <div className="badge badge-danger">High Priority</div>
                            </div>
                            <button className="btn btn-accent" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Start Inspection</button>
                        </div>

                        <div className="p-3" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.2)' }}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="mb-1">Incoming Inventory (1 Shipment)</h4>
                                    <p className="text-sm text-muted">From Seller: Apparel Co. Expected today.</p>
                                </div>
                            </div>
                            <span className="text-sm text-success flex items-center gap-1"><PackageCheck size={14} /> Auto-allocated to Rack B</span>
                        </div>
                    </div>
                </section>

                {/* Reliability Score */}
                <section className="card slide-in" style={{ animationDelay: '0.5s' }}>
                    <h3 className="mb-4">Host Reliability Score</h3>
                    <div className="text-center mb-6">
                        <div style={{
                            width: '120px', height: '120px', borderRadius: '50%', border: '8px solid var(--success)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem',
                            boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                        }}>
                            <span className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800 }}>98</span>
                        </div>
                        <p className="text-muted">Top 5% performer in your cluster.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted">On-time Handover</span>
                                <span>100%</span>
                            </div>
                            <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}><div style={{ width: '100%', height: '100%', background: 'var(--success)' }}></div></div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted">Inspection Accuracy</span>
                                <span>95%</span>
                            </div>
                            <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}><div style={{ width: '95%', height: '100%', background: 'var(--success)' }}></div></div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-muted">Damage Disputes</span>
                                <span className="text-danger">1 (Under Review)</span>
                            </div>
                            <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}><div style={{ width: '5%', height: '100%', background: 'var(--danger)' }}></div></div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>View Dispute Details <ArrowRight size={16} /></button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HostDashboard;
