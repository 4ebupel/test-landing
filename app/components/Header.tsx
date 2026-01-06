import Image from 'next/image'

export default function Header() {
    return (
        <header className='flex flex-col items-center justify-center h-dvh w-full bg-[url(/AtronHeader.png)] bg-no-repeat bg-cover bg-bottom-right'>
            <div className='flex flex-col w-1/2 h-full items-center justify-between pb-44 pt-14 z-10'>
                <div className='flex items-ceter justify-between w-full cursor-pointer'>
                    <Image
                        src="/A-tron-logo.avif"
                        alt='A-TRON'
                        width={200}
                        height={40}
                        priority
                    />
                    <div className='flex items-start justify-center'>
                        <div className='flex items-center'>
                            <a className='
                            relative
                            mr-6
                            cursor-pointer
                            before:content-["+1_234_555-55-55"]
                            before:opacity-0
                            hover:before:opacity-100
                            before:absolute
                            before:right-full before:top-1/2 before:-translate-y-1/2
                            before:w-max
                            before:pr-3
                            before:font-bold before:text-xl before:text-white before:uppercase
                            before:transition-opacity duration-300 ease-in-out
                        '>
                                <Image
                                    src="./call.svg"
                                    alt='call us'
                                    width={30}
                                    height={30}
                                />
                            </a>
                            <a className='
                            bg-[url(/menu.svg)]
                            transition-bg duration-200 ease-in-out
                            hover:bg-[url(/menu-hover.svg)]
                            bg-no-repeat bg-cover
                            rotate-180 h-6 w-9
                            cursor-pointer
                        '>
                            </a>
                        </div>
                    </div>
                </div>
                <h1 className='font-bold text-8xl text-white'>Effizienz in jedem Detail</h1>
            </div>
        </header>
    )
};