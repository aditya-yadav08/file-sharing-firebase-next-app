import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {

    const menuList = [
        {
            id:1,
            name:'Upload',
            icon: Upload,
            path: '/upload'
        },
        {
            id:2,
            name:'Files',
            icon: File,
            path: '/files'
        },
        {
            id:3,
            name:'Upgrade',
            icon: Shield,
            path: '/upgrade'
        },
    ]

  return (
    <div>
        <div className='p-5 border-b'>
            <Image src="./logo.svg" width={150} height={100}/>
        </div>
        <div className='flex flex-col float-left'>
            {menuList.map((item,index) => (
                <button>
                    <h2>{item.name}</h2>
                </button>
            ))}
        </div>
    </div>
  )
}

export default SideNav