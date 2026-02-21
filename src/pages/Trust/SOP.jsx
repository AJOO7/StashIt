import { BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';

const SOP = () => {
    return (
        <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="text-center mb-8">
                <h1 className="mb-2">Standard Operating Procedures <span className="badge badge-primary">v1.2</span></h1>
                <p className="text-muted">Guidelines for maintaining operational excellence and trust on Stash-It.</p>
            </div>

            <section className="card mb-6 slide-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="mb-4 flex items-center gap-2"><BookOpen className="text-primary" /> 1. Host Inspection Protocol (Tier 1)</h3>
                <p className="text-sm text-muted mb-4">Tier 1 hosts are responsible for receiving and inspecting customer returns before authorising them for local resale.</p>

                <ul className="text-sm flex flex-col gap-3">
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">1.1</span>
                        <div>
                            <strong>Visual Inspection within 24 Hours:</strong>
                            <p className="text-muted mt-1">Open the courier package under well-lit conditions. Ensure the item matches the RTO manifest description.</p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">1.2</span>
                        <div>
                            <strong>Mandatory Photographic Evidence:</strong>
                            <p className="text-muted mt-1">Capture at least two clear photographs: (1) The item's overall condition, (2) The original tags or any visible defects. Upload to the Evidence Vault.</p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">1.3</span>
                        <div>
                            <strong>Condition Grading:</strong>
                            <p className="text-muted mt-1">Categorize strictly as Brand New, Lightly Used, or Damaged. Only 'Brand New' items can be instantly restocked for immediate local dispatch.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="card mb-6 slide-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="mb-4 flex items-center gap-2"><CheckCircle className="text-success" /> 2. Packaging Rules</h3>
                <div className="p-4 rounded" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <h4 className="text-sm text-success mb-2">Seller Responsibility</h4>
                    <p className="text-sm text-muted">All forward-deployed inventory must be pre-packaged in ship-ready, tamper-evident courier bags or cartons. Hosts are not responsible for primary product packaging.</p>
                </div>
            </section>

            <section className="card slide-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="mb-4 flex items-center gap-2 text-warning"><AlertTriangle className="text-warning" /> 3. Logistics Handovers</h3>
                <ul className="text-sm flex flex-col gap-3 list-disc pl-5">
                    <li className="text-muted">Hosts must strictly adhere to their declared Availability Slots.</li>
                    <li className="text-muted">A uniquely generated OTP must be shared with the intracity rider only <strong className="text-main">after</strong> the physical handover of the parcel is complete.</li>
                    <li className="text-muted">Failure to hand over a ready parcel during a scheduled slot will negatively impact the Host's Reliability Score.</li>
                </ul>
            </section>
        </div>
    );
};

export default SOP;
