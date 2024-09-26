const Clients = () => {
    return ( 
        <section className=" py-14 bg-white ">
            <div className="text-center">
                <h1 className="text-black text-2xl pb-1 font-semibold">Our Clients</h1>
                <h2 className="text-gray-400 text-xs pb-6">We have been working with some Fortune 500+ clients</h2>
            </div>
            <div className="justify-center flex flex-wrap gap-x-20 gap-y-8">
                <img className="h-8" src="/src/assets/F5.png" alt="Hello" />
                <img className="h-8" src="/src/assets/F6.png" alt="Hello" />
                <img className="h-8" src="/src/assets/F7.png" alt="Hello" />
                <img src="/src/assets/F8.png" alt="Hello" />
                <img src="/src/assets/F9.png" alt="Hello" />
                <img src="/src/assets/F10.png" alt="Hello" />
                <img src="/src/assets/F11.png" alt="Hello" />
            </div>
        </section>
     );
}
 
export default Clients;