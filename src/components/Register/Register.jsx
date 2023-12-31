import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import axios from "axios";
import axiosInstance from "../../routes/axiosInstance";



const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [conPassErr, setConPassErr] = useState('');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useTitle('Register');


    const addUser = async (user) => {
        const response = await axiosInstance.post('/add-user', { ...user });
        console.log(response)
        const data = response.data;
        if (data.ok) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Registration successful',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/", { replace: true });
        }
    }


    const onSubmit = async (data) => {
        //console.log(data);
        setConPassErr('');
        if (data.password !== data.confirm_password) {
            setConPassErr("Password does not match!");
            return;
        }
        //console.log('ok')
        createUser(data.email, data.password)
            .then(result => {
                const CreateUser = result.user;
                //console.log(CreateUser);
                //reset();
                updateUserData(result.user, data.name, data.photo_url)
                    .then(() => {
                        //console.log('user name updated ...');
                        const user = { name: data.name, email: data.email, role: 'student', photo: data.photo_url };
                        // fetch(`http://localhost:5005/add-user`, {
                        //     method: "POST",
                        //     headers: {
                        //         'content-type': 'application/json'
                        //     },
                        //     body: JSON.stringify(savedUser)
                        // })
                        // .then(res => res.json())
                        // .then(data => {
                        //     if (data.insertedId) {
                        //         Swal.fire({
                        //             position: 'top-end',
                        //             icon: 'success',
                        //             title: 'Registration successful',
                        //             showConfirmButton: false,
                        //             timer: 1500
                        //         })
                        //         navigate("/", { replace: true });
                        //     }
                        // })
                        addUser(user);


                    })
                    .catch(error => {
                        console.log(error.message);
                    })

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    //console.log(watch("example"));
    return (
        <div className='bg-slate-200  pt-8 pb-16'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-8 px-12 max-sm:px-4 shadow rounded'>
                <h3 className='text-center text-3xl font-semibold'>Sign Up</h3>
                <hr className='my-6' />
                <form action="" className='px-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Name</label>
                        <input type="text" {...register("name", { required: true })} name="name" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter your name' />
                        {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block mb-1.5'>Email</label>
                        <input type="email" {...register("email", { required: true })} name="email" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter your email' />
                        {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Password</label>
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])/
                        })} name="password" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter your password' />
                        {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600 text-sm">Password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm">Password must have one uppercase letter and one special character!</p>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Confirm Password</label>
                        <input type="password" {...register("confirm_password")} name="confirm_password" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter confirm password' />
                        <p className="text-red-600 text-sm">{conPassErr}</p>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5' >Photo URL</label>
                        <input type="text" {...register("photo_url")} name="photo_url" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter photo url' />
                    </div>

                    <button className='w-full py-2 mt-5 bg-white border border-purple-400 hover:bg-purple-800 text-base text-black hover:text-white rounded' >Sign Up</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>Already have an account? <Link to="/login" className='text-blue-700 font-semibold'>Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;