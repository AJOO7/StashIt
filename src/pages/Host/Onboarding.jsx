import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, MapPin, Ruler, Shield, ArrowRight, HomeIcon, IndianRupee, FileText } from 'lucide-react';

const HostOnboarding = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [tier, setTier] = useState('');

    const [pricing, setPricing] = useState({
        storage: 100,
        dispatch: 10,
        inspection: 25
    });

    const handleNext = (e) => {
        e.preventDefault();
        if (step < 5) setStep(step + 1);
        else navigate('/host/dashboard');
    };

    const calculateEarnings = () => {
        let base = pricing.storage * 100; // Assume 100 cartons filled
        let disp = pricing.dispatch * 50; // Assume 50 dispatches/month
        let insp = tier === 'tier1' ? pricing.inspection * 10 : 0; // Assume 10 returns/month
        return base + disp + insp;
    };

    return (
        <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="text-center mb-6">
                <h1 className="mb-2">Become a Verified Host</h1>
                <p className="text-muted">Turn your unused space into a micro-fulfilment hub.</p>
            </div>

            <div className="flex gap-2 mb-6 justify-center">
                {[1, 2, 3, 4, 5].map(num => (
                    <div key={num} style={{
                        width: '30px', height: '4px', borderRadius: '2px',
                        background: step >= num ? 'var(--primary)' : 'rgba(255,255,255,0.1)'
                    }} />
                ))}
            </div>

            <form className="card slide-in" onSubmit={handleNext}>

                {/* Step 1: KYC */}
                {step === 1 && (
                    <section className="animate-in slide-in">
                        <h3 className="flex items-center gap-2 mb-4"><Shield className="text-primary" /> Step 1: Identity & KYC</h3>
                        <div className="input-group">
                            <label className="input-label">Full Name / Business Name</label>
                            <input type="text" className="input-field" placeholder="e.g. Ramesh Kumar" required />
                        </div>
                        <div className="grid grid-cols-2 md-grid-cols-1 gap-4">
                            <div className="input-group">
                                <label className="input-label">Phone & OTP</label>
                                <input type="text" className="input-field" placeholder="+91 99999 99999" required />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Aadhar / PAN Verification</label>
                                <div className="input-field flex items-center gap-2" style={{ cursor: 'pointer' }}>
                                    <Upload size={18} className="text-muted" />
                                    <span className="text-muted text-sm">Upload Document</span>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Step 2: Space Setup */}
                {step === 2 && (
                    <section className="animate-in slide-in">
                        <h3 className="flex items-center gap-2 mb-4"><HomeIcon className="text-accent" /> Step 2: Space & Capacity</h3>
                        <div className="grid grid-cols-2 md-grid-cols-1 gap-4 mb-4">
                            <div className="input-group">
                                <label className="input-label">Property Type</label>
                                <select className="input-field">
                                    <option>Independent House / Garage</option>
                                    <option>Commercial Godown</option>
                                    <option>Retail Store Backroom</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label className="input-label flex items-center gap-1"><MapPin size={16} /> City</label>
                                <input type="text" className="input-field" placeholder="e.g. Bengaluru" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md-grid-cols-1 gap-4 mb-4">
                            <div className="input-group">
                                <label className="input-label flex items-center gap-1"><Ruler size={16} /> Area (Sq Ft)</label>
                                <input type="number" className="input-field" placeholder="200" required />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Max Cartons Capacity</label>
                                <input type="number" className="input-field" placeholder="e.g. 500" required />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="input-label mb-2 block">Available Booking Slots</label>
                            <select className="input-field w-full">
                                <option>09:00 AM - 12:00 PM</option>
                                <option>14:00 PM - 18:00 PM</option>
                                <option>All Day (09:00 - 18:00)</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label className="input-label">Service Tier</label>
                            <div className="flex gap-4">
                                <div onClick={() => setTier('tier2')} className={`card flex-1 p-3 text-center cursor-pointer ${tier === 'tier2' ? 'border-primary' : ''}`} style={{ border: tier === 'tier2' ? '2px solid var(--primary)' : 'var(--glass-border)' }}>
                                    <h4 className="text-sm m-0">Tier 2</h4><span className="text-xs text-muted">Storage Only</span>
                                </div>
                                <div onClick={() => setTier('tier1')} className={`card flex-1 p-3 text-center cursor-pointer ${tier === 'tier1' ? 'border-primary' : ''}`} style={{ border: tier === 'tier1' ? '2px solid var(--primary)' : 'var(--glass-border)' }}>
                                    <h4 className="text-sm m-0">Tier 1</h4><span className="text-xs text-muted">Storage + Returns</span>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Step 3: Pricing Setup */}
                {step === 3 && (
                    <section className="animate-in slide-in">
                        <h3 className="flex items-center gap-2 mb-4"><IndianRupee className="text-success" /> Step 3: Pricing Setup</h3>
                        <p className="text-sm text-muted mb-4">Set your rates. Competitive pricing secures more volume.</p>

                        <div className="grid grid-cols-2 md-grid-cols-1 gap-4">
                            <div className="input-group">
                                <label className="input-label">Storage Price / Carton / Month (₹)</label>
                                <input type="number" className="input-field" value={pricing.storage} onChange={e => setPricing({ ...pricing, storage: Number(e.target.value) })} required />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Dispatch Handling Fee / Order (₹)</label>
                                <input type="number" className="input-field" value={pricing.dispatch} onChange={e => setPricing({ ...pricing, dispatch: Number(e.target.value) })} required />
                            </div>
                        </div>

                        {tier === 'tier1' && (
                            <div className="input-group">
                                <label className="input-label flex items-center gap-1 text-accent">Return Inspection Fee / Item (₹)</label>
                                <input type="number" className="input-field border-accent" value={pricing.inspection} onChange={e => setPricing({ ...pricing, inspection: Number(e.target.value) })} required />
                                <span className="text-xs text-muted">Only applicable for Tier 1 hosts executing condition checks.</span>
                            </div>
                        )}

                        <div className="p-4 mt-6 text-center" style={{ border: '1px dashed var(--success)', borderRadius: 'var(--radius-md)', background: 'var(--success-bg)' }}>
                            <p className="text-xs text-muted font-bold uppercase mb-1">Estimated Monthly Earnings</p>
                            <div className="font-heading text-success" style={{ fontSize: '2rem' }}>₹{calculateEarnings().toLocaleString()}</div>
                            <p className="text-xs text-muted mt-1">Based on 100 cartons and 50 dispatches/month.</p>
                        </div>
                    </section>
                )}

                {/* Step 4 & 5: Agreement */}
                {step === 4 && (
                    <section className="animate-in slide-in text-center py-6">
                        <h3 className="flex justify-center items-center gap-2 mb-4"><FileText className="text-warning" /> Step 4: SOP & Liability Agreement</h3>
                        <p className="text-muted mb-6">You must review and accept the operational boundaries to activate the hub.</p>

                        <div className="text-left p-4 rounded mb-6 mx-auto" style={{ maxWidth: '500px', background: 'rgba(0,0,0,0.2)' }}>
                            <label className="flex items-start gap-3 text-sm cursor-pointer mb-3">
                                <input type="checkbox" required className="mt-1" />
                                <span>I agree to the <strong>Host Inspection Protocol</strong> (Visual inspection within 24 hours of RTO arrival).</span>
                            </label>
                            <label className="flex items-start gap-3 text-sm cursor-pointer">
                                <input type="checkbox" required className="mt-1" />
                                <span>I agree to the <strong>Liability Boundaries</strong> covering theft/mishandling within my premises.</span>
                            </label>
                        </div>
                    </section>
                )}

                <div className="flex justify-between items-center mt-6 pt-4" style={{ borderTop: 'var(--glass-border)' }}>
                    <span className="text-sm text-muted">
                        {step === 5 ? 'Pending Admin Approval' : `Step ${step} of 4`}
                    </span>
                    <button type="submit" className="btn btn-primary">
                        {step < 4 ? 'Continue' : 'Submit Application'} <ArrowRight size={18} />
                    </button>
                </div>

            </form>
        </div>
    );
};

export default HostOnboarding;
