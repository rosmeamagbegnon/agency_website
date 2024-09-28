
import { FaArrowRightLong } from "react-icons/fa6";const Smith = () => {
    return ( 
        <section className="md:flex justify-center px-16 mx-auto bg-slate-50 min-h-96 mt-10 ">
            <div className="flex items-center justify-center px-8 md:px-16  py-8 ml-[10%]">
                <img src="/src/Assets/image9.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-4 ">
                <div className=" flex-wrap text-sm ">
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus<p/> 
                    <p>tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida </p>
                    <p>enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,</p> 
                    <p>nec molestie mi blandit. Suspendisse cursus tellus sed</p>
                    <p> augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse</p>
                    <p> potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget  </p>
                    efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                </div>
                <div className="mt-5">
                    <p className="text-green-400 md:text-2xl text-xl font-semibold">Tim Smith</p>
                    <p className="mt-3 md:text-xl text-sm">British Dragon Boat Racing Association</p>
                </div>
                <div className="flex flex-wrap mt-10">
                    <div className="flex flex-wrap">
                    <img src="/src/Assets/logo7.png" alt="" />
                <img src="/src/Assets/logo1.png" alt="" className="ml-5" />
                <img src="/src/Assets/logo9.png" alt="" className="ml-5"/>
                <img src="/src/Assets/logo10.png" alt="" className="ml-5"/>
                <img src="/src/Assets/logo11.png" alt="" className="ml-5"/>
                <img src="/src/Assets/logo5.png" alt="" className="ml-5"/>
                <div className="flex" >
                <p className="text-green-400 font-semibold md:text-xl text-sm mt-4 ml-4 cursor-pointer hover:text-green-800">Meet all customers</p>
                <FaArrowRightLong className="text-green-600 inline-block mt-5 ml-3 text-2xl cursor-pointer hover:text-green-800" />
                </div>
                
            </div>
               
              
                
                </div>
            </div>
        </section>
     );
}
 
export default Smith;