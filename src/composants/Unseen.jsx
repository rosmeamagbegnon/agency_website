const Unseen = () => {
    return ( 
        <section className="text-center md:text-justify justify-center flex flex-wrap bg-white gap-x-40 py-20 2xl:py-40 2xl:gap-x-68 gap-y-10">
             <div>
                <img className="w-60 h-48" src="/src/assets/F2.png" alt="Hello" />
            </div>
            <div>
                <h1 className="text-black text-2xl md:text-3xl 2xl:text-4xl pt-2 font-semibold">The unseen of spending three</h1>
                <h1 className="text-black text-2xl md:text-3xl 2xl:text-4xl pb-3 font-semibold">years at Pixelgrade</h1>
                <div className="px-10 md:px-0">
                    <h1 className="text-gray-400 text-xs 2xl:text-lg 2xl:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed </h1>
                    <h1 className="text-gray-400 text-xs 2xl:text-lg 2xl:font-semibold">accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed </h1>
                    <h1 className="text-gray-400 text-xs 2xl:text-lg 2xl:font-semibold">porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam  </h1>
                    <h1 className="text-gray-400 text-xs 2xl:text-lg 2xl:font-semibold pb-5">quis massa pulvinar, aliquam quam vitae, tempus sem Donec elementum pulvinar odio.</h1>
                </div>
                
                <button className=" py-2 px-4 rounded bg-green-600 "> <a className="text-white " href="#">Learn More</a></button>
            </div>
        </section>
     );
}
 
export default Unseen;