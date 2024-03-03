import React from 'react'
import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader } from '../ui/drawer'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const SignInMobile = ({ setSignIn }) => {
    return (
        <>
            <DrawerContent className="pb-16">

                <DrawerHeader>
                    <div className='flex items-center justify-between px-1'>
                        <h1 className='text-2xl font-bold'>Welcome Back! </h1>
                        <DrawerClose className=''>
                            <Button variant="icon">X</Button>
                        </DrawerClose>

                        {/* <p>Already have an account? <a onClick={setSignIn} className=' cursor-pointer font-semibold text-[#2F6CE5]'>Sign In</a> </p> */}
                    </div>
                </DrawerHeader>
                <div className='w-full p-4'>
                    <form>

                        <Input id="name" type="email" placeholder="Email" className="col-span-3 w-full rounded-sm" />
                        <Input id="password" type="password" placeholder="Password" className="col-span-3 w-full rounded-sm" />

                        <div className='flex items-center justify-between'>
                            <div>
                                <Button
                                    className="w-full px-20 rounded-full my-6 bg-[#2F6CE5] text-white hover:bg-blue-700 hover:text-white"
                                    variant="outline"
                                    size="lg"
                                >
                                    Sign In
                                </Button>
                            </div>
                            <a onClick={setSignIn} className='font-semibold text-md cursor-pointer underline'>
                                or, Create Account
                            </a>
                        </div>
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
                <DrawerFooter >
                    <p className='text-center text-md px-4'>Forgot Password?</p>
                </DrawerFooter>
            </DrawerContent>
        </>
    )
}

export default SignInMobile
