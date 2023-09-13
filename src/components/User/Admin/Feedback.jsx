import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../routes/axiosInstance";
import Swal from "sweetalert2";


const Feedback = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const feedback = async (fb) => {
        const response = await axiosInstance.patch("/feedback", {...fb})
        const data = response.data;
        if (data.ok) {
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        const fb = { fk:e.target.feedback.value, id }
        feedback(fb);
        
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