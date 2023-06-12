import useApprovedClasses from "../../hooks/useApprovedClasses";
import Banner from "../Home/Banner";


const Instructor = () => {
    const [approvedClasses] = useApprovedClasses();

    
    return (
        <div>
        <Banner></Banner>
            <div className="w-4/5 mx-auto my-12">
                <h2 className="text-3xl text-orange-500 font-semibold mt-16 mb-10 text-center">All Instructors</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead className="text-sm bg-slate-200  text-black font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                approvedClasses.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask rounded-md w-[100px] h-[100px]">
                                                <img src={item.instructorPhoto} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.className}</td>
                                    <td>{item.instructorName}</td>
                                    <td>{item.instructorEmail}</td>
                                    <td>{item.availableSeat}</td>
                                    <td>$ {item.price}</td>
                                    
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Instructor;