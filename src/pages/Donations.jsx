import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Donations = () => {
    const [allCampaigns, setAllCampaigns] = useState([]);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

   
    useEffect(() => {
        fetch('https://funding-crowed-server.vercel.app/AllCampaigns')
            .then(res => res.json())
            .then(data => setAllCampaigns(data));
    }, []);

    
    const handleCampaignSelect = (id) => {
        const campaign = allCampaigns.find(c => c._id === id);
        setSelectedCampaign(campaign);
    };

  
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

       
        fetch('https://funding-crowed-server.vercel.app/AllCampaigns', {
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

            
            <div className="mt-5">
                <h3 className='my-5'>Select a Campaign to Donate</h3>
                <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-5">
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

          
            {selectedCampaign && (
                <div className="mt-10">
                    <h3 className="text-2xl font-bold">{selectedCampaign.name}</h3>
                    <p>{selectedCampaign.porpuse}</p>
                    <p>Amount Needed: ${selectedCampaign.amount}</p>
                    <img src={selectedCampaign.photo} alt={selectedCampaign.name} className="w-48" />
                </div>
            )}

          
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
