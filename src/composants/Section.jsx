const Section = () => {
    return ( 
        <section className="bg-[#F5F7FA]">
            <div className="text-center lg:text-justify justify-center flex flex-wrap  gap-x-20 xl:gap-x-32 2xl:gap-x-52 py-5 md:py-20 gap-y-12">
                <div>
                    <h1 className="text-[#4D4D4D] text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl pt-5 2xl:pt-8 font-semibold">Lessons and insights</h1>
                    <h1 className="text-[#43A046] text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl pb-3 font-semibold">from 8 years</h1>
                    <h1 className="text-[#4D4D4D] text-xs  pb-5">Where to grow your business as a photographer: site or social media?</h1>
                    <button className=" py-4 px-8 rounded bg-[#43A046] "> <a className="text-white " href="#">Register</a></button>
                </div>
                <div>
                    <img className="h-64 lg:h-80 xl:h-auto" src="Assets/Illustration.png" alt="Hello" />
                </div>
            </div>
            <div className="justify-center flex flex-wrap pb-3">
                <img className="h-5 md:h-auto" src="/Assets/Dot.png" alt="Dot" />
            </div>
            
        </section>
        
     );
}
 
export default Section;