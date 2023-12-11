import Image from "next/image";
import drawers from '../../public/drawers.jpg'

function ImgDrawers() {
    return (
        <div className='h-[224px] rounded-t-lg overflow-hidden lg:h-fit lg:w-[350px] lg:rounded-l-lg lg:rounded-tr-none'>
            <Image src={drawers} alt='Drawers' />
        </div>
    );
}

export default ImgDrawers;