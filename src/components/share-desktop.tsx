import IconFacebook from "@/imgs/icon-facebook";
import IconPinterest from "@/imgs/icon-pinterest";
import IconShareActive from "@/imgs/icon-share-active";
import IconTwitter from "@/imgs/icon-twitter";

interface ShareDesktopProps {
    isVisible: boolean;
    closeShare: () => void;
}

function ShareDesktop({ isVisible, closeShare }: ShareDesktopProps) {
    if (!isVisible) {
        return null
    }

    return (
        <div className="flex items-center justify-between gap-5 absolute bottom-0 w-[360px] rounded-lg ml-8 px-8 py-4 bg-Very-Dark-Grayish-Blue ">
            <div className="flex gap-4">
                <p className="uppercase tracking-[0.4rem] text-Grayish-Blue text-sm">Share</p>
                <div className="flex gap-3 items-center">
                    <button>
                        <IconFacebook />
                    </button>
                    <button>
                        <IconTwitter />
                    </button>
                    <button>
                        <IconPinterest />
                    </button>
                </div>
            </div>
            <button onClick={closeShare} className="w-fit h-fit py-3 px-[11px] rounded-full bg-Desaturated-Dark-Blue ">
                <IconShareActive />
            </button>
        </div>
    );
}

export default ShareDesktop;