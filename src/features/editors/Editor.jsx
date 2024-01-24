import SelectOption from "../../components/ui/SelectOption";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import app from "../../services/firebase";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Editor() {
    const [value, setValue] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(null);
    const [imageUploadError, setimageUploadError] = useState(null);
    const [formData, setFormData] = useState({});
    const [publishError, setPublishError] = useState(null);

    const navigate = useNavigate();

    const handleUploadImage = async () => {
        try {
            if (!imageFile) {
                setimageUploadError("Please select an image");
                return;
            }
            if (imageFile.size > 2097152) {
                setimageUploadError("Image size exceeds the maximum limit of 2MB");
                return;
            }
            setimageUploadError(null)
            const storage = getStorage(app);
            const fileName = new Date().getTime() + '-' + imageFile.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, imageFile);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setImageUploadProgress(progress.toFixed(0));
                },
                (error) => {
                    setimageUploadError("Image upload failed");
                    setImageUploadProgress(null);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageUploadProgress(null);
                        setimageUploadError(null);
                        setFormData({ ...formData, imageContent: downloadURL });
                    });
                }
            );
        } catch (error) {
            setimageUploadError("Image upload failed");
            setImageUploadProgress(null);
            console.log(error.message);
        }
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/post/create', formData);
            if (res.statusText !== "OK") {
                setPublishError(res.message);
                return;
            }

            if (res.statusText === "OK") {
                setPublishError(null);
                navigate(`/`);
            }
        } catch (error) {
            return  setPublishError('Something went wrong');
        }
    }

    const categoryOptions = [
        { value: "Technology", label: "Technology" },
        { value: "Sport", label: "Sport" },
        { value: "Business", label: "Business" }
    ];
    return (
        <div>
            <form className="flex flex-col w-full gap-4" onSubmit={handleSubmitForm}>
                <div className="flex flex-col justify-between w-full gap-4 sm:flex-row">
                    <TextInput htmlFor="title" type="text" placeholder="Title for your blog" title="Title blog" id="title" action={(e) => setFormData({ ...formData, title: e.target.value })} />
                    <SelectOption htmlFor="category" title="Category" name="category" id="category" option={categoryOptions} action={(e) => setFormData({ ...formData, category: e.target.value })} />
                </div>
                <div className="">
                    <label htmlFor="cover-photo" className="font-semibold leading-none text-md font-dm peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        <span>Cover image</span>{imageUploadError && <span className="pl-2 text-sm text-error">*{imageUploadError}</span>}
                    </label>
                    <div className="flex flex-col items-center justify-between gap-4 p-3 border border-dashed rounded-md border-primaryContent/40 mt-1.5">
                        <div className="flex justify-center w-full mt-2 border border-dashed rounded-lg border-gray-900/25">
                            {
                                formData.imageContent ? (
                                    <img src={formData.imageContent} alt="upload" className="object-cover w-full rounded-lg h-72" />
                                ) : (
                                    <div className="px-6 py-10 text-center">
                                        <i className="w-12 h-12 mx-auto text-gray-300 ri-image-fill" aria-hidden="true" />
                                        <div className="flex mt-4 text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="imageContent"
                                                className="relative px-2 font-semibold rounded-md cursor-pointer bg-foreground text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primaryLight"
                                            >
                                                <span>Upload a file</span>
                                                <input id="imageContent" name="imageContent" type="file" className="sr-only" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 2MB</p>
                                    </div>
                                )
                            }
                        </div>
                        <button
                            className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-primaryContent bg-primary rounded-md group focus:outline-none focus:ring w-full`}
                            type="button"
                            onClick={handleUploadImage}
                            disabled={imageUploadProgress}
                        >
                            <span className="text-sm font-medium transition-all font-nunito group-hover:me-4">
                                {
                                    imageUploadProgress ? (
                                        <div className="w-16 h-16">
                                            <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`} />
                                        </div>
                                    ) : "Upload Image"
                                }
                            </span>
                        </button>
                    </div>
                </div>
                <ReactQuill theme="snow" placeholder="Write your blog here..." className="mb-12 h-72 font-nunito" required onChange={(value) => { setFormData({ ...formData, content: value }) }} />
                <Button title="Submit" bgColor="bg-primary" size="w-full" type="submit" />
            </form>
        </div>
    )
}
