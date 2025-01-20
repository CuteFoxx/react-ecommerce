import Facebook from "./Facebook/Facebook.tsx";
import X from "./X/X.tsx";
import Instagram from "./Instagram/Instagram.tsx";

const Socials = () => {
    return (
        <div className='flex gap-4'>
            <Facebook url={'https://www.facebook.com/'}/>
            <X url={'https://x.com/'} className={'w-6 h-5'}/>
            <Instagram url={'https://www.instagram.com/'}/>
        </div>
    );
};

export default Socials;