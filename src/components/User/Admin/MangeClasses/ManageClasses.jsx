

const ManageClasses = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold mb-2">Total Classes: {instructorClass.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-sm">
                    <thead className="bg-purple-200 text-base font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Enroll Student</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClass.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.className}</td>
                                <td>$ {item.price}</td>
                                <td>{item.availableSeat}</td>
                                <td>{item.enrollStudent}</td>
                                <td>{item.status}</td>
                                <td>{item.feedbacks}</td>
                                <td>
                                    <button onClick={() => handleUpdate(item)} className="btn btn-square btn-sm bg-red-600"><FaRegEdit color={'white'} size={15}></FaRegEdit></button>
                                    <button onClick={() => handleDelete(user)} className="btn btn-square btn-sm bg-red-600"><FaTrashAlt color={'white'} size={15}></FaTrashAlt></button>
                                </td>

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;