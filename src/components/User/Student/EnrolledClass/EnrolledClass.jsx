import React from 'react';
import useEnrolledClasses from '../../../../hooks/useEnrolledClasses';

const EnrolledClass = () => {
    const [enrolledClasses] = useEnrolledClasses();
    
    return (
        <div>
        <div className="">
            <h2 className="text-3xl text-orange-500 font-semibold my-10">My Enrolled Classes</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-sm">
                    <thead className=" bg-slate-200  text-black font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Amount</th>
                            <th>Payment status</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask rounded-md w-[100px] h-[100px]">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.className}</td>
                                <td>{item.instructorName}</td>
                                <td>{item.instructorEmail}</td>
                                <td>$ {item.price}</td>
                                <td className='text-green-500 text-center'>{item.paymentStatus}</td>
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

export default EnrolledClass;