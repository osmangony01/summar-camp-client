import useApprovedClasses from "../../../hooks/useApprovedClasses";


const TopClasses = () => {
    const [approvedClass] = useApprovedClasses();
    console.log(approvedClass);
    //const topClasses = approvedClass.slice(0,6)

    return (
        <div>
            <h2 className="text-3xl text-center font-semibold my-10">To Classes</h2>
            <div className="w-full md:w-4/5 lg:w-3/4 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    approvedClass.map(item => <div className="card bg-base-100 hover:bg-slate-200 rounded-md">
                        <figure><img src={item.image} className="w-full h-[200px]" alt="Shoes" /></figure>
                        <div className="flex flex-col p-4 gap-1">
                            <h2 className="card-title">{item.className}</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-secondary ">$ {item.price}</div>
                            </div>
                            <div className="divider mt-2 mb-2"></div>
                            <div>
                                <button className="btn btn-outline btn-primary btn-sm">Choose</button>
                            </div>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default TopClasses;

{/* <div className="">
    <img src={item.image} alt="" />
    <p>{item.className}</p>
    <p>{item.description}</p>
</div> */}