
import { Link, useRouteError } from 'react-router-dom';



const ErrorRoute = () => {
    

    const { error, status } = useRouteError()
    return (
        <section className='mt-48 w-[400px] mx-auto'>
            <div className='text-center w-full'>
                <img className='mx-auto h-[100px] w-[100px]' src="/images/error-icon.svg" alt="" />
                <h2 className='text-3xl text-red-700 font-bold'>
                    <span>Error</span> {status || 404}
                </h2>
                <p className='my-3 text-red-500'>
                    {error?.message}
                </p>
                <p>
                    <button className='py-3 px-6 border-0 bg-slate-100 hover:bg-slate-300 rounded-md'>
                        <Link to='/' className=''>
                            Back to homepage
                        </Link>
                    </button>
                </p>
            </div>
        </section>
    );
};

export default ErrorRoute;