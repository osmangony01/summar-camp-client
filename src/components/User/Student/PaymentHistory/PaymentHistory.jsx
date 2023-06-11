

import moment from 'moment-timezone';
import useEnrolledClasses from '../../../../hooks/useEnrolledClasses';


const PaymentHistory = () => {
    const [enrolledClasses] = useEnrolledClasses();
    const sortedClasses = enrolledClasses.sort((a, b) => new Date(b.date) - new Date(a.date));
    const customDate = '2023-06-11T05:52:17.725Z';
    const formattedTime = moment(customDate).tz('Asia/Dhaka').format('YYYY-MM-DD HH:mm:ss');

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
                            sortedClasses.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.className}</td>
                                <td>{item.transactionId}</td>
                                <td>$ {item.price}</td>
                                <td className='text-green-500 text-center'>{item.paymentStatus}</td>
                            <td>{moment(item.date).tz('Asia/Dhaka').format('YYYY-MM-DD HH:mm:ss')}</td>
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