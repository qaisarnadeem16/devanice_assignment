"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { File } from '@/svgs';
import CustomInput from '../shared/CustomInput';
import Image from 'next/image';
import profile from '/public/assets/demop.png';
import Link from 'next/link';
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import axios from "axios";
import { baseUrl } from "../../../config";
import { useRouter } from "next/navigation";

type Props = {};

type FormData = {
    companyLogo: File | null | StaticImport | string;
    companyName: string;
    websiteLink: string;
    hiresPerYear: string;
    address: string;
    city: string;
    phoneNumber: string;
    country: string;
    description: string;
    agreeTerms: boolean;
    agreeGDPR: boolean;
};

type Errors = {
    [key in keyof FormData]: string;
};

const ProfileForm: React.FC<Props> = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        companyLogo: null,
        companyName: "",
        websiteLink: "",
        hiresPerYear: "",
        address: "",
        city: "",
        phoneNumber: "",
        country: "",
        description: "",
        agreeTerms: false,
        agreeGDPR: false,
    });

    const [errors, setErrors] = useState<Errors>({
        companyLogo: "",
        companyName: "",
        websiteLink: "",
        hiresPerYear: "",
        address: "",
        city: "",
        phoneNumber: "",
        country: "",
        description: "",
        agreeTerms: "",
        agreeGDPR: "",
    });

    const handleFileChange = async (e: { target: any; }) => {
        const fileInput = e.target;
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            console.error("No file selected.");
            return;
        }

        const file = fileInput.files[0];

        if (file) {
            try {
                const storageRef = ref(storage, `companyLogo/${file.name}`);
                await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);

                // Update the formData array with the downloadURL at the specified index
                setFormData((prevData): any => {
                    return {
                        ...prevData,
                        companyLogo: downloadURL,
                    };
                });

                // toast.success('Uploaded successfully!');
            } catch (error) {
                console.error("Error uploading file:", error);
                // toast.error('Error uploading file: ' + error.message);
            }
        }
    };


    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked }: any = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };


    const validateForm = (): boolean => {
        let valid = true;
        const newErrors = { ...errors };

        Object.keys(formData).forEach((key) => {
            const value = formData[key as keyof FormData];
            if (!value && key !== "description" && key !== "companyLogo") {
                newErrors[key as keyof Errors] = "This field is required";
                valid = false;
            } else {
                newErrors[key as keyof Errors] = "";
            }
        });

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = "You must agree to the terms";
            valid = false;
        }

        if (!formData.agreeGDPR) {
            newErrors.agreeGDPR = "You must agree to GDPR compliance";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                // Make API call to save the form data
                const response = await axios.post(`${baseUrl}/createCompany`, formData);

                if (response.data.success) {
                    toast.success("Form submitted successfully!");
                    router.push('/recruitment')
                    console.log("Form submitted successfully:", formData);
                } else {
                    toast.error("Error submitting form");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error("Error submitting form");
            }
        }
    };
    // console.log(formData)
    return (
        <div className='w-full bg-white lg:p-10 p-5 border-t border-gray'>
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-between items-center gap-5">
                <div className="lg:w-[47%] w-full space-y-5">
                    <div className="w-full">
                        <label className="w-full">
                            <div className="flex items-center boxShadow justify-between rounded-md w-full cursor-pointer">
                                <p className="text-sm text-gray font-medium px-4">Upload company logo</p>
                                <div className="flex bg-bg py-4 px-3 w-1/5 rounded-md items-center justify-center">
                                    <File />
                                </div>
                            </div>
                            <input
                                type="file"
                                className=""
                                name="companyLogo"
                                onChange={handleFileChange}
                                hidden
                            />
                            {errors.companyLogo && <span className="text-sm text-red-500">{errors.companyLogo}</span>}
                        </label>
                    </div>

                    <CustomInput
                        label=""
                        inputType="text"
                        placeholder="Company Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        error={errors.companyName}
                    />
                </div>

                <div className="lg:w-[47%] w-full">
                    {formData.companyLogo && typeof formData.companyLogo === 'string' ?
                        <img src={formData.companyLogo} alt='Profile Image' className='mx-auto w-40 h-40 rounded-full' /> :
                        <Image src={profile} alt='Profile Image' className='mx-auto' />
                    }

                </div>

                <div className="lg:w-[47%] w-full">
                    <CustomInput
                        label=""
                        inputType="text"
                        placeholder="Website Link"
                        name="websiteLink"
                        value={formData.websiteLink}
                        onChange={handleInputChange}
                        error={errors.websiteLink}
                    />
                </div>

                <div className="lg:w-[47%] w-full">
                    <CustomInput
                        label=""
                        inputType="text"
                        placeholder="No. of hires/year"
                        name="hiresPerYear"
                        value={formData.hiresPerYear}
                        onChange={handleInputChange}
                        error={errors.hiresPerYear}
                    />
                </div>

                <div className="lg:w-[47%] w-full">
                    <CustomInput
                        label=""
                        inputType="text"
                        placeholder="Enter Address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        error={errors.address}
                    />
                </div>

                <div className="lg:w-[47%] w-full">
                    <CustomInput
                        label=""
                        inputType="text"
                        placeholder="Select City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                </div>

                <div className="lg:w-[47%] w-full">
                    <CustomInput
                        label=""
                        inputType="text"
                        placeholder="Enter Company’s Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        error={errors.phoneNumber}
                    />
                </div>

                <div className="lg:w-[47%] w-full">
                    <CustomInput
                        label=""
                        inputType="text"
                        placeholder="Country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        error={errors.country}
                    />
                </div>

                <div className="w-full">
                    <textarea
                        name="description"
                        rows={6}
                        className='rounded-md boxShadow p-4 w-full text-gray font-medium'
                        placeholder='Write description here'
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex items-center gap-3 w-full">
                    <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className=""
                    />
                    <label className="font-normal text-base w-full" htmlFor="agreeTerms">
                        Send me occasional emails about CertiJob’s services
                    </label>
                </div>
                {errors.agreeTerms && <span className="text-sm text-red-500">{errors.agreeTerms}</span>}

                <div className="flex items-center gap-3 w-full">
                    <input
                        type="checkbox"
                        name="agreeGDPR"
                        checked={formData.agreeGDPR}
                        onChange={handleInputChange}
                        className=""
                    />
                    <label className="font-normal text-base w-full" htmlFor="agreeGDPR">
                        I agree to GDPR Compliant. Lorem ipsum dolor sit amet. <Link href='#' className='text-green font-medium underline'>Read more</Link>
                    </label>
                </div>
                {errors.agreeGDPR && <span className="text-sm text-red-500">{errors.agreeGDPR}</span>}


                <div className="w-full flex items-center gap-5">
                    <button type="button" className="py-3 px-5 border border-green text-base text-green font-medium">
                        Cancel
                    </button>
                    <button type="submit" className="py-3 px-5 rounded bg-green text-base text-white font-medium">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProfileForm;
