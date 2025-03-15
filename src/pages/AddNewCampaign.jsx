import React from 'react';

const AddNewCampaign = () => {

const handelAddCampaign = e =>{
    e.preventDefault();

    const form = e.target;

    const campaign = form.campaign.value
    const porpuse = form.porpuse.value
    const campaignType = form.campaignType.value
    const city = form.city.value
    const photo = form.photo.value
    
    const newCampaign = {campaign , porpuse, campaignType , city , photo}

    console.log(newCampaign)
}




    return (
        <div className=' bg-orange-100 px-20 py-10'>
            <div className='py-10'>
                <h2 className="text-3xl text-center font-extrabold"> Add Campaign</h2>
                <p className=''></p>
            </div>
            <form onSubmit={handelAddCampaign}>
                <div className=' md:flex gap-5 '>
                    <div className='md:w-1/2 mb-10 '>
                        <p className='pb-2'>Campaign Name</p> 
                        <input className='md:w-full pl-4 py-1 border-gray-300 border-2 rounded-md' type="text" name='campaign' placeholder='Campaign Name' required />
                    </div>
                    <div className='md:w-1/2'>
                        <p className='pb-2'>Porpuse</p> 
                        <input className='md:w-full pl-4 p-1 border-gray-300 border-2 rounded-md' type="text" name='porpuse' placeholder='porpuse' required />
                    </div>
                </div>
                <div className=' md:flex gap-5 '>
                    <div className='md:w-1/2 mb-10 '>
                        <p className='pb-2'>Type of Campaign</p> 
                        <input className='md:w-full pl-4 py-1 border-gray-300 border-2 rounded-md' type="text" name='campaignType' placeholder='Campaign Type' required />
                    </div>
                    <div className='md:w-1/2'>
                        <p className='pb-2'>City</p> 
                        <input className='md:w-full pl-4 p-1 border-gray-300 border-2 rounded-md' type="text" name='city' placeholder='City' required />
                    </div>
                    
                   
                </div>
                <div className='mb-10'>
                        <p className='pb-2'>Photo URL</p> 
                        <input className='md:w-full pl-4 p-1 border-gray-300 border-2 rounded-md' type="text" name='photo' placeholder='Photo URL' required />
                    </div>
                    <input type="submit" value="Add Campaign" className="btn btn-block" />
               
            </form>
        </div>
    );
};

export default AddNewCampaign;