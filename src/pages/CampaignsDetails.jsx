import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CampaignsDetails = () => {
    const campaign= useLoaderData();
    console.log('Campaign Details Data:', campaign);
    return (
       <div>
            
       </div>
    );
};

export default CampaignsDetails;