import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Calculator, ArrowRight, User, Package } from 'lucide-react';

const SellerOnboarding = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        skuValue: 1500,
        monthlyVolume: 1000,
        returnCycle: 17,
        city: 'Bangalore'
    });

    const handleNext = (e) => {
        e.preventDefault();
        if (step < 4) setStep(step + 1);
        else navigate('/seller/dashboard');
    };

    const calculateFreedCapital = () => {
        const rtoRate = 0.16;
        const monthlyReturns = formData.monthlyVolume * rtoRate;
        const lockedBefore = monthlyReturns * formData.skuValue * (formData.returnCycle / 30);
        const lockedAfter = monthlyReturns * formData.skuValue * (3 / 30);
        return Math.round(lockedBefore - lockedAfter).toLocaleString();
    };

    return (
        <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="text-center mb-6">
                <h1 className="mb-2">Partner with Stash-It</h1>
                <p className="text-muted">Expand your brand's reach with metro micro-fulfilment.</p>
            </div>

            <div className="flex gap-2 mb-6 justify-center">
                {[1, 2, 3, 4].map(num => (
                    <div key={num} style={{
                        width: '40px', height: '4px', borderRadius: '2px',
                        background: step >= num ? 'var(--primary)' : 'rgba(255,255,255,0.1)'
                    }} />
                ))}
            </div>

            <form className="card slide-in" onSubmit={handleNext}>

                {step === 1 && (
                    <section className="animate-in slide-in">
                        <h3 className="flex items-center gap-2 mb-4"><User className="text-primary" /> Step 1: Account Creation</h3>
                        <div className="input-group">
                            <label className="input-label">Brand Name</label>
                            <input type="text" className="input-field" placeholder="e.g. Acme Apparel" required />
                        </div>
                        <div className="grid grid-cols-2 md-grid-cols-1 gap-4">
                            <div className="input-group">
                                <label className="input-label">Phone & OTP</label>
                                <input type="text" className="input-field" placeholder="+91 99999 99999" required />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Origin City (Manufacturing Hub)</label>
                                <input type="text" className="input-field" placeholder="e.g. Tiruppur" required />
                            </div>
                        </div>
                    </section>
                )}

                {step === 2 && (
                    <section className="animate-in slide-in">
                        <h3 className="flex items-center gap-2 mb-4"><Package className="text-accent" /> Step 2: Business Profile</h3>
                        <div className="grid grid-cols-2 md-grid-cols-1 gap-4">
                            <div className="input-group">
                                <label className="input-label">Avg SKU Value (₹)</label>
                                <input type="number" className="input-field" value={formData.skuValue} onChange={e => setFormData({ ...formData, skuValue: e.target.value })} required />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Monthly Volume (Units)</label>
                                <input type="number" className="input-field" value={formData.monthlyVolume} onChange={e => setFormData({ ...formData, monthlyVolume: e.target.value })} required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label className="input-label">Current Return Cycle (Days)</label>
                            <input type="range" min="7" max="30" value={formData.returnCycle} onChange={e => setFormData({ ...formData, returnCycle: e.target.value })} className="mb-2" style={{ accentColor: 'var(--accent)' }} />
                            <div className="text-right text-sm text-accent">{formData.returnCycle} Days currently locked</div>
                        </div>
                    </section>
                )}

                {step === 3 && (
                    <section className="animate-in slide-in">
                        <h3 className="flex items-center gap-2 mb-4"><Building2 className="text-success" /> Step 3: Target Metro Selection</h3>
                        <p className="text-sm text-muted mb-4">Select your primary target city for micro-fulfilment pilot.</p>
                        <div className="grid grid-cols-3 md-grid-cols-1 gap-4">
                            {['Bangalore', 'Mumbai', 'Delhi'].map(city => (
                                <div key={city} onClick={() => setFormData({ ...formData, city })}
                                    className={`card text-center ${formData.city === city ? 'border-primary' : ''}`}
                                    style={{ cursor: 'pointer', border: formData.city === city ? '2px solid var(--primary)' : 'var(--glass-border)' }}>
                                    <h4 className="m-0">{city}</h4>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {step === 4 && (
                    <section className="animate-in slide-in text-center">
                        <h3 className="flex items-center justify-center gap-2 mb-4"><Calculator className="text-warning" /> Step 4: Capital Unlock Estimate</h3>
                        <p className="text-muted mb-6">Based on your inputs, switching to a 3-day local return cycle via Stash-It will unlock:</p>

                        <div className="p-6 mb-6 inline-block" style={{ border: '2px solid var(--success)', borderRadius: 'var(--radius-lg)', background: 'var(--success-bg)' }}>
                            <div className="font-heading text-success" style={{ fontSize: '3rem', fontWeight: 800 }}>
                                ₹{calculateFreedCapital()}
                            </div>
                            <p className="text-sm font-bold text-success uppercase tracking-wider">Estimated Free Cash Flow</p>
                        </div>

                        <div className="text-left p-4 rounded mb-6" style={{ background: 'rgba(0,0,0,0.2)' }}>
                            <h4 className="text-sm mb-2">Terms & Agreement</h4>
                            <label className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                                <input type="checkbox" required />
                                I agree to the Stash-It Seller Operating Guidelines and Liability Framework.
                            </label>
                        </div>
                    </section>
                )}

                <div className="flex justify-end mt-6 pt-4" style={{ borderTop: 'var(--glass-border)' }}>
                    <button type="submit" className="btn btn-primary">
                        {step < 4 ? 'Continue' : 'Activate Seller Account'} <ArrowRight size={18} />
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SellerOnboarding;
