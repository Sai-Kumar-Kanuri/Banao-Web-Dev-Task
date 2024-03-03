import React from 'react'
import { Share2, MoreHorizontal, MapPin, Eye } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const CardSite = () => {
    return (
        <div className='flex flex-col md:gap-4'>
            <Card className="w-full lg:w-[692px] ">
                <CardHeader>
                    <img src="/home/card3.png" alt="card3" />
                    <CardDescription className="text-lg text-black font-semibold">🗓️ Meetup</CardDescription>
                    <div className="text-black font-semibold">
                        <div className='flex items-center gap-8'>
                            <div className='flex gap-2'>
                                <img src='/home/calender.png' alt='calender' />
                                <p>Fri, 12 Oct, 2018</p>
                            </div>
                            <div className='flex text-black'>
                                <MapPin />
                                <p>Ahmedabad, India</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between items-center'>
                        <CardTitle>Finance & Investment Elite Social Mixer @Lujiazui</CardTitle>
                        {/* <div className='cursor-pointer'><MoreHorizontal /></div> */}
                        <DropdownMenu>
                            <DropdownMenuTrigger><Button variant="outline" className="border-none"><MoreHorizontal /></Button></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Report </DropdownMenuItem>
                                <DropdownMenuItem>Option 3</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>

                <CardContent>
                    <Button className="text-[#E56135] hover:bg-[#e97650] hover:text-white w-full " variant="outline">Visit Website</Button>
                </CardContent>

                <CardFooter>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex items-center gap-2' >
                            <img src="/home/per3.png" alt="per3f" />
                            <p className='cursor-pointer font-bold'>Ronal Jones</p>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='flex gap-2'>
                                <Eye className='cursor-pointer' />
                                <span>1.4k views</span>
                            </div>
                            <button className='bg-[#EDEEF0] p-2 rounded-lg'>
                                <Share2 />
                            </button>
                        </div>
                    </div>
                </CardFooter>

            </Card>


            <Card className="sm:w-full lg:w-[692px]">
                <CardHeader>
                    {/* <img src="/home/card3.png" alt="card3" /> */}
                    <CardDescription className="text-lg text-black font-semibold">💼️ Job</CardDescription>
                    <div className='flex justify-between items-center'>
                        <CardTitle>Software Developer</CardTitle>
                        {/* <div className='cursor-pointer'><MoreHorizontal /></div> */}
                        <DropdownMenu>
                            <DropdownMenuTrigger><Button variant="outline" className="border-none"><MoreHorizontal /></Button></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Report </DropdownMenuItem>
                                <DropdownMenuItem>Option 3</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="text-black font-semibold">
                        <div className='flex items-center gap-8'>
                            <div className='flex gap-2'>
                                <img src='/home/case.png' alt='calender' />
                                <p>Innovaccer Analytics Private Ltd.</p>
                            </div>
                            <div className='flex text-black '>
                                <MapPin />
                                <p>Noida, India</p>
                            </div>
                        </div>

                    </div>

                </CardHeader>

                <CardContent>
                    <Button className="text-[#02B875] hover:bg-[#02B875] hover:text-white w-full " variant="outline">Visit Website</Button>
                </CardContent>

                <CardFooter>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex items-center gap-2' >
                            <img src="/home/per4.png" alt="per3f" />
                            <p className='cursor-pointer font-bold'>Joseph Gray</p>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='flex gap-2'>
                                <Eye className='cursor-pointer' />
                                <span>1.4k views</span>
                            </div>
                            <button className='bg-[#EDEEF0] p-2 rounded-lg'>
                                <Share2 />
                            </button>
                        </div>
                    </div>
                </CardFooter>

            </Card>


        </div>
    )
}

export default CardSite
