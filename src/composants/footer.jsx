const Footer = () => {
    return ( 
      <section className="justify-center flex items-center  ">
        <section className="bg-slate-900 w-full min-h-80 relative md:flex flex-wrap justify-center px-20 md:px-0">
          <div className=" p-5 mt-10 ">
             <div className="flex">
                <img src="/Assets/Icon2.png" alt="" className="w-[30px] h-[25px]"/>
                <p className="ml-4 text-2xl font-bold text-[#1FFFFF]">Nexcent</p>
             </div>
             <div className="mt-[16px] ml-[10px] text-white">
              <p className="mt-5">Copyright © 2020 Nexcent ltd.</p>
              <p className="mt-3">All rights reserved</p>
             </div>
             <div className="flex mt-9">
                <img src="/Assets/insta.png" alt="" className="ml-" />
                <img src="/Assets/rond.png" alt="" className="ml-2" />
                <img src="/Assets/twitter.png" alt="" className="ml-2" />
                <img src="/Assets/youtube.png" alt=""  className="ml-2"/>

             </div>
          </div>
          <div className="flex flex-col p-[3%] pl-[10%] mt-5">
            <p className="text-white text-xl font-semibold">Company</p>
            <p className="mt-3 text-white">About Us</p>
            <p className="mt-2 text-white">Blog</p>
            <p className="mt-2 text-white">Contact Us</p>
            <p className="mt-2 text-white">Pricing</p>
            <p className="mt-2 text-white">Testimonials</p>
          </div>
          <div className="flex flex-col p-[3%] pl-[10%] mt-5">
            <p className="text-white text-xl font-semibold">Support</p>
            <p className="mt-3 text-white">Help center</p>
            <p className="mt-2 text-white">Terms of service</p>
            <p className="mt-2 text-white">Legal</p>
            <p className="mt-2 text-white">Privacy policy</p>
            <p className="mt-2 text-white">Status</p>
          </div>
          <div className="flex flex-col p-[3%] pl-[10%] mt-5">
            <p className="text-white text-xl font-semibold">Stay up to date</p>
            <div className="flex bg-slate-500  rounded-lg mt-6 cursor-pointer hover:bg-slate-500">
            <input type="text" placeholder="Your email adress" className="bg-slate-500 rounded-l-lg w-[60%] hover:bg-slate-500 cursor-pointer text-white" />
            <img src="/Assets/send.png" alt=""  className="p-3 mr-5"/>
            </div>
            
                
                
               
             
               
           
          </div>
        </section>
      </section>
        
     );
}
 
export default Footer;