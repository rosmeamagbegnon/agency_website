const Unseen = () => {
    return ( 
        <section className="text-center md:text-justify justify-center flex flex-wrap bg-white gap-x-40 py-20 2xl:py-40 2xl:gap-x-68 gap-y-10">
             <div>
                <img className="h-64 lg:h-80 xl:h-auto" src="/Assets/rafiki.png" alt="Hello" />
            </div>
            <div className="text-[#4D4D4D]">
                <h1 className=" text-2xl md:text-3xl  pt-2 font-semibold">The unseen of spending three</h1>
                <h1 className=" text-2xl md:text-3xl  pb-4 font-semibold">years at Pixelgrade</h1>
                <div className="px-10 lg:px-0">
                    <h1 className=" text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed </h1>
                    <h1 className=" text-xs">accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed </h1>
                    <h1 className="text-xs ">porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam  </h1>
                    <h1 className=" text-xs pb-6">quis massa pulvinar, aliquam quam vitae, tempus sem Donec elementum pulvinar odio.</h1>
                </div>
                
                <button className=" py-4 px-8 rounded bg-[#43A046] "> <a className="text-white " href="#">Learn More</a></button>
            </div>
        </section>
     );
}
 
export default Unseen;