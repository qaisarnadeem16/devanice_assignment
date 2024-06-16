'use client'
import React, { useEffect, useState } from 'react';
import svg from '/public/assets/pro.png';
import Image from 'next/image';
import Link from 'next/link';
import TableSection from './table';
import axios from 'axios';
import { Company } from '@/types';
import { baseUrl } from '../../../config';

const RecurimentSection = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [archive, setArchive] = useState(false);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get(`${baseUrl}/getCompanies`); // Assuming your API endpoint is '/api/companies'
                setCompanies(response.data.companies);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };

        fetchCompanies();
    }, []);

    const filteredCompanies = archive ? companies.filter(company => company.archive) : companies.filter(company => !company.archive);

    return (
        <div>
            <div className="px-5">
                <div className=" bg-white relative rounded-lg flex items-center flex-wrap gap-5 justify-between px-5">
                    <div className="min-w-3 min-h-full absolute left-0 top-0 rounded-tl-lg bg-primary"></div>
                    <div className=" px-5 min-h-full relative flex  gap-5">
                        <button className={`text-gray text-lg font-medium pb-3 ${!archive ? 'text-primary border-b-2 ' : 'text-gray'}`} onClick={() => setArchive(false)}>Active</button>
                        <button className={`text-gray text-lg font-medium pb-3 ${archive ? 'text-primary border-b-2' : 'text-gray'}`} onClick={() => setArchive(true)}>Archive</button>
                    </div>
                    <div className="relative flex justify-end items-center">
                        <Link href="/createProfile" type="submit" className="py-3 right-5 absolute px-5 w-40 rounded bg-green text-base text-white font-medium">
                            Create Profile
                        </Link>
                        <Image src={svg} alt="" className=" " />
                    </div>
                </div>
            </div>
            <TableSection companies={filteredCompanies} setCompanies={setCompanies} />
        </div>
    );
};

export default RecurimentSection;
