import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../routes/axiosInstance";
import Swal from "sweetalert2";


const Feedback = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fk = e.target.feedback.value;
        const response = await axiosInstance.patch("/give-feedback", { id, fk });
        console.log(response.data);
        const data = response.data;
        if (data.modifiedCount > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Send feedback`,
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/dashboard/manage-classes", {replace:true});
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <textarea className="textarea textarea-primary" placeholder="feedback" name="feedback"></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-info btn-sm">Send</button>
                </div>
            </form>


        </div>
    );
};

export default Feedback;