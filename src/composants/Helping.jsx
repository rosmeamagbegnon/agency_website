const Helping = () => {
    const blogs=[
        {
            id:1,
            descr1:"2,245,341",
            descr2:"Members",
            imag:'/Assets/F16.png'
        },
        
        {
            id:2,
            descr1:"46,328 ",
            descr2:"Clubs",
            imag:'/Assets/F18.png'
        },
        {
            id:3,
            descr1: "828,867" ,
            descr2:"Event Booking",
            imag:'/Assets/F17.png'
        },
        
        {
            id:4,
            descr1: "1,926,436" ,
            descr2:"Payments",
            imag:'/Assets/F19.png'
        },
    ]
    return (  
        <section className="text-center lg:text-justify justify-center flex flex-wrap bg-[#F5F7FA] gap-x-40 py-10 2xl:py-16 2xl:gap-x-72 gap-y-14">
            <div>
                <h1 className="text-[#4D4D4D text-2xl md:text-3xl  pt-5 2xl:pt-8 font-semibold">Helping a local</h1>
                <h1 className="text-[#43A046] text-2xl md:text-3xl pb-3 font-semibold">business reinvent itself</h1>
                <h1 className="text-[#4D4D4D text-xs  pb-5">We reached here with our hard work and dedication</h1>

            </div>
            <div className="grid gap-6 grid-cols-2 grid-rows-2">
                {
                    blogs.map(blog =>(
                            <div key={blog.id}>
                                <div className="flex">
                                    <img className=" pr-3 h-10 " src={blog.imag} alt="Hello" />
                                    <div>
                                        <h1 className="text-[#4D4D4D] font-semibold text-lg"> {blog.descr1} </h1>
                                        <h1 className="text-[#4D4D4D]"> {blog.descr2} </h1>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    )
                }
            </div>
        </section>
    );
}
 
export default Helping;