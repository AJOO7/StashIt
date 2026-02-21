import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { RefreshCw, Zap, TrendingUp, Calculator, Package, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
    { name: 'Avg Delivery (Days)', before: 5.2, after: 2.1 },
    { name: 'Return Resale (Days)', before: 17, after: 3.8 },
];

const rtoData = [
    { name: 'RTO %', before: 28, after: 16 },
];

const SellerDashboard = () => {
    const [skuValue, setSkuValue] = useState(1500);
    const [volume, setVolume] = useState(1000);
    const [returnCycle, setReturnCycle] = useState(17);

    // Predict 16% RTO for calculation
    const monthlyReturns = volume * 0.16;
    const lockedCapitalBefore = monthlyReturns * skuValue * (returnCycle / 30);
    const lockedCapitalAfter = monthlyReturns * skuValue * (3.8 / 30);
    const capitalFreed = lockedCapitalBefore - lockedCapitalAfter;

    const [category, setCategory] = useState('');

    return (
        <div className="page-container" style={{ maxWidth: '1200px' }}>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="mb-1">Seller Command Center</h1>
                    <p className="text-muted">Manage active deployments and track unit economics.</p>
                </div>
                <div className="flex gap-4">
                    <Link to="/seller/returns" className="btn btn-outline border-accent text-accent hover:bg-accent hover:text-white"><RefreshCw size={16} /> Action Returns</Link>
                    <Link to="/marketplace" className="btn btn-primary"><MapPin size={16} /> Deploy More Inventory</Link>
                </div>
            </div>

            {/* Inventory Overview & Forward Orders */}
            <section className="grid grid-cols-2 md-grid-cols-1 gap-6 mb-8">
                <div className="card slide-in">
                    <h3 className="mb-4 flex items-center gap-2"><Package size={18} className="text-primary" /> Active Inventory Deployment</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                            <thead>
                                <tr style={{ borderBottom: 'var(--glass-border)', color: 'var(--text-muted)' }}>
                                    <th className="pb-2">SKU</th>
                                    <th className="pb-2">Host Hub</th>
                                    <th className="pb-2">Cartons</th>
                                    <th className="pb-2 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td className="py-3 font-bold">APP-TSHIRT-BLK</td>
                                    <td className="py-3">H-4092 (BLR)</td>
                                    <td className="py-3 text-success">150 / 200</td>
                                    <td className="py-3 text-right"><span className="badge badge-success">Local</span></td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td className="py-3 font-bold">ELEC-EARBD-WHT</td>
                                    <td className="py-3">H-2104 (BLR)</td>
                                    <td className="py-3 text-warning">12 / 50</td>
                                    <td className="py-3 text-right"><span className="badge badge-warning">Low Stock</span></td>
                                </tr>
                                <tr>
                                    <td className="py-3 font-bold">APP-JEAN-BLU</td>
                                    <td className="py-3">H-8812 (MUM)</td>
                                    <td className="py-3 text-muted">200 / 200</td>
                                    <td className="py-3 text-right"><span className="badge" style={{ background: 'rgba(255,255,255,0.1)' }}>In Transit</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Link to="/seller/inventory" className="text-sm text-primary mt-4 inline-block">View full inventory state map &rarr;</Link>
                </div>

                <div className="card slide-in" style={{ animationDelay: '0.1s' }}>
                    <h3 className="mb-4 flex items-center gap-2"><Zap size={18} className="text-accent" /> Live Forward Orders</h3>
                    <div className="flex flex-col gap-3">
                        <div className="p-3 rounded flex justify-between items-center" style={{ background: 'rgba(0,0,0,0.2)' }}>
                            <div>
                                <div className="flex gap-2 items-center mb-1">
                                    <span className="font-bold text-sm">ORD-99120</span> <span className="text-xs text-muted">via H-4092</span>
                                </div>
                                <p className="text-xs text-muted">APP-TSHIRT-BLK (2 units)</p>
                            </div>
                            <span className="badge badge-primary">Out for Delivery</span>
                        </div>

                        <div className="p-3 rounded flex justify-between items-center" style={{ background: 'rgba(0,0,0,0.2)' }}>
                            <div>
                                <div className="flex gap-2 items-center mb-1">
                                    <span className="font-bold text-sm">ORD-99144</span> <span className="text-xs text-muted">via H-2104</span>
                                </div>
                                <p className="text-xs text-muted">ELEC-EARBD-WHT (1 unit)</p>
                            </div>
                            <span className="badge badge-warning">At Hub (Pending Pickup)</span>
                        </div>

                        <div className="p-3 rounded flex justify-between items-center" style={{ background: 'rgba(0,0,0,0.2)' }}>
                            <div>
                                <div className="flex gap-2 items-center mb-1">
                                    <span className="font-bold text-sm">ORD-99088</span> <span className="text-xs text-muted">via H-4092</span>
                                </div>
                                <p className="text-xs text-muted">APP-TSHIRT-BLK (1 unit)</p>
                            </div>
                            <span className="badge badge-success">Delivered (45 mins ago)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Analytics Page (Before vs After Stash-It metrics) */}
            <section className="mb-8">
                <h3 className="mb-4 text-gradient">Performance Outcomes (Pilot Simulation)</h3>
                <div className="grid grid-cols-2 lg-grid-cols-2 md-grid-cols-1 gap-6">
                    <div className="card slide-in" style={{ animationDelay: '0.2s' }}>
                        <h4 className="mb-4 text-center">Delivery & Resale Speed (Days)</h4>
                        <div style={{ height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} />
                                    <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} />
                                    <Tooltip contentStyle={{ background: 'var(--bg-dark)', border: 'var(--glass-border)' }} />
                                    <Legend />
                                    <Bar dataKey="before" name="Before Stash-It" fill="rgba(255,255,255,0.2)" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="after" name="After Stash-It" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="card slide-in" style={{ animationDelay: '0.3s' }}>
                        <h4 className="mb-4 text-center">RTO Rate %</h4>
                        <div style={{ height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={rtoData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} />
                                    <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} />
                                    <Tooltip contentStyle={{ background: 'var(--bg-dark)', border: 'var(--glass-border)' }} />
                                    <Legend />
                                    <Bar dataKey="before" name="Before Stash-It" fill="var(--danger)" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="after" name="After Stash-It" fill="var(--success)" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-center text-sm text-muted mt-2">Driven by 60% faster last-mile delivery.</p>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-2 md-grid-cols-1 gap-6">
                {/* Capital Unlock Estimator */}
                <section className="card slide-in" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center gap-2 mb-4">
                        <Calculator className="text-accent" />
                        <h3 className="m-0">Capital Efficiency Calculator</h3>
                    </div>
                    <p className="text-sm text-muted mb-4">Calculate working capital freed by accelerating the return transit time via Tier 1 local inspections.</p>

                    <div className="grid grid-cols-2 md-grid-cols-1 gap-4 mb-6">
                        <div className="input-group mb-0">
                            <label className="input-label">Avg SKU Value (₹)</label>
                            <input type="number" className="input-field" value={skuValue} onChange={(e) => setSkuValue(e.target.value)} />
                        </div>
                        <div className="input-group mb-0">
                            <label className="input-label">Monthly Volume (Units)</label>
                            <input type="number" className="input-field" value={volume} onChange={(e) => setVolume(e.target.value)} />
                        </div>
                        <div className="input-group mb-0" style={{ gridColumn: '1 / -1' }}>
                            <label className="input-label">Current Return Cycle (Days)</label>
                            <input type="range" min="7" max="30" value={returnCycle} onChange={(e) => setReturnCycle(e.target.value)} style={{ accentColor: 'var(--accent)' }} />
                            <div className="text-right text-sm text-muted mt-1">{returnCycle} Days</div>
                        </div>
                    </div>

                    <div className="p-4" style={{ border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: 'var(--radius-md)', background: 'rgba(244, 63, 94, 0.05)' }}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-muted text-sm">Currently Locked (National Reverse Logistics):</span>
                            <span className="font-heading" style={{ fontSize: '1.25rem' }}>₹{Math.round(lockedCapitalBefore).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-accent">
                            <span className="font-bold flex items-center gap-1"><Zap size={16} /> Capital Freed:</span>
                            <span className="font-heading font-bold" style={{ fontSize: '1.5rem' }}>₹{Math.round(capitalFreed).toLocaleString()}</span>
                        </div>
                    </div>
                </section>

                {/* Smart Allocation Suggestion */}
                <section className="card slide-in" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="text-primary" />
                        <h3 className="m-0">Smart Allocation Engine</h3>
                    </div>
                    <p className="text-sm text-muted mb-4">Select a category to see the recommended inventory distribution strategy based on historical marketplace data.</p>

                    <div className="input-group mb-6">
                        <label className="input-label">Product Category</label>
                        <select className="input-field" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="" disabled>Select category...</option>
                            <option value="apparel">Apparel & Fashion (High Returns)</option>
                            <option value="electronics">Electronics (Low Returns)</option>
                            <option value="beauty">Beauty & Personal Care</option>
                        </select>
                    </div>

                    {category && (
                        <div className="p-4 slide-in" style={{ border: '1px solid var(--primary)', borderRadius: 'var(--radius-md)', background: 'var(--primary-glow)' }}>
                            <h4 className="mb-2 flex items-center gap-2">
                                <ShieldCheck size={18} className="text-primary" />
                                {category === 'apparel'
                                    ? 'Tier 1 Hub Recommended'
                                    : 'Tier 2 Hub Sufficient'}
                            </h4>
                            <p className="text-sm text-main">
                                {category === 'apparel'
                                    ? 'Apparel has high RTO/Returns (out of size, fit issues). We strongly recommend Tier 1 hubs that can instantly inspect and prep garments for the next buyer, avoiding origin shipping.'
                                    : 'This category typically has lower return rates. You can optimize costs by forwarding inventory to Tier 2 hubs which handle pure storage and rapid local dispatch.'}
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default SellerDashboard;
