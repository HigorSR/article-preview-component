import IconShare from "@/imgs/icon-share";

interface ButtonShareMobileProps {
    openShare: () => void;
}

function ButtonShareMobile({ openShare }: ButtonShareMobileProps) {
    return (
        <button onClick={() => openShare()} className='lg:hidden w-fit h-fit py-3 px-[11px] rounded-full bg-Light-Grayish-Blue'>
            <IconShare />
        </button>
    );
}

export default ButtonShareMobile;