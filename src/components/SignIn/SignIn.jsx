import React from 'react'
import { DialogContent, DialogHeader } from '../ui/dialog'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const SignIn = ({ setSignIn }) => {
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
        </>
    )
}

export default SignIn
