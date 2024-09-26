const Section = () => {
    return ( 
        <section className="justify-center flex flex-wrap bg-neutral-100 gap-40 py-20">
            <div>
                <h1 className="text-black text-4xl pt-5 font-semibold">Lessons and insights</h1>
                <h1 className="text-green-600 text-4xl pb-3 font-semibold">from 8 years</h1>
                <h1 className="text-gray-400 text-xs pb-5">Where to grow your business as a photographer: site or social media?</h1>
                <button className=" py-2 px-4 rounded bg-green-600 "> <a className="text-white " href="#">Register</a></button>
            </div>
            <div>
                <img className="w-56 h-56" src="/src/assets/F1.png" alt="Hello" />
            </div>
        </section>
     );
}
 
export default Section;