import { useState } from 'react';
const Header = () => {

    
    // Gestion de l'état pour savoir si la navbar est visible ou non
        const [isNavVisible, setIsNavVisible] = useState(false);

  // Fonction pour basculer la visibilité de la navbar
        const toggleNav = () => {
            setIsNavVisible(!isNavVisible); // Inverse l'état actuel
        };
    
    return ( 
        <nav className=" justify-between flex flex-wrap bg-neutral-100 px-2 xl:px-16">
            <div className="flex flex-wrap py-4">
                <img className="h-5 2xl:h-8 pt-1" src="/src/assets/F23.png" alt="Hello" />
                <h1 className="font-bold text-black text-xl 2xl:text-2xl pl-1">Nexcent</h1>
            </div>
            <button onClick={toggleNav} className="cursor-pointer w-7 md:hidden pt-1">
                <img src="/src/Assets/menu.svg" alt="" />
            </button>
           
            <ul className={`flex pt-5 flex-col md:flex-row ${isNavVisible ? 'block' : 'hidden'} md:flex`}>
                <li className="text-black text-sm pr-0 md:pr-2 2xl:pr-4 2xl:font-semibold 2xl:text-lg"><a href="#">Home</a></li>
                <li className="text-black text-sm px-0 md:px-4 2xl:px-6 2xl:font-semibold 2xl:text-lg"><a href="#">Service</a></li>
                <li className="text-black text-sm px-0 md:px-4 2xl:px-6 2xl:font-semibold 2xl:text-lg"><a href="#">Feature</a></li>
                <li className="text-black text-sm px-0 md:px-4 2xl:px-6 2xl:font-semibold 2xl:text-lg"><a href="#">Product</a></li>
                <li className="text-black text-sm px-0 md:px-4 2xl:px-6 2xl:font-semibold 2xl:text-lg"><a href="#">Testimonial</a></li>
                <li className="text-black text-sm pl-0 md:pl-2 2xl:pr-3 2xl:font-semibold 2xl:text-lg"><a href="#">FAQ</a></li>
            </ul>
           
            
            <ul className="flex text-sm  ">
                <li className="text-green-600 pr-8 pt-5 2xl:font-semibold"><a href="#">Login</a></li>
                <li className="pt-3"><button className=" py-2 px-2 md:px-4 rounded bg-green-600 "> <a className="text-white" href="#">Sign Up</a></button></li>
            </ul>
            
        </nav>
     );
}
 
export default Header;