import IconShare from "@/imgs/icon-share";

interface ButtonShareDesktopProps {
    openShareDesktop: () => void;
}

function ButtonShareDesktop({ openShareDesktop }: ButtonShareDesktopProps) {
    return (
        <button onClick={() => openShareDesktop()} className='hidden lg:inline w-fit h-fit py-3 px-[11px] rounded-full bg-Light-Grayish-Blue'>
            <IconShare />
        </button>
    );
}

export default ButtonShareDesktop;