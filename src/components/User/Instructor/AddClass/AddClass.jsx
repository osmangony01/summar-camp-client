import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {

    const { user } = useContext(AuthContext);

    const handleAddClass = e => {
        e.preventDefault();
        const form = e.target;
        const className = form.class_name.value;
        const image = form.photo_url.value;
        const instructorName = form.instructor_name.value;
        const instructorEmail = form.instructor_email.value;
        const availableSeat = parseInt(form.available_seat.value);
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const status = 'pending';
        const feedbacks = "";
        const enrollStudent=0;

        const savedClass = { className, image, instructorName, instructorEmail, availableSeat, price,enrollStudent, status,description, feedbacks };
        console.log(savedClass);
        fetch('http://localhost:5000/addclass', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(savedClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                form.reset();
            })
    }

    return (
        <div className='w-3/4 mx-auto bg-purple-200 rounded px-12 py-6'>
            <h2 className='text-center text-3xl mb-6  font-semibold'>Add New Class</h2>

            <form action="" onSubmit={handleAddClass}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-2'>
                    <div>
                        <label htmlFor="" className='label'>Name</label>
                        <div>
                            <input type="text" name="class_name" placeholder='Enter class name' className='input-control-class focus:border-blue-500 focus:outline-0' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='label'>Photo url</label>
                        <div>
                            <input type="text" name="photo_url" placeholder='Enter photo url' className='input-control-class focus:border-blue-500 focus:outline-0' />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-2'>
                    <div>
                        <label htmlFor="" className='label'>Instructor Name</label>
                        <div>
                            <input type="text" name="instructor_name" value={user.displayName} placeholder='Enter instructor name' className='input-control-class focus:border-blue-500 focus:outline-0 disabled' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='label'>Instructor Email</label>
                        <div>
                            <input type="text" name="instructor_email" value={user.email} placeholder='Enter instructor email' className='input-control-class focus:border-blue-500 focus:outline-0 disabled' />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-2'>
                    <div>
                        <label htmlFor="" className='label'>Available Seats</label>
                        <div>
                            <input type="number" name="available_seat" placeholder='Enter coffee name' className='input-control-class focus:border-blue-500 focus:outline-0' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='label'>Price</label>
                        <div>
                            <input type="text" name="price" placeholder='Enter Price' className='input-control-class focus:border-blue-500 focus:outline-0' />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="" className='label'>Description</label>
                    <textarea type='text' name="description" rows="3" className="input-control-class focus:border-blue-500 focus:outline-0" placeholder="Description"></textarea>
                </div>
                <div className="">
                    <input type='submit' className='w-full cursor-pointer py-1.5 border border-purple-600 hover:bg-purple-600 hover:text-white rounded' value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;