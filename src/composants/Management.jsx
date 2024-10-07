const Management = () => {
    return (  
        <section className="bg-white pb-2">
            <div className="text-center text-[#4D4D4D]">
                <h1 className=" text-2xl md:text-3xl pb-1 font-semibold">Manage your entire community</h1>
                <h1 className="text-2xl md:text-3xl  pb-1 font-semibold">in a single system</h1>
                <h2 className=" text-xs pt-1 pb-8 2xl:pb-14">Who is Nextcent suitable for?</h2>
            </div>
            <div className="justify-center gap-20 xl:gap-x-42 flex flex-wrap text-[#4D4D4D]">
                <div className="text-center rounded-lg shadow p-4">
                    <div className="relative z-0">
                        <div className=" pl-20">
                            <img className="  lg:h-12" src="Assets/F20.png" alt="Hello" />
                        </div>
                        <div className="absolute -z-10 top-0 right-1/3">
                            <img className="h-12" src="/Assets/Rec.png" alt="Rec" />
                        </div>
                    </div>
                    
                    <h1 className=" text-xl  2xl:font-semibold">Membership</h1>
                    <h1 className=" text-xl pb-1 2xl:font-semibold">Organisations</h1>
                    <h2 className=" text-xs ">Our membership management </h2>
                    <h2 className=" text-xs ">software provides full automation of  </h2>
                    <h2 className=" text-xs  ">membership renewals and payments</h2>
                </div>
                <div className="text-center rounded-lg shadow p-4">
                    <div className="relative z-0">
                        <div className="pl-20">
                            <img className="  h-7 lg:h-12" src="Assets/F21.png" alt="Hello" />
                        </div>
                        <div className="absolute -z-10 top-0 right-1/3 ">
                            <img className="h-12" src="/Assets/Rec.png" alt="Rec" />
                        </div>
                    </div>
                    
                    <h1 className=" text-xl  2xl:font-semibold">National</h1>
                    <h1 className=" text-xl  pb-1 2xl:font-semibold">Associations</h1>
                    <h2 className="text-xs">Our membership management </h2>
                    <h2 className=" text-xs ">software provides full automation of  </h2>
                    <h2 className=" text-xs ">membership renewals and payments</h2>
                </div>
                <div className="text-center rounded-lg shadow p-4">
                    <div className="relative z-0">
                        <div className="pl-20">
                            <img className=" h-7 lg:h-12 " src="/Assets/F18.png" alt="Hello" />
                        </div>
                        <div className="absolute -z-10 top-0 right-1/3">
                            <img className="h-12" src="/Assets/Rec.png" alt="Rec" />
                        </div>
                    </div>
                    
                    <h1 className=" text-xl  2xl:font-semibold">Clubs And</h1>
                    <h1 className=" text-xl pb-1 2xl:font-semibold">Groups</h1>
                    <h2 className=" text-xs ">Our membership management </h2>
                    <h2 className="text-xs">software provides full automation of  </h2>
                    <h2 className=" text-xs">membership renewals and payments</h2>
                </div>
            </div>
        </section>
    );
}
 
export default Management;