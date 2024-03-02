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

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [isSignInClicked, setIsSignInClicked] = useState(true);


    const setSignIn = () => {
        setIsSignInClicked((prev) => (!prev))
    }

    return (

        <div>
            <div className='flex items-center md:justify-between mx-16 p-4 flex-wrap justify-center gap-4'>
                <div>
                    <img src='/navbar/logo.png' alt='logo' />
                </div>

                <div>
                    <form>
                        <div className='flex'>
                            <div>
                                <Button variant="outline" className="rounded-l-full border-r-0 bg-[#F2F2F2] " size="icon">
                                    <img src='/navbar/searchIcon.png' alt='search icon' />
                                </Button>
                            </div>
                            <div>
                                <Input type="text" className="px-3 py-2 w-80 rounded-r-full bg-[#F2F2F2] border-l-0" placeholder="Search for your favorite groups in ATG" />
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
                        <Dialog className="">
                            <DialogTrigger asChild>
                                <Button variant="outline" className='flex items-center justify-center cursor-pointer border-none'>
                                    Create account. <span className=' text-blue-700 font-semibold cursor-pointer ml-1'>It’s free!</span> <img src='/navbar/arrow.png' alt='arrow' />
                                </Button>
                            </DialogTrigger>
                            {!isSignInClicked ? (
                                <DialogContent className="sm:max-w-[750px] pt-0 px-0">
                                    <div className='bg-[#EFFFF4] py-4'>
                                        <p className='text-[#008A45] px-4'>
                                            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                                        </p>
                                    </div>
                                    <DialogHeader className="px-6">

                                        <div className='flex items-center justify-between px-4'>
                                            <h1 className='text-2xl font-bold'>Create Account </h1>

                                            <p>Already have an account? <a onClick={setSignIn} className=' cursor-pointer font-semibold text-[#2F6CE5]'>Sign In</a> </p>
                                        </div>


                                    </DialogHeader>
                                    <div className='flex px-6'>
                                        <div className='w-1/2 p-4'>
                                            <form>
                                                <div className='flex'>
                                                    <Input type="text" id="name" placeholder="First Name" className="col-span-3 w-1/2 rounded-sm" />
                                                    <Input type="text" id="name" placeholder="Last Name" className="col-span-3 w-1/2 rounded-sm" />
                                                </div>
                                                <Input id="name" type="email" placeholder="Email" className="col-span-3 w-full rounded-sm" />
                                                <Input id="password" type="password" placeholder="Password" className="col-span-3 w-full rounded-sm" />
                                                <Input id="password" type="password" placeholder="Confirm Password" className="col-span-3 w-full rounded-sm" />

                                                <Button
                                                    className="w-full rounded-full my-6 bg-[#2F6CE5] text-white hover:bg-blue-700 hover:text-white"
                                                    variant="outline"
                                                    size="lg"
                                                >
                                                    Create Account
                                                </Button>
                                            </form>

                                            <div className='flex flex-col gap-2'>
                                                <Button
                                                    className="w-full flex items-center justify-center gap-4"
                                                    variant="outline"
                                                    size="lg"
                                                >
                                                    <img src='/navbar/fb.png' alt='fb' />
                                                    Sign up with Facebook
                                                </Button>
                                                <Button
                                                    className="w-full flex items-center justify-center gap-4"
                                                    variant="outline"
                                                    size="lg"
                                                >
                                                    <img src='/navbar/google.png' alt='fb' />
                                                    Sign up with Google
                                                </Button>
                                            </div>
                                        </div>

                                        <div>
                                            <img src="/navbar/bg-image.png" alt="bg-image" />
                                        </div>
                                    </div>
                                    <DialogFooter className="px-6 pb-6 text-xs">
                                        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </DialogFooter>

                                </DialogContent>
                            ) : (<>
                                <DialogContent className="sm:max-w-[750px] pt-0 px-0">
                                    <div className='bg-[#EFFFF4] py-4'>
                                        <p className='text-[#008A45] px-4'>
                                            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                                        </p>
                                    </div>
                                    <DialogHeader className="px-6">

                                        <div className='flex items-center justify-between px-4'>
                                            <h1 className='text-2xl font-bold'>Sign In </h1>

                                            <p>Don’t have an account yet?  <a onClick={setSignIn} className=' cursor-pointer font-semibold text-[#2F6CE5]'>Create new for free!</a> </p>
                                        </div>


                                    </DialogHeader>
                                    <div className='flex px-6'>
                                        <div className='w-1/2 p-4'>
                                            <form>

                                                <Input id="name" type="email" placeholder="Email" className="col-span-3 w-full rounded-sm" />
                                                <Input id="password" type="password" placeholder="Password" className="col-span-3 w-full rounded-sm" />

                                                <Button
                                                    className="w-full rounded-full my-6 bg-[#2F6CE5] text-white hover:bg-blue-700 hover:text-white"
                                                    variant="outline"
                                                    size="lg"
                                                >
                                                    Sign In
                                                </Button>
                                            </form>

                                            <div className='flex flex-col gap-2 items-center'>
                                                <Button
                                                    className="w-full flex items-center justify-center gap-4"
                                                    variant="outline"
                                                    size="lg"
                                                >
                                                    <img src='/navbar/fb.png' alt='fb' />
                                                    Sign up with Facebook
                                                </Button>
                                                <Button
                                                    className="w-full flex items-center justify-center gap-4"
                                                    variant="outline"
                                                    size="lg"
                                                >
                                                    <img src='/navbar/google.png' alt='fb' />
                                                    Sign up with Google
                                                </Button>
                                                <span className='cursor-pointer mt-4 font-semibold'><a >Forgot Password?</a></span>
                                            </div>
                                        </div>

                                        <div>
                                            <img src="/navbar/bg-image.png" alt="bg-image" />
                                        </div>
                                    </div>

                                </DialogContent>
                            </>)}
                        </Dialog>
                    </>
                )}








            </div>
        </div>
    )
}

export default Navbar
