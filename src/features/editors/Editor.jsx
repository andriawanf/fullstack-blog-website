import SelectOption from "../../components/ui/SelectOption";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

export default function Editor() {
    const [value, setValue] = useState('');
    console.log(value)
    const categoryOptions = [
        { value: "Technology", label: "Technology" },
        { value: "Sport", label: "Sport" },
        { value: "Business", label: "Business" }
    ];
    return (
        <div>
            <form className="flex flex-col w-full gap-4" >
                <div className="flex flex-col justify-between w-full gap-4 sm:flex-row">
                    <TextInput htmlFor="title" type="text" placeholder="Title for your blog" title="Title blog" id="title" />
                    <SelectOption htmlFor="category" title="Category" name="category" id="category" option={categoryOptions} />
                </div>
                <div className="">
                    <label htmlFor="cover-photo" className="font-semibold leading-none text-md font-dm peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Cover photo
                    </label>
                    <div className="flex flex-col items-center justify-between gap-4 p-3 border-2 border-dotted rounded-md border-primaryContent/40 mt-1.5">
                        <div className="flex justify-center w-full px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                            <div className="text-center ">
                                <i className="w-12 h-12 mx-auto text-gray-300 ri-image-fill" aria-hidden="true" />
                                <div className="flex mt-4 text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative px-2 font-semibold rounded-md cursor-pointer bg-foreground text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primaryLight"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        <Button title="Upload" bgColor="bg-primary" size="w-full" type="submit" />
                    </div>
                </div>
                <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Write your blog here..." className="mb-12 h-72 font-nunito" required />
                <Button title="Submit" bgColor="bg-primary" size="w-full" type="submit" />
            </form>
        </div>
    )
}
