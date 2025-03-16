import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Donations = () => {
    const [allCampaigns, setAllCampaigns] = useState([]);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    // ✅ All Campaigns Fetch করা
    useEffect(() => {
        fetch('http://localhost:5000/AllCampaigns')
            .then(res => res.json())
            .then(data => setAllCampaigns(data));
    }, []);

    // ✅ ক্যাম্পেইন সিলেক্ট করা
    const handleCampaignSelect = (id) => {
        const campaign = allCampaigns.find(c => c._id === id);
        setSelectedCampaign(campaign);
    };

    // ✅ Donation Handle করা
    const handelDonatedCampaign = e => {
        e.preventDefault();

        const form = e.target;
        const donation = form.donation.value;
        const amount = form.amount.value;

        const newDonation = {
            name: selectedCampaign.name,
            porpuse: selectedCampaign.porpuse,
            donation,
            amount,
            photo: selectedCampaign.photo
        };

        // ✅ Donation Send করা
        fetch('http://localhost:5000/AllCampaigns', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newDonation)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Donation Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        });
    };

    return (
        <div className="bg-orange-50 px-20 py-10">
            <h2 className="text-3xl text-center font-extrabold">Donate to a Campaign</h2>

            {/* ✅ All Campaigns Display */}
            <div className="mt-5">
                <h3>Select a Campaign to Donate</h3>
                <div className="flex gap-5">
                    {allCampaigns.map(campaign => (
                        <button 
                            key={campaign._id} 
                            onClick={() => handleCampaignSelect(campaign._id)}
                            className="btn btn-neutral"
                        >
                            {campaign.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* ✅ Selected Campaign Data */}
            {selectedCampaign && (
                <div className="mt-10">
                    <h3 className="text-2xl font-bold">{selectedCampaign.name}</h3>
                    <p>{selectedCampaign.porpuse}</p>
                    <p>Amount Needed: ${selectedCampaign.amount}</p>
                    <img src={selectedCampaign.photo} alt={selectedCampaign.name} className="w-48" />
                </div>
            )}

            {/* ✅ Donation Form */}
            {selectedCampaign && (
                <form onSubmit={handelDonatedCampaign} className="mt-5">
                    <div className="md:flex gap-5">
                        <div className="md:w-1/2 mb-10">
                            <p className="pb-2">Donation</p>
                            <input
                                className="md:w-full pl-4 py-1 border-gray-300 border-2 rounded-md"
                                type="text"
                                name="donation"
                                placeholder="Donation Description"
                                required
                            />
                        </div>
                        <div className="md:w-1/2">
                            <p className="pb-2">Amount</p>
                            <input
                                className="md:w-full pl-4 py-1 border-gray-300 border-2 rounded-md"
                                type="text"
                                name="amount"
                                placeholder="Amount"
                                required
                            />
                        </div>
                    </div>
                    <input type="submit" value="Donate Now" className="btn btn-block btn-neutral" />
                </form>
            )}
        </div>
    );
};

export default Donations;
