import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CampaignsDetails from './CampaignsDetails';
import Swal from 'sweetalert2';

const SeeMore = () => {
    const allCampaigns = useLoaderData()
    console.log(allCampaigns)
    const [allCampaign , setAllCampaign] = useState(allCampaigns)

    const handelDelete = id => {
        console.log(id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });


            fetch(`https://funding-crowed-server.vercel.app/AllCampaigns/${id}` , {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount >0){
                         Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                          });

                          const remaining = allCampaign.filter(camp => camp._id !== id)
                          setAllCampaign(remaining)
                }
            })
            }
          });

        
          

    }
    return (
        <div>
           

            <div className="grid md:grid-cols-3 gap-6 p-6">
                {allCampaign.map(campaign => (
                    <div key={campaign._id} className="card bg-base-100 shadow-lg p-4 rounded-lg">
                        <figure>
                            <img src={campaign.photo} alt={campaign.name} className="w-full h-48 object-cover rounded-lg"/>
                        </figure>
                        <div className="card-body">
                            <h3 className="text-xl font-semibold">{campaign.name}</h3>
                            <p className="text-gray-600">{campaign.Description?.slice(0, 50)}...</p>
                            <Link to='/donations' className='btn text-blue-700'>Donate Now!</Link>
                            <div className='flex gap-6 '>
                            <button 
                            onClick={()=> handelDelete(campaign._id)}
                            className='btn btn-primary w-1/2 mt-4 '>Delete</button>
                            <Link className='w-1/2 mt-4'
                             to={`/UpdateCampaign/${campaign._id}`}>
                            <button className='btn btn-primary w-full'>Edit</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                   
                ))}
            </div>
        </div>
    );
};

export default SeeMore;