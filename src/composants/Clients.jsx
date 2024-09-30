const Clients = () => {
    return ( 
        <section className=" py-14 bg-white ">
            <div className="text-center">
                <h1 className="text-black text-2xl md:text-3xl 2xl:text-4xl pb-1 font-semibold">Our Clients</h1>
                <h2 className="text-gray-400 text-xs 2xl:text-lg  2xl:font-semibold pb-6 2xl:pb-10">We have been working with some Fortune 500+ clients</h2>
            </div>
            <div className="justify-center flex flex-wrap gap-x-20 2xl:gap-x-48 gap-y-8">
                <img className="h-8 2xl:h-12" src="/Assets/F5.png" alt="Hello" />
                <img className="h-8 2xl:h-12" src="/Assets/F6.png" alt="Hello" />
                <img className="h-8 2xl:h-12" src="/Assets/F7.png" alt="Hello" />
                <img className="h-9 2xl:h-14" src="/Assets/F8.png" alt="Hello" />
                <img className="h-9 2xl:h-14" src="/Assets/F9.png" alt="Hello" />
                <img className="h-9 2xl:h-14" src="/Assets/F10.png" alt="Hello" />
                <img className="h-9 2xl:h-14" src="/Assets/F11.png" alt="Hello" />
            </div>
        </section>
     );
}
 
export default Clients;