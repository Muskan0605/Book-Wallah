import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiEditBoxLine } from 'react-icons/ri';

const MyProfile = () => {
    const { user } = useSelector((state) => state.profile);

    return (
        <>
            <div className='flex mx-auto items-center justify-center mt-10 bg-indigo-300 p-5 rounded-lg'>
                <div className='flex flex-col gap-y-6 w-8/12 justify-center items-center'>
                    <img
                        src={user?.profileImage}
                        alt={`profile-${user?.fullname}`}
                        className="aspect-square w-1/3 rounded-full object-cover"
                    />
                    <div>
                        <p className='text-lg font-semibold '>{user?.fullname}</p>
                    </div>
                </div>
                <div className='flex space-x-20 w-11/12 p-5'>

                    <div>
                        <div className='flex gap-x-7'>
                            <p className='text-lg font-semibold my-4'>Personal Details</p>
                            <button
                                onClick={() => {
                                    // navigate("/dashboard/settings")
                                }}
                            >
                                <RiEditBoxLine />
                            </button>
                        </div>
                        <div>
                            <div className='grid grid-cols-2 gap-y-4 gap-x-48 items-center'>
                                <div>
                                    <p className='text-md opacity-60'>Name</p>
                                    <p className='text-xl py-3 font-semibold font-mono'>{user?.fullname}</p>
                                </div>
                                <div>
                                    <p className='text-md opacity-60'>Email</p>
                                    <p className='text-xl py-3 font-semibold font-mono'>{user?.email}</p>
                                </div>
                                <div>
                                    <p className='text-md opacity-60'>Date Of Birth</p>
                                    <p className='text-xl py-3 font-semibold font-mono'>
                                        {user?.dateOfBirth ?? <p className='text-lg font-normal font-sans opacity-80'>--</p>}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-md opacity-60'>Books Posted</p>
                                    <p className='text-xl py-3 font-semibold font-mono'>{user?.book.length > 1 ? user?.book.length : "0"}</p>
                                </div>
                            </div>
                        </div>
                        <div className='my-4 py-1'>
                            <p className='text-md opacity-60'>About</p>
                            <p>{user?.favouriteGenre?.length ? <p className='text-xl py-3 font-semibold font-mono'> I like to read </p> : <p></p>}</p>
                            <p>
                                {user?.favouriteGenre?.length > 1
                                    ? user.favouriteGenre.map((genre, index) => (
                                        <p className='text-xl py-3 font-semibold font-mono' key={index}>{genre}</p>
                                    ))
                                    : <p className='text-lg opacity-80 py-4'>Add your favourite genre</p>
                                }
                            </p>
                            <button
                                onClick={() => {
                                    navigate("/dashboard/settings");
                                }}
                            >
                                <RiEditBoxLine /> Edit
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default MyProfile;
