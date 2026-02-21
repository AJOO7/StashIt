import { Scale, ShieldCheck, Box, RefreshCw } from 'lucide-react';

const Liability = () => {
    return (
        <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="text-center mb-8">
                <h1 className="mb-2">Liability Boundaries</h1>
                <p className="text-muted">Clear delineation of responsibility across the micro-fulfilment lifecycle.</p>
            </div>

            <div className="card mb-6 slide-in" style={{ animationDelay: '0.1s' }}>
                <div className="grid grid-cols-2 md-grid-cols-1 gap-6">
                    <div>
                        <h3 className="mb-4 flex items-center gap-2"><Box className="text-primary" /> 1. Storage Phase</h3>
                        <p className="text-sm text-muted mb-4">While inventory rests at the Host's location.</p>

                        <div className="p-3 mb-3 border-l-4" style={{ borderLeft: '4px solid var(--success)', background: 'rgba(16, 185, 129, 0.05)' }}>
                            <strong className="text-sm">Host Liability:</strong>
                            <p className="text-xs text-muted mt-1">Responsible for loss due to theft or mishandling within their premises (up to the declared cap value).</p>
                        </div>

                        <div className="p-3 border-l-4" style={{ borderLeft: '4px solid var(--primary)', background: 'rgba(99, 102, 241, 0.05)' }}>
                            <strong className="text-sm">Seller Liability:</strong>
                            <p className="text-xs text-muted mt-1">Responsible for inherent product defects or items arriving damaged prior to host check-in.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 flex items-center gap-2"><Scale className="text-warning" /> 2. Forward Transit</h3>
                        <p className="text-sm text-muted mb-4">From Hub pickup to Customer doorstep.</p>

                        <div className="p-3 mb-3 border-l-4" style={{ borderLeft: '4px solid var(--accent)', background: 'rgba(244, 63, 94, 0.05)' }}>
                            <strong className="text-sm">Logistics Partner Liability:</strong>
                            <p className="text-xs text-muted mt-1">Full liability for lost or damaged parcels assumed immediately after successful OTP-verified handover from the Host.</p>
                        </div>

                        <div className="p-3 border-l-4" style={{ borderLeft: '4px solid var(--success)', background: 'rgba(16, 185, 129, 0.05)' }}>
                            <strong className="text-sm">Host Liability:</strong>
                            <p className="text-xs text-muted mt-1">Zero liability once the parcel is handed over. Rider accepts structural integrity upon pickup.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card slide-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="mb-4 flex items-center gap-2 text-danger"><RefreshCw className="text-danger" /> 3. Returns Intake (Tier 1 Hosts)</h3>
                <p className="text-sm text-muted mb-4">When a customer return arrives back at the micro-hub.</p>

                <div className="grid grid-cols-2 md-grid-cols-1 gap-4">
                    <div className="p-4 rounded" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
                        <h4 className="text-sm mb-2 text-primary">If Item is Damaged Upon Return</h4>
                        <p className="text-sm text-muted mb-2">Host must photograph the damage within 24 hours.</p>
                        <span className="badge badge-warning">Liability: Customer / Carrier</span>
                    </div>

                    <div className="p-4 rounded" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
                        <h4 className="text-sm mb-2 text-primary">If Item Approved Locally</h4>
                        <p className="text-sm text-muted mb-2">Host graded the item "Brand New" but the subsequent buyer reports stains/damage.</p>
                        <span className="badge badge-danger">Liability: Host Penalty Extracted</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Liability;
