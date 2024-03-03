import React from 'react'
import { DialogContent, DialogFooter, DialogHeader } from '../ui/dialog'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const SignUp = ({ setSignIn }) => {
    return (
        <>
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

        </>
    )
}

export default SignUp
