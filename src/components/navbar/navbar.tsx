import cn from 'classnames'


export const Navbar = () => {
    
    return(
        <div className="w-screen bg-[rgba(0,0,0,.5)] fixed top-0 z-[1000]">
            <ul 
                className={cn(
                    "px-12 flex text-white gap-x-[20px] items-center justify-between",
                    "text-[24px]"
                )}
            >
                <a href="/">
                    <li className='hover:opacity-75 duration-500'>
                        <nav className='py-5'>
                            <img src="/images/logo.png" alt="logo" className='h-12'/>
                        </nav>                        
                    </li>
                </a>
                <div className='flex gap-x-[20px]'>
                    <a href="/">
                        <li className='hover:opacity-75 duration-500 hover:scale-[1.1]'>
                            About
                        </li>
                    </a>
                    <a href="/favorite">
                        <li className='hover:opacity-75 duration-500 hover:scale-[1.1]'>
                            Favorite
                        </li>
                    </a>
                    <a href="/auth">
                        <li className='hover:opacity-75 duration-500 hover:scale-[1.1]'>
                            Auth
                        </li>
                    </a>
                </div>
            </ul>
        </div>
    )
}