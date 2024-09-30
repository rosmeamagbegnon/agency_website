const Design = () => {
    return ( 
        <section className="md:flex  px-16  justify-center  text-center md:text-justify gap-20 ">
            <div >
                <img src="/src/Assets/pana.png" alt="" />
            </div>
            <div className="mt-10  justify-center  ">
                <p className="text-3xl font-medium ">How to design your site footer like</p>
                <p className="text-3xl font-medium">we did</p>
                <div className="flex flex-col justify-center mt-4 ">
                <div className=" flex flex-wrap text-sm ">
                    <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt<p/> 
                    <p>molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at  </p>
                    <p>libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta </p> 
                    <p>nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer</p>
                    <p> augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse</p>
                    <p> in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nis  </p>
                    ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida</p>
                </div>
                <button className="bg-green-500 p-3 w-40 mt-6 rounded-lg hover:bg-green-800 ">
                    <p className="text-white text-xl font-semibold">Learn More</p>
                </button>
                </div>
                
            </div>
        </section>
     );
}
 
export default Design;