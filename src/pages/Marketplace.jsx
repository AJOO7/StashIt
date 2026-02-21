import { useState } from 'react';
import { Search, Filter, ShieldCheck, MapPin, Package, Clock, Zap } from 'lucide-react';

const MOCK_HOSTS = [
    { id: 'H-4092', name: 'LogiHub Koramangala', tier: 1, price: 120, capacity: 500, score: 98, avgInsp: '2 hrs', maxDisp: 150, location: 'Koramangala, BLR' },
    { id: 'H-2104', name: 'Metro Store HSR', tier: 2, price: 85, capacity: 1200, score: 94, avgInsp: 'N/A', maxDisp: 300, location: 'HSR Layout, BLR' },
    { id: 'H-8812', name: 'QuickSpace Indiranagar', tier: 1, price: 140, capacity: 200, score: 99, avgInsp: '45 mins', maxDisp: 50, location: 'Indiranagar, BLR' },
    { id: 'H-3411', name: 'BTM Micro Storage', tier: 2, price: 75, capacity: 800, score: 91, avgInsp: 'N/A', maxDisp: 200, location: 'BTM Layout, BLR' },
];

const Marketplace = () => {
    const [selectedTier, setSelectedTier] = useState('all');
    const [activeModal, setActiveModal] = useState(null);

    const filteredHosts = MOCK_HOSTS.filter(host =>
        selectedTier === 'all' ? true : host.tier === parseInt(selectedTier)
    );

    return (
        <div className="page-container" style={{ maxWidth: '1400px' }}>

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="mb-1">Host Marketplace</h1>
                    <p className="text-muted">Discover and book verified micro-fulfilment hubs globally.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
                    <input type="text" className="input-field pl-10" placeholder="Search locations..." />
                </div>
            </div>

            <div className="grid grid-sidebar gap-6">

                {/* Filters Sidebar */}
                <aside className="card h-fit slide-in">
                    <h3 className="mb-4 flex items-center gap-2 border-b pb-4" style={{ borderColor: 'var(--glass-border)' }}><Filter size={18} /> Filters</h3>

                    <div className="mb-6">
                        <label className="input-label mb-2 block">City Target</label>
                        <select className="input-field w-full">
                            <option>Bengaluru</option>
                            <option>Mumbai</option>
                            <option>Delhi NCR</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="input-label mb-2 block">Service Tier</label>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <input type="radio" name="tier" checked={selectedTier === 'all'} onChange={() => setSelectedTier('all')} /> Any Tier
                            </label>
                            <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <input type="radio" name="tier" checked={selectedTier === '1'} onChange={() => setSelectedTier('1')} /> Tier 1 (Storage + Inspection)
                            </label>
                            <label className="flex items-center gap-2 text-sm cursor-pointer">
                                <input type="radio" name="tier" checked={selectedTier === '2'} onChange={() => setSelectedTier('2')} /> Tier 2 (Storage Only)
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="input-label mb-2 block">Max Price / Carton (₹)</label>
                        <input type="range" min="50" max="250" defaultValue="150" className="w-full" style={{ accentColor: 'var(--primary)' }} />
                        <div className="flex justify-between text-xs text-muted mt-1">
                            <span>₹50</span><span>₹150</span><span>₹250</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="input-label mb-2 block">Min. Reliability Score</label>
                        <input type="range" min="80" max="100" defaultValue="95" className="w-full" style={{ accentColor: 'var(--success)' }} />
                        <div className="text-right text-xs text-success font-bold mt-1">95+</div>
                    </div>
                </aside>

                {/* Host Grid */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-sm text-muted">Showing {filteredHosts.length} verified hosts in <strong>Bengaluru</strong>.</p>
                    </div>

                    <div className="grid grid-cols-2 md-grid-cols-1 gap-4">
                        {filteredHosts.map((host, idx) => (
                            <div key={host.id} className="card slide-in" style={{ animationDelay: `${idx * 0.1}s`, display: 'flex', flexDirection: 'column', padding: '1.25rem' }}>

                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="m-0 text-lg">{host.name}</h3>
                                        <p className="text-sm text-muted flex items-center gap-1 mt-1"><MapPin size={14} /> {host.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className={`badge ${host.tier === 1 ? 'badge-primary' : 'badge-warning'} mb-1`}>Tier {host.tier}</span>
                                        <div className="font-heading text-lg">₹{host.price}<span className="text-xs text-muted font-body font-normal">/carton</span></div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-4 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="flex-1">
                                        <p className="text-xs text-muted mb-1 flex items-center gap-1"><Package size={12} /> Capacity</p>
                                        <p className="font-bold text-sm text-success">{host.capacity} left</p>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-muted mb-1 flex items-center gap-1"><ShieldCheck size={12} /> Reliability</p>
                                        <p className="font-bold text-sm text-primary">{host.score}/100</p>
                                    </div>
                                    {host.tier === 1 && (
                                        <div className="flex-1">
                                            <p className="text-xs text-muted mb-1 flex items-center gap-1"><Clock size={12} /> SLA</p>
                                            <p className="font-bold text-sm text-accent">{host.avgInsp}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-auto pt-2 flex gap-2">
                                    <button className="btn btn-outline flex-1 text-sm py-2" onClick={() => setActiveModal(host)}>View Details</button>
                                    <button className="btn btn-primary flex-1 text-sm py-2">Request Space</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Host Detail Modal */}
            {activeModal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'var(--glass-blur)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <div className="card slide-in" style={{ width: '100%', maxWidth: '600px', padding: '2rem' }}>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="m-0 flex items-center gap-2">{activeModal.name} <span className="badge badge-primary">Verified</span></h2>
                                <p className="text-muted mt-1">{activeModal.location} | ID: {activeModal.id}</p>
                            </div>
                            <button className="btn btn-outline border-none text-muted" onClick={() => setActiveModal(null)}>Close</button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="p-3 rounded" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                <p className="text-xs text-muted mb-1">Pricing Breakdown</p>
                                <ul className="text-sm">
                                    <li className="flex justify-between mb-1"><span>Storage:</span> <strong>₹{activeModal.price}/carton</strong></li>
                                    <li className="flex justify-between mb-1"><span>Dispatch Fee:</span> <strong>₹5/order</strong></li>
                                    {activeModal.tier === 1 && (
                                        <li className="flex justify-between text-accent"><span>Inspection Fee:</span> <strong>₹15/return</strong></li>
                                    )}
                                </ul>
                            </div>

                            <div className="p-3 rounded" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                <p className="text-xs text-muted mb-1">Operational SLA</p>
                                <ul className="text-sm">
                                    <li className="flex items-center gap-2 mb-1"><Zap size={14} className="text-warning" /> Max {activeModal.maxDisp} dispatches/day</li>
                                    <li className="flex items-center gap-2 mb-1"><Clock size={14} className="text-success" /> Pickup: 14:00 - 18:00</li>
                                </ul>
                            </div>
                        </div>

                        <button className="btn btn-primary w-full text-lg justify-center py-3">Submit Space Request</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Marketplace;
