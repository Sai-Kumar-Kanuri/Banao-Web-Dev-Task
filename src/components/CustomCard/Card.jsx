import React from 'react';
import { Card as BaseCard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, MoreHorizontal, Eye } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';

const Card = ({ title, header, description, authorName, authorImage, views, imageUrl }) => {
    return (
        <BaseCard className="w-[692px]">
            <CardHeader>
                <img src={imageUrl} alt={title} />
                <CardDescription className="text-lg">{header}</CardDescription>
                <div className='flex justify-between items-center'>
                    <CardTitle className="text-[22px] w-4/5">{title}</CardTitle>
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
                <p className='text-[18px]'>{description}</p>
            </CardContent>
            <CardFooter>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center gap-2' >
                        <img src={authorImage} alt={authorName} />
                        <p className='cursor-pointer font-bold'>{authorName}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='flex gap-2'>
                            <Eye className='cursor-pointer' />
                            <span>{views} views</span>
                        </div>
                        <button className='bg-[#EDEEF0] p-2 rounded-lg'>
                            <Share2 />
                        </button>
                    </div>
                </div>
            </CardFooter>
        </BaseCard>
    );
};

export default Card;
