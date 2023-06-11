
import axiosInstance from "../routes/axiosInstance";
import Swal from "sweetalert2";


const addSelectedClass = async (selectedClass,user) => {
    const { _id, className, image, instructorName, instructorEmail, availableSeat, price, description } = selectedClass;

    const saveClass= {
        classId:_id, 
        className:className, 
        image:image,
        studentName: user?.displayName,
        studentEmail: user?.email,
        instructorEmail: instructorEmail,
        instructorName: instructorName,
        availableSeat: availableSeat,
        price:price,
        description:description
    };
    console.log(saveClass);

    const response = await axiosInstance.post("/save-selected-class", saveClass);
    console.log(response.data);
    const data = response.data;
    if (data.insertedId) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `The class is booked successfully`,
            showConfirmButton: false,
            timer: 1500
        })
    }
};

export default addSelectedClass;