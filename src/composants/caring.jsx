import { FaArrowRightLong } from "react-icons/fa6";
const Caring = () => {
    const blogs = [
        {
            id:1,
            description:"Creating Streamlined Safeguarding Processes with OneRen",
            image:'/Assets/image18.png'
    
        },
        {
            id:2,
            description:"What are your safeguarding responsibilities and how ?",
            image:'/Assets/image19.png'
    
        },
        {
            id:3,
            description:"Revamping the Membership Model with Triathlon Australia",
            image:'/Assets/image20.png'
    
        } 
     ]
    
    
        return ( 
            <div className="bg-white mx-auto p-12 md:py-16 ">
               <div className=" text-center mt-8 mx-auto lg:w-1/2">
                    <p className="text-slate-700 font-semibold text-2xl ">Caring is the new marketing</p>
                    <p>The Nexcent blog is the best place to read about the latest membership insights, ​</p>
                    <p className=""> trends and more. See who's joining the community, read about how our community</p> 
                    <p className="">are increasing their membership income and lot's more.</p> 
               </div>
    
               <div className=" py-8 md:py-12 grid grid-cols-1 px-6  md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6 mx-auto justify-between">
                   
                   {
                    blogs.map(blog =>(
                    <div key={blog.id} className="relative mb-8">
                         <img src={blog.image} alt="" className="w-full cursor-pointer hover:scale-95 transition-all duration-300"/>
                         <div className="absolute text-center -bottom-12 lg:-bottom-16 bg-white rounded-lg shadow-lg px-4 mx-12  ">
                            <h3 className="text-lg font-semibold md:text-2xl mb-6 lg:text-3xl mt-8">{blog.description}</h3>
                         <div className=" justify-center flex items-center gap-4 mb-4 ">
                            <a href="" className="text-2xl text-primary font-semibold cursor-pointer hover:text-green-800  "> Read more 
                            
                            </a>
                            <FaArrowRightLong className="text-green-600 inline-block" />
                         </div>
                         </div>
                    </div>
                    )
    
                    )
                   }
                  
                 
                    
                   
               </div>
            </div>
         );
    }
         

 
export default Caring;