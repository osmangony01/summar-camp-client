

const AddClass = () => {
    const handleAddClass = e =>{
        e.preventDefault();
    }
    return (
        <div className='w-3/4 mx-auto bg-[#F4F3F0] rounded px-16 py-6'>
                <h2 className='text-center text-3xl mb-6  font-semibold'>Add New Class</h2>
                
                <form action="" onSubmit={handleAddClass}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="" className='label'>Name</label>
                            <div>
                                <input type="text" name="coffee_name" placeholder='Enter coffee name' className='w-full border-0 focus:outline-0 px-4 py-1.5 rounded' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Chef</label>
                            <div>
                                <input type="text" name="chef_name" placeholder='Enter chef name' className='input-control' />
                            </div>
                        </div>
                    </div>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="" className='label'>Supplier</label>
                            <div>
                                <input type="text" name='supplier' placeholder='Enter coffee supplier' className='input-control' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Taste</label>
                            <div>
                                <input type="text" name="taste" placeholder='Enter coffee taste' className='input-control' />
                            </div>
                        </div>
                    </div>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="" className='label'>Category</label>
                            <div>
                                <input type="text" name="category" placeholder='Enter coffee category' className='input-control' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Details</label>
                            <div>
                                <input type="text" placeholder='Enter coffee details' name="details" className='input-control' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='label'>Photo</label>
                        <div>
                            <input type="text" placeholder='Enter coffee photo' name="photo" className='input-control' />
                        </div>
                    </div>
                    <div>
                        <input type='submit' className='add-coffee-btn' value="Add Class"/>
                    </div>
                </form>
            </div>
    );
};

export default AddClass;