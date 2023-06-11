

const ExtraSection = () => {
    return (
        <div className="my-20">
            <h2 className="text-3xl text-center font-semibold my-10">Explore The World</h2>
            <div className=" w-full md:w-4/5 lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 hover:bg-slate-200">
                    <img src="/images/section1/st1.png" className="w-[100px] h-[90px] mx-auto" alt="" />
                    <h2 className="text-2xl text-center mb-2 font-semibold mt-5">Skilled Teachers</h2>
                    <div className=" text-slate-600">They are inspire, guide, and empower learners to unleash their full potential and achieve greatness.</div>
                </div>
                <div className="p-6 hover:bg-slate-200">
                    <img src="/images/section1/ac1.jpg" className="w-[100px] h-[80px] mx-auto" alt="" />
                    <h2 className="text-2xl text-center mb-2 font-semibold mt-5">Affordable Courses​</h2>
                    <div className=" text-slate-600">Unlock your language skills without breaking the bank with our affordable and high-quality language courses.</div>
                </div>
                <div className="p-6 hover:bg-slate-200">
                    <img src="/images/section1/ef1.png" alt="" className="w-[100px] h-[90px] mx-auto"/>
                    <h2 className="text-2xl text-center mb-2 font-semibold mt-5">Efficient & Flexible​</h2>
                    <div className=" text-slate-600">Our efficient and flexible language programs empower learners to achieve fluency on their own schedule and pace.</div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;