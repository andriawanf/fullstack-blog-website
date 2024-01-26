import React from 'react'
import PageContainer from '../layouts/PageContainer';
import Navbar from '../layouts/Navbar';
import Button from "../components/ui/Button";
import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import app from "../services/firebase"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
    updateStart,
    updateSuccess,
    updateFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    signOutSuccess,
} from "../redux/user/userSlice";
import axios from 'axios';

function Profile() {
    const { currentUser } = useSelector(state => state.user);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
    const [imageFileUploadError, setImageFileUploadError] = useState(null);
    const [imageFileUploading, setImageFileUploading] = useState(false);
    const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
    const [updateUserError, setUpdateUserError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});
    const filePickerRef = useRef();
    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    };
    useEffect(() => {
        if (imageFile) {
            uploadImage();
        }
    }, [imageFile]);

    const uploadImage = async () => {
        setImageFileUploading(true);
        setImageFileUploadError(null);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + imageFile.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                setImageFileUploadProgress(progress.toFixed(0));
            },
            (error) => {
                setImageFileUploadError(
                    'Could not upload image (File must be less than 2MB)'
                );
                setImageFileUploadProgress(null);
                setImageFile(null);
                setImageFileUrl(null);
                setImageFileUploading(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageFileUrl(downloadURL);
                    setFormData({ ...formData, profilePicture: downloadURL });
                    setImageFileUploading(false);
                });
            }
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdateUserError(null);
        setUpdateUserSuccess(null);
        if (Object.keys(formData).length === 0) {
            setUpdateUserError('No changes made');
            return;
        }
        if (imageFileUploading) {
            setUpdateUserError('Please wait for image to upload');
            return;
        }
        try {
            dispatch(updateStart());
            const res = await axios.put(`/api/user/update/${currentUser.data._id}`, formData);
            if (!res.ok) {
                dispatch(updateFailure(data.message));
                setUpdateUserError(data.message);
            } else {
                dispatch(updateSuccess(data));
                setUpdateUserSuccess("User's profile updated successfully");
            }
        } catch (error) {
            dispatch(updateFailure(error.message));
            setUpdateUserError(error.message);
        }
    };
    return (
        <PageContainer>
            <Navbar />
            <div className="flex flex-col w-full gap-5 md:flex-row font-nunito">
                <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                    <div className="sticky flex flex-col h-screen gap-2 p-4 text-sm border-r border-primaryContent/10">

                        <h2 className="pl-3 mb-4 text-3xl font-semibold font-dm">Settings</h2>

                        <a href="#" className="flex items-center px-3 py-2.5 font-semibold bg-foreground  text-primaryContent border rounded-full  border-primaryContent/10">
                            Account Settings
                        </a>
                        <a href="#"
                            className="flex items-center px-3 py-2.5 font-semibold hover:text-primaryContent hover:bg-foreground hover:border hover:border-primaryContent/10 hover:rounded-full  ">
                            Blogs Settings
                        </a>
                        <a href="#"
                            className="flex items-center px-3 py-2.5 font-semibold hover:text-primaryContent hover:bg-foreground hover:border hover:border-primaryContent/10 hover:rounded-full  ">
                            Users Settings
                        </a>
                    </div>
                </aside>
                <main className="flex-1 w-full min-h-screen py-1">
                    <div className="p-2 md:pl-4">
                        <div className="w-full px-6 pb-8 mt-4 sm:rounded-lg lg:px-0">
                            <h2 className="text-2xl font-semibold sm:text-xl font-dm py-2.5 px-3 bg-foreground rounded-xl text-primaryContent">Account Settings</h2>

                            <div className="grid mx-auto mt-8">
                                <div className="flex flex-col items-center justify-center space-y-5 overflow-hidden sm:flex-col sm:space-y-4">
                                    <div>
                                        <input
                                            type='file'
                                            accept='image/*'
                                            onChange={handleImageChange}
                                            ref={filePickerRef}
                                            hidden
                                        />
                                        <div
                                            className='relative self-center w-32 h-32 overflow-hidden rounded-full shadow-md cursor-pointer'
                                            onClick={() => filePickerRef.current.click()}
                                        >
                                            {imageFileUploadProgress && (
                                                <CircularProgressbar
                                                    value={imageFileUploadProgress || 0}
                                                    text={`${imageFileUploadProgress}%`}
                                                    strokeWidth={5}
                                                    styles={{
                                                        root: {
                                                            width: '100%',
                                                            height: '100%',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                        },
                                                        path: {
                                                            stroke: `rgba(62, 152, 199, ${imageFileUploadProgress / 100
                                                                })`,
                                                        },
                                                    }}
                                                />
                                            )}
                                            <img
                                                src={imageFileUrl || currentUser.data.profilePicture}
                                                alt='user'
                                                className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${imageFileUploadProgress &&
                                                    imageFileUploadProgress < 100 &&
                                                    'opacity-60'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center py-2 space-x-5">
                                        <Button title="Change picture" type='button' onClick={() => filePickerRef.current.click()} bgColor='bg-primary' size='w-auto'  />
                                        <button type="button"
                                            className="py-3.5 px-7 text-base font-medium focus:outline-none rounded-lg border border-error text-error hover:bg-error hover:text-foreground focus:z-10 focus:ring-4 focus:ring-error ">
                                            Delete picture
                                        </button>
                                    </div>
                                </div>

                                <form className="items-center mt-6 sm:mt-12 " onSubmit={handleSubmit}>
                                    <div
                                        className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                        <div className="w-full">
                                            <label htmlFor="username"
                                                className="block mb-2 text-sm font-medium">Username</label>
                                            <input type="text" id="username"
                                                className="bg-foreground border border-primaryContent/20 text-primaryContent text-sm rounded-lg focus:ring-primaryContent focus:border-primaryContent block w-full p-2.5 "
                                                placeholder="Username" defaultValue={currentUser.data.username} required onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label htmlFor="email"
                                            className="block mb-2 text-sm font-medium">Email</label>
                                        <input type="email" id="email"
                                            className="bg-foreground border border-primaryContent/20 text-primaryContent text-sm rounded-lg focus:ring-primaryContent focus:border-primaryContent block w-full p-2.5"
                                            placeholder="your.email@mail.com" defaultValue={currentUser.data.email} required onChange={handleChange} />
                                    </div>

                                    <div className="mb-2 sm:mb-6">
                                        <label htmlFor="password"
                                            className="block mb-2 text-sm font-medium">Password</label>
                                        <input type="password" id="password"
                                            className="bg-foreground border border-primaryContent/20 text-primaryContent text-sm rounded-lg focus:ring-primaryContent focus:border-primaryContent block w-full p-2.5"
                                            placeholder="enter your password" required />
                                    </div>

                                    <div className="flex justify-end">
                                        <Button title="Save Change" bgColor="bg-primary" type="submit" size="w-auto" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PageContainer>
    )
}

export default Profile