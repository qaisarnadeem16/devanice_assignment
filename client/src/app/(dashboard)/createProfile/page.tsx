
import React from 'react'
import Image from 'next/image'
import svg from '/public/assets/pro.png'
import Heading from '@/components/shared/heading'
import ProfileForm from '@/components/profile/profileForm'
type Props = {}

const profile = (props: Props) => {
    return (
        <div>
            <div className="px-5  ">
                <div className=" bg-white relative rounded-lg flex items-center justify-between px-5 ">
                    <div className="min-w-3 min-h-full absolute left-0 top-0 rounded-tl-lg bg-primary"></div>
                    <div className=" px-5 min-h-full relative">
                        <Heading text='Profile Details' styles='' />

                    </div>
                    <Image src={svg} alt='' className='' />
                </div>
                <ProfileForm />
            </div>
        </div>
    )
}

export default profile