import { Link } from 'react-router-dom';
import { Package, Clock, AlertCircle, ArrowLeft } from 'lucide-react';

const Inventory = () => {
    return (
        <div className="page-container">
            <Link to="/seller/dashboard" className="btn btn-outline mb-6 text-sm" style={{ padding: '0.5rem 1rem' }}>
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="mb-1">Inventory State Machine</h1>
                    <p className="text-muted">Track SKUs distributed across micro-fulfilment hubs.</p>
                </div>
            </div>

            <div className="card slide-in">
                <h3 className="mb-4">SKU: APP-TSHIRT-BLK-L</h3>

                <div className="flex flex-col gap-4">

                    <div className="flex items-start gap-4 p-4" style={{ border: '1px solid var(--success)', borderRadius: 'var(--radius-md)', background: 'var(--success-bg)' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--success)', marginTop: '6px', boxShadow: '0 0 10px var(--success)' }}></div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <h4 className="m-0 text-success">Deployed to Tier 1 Hub</h4>
                                <span className="text-sm text-muted">2 Hours Ago</span>
                            </div>
                            <p className="text-sm text-muted mb-2">Location: Koramangala Hub (Host ID: 4092)</p>
                            <div className="badge badge-success">Healthy</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4" style={{ border: '1px solid var(--warning)', borderRadius: 'var(--radius-md)', background: 'var(--warning-bg)' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--warning)', marginTop: '6px', boxShadow: '0 0 10px var(--warning)' }}></div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <h4 className="m-0 text-warning">Forward Transit (Last Mile)</h4>
                                <span className="text-sm text-muted">3 Days Ago</span>
                            </div>
                            <p className="text-sm text-muted mb-2">Order #9812. Delayed by intracity logistics.</p>
                            <div className="flex gap-2 items-center">
                                <div className="badge badge-warning flex items-center gap-1"><AlertCircle size={12} /> Delayed</div>
                                <span className="text-sm text-muted">Stuck &gt; 2 days.</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.2)' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--text-muted)', marginTop: '6px' }}></div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <h4 className="m-0 text-muted">Origin Warehouse</h4>
                                <span className="text-sm text-muted">5 Days Ago</span>
                            </div>
                            <p className="text-sm text-muted mb-2">Batch #102 prepared for micro-fulfilment allocation.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Inventory;
