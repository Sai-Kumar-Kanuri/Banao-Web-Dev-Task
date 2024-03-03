import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import SignInMobile from '../SignIn/SignInMobile';
import SignUpMobile from '../SignUp/SignUpMobile';


const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [isSignInClicked, setIsSignInClicked] = useState(true);


    const setSignIn = () => {
        setIsSignInClicked((prev) => (!prev))
    }

    return (

        <div>
            <div className='flex flex-col items-center md:flex-row md:justify-between mx-16 p-4 justify-center gap-4'>
                <div className='flex-none'>
                    <img src='/navbar/logo.png' alt='logo' />
                </div>

                <div>
                    <form>
                        <div className='flex w-full'>
                            <div>
                                <Button variant="outline" className="rounded-l-full border-r-0 bg-[#F2F2F2] " size="icon">
                                    <img src='/navbar/searchIcon.png' alt='search icon' />
                                </Button>
                            </div>
                            <div>
                                <Input type="text" className="w-72 px-3 py-2 md:min-w-72 rounded-r-full bg-[#F2F2F2] border-l-0" placeholder="Search for your favorite groups in ATG" />
                            </div>
                        </div>
                    </form>
                </div>

                {isLoggedIn ? (
                    <div className='flex items-center gap-2' >
                        <img src="/home/per1.png" alt="per1" />
                        <p className='cursor-pointer text-sm font-semibold'>Siddharth Goyal</p>
                        <img src='/home/arrow.png' alt='arrow' className='mx-auto px-2' />
                    </div>
                ) : (
                    <>
                        <div className='hidden md:block lg:block'>
                            <Dialog className="">
                                <DialogTrigger asChild>
                                    <Button variant="outline" className='flex items-center justify-center cursor-pointer border-none'>
                                        Create account. <span className=' text-blue-700 font-semibold cursor-pointer ml-1'>It’s free!</span> <img src='/navbar/arrow.png' alt='arrow' />
                                    </Button>
                                </DialogTrigger>
                                {!isSignInClicked ? (
                                    < SignUp setSignIn={setSignIn} />
                                ) : (
                                    <SignIn setSignIn={setSignIn} />
                                )}
                            </Dialog>
                        </div>
                        <div className="md:hidden ">
                            <Drawer>
                                <DrawerTrigger>
                                    <Button variant="outline" className='flex items-center justify-center cursor-pointer border-none'>
                                        Create account. <span className=' text-blue-700 font-semibold cursor-pointer ml-1'>It’s free!</span> <img src='/navbar/arrow.png' alt='arrow' />
                                    </Button>
                                </DrawerTrigger>
                                {!isSignInClicked ? (
                                    <SignUpMobile setSignIn={setSignIn} />
                                ) : (
                                    <SignInMobile setSignIn={setSignIn} />
                                )}
                            </Drawer>
                        </div>
                    </>
                )}








            </div>
        </div >
    )
}

export default Navbar
