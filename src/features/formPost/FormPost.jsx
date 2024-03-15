import SelectOption from "../../components/ui/SelectOption";
import TextInput from "../../components/ui/TextInput";
import { Button } from "@material-tailwind/react";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import app from "../../services/firebase";
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import TipTapEditor from "../../components/TipTapEditor";
import { useContext } from "react";
import { tiptapContext } from "../../contexts/TipTapContext";
import { Progress } from "@material-tailwind/react";

export default function FormPost() {
    const { editorState } = useContext(tiptapContext);
    const [value, setValue] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(null);
    const [imageUploadError, setimageUploadError] = useState(null);
    const [formData, setFormData] = useState({});
    const [publishError, setPublishError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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
                    setImageUploadProgress(parseInt(progress.toFixed(0)));
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
            setIsLoading(true);
            const res = await axios.post('/api/post/create', { ...formData, content: editorState });
            if (res.statusText !== "OK") {
                setPublishError(res.message);
                return;
            }

            if (res.statusText === "OK") {
                setPublishError(null);
                setIsLoading(false);
                navigate(`/`);
            }
        } catch (error) {
            return setPublishError('Something went wrong');
        }
    }

    const categoryOptions = [
        { value: "Technology", label: "Technology" },
        { value: "Education", label: "Education" },
        { value: "Sport", label: "Sport" },
        { value: "Business", label: "Business" },
    ];
    return (
        <div>
            <form className="flex flex-col w-full gap-4" onSubmit={handleSubmitForm}>
                <div className="flex flex-col justify-between w-full gap-4 sm:flex-row">
                    <TextInput htmlFor="title" type="text" placeholder="Title for your blog" title="Title blog" id="title" action={(e) => setFormData({ ...formData, title: e.target.value })} />
                    <SelectOption htmlFor="category" title="Category" name="category" id="category" option={categoryOptions} action={(e) => setFormData({ ...formData, category: e.target.value })} />
                </div>
                <div className="">
                    <label htmlFor="cover-photo" className="font-medium leading-none text-md font-dm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white-500">
                        <span>Cover image</span>{imageUploadError && <span className="pl-2 text-sm text-error">*{imageUploadError}</span>}
                    </label>
                    <div className="flex flex-col items-center justify-between gap-4 p-4  rounded-3xl mt-1.5 bg-white-500">
                        <div className="flex justify-center w-full border border-dashed rounded-xl border-white-700">
                            {
                                formData.imageContent ? (
                                    <img src={formData.imageContent} alt="upload" className="object-cover w-full rounded-lg h-72" />
                                ) : (
                                    <div className="px-6 py-10 text-center">
                                        <i className="w-12 h-12 mx-auto text-white-700 ri-image-fill" aria-hidden="true" />
                                        <div className="flex mt-4 text-sm leading-6 text-white-700">
                                            <label
                                                htmlFor="imageContent"
                                                className="relative px-2 font-semibold rounded-md cursor-pointer bg-white-500 text-blueDark-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blueDark-500 focus-within:ring-offset-2 hover:text-blueDark-700"
                                            >
                                                <span>Upload a file</span>
                                                <input id="imageContent" name="imageContent" type="file" className="sr-only" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-white-700">PNG, JPG, GIF up to 2MB</p>
                                    </div>
                                )
                            }
                        </div>
                        {
                            imageUploadProgress ? (
                                <Progress value={imageUploadProgress} label="completed" color="amber" size="lg" />
                            ) : (
                                <Button
                                    className={`relative inline-flex items-center justify-center overflow-hidden text-black-500 capitalize bg-gradient-to-r from-blueDark-500 to-blueLight-500 rounded-xl group focus:outline-none focus:ring w-full`}
                                    onClick={handleUploadImage}
                                    disabled={imageUploadProgress}
                                >
                                    <span className="text-sm font-medium font-nunito">
                                        Upload Image
                                    </span>
                                </Button>
                            )
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="OrderNotes" className="font-medium leading-none text-md font-dm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white-500"> Description </label>

                    <textarea
                        id="description"
                        className="w-full px-3 py-2 mt-1.5 text-black-500 text-sm font-medium border rounded-md bg-white-500 border-black/30 placeholder:text-white-700 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
                        rows="5"
                        placeholder="Enter any description about your blog..."
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    ></textarea>
                </div>
                <div className="border rounded-3xl bg-white-500 border-white-700">
                    <TipTapEditor />
                </div>
                <div className="flex justify-end">
                    {/* <Button title={isLoading ? "Loading..." : "Submit"} bgColor="bg-primary" size="w-fit" type="submit" /> */}
                    <Button size="md" variant="filled" type="submit" className='text-sm font-semibold capitalize text-black-500 font-nunito rounded-xl bg-gradient-to-r from-blueDark-500 to-blueLight-500 '>{isLoading ? "Loading..." : "Submit"}</Button>
                </div>
            </form>
        </div>
    )
}
