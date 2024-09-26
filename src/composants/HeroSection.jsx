import { FaGithub } from "react-icons/fa";
const HeroSection = () => {
    return ( 
        <section className="flex items-center justify-center bg-slate-100 min-h-60 flex-col">
           <p className="font-semibold text-5xl mt-5">Pellentesque suscipit</p>
           <p className="font-semibold text-5xl mt-2">fringilla libero eu.</p>
           <button className="bg-green-600 flex  mt-10 rounded-lg hover:bg-green-800">
              <p className="p-4 text-white">Get a Demo</p>
             <div className="text-white font-bold text-2xl mt-4 ">
             <img src="/src/Assets/Right.png" alt=""/>
             </div>
           </button>
          
        </section>
     );
}
 
export default HeroSection;