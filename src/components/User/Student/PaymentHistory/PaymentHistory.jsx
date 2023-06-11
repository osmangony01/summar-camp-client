
import useEnrolledClasses from '../../../../hooks/useEnrolledClasses';

const PaymentHistory = () => {
    const [enrolledClasses] = useEnrolledClasses();
    return (
        <div>
        <div className="">
            <h2 className="text-3xl text-orange-500 font-semibold my-10">All Payment history</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-sm">
                    <thead className=" bg-slate-200  text-black font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Payment status</th>
                            <th>Date</th>
                           
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {
                            enrolledClasses.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.className}</td>
                                <td>{item.transactionId}</td>
                                <td>$ {item.price}</td>
                                <td className='text-green-500 text-center'>{item.paymentStatus}</td>
                                <td>{item.date}</td>
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

export default PaymentHistory;