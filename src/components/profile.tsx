import Image from 'next/image'
import avatarMichelle from '../../public/avatar-michelle.jpg'

function Profile() {
    return (
        <div className='flex items-center gap-4'>
            <Image src={avatarMichelle} alt='Avatar Michelle' className='w-10 rounded-full' />
            <div className='flex flex-col gap-[2px]'>
                <p className='text-sm text-Very-Dark-Grayish-Blue font-bold'>Michelle Appleton</p>
                <p className='text-Grayish-Blue text-sm'>28 Jun 2020</p>
            </div>
        </div>
    );
}

export default Profile;