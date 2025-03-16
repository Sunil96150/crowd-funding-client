import React from 'react';
import { Link } from 'react-router-dom';

const AllCampaign = ({campaign}) => {

        const {name, photo, Description} = campaign || {} ;
    return (
        <div className="card bg-base-100 shadow-lg p-4 rounded-lg ">
 <div className=''>
 <div>
 <figure>
         <img src={photo} alt={name} className="w-full h-48 object-cover rounded-lg"/>
     </figure>
  </div>
  <div className="card-body">
    <h3 className="text-xl font-semibold">{campaign.name}</h3>
     <p className="text-gray-600">{campaign.Description?.slice(0, 50)}...</p>

    <div className="card-actions justify-end pt-5">
    <button className="btn btn-primary w-full mt-4"><Link to ='/donations'>Donated Now!</Link></button>
    </div>
    </div>
    
   
   
  
 </div>
</div>
    );
};

export default AllCampaign;