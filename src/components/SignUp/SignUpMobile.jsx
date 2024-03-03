import React from 'react'
import { DrawerClose, DrawerContent, DrawerFooter, DrawerHeader } from '../ui/drawer'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const SignUpMobile = ({ setSignIn }) => {
    return (
        <>
            <DrawerContent>

                <DrawerHeader>
                    <div className='flex items-center justify-between px-1'>
                        <h1 className='text-2xl font-bold'>Create Account </h1>
                        <DrawerClose className=''>
                            <Button variant="icon">X</Button>
                        </DrawerClose>

                        {/* <p>Already have an account? <a onClick={setSignIn} className=' cursor-pointer font-semibold text-[#2F6CE5]'>Sign In</a> </p> */}
                    </div>
                </DrawerHeader>
                <div className='px-4'>
                    <form>
                        <div className='flex'>
                            <Input type="text" id="name" placeholder="First Name" className="col-span-3 w-1/2 rounded-sm" />
                            <Input type="text" id="Last name" placeholder="Last Name" className="col-span-3 w-1/2 rounded-sm" />
                        </div>
                        <Input id="email" type="email" placeholder="Email" className="col-span-3 w-full rounded-sm" />
                        <Input id="password" type="password" placeholder="Password" className="col-span-3 w-full rounded-sm" />
                        <Input id="confirmPassword" type="password" placeholder="Confirm Password" className="col-span-3 w-full rounded-sm" />
                        <div className='flex items-center justify-between'>
                            <div>
                                <Button
                                    className="w-full rounded-full my-6 bg-[#2F6CE5] text-white hover:bg-blue-700 hover:text-white"
                                    variant="outline"
                                    size="lg"
                                >
                                    Create Account
                                </Button>
                            </div>
                            <a onClick={setSignIn} className='font-semibold text-md cursor-pointer underline'>
                                Or, SignIn
                            </a>
                        </div>
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
                <DrawerFooter >
                    <p className='text-center text-md px-4'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </DrawerFooter>
            </DrawerContent>
        </>
    )
}

export default SignUpMobile
