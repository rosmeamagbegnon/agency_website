
const Header = () => {
    return ( 
        <nav className="justify-between flex flex-wrap bg-neutral-100 px-2 xl:px-16">
            <div className="flex flex-wrap py-4">
                <img className="h-5 pt-1" src="/src/assets/F23.png" alt="Hello" />
                <h1 className="font-bold text-black text-xl pl-1">Nexcent</h1>
            </div>
            <ul className="flex pt-5">
                <li className="text-black text-sm pr-1 xl:pr-2"><a href="#">Home</a></li>
                <li className="text-black text-sm px-2 xl:px-4"><a href="#">Service</a></li>
                <li className="text-black text-sm px-2 xl:px-4"><a href="#">Feature</a></li>
                <li className="text-black text-sm px-2 xl:px-4"><a href="#">Product</a></li>
                <li className="text-black text-sm px-2 xl:px-4"><a href="#">Testimonial</a></li>
                <li className="text-black text-sm pl-1 xl:pl-2"><a href="#">FAQ</a></li>
            </ul>
            <ul className="flex text-sm  ">
                <li className="text-green-600 pr-8 pt-5"><a href="#">Login</a></li>
                <li className="pt-3"><button className=" py-2 px-4 rounded bg-green-600 "> <a className="text-white " href="#">Sign Up</a></button></li>
            </ul>
        </nav>
     );
}
 
export default Header;