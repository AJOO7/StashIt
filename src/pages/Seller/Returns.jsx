import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, CheckCircle, XCircle, ArrowLeft, RefreshCw, AlertCircle } from 'lucide-react';

const Returns = () => {
    const [condition, setCondition] = useState('new');
    const [actionTaken, setActionTaken] = useState(false);

    return (
        <div className="page-container">
            <Link to="/seller/dashboard" className="btn btn-outline mb-6 text-sm" style={{ padding: '0.5rem 1rem' }}>
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="mb-1">Returns Vault</h1>
                    <p className="text-muted">Review returned items locally inspected by Tier 1 Hosts.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md-grid-cols-1 gap-6">

                {/* Returns List */}
                <section className="card">
                    <h3 className="mb-4">Pending Review (1)</h3>

                    <div className="p-3 mb-3 cursor-pointer" style={{ border: '1px solid var(--primary)', borderRadius: 'var(--radius-md)', background: 'var(--primary-glow)' }}>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="mb-1 text-main">R-88329 (Smartphone Case)</h4>
                                <p className="text-sm text-muted">Customer Reason: Changed Mind</p>
                            </div>
                            <span className="badge badge-warning">Awaiting Decision</span>
                        </div>
                        <p className="text-xs text-muted flex items-center gap-1"><Clock size={12} /> Inspected 1 hr ago at Hub #4092</p>
                    </div>

                    <div className="p-3 cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.2)' }}>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="mb-1 text-muted">R-88310 (Leather Wallet)</h4>
                                <p className="text-sm text-muted">Customer Reason: Damaged</p>
                            </div>
                            <span className="badge badge-success">Approved for Resale</span>
                        </div>
                        <p className="text-xs text-muted flex items-center gap-1"><CheckCircle size={12} /> Decision made yesterday</p>
                    </div>

                </section>

                {/* Evidence Vault & Action Panel */}
                <section className="card slide-in">
                    <div className="flex items-center gap-2 mb-4">
                        <Camera className="text-primary" />
                        <h3 className="m-0">Evidence Vault: R-88329</h3>
                    </div>

                    <div className="grid grid-cols-2 md-grid-cols-1 gap-2 mb-4">
                        <div style={{ height: '150px', background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(255,255,255,0.2)' }}>
                            <span className="text-sm text-muted">📸 Main Item Photo</span>
                        </div>
                        <div style={{ height: '150px', background: 'rgba(0,0,0,0.3)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed rgba(255,255,255,0.2)' }}>
                            <span className="text-sm text-muted">📸 Packaging Condition</span>
                        </div>
                    </div>

                    <div className="mb-6 p-3" style={{ background: 'rgba(15, 23, 42, 0.6)', borderRadius: 'var(--radius-sm)' }}>
                        <h4 className="text-sm mb-2 text-muted">Host Inspection Notes</h4>
                        <p className="text-sm">"Package opened but product is unused and in perfect condition. Original tags are attached."</p>
                    </div>

                    <div className="input-group mb-6">
                        <label className="input-label">Assess Condition</label>
                        <select className="input-field" value={condition} onChange={(e) => setCondition(e.target.value)} disabled={actionTaken}>
                            <option value="new">Brand New (Ready for Resale)</option>
                            <option value="light">Lightly Used (B-Grade)</option>
                            <option value="damaged">Damaged (Liquidate/RTO)</option>
                            <option value="missing">Packaging Missing (Needs Repacking)</option>
                        </select>
                    </div>

                    {!actionTaken ? (
                        <div className="flex flex-wrap gap-4">
                            <button className="btn btn-primary flex-1 items-center justify-center" onClick={() => setActionTaken(true)}>
                                <RefreshCw size={18} /> Approve Resale Locally
                            </button>
                            <button className="btn btn-outline flex-[0.5] items-center justify-center text-danger border-danger">
                                Request Origin RTO
                            </button>
                        </div>
                    ) : (
                        <div className="p-4 flex items-center justify-center gap-2 text-success font-bold" style={{ border: '1px solid var(--success)', borderRadius: 'var(--radius-md)', background: 'var(--success-bg)' }}>
                            <CheckCircle size={20} /> Item marked available for Local Dispatch
                        </div>
                    )}

                    {!actionTaken && (
                        <p className="text-xs text-muted text-center mt-4">SLA: Must decide within 24 hours of inspection.</p>
                    )}
                </section>

            </div>
        </div>
    );
};

export default Returns;
