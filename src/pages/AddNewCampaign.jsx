import React from 'react';
import Swal from 'sweetalert2'

const AddNewCampaign = () => {

const handelAddCampaign = e =>{
    e.preventDefault();

    const form = e.target;

    const name = form.name.value
    const porpuse = form.porpuse.value
    const campaignType = form.campaignType.value
    const city = form.city.value
    const photo = form.photo.value
    const Description = form.Description.value
    
    const newCampaigns = {name , porpuse, campaignType , city , photo, Description}

    console.log(newCampaigns)

    //send server side
  fetch('http://localhost:5000/AllCampaigns' , {
    method : 'POST',
    headers :{
        'content-type' : 'application/json'
    },
    body : JSON.stringify(newCampaigns)
  } )
  .then(res => res.json())
  .then(data =>{
    console.log(data)


    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Campaign Add successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
  })
}




    return (
        <div className=' bg-orange-50 px-20 py-10'>
            <div className='py-10'>
                <h2 className="text-3xl text-center font-extrabold"> Add Campaign</h2>
                <p className=''></p>
            </div>
            <form onSubmit={handelAddCampaign}>
                <div className=' md:flex gap-5 '>
                    <div className='md:w-1/2 mb-10 '>
                        <p className='pb-2'>Campaign Name</p> 
                        <input className='md:w-full pl-4 py-1 border-gray-300 border-2 rounded-md' type="text" name='name' placeholder='Campaign Name' required />
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
                    <div className='mb-10'>
                        <p className='pb-2'>Description</p> 
                        <input className='md:w-full pl-4 p-1 border-gray-300 border-2 rounded-md textarea' type="text" name='Description' placeholder='Description'  required />
                    </div>
                    <input type="submit" value="Add Campaign" className="btn btn-block btn-neutral" />
               
            </form>
        </div>
    );
};

export default AddNewCampaign;