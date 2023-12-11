import Description from './description'
import Profile from './profile'
import ButtonShareMobile from '@/components/button-share-mobile'
import ButtonShareDesktop from '@/components/button-share-desktop'
import ShareMobile from '@/components/share-mobile'
import ShareDesktop from '@/components/share-desktop'

import { useState } from 'react'

function TextSection() {
    const [showShare, setShowShare] = useState(false);
    const [showShareDesktop, setShowShareDesktop] = useState(false)

    return (
        <div className='flex flex-col relative gap-8 pt-9 lg:px-10 lg:gap-4 lg:pt-0 lg:justify-center'>
            <Description />

            <div className='flex justify-between px-8 pb-5 lg:pr-2 lg:pb-0'>
                <Profile />
                <ButtonShareMobile openShare={() => setShowShare(true)} />
                <ButtonShareDesktop openShareDesktop={() => setShowShareDesktop(true)} />
            </div>

            <ShareMobile isVisible={showShare} closeShare={() => setShowShare(false)} />
            <ShareDesktop isVisible={showShareDesktop} closeShare={() => setShowShareDesktop(false)} />
        </div>
    );
}

export default TextSection;