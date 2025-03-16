import React from 'react';
import banner1 from '../assets/banner1.avif'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.webp'
import banner4 from '../assets/banner4.jpg'
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import AllCampaign from './AllCampaign';











const Home = () => {

  const campaigns = useLoaderData()







    return (
        <div className='my-10'> 
        {/* benner section */}
        <section>
  <div className="carousel w-full">
    
    {/* Slide 1 */}
    <div id="slide1" className="carousel-item relative w-full">
      <figure className="w-full h-48 md:h-96">
        <img className="w-full h-full object-cover rounded-lg" src={banner1} alt="Banner 1" />
      </figure>
      <div className="absolute inset-0 flex justify-between items-center px-5">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>

    {/* Slide 2 */}
    <div id="slide2" className="carousel-item relative w-full">
      <figure className="w-full h-48 md:h-96">
        <img className="w-full h-full object-cover rounded-lg" src={banner2} alt="Banner 2" />
      </figure>
      <div className="absolute inset-0 flex justify-between items-center px-5">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>

    {/* Slide 3 */}
    <div id="slide3" className="carousel-item relative w-full">
      <figure className="w-full h-48 md:h-96">
        <img className="w-full h-full object-cover rounded-lg" src={banner3} alt="Banner 3" />
      </figure>
      <div className="absolute inset-0 flex justify-between items-center px-5">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>

    {/* Slide 4 */}
    <div id="slide4" className="carousel-item relative w-full">
      <figure className="w-full h-48 md:h-96">
        <img className="w-full h-full object-cover rounded-lg" src={banner4} alt="Banner 4" />
      </figure>
      <div className="absolute inset-0 flex justify-between items-center px-5">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>

  </div>
</section>




            
{/* added  the campaigner */}

            
          <div className='grid md:grid-cols-3 gap-6 p-6'>
                
          {
                  campaigns.slice(0,6).map(campaign => <AllCampaign 
                    key={campaign._id}
                    campaign = {campaign}
                  > 
                  </AllCampaign> )
                } 
               

          </div>
         <div className='flex justify-center m-4'>
         <Link to='SeeMore' className='btn btn-neutral font-bold text-white'> See More</Link>
         </div>

{/* exploit the business section */}


<section className='my-14 mx-4' >
 <h2 className="text-5xl text-center m-8">Explore Industries</h2>
 <div className='md:grid md:grid-cols-3 gap-6 mb-5 md:mb-0 '>
  <figure >
  <img className='h-80 mb-5 md:mb-0' src='/src/assets/sec1.jpg' alt="" />
  </figure>
  <figure>
  <img className='h-80 mb-5 md:mb-0' src='/src/assets/sec2.jpg' alt="" />
  </figure>
  
  <figure>
  <img className='h-80 mb-5 md:mb-0' src='/src/assets/sec4.jpg' alt="" />
  </figure>
  
  <figure>
  <img className='h-80 mb-5 md:mb-0' src='/src/assets/sec6.jpg' alt="" />
  </figure>
  <figure>
  <img className='h-80 mb-5 md:mb-0' src='/src/assets/img7.jpg' alt="" />
  </figure>
  
  <figure>
  <img className='h-80 mb-5 md:mb-0' src='/src/assets/sec9.jpg' alt="" />
  </figure>
 
  

 </div>


</section>


{/* section giving funding */}

     <section className='my-14 mx-4'>
          <div className='md:flex md:justify-around md:gap-8  w-full'>
             <div className='md:w-2/3 '>
                  <h2 className=" text-5xl font-extrabold p-3 md:pl-8 leading-tight mb-5 ">“Fundraising is the <br></br> gentle art of teaching <br></br> the joy of giving.” </h2>
             </div>
             <div className='md:w-1/3'>
                  <img src="/src/assets/funding.jpeg" alt="" />
             </div>
          </div>

      </section>

      {/* last section */}
      <section className="py-10 bg-gray-50">
  <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    {/* Become a Volunteer */}
    <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-md">
      <img className="w-16 h-16 object-cover rounded-full" src="/src/assets/volunteer.jpeg" alt="Volunteer" />
      <div>
        <h2 className="text-lg font-semibold">Become a Volunteer</h2>
        <p className="text-sm text-gray-600">Join a cause and contribute your time to make a difference.</p>
      </div>
    </div>

    {/* Quick Fundraising */}
    <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-md">
      <img className="w-16 h-16 object-cover rounded-full" src="/src/assets/quickfunding.png" alt="Quick Fundraising" />
      <div>
        <h2 className="text-lg font-semibold">Quick Fundraising</h2>
        <p className="text-sm text-gray-600">Raise donations fast for causes, projects, or emergencies.</p>
      </div>
    </div>

    {/* Start Donating */}
    <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-md">
      <img className="w-16 h-16 object-cover rounded-full" src="/src/assets/donation.jpg" alt="Start Donating" />
      <div>
        <h2 className="text-lg font-semibold">Start Donating</h2>
        <p className="text-sm text-gray-600">Begin contributing to meaningful causes and make an impact.</p>
      </div>
    </div>

  </div>
</section>



          </div>

     

   
        
    );
};

export default Home;