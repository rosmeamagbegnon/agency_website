const Section = () => {
    return ( 
        <section className="text-center lg:text-justify justify-center flex flex-wrap bg-neutral-100 gap-x-40 py-5 md:py-20 2xl:py-40 2xl:gap-x-72 gap-y-12">
            <div>
                <h1 className="text-black text-3xl md:text-4xl 2xl:text-5xl pt-5 2xl:pt-8 font-semibold">Lessons and insights</h1>
                <h1 className="text-green-600 text-3xl md:text-4xl 2xl:text-5xl pb-3 font-semibold">from 8 years</h1>
                <h1 className="text-gray-400 text-xs 2xl:text-lg 2xl:font-semibold pb-5">Where to grow your business as a photographer: site or social media?</h1>
                <button className=" py-2 px-4 rounded bg-green-600 "> <a className="text-white " href="#">Register</a></button>
            </div>
            <div>
                <img className="w-56 h-56" src="/src/assets/F1.png" alt="Hello" />
            </div>
        </section>
     );
}
 
export default Section;