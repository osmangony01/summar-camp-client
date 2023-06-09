
import instance from "../routes/axiosInstance";

//import Swal from "sweetalert2";


const addSelectedClass =  (selectedClass,user) => {
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

    // const response = await instance.post("/save-selected-class", saveClass);
    // console.log(response.data);
    // const data = response.data;
    // if (data.modifiedCount > 0) {
    //     Swal.fire({
    //         position: 'top-end',
    //         icon: 'success',
    //         title: `Selected class successfully`,
    //         showConfirmButton: false,
    //         timer: 1500
    //     })
    // }
};

export default addSelectedClass;