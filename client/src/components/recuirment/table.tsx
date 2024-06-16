import { Add, Del, Download, Edit } from '@/svgs';
import { Company } from '@/types';
import axios from 'axios';
import React from 'react';
import { baseUrl } from '../../../config';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type Props = {
    companies: Company[];
    setCompanies: React.Dispatch<React.SetStateAction<Company[]>>; // Define the prop type for setCompanies
};

const deliveryStatusOptions = [
    "In Progress",
    "Complete",
    "Draft",
];

const TableSection: React.FC<Props> = ({ companies, setCompanies }) => {
    const router = useRouter()
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`${baseUrl}/company/${id}`); // Assuming your API endpoint is '/api/companies'
            setCompanies(prevCompanies => prevCompanies.filter(company => company._id !== id));
            toast.success("Company Delete Successfully");
        } catch (error) {
            console.error('Error deleting company:', error);
        }
    };

    const handleArchive = async (id: string, currentArchiveStatus: boolean = false) => {
        try {
            await axios.put(`${baseUrl}/updateArchive/${id}`, { archive: !currentArchiveStatus });
            setCompanies(prevCompanies => prevCompanies.map(company =>
                company._id === id ? { ...company, archive: !currentArchiveStatus } : company
            ));
            toast.success(`Company ${currentArchiveStatus ? 'unarchived' : 'archived'} successfully`);
        } catch (error) {
            console.error('Error archiving company:', error);
            toast.error("Error archiving company");
        }
    };

    const handleStatus = async (id: string, status: string) => {
        try {
            await axios.put(`${baseUrl}/updateStatus/${id}`, { status: status });
            setCompanies(companies);
            toast.success(`Company Status update successfully`);
        } catch (error) {
            console.error('Error update Status company:', error);
            toast.error("Error updating company status");
        }
    };
    return (
        <div className='px-5'>
            <table className="min-w-full bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right ">
                    <tr className='text-[#36404A] text-base'>
                        <th className="whitespace-nowrap px-4 py-5 text-start">ID</th>
                        <th className="whitespace-nowrap px-4 py-5 text-start">Name</th>
                        <th className="whitespace-nowrap px-4 py-5 text-start">No. of hires/year</th>
                        <th className="whitespace-nowrap px-4 py-5 text-start">Start Date</th>
                        <th className="whitespace-nowrap px-4 py-5 text-start">Status</th>
                        <th className="whitespace-nowrap px-4 py-5 text-start">Actions</th>
                    </tr>
                </thead>
                <tbody className="">
                    {companies && companies.map((company) => (
                        <tr key={company._id} className="odd:bg-[#F4F8FB] text-[#36404A] font-normal">
                            <td className="whitespace-nowrap px-4 py-2 ">{company._id}</td>
                            <td className="whitespace-nowrap px-4 py-2 ">{company.companyName}</td>
                            <td className="whitespace-nowrap px-4 py-2 ">{company.hiresPerYear}</td>
                            <td className="whitespace-nowrap px-4 py-2 ">20/06/2021</td>
                            <td className="whitespace-nowrap px-4 py-2 ">
                                <select
                                    value={company.status}
                                    onChange={(e) => handleStatus(company._id, e.target.value)}
                                    className={`capitalize rounded-sm boxShadow bg-white p-1 py-1 text-green w-28`}
                                >
                                    {deliveryStatusOptions.map((status, index) => (
                                        <option value={status} key={index}>{status}</option>
                                    ))}
                                </select>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 flex gap-4 items-center">
                                <button className="" onClick={() => handleArchive(company._id, company?.archive)}><Download /></button>
                                <button className="" onClick={() => handleDelete(company._id)}><Del /></button>
                                <button className="" onClick={() => router.push(`/createProfile/${company._id}`)}><Edit /></button>
                                <button className=""><Add /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSection;
