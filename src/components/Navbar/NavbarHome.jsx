import React, { useState } from 'react'
import { Menubar, MenubarMenu, MenubarTrigger } from '../ui/menubar'
import { Button } from '../ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom'


const NavbarHome = () => {
  const [isJoinedGrp, setIsJoinedGrp] = useState(false);

  return (
    // <div>
    //   <nav className="hidden md:flex gap-4 w-full h-16 bg-white bg-opacity-50 backdrop-blur-md items-center justify-between p-12 lg:px-52">
    //     <div className='flex items-center justify-between gap-4'>
    //       <a href="#">All Posts(32)</a>
    //       <a href="#"> Article </a>
    //       <a href="#"> Event </a>
    //       <a href="#"> Education </a>
    //       <a href="#"> Job </a>
    //     </div>
    //     <div className='flex gap-2'>
    //       <Menubar className="bg-[#EDEEF0] hover:bg-[#EDEEF0]" >
    //         <MenubarMenu>
    //           <MenubarTrigger className="flex items-center justify-center"><p>WritePost</p>  <img src='/home/arrow.png' alt='arrow' className='mx-auto px-2' /></MenubarTrigger>
    //         </MenubarMenu>
    //       </Menubar>

    //       {!isJoinedGrp ? (
    //         <Button className="flex gap-2 bg-[#2F6CE5]">
    //           <img src='/home/ppl.png' alt='ppl' />
    //           <p>WritePost</p></Button>
    //       ) : (
    //         <Button className="flex gap-2 bg-white hover:bg-gray-200 border-2">
    //           <img src='/home/exit.png' alt='ppl' />
    //           <p className='text-[#989899]  hover:text-gray-500'>Leave Group</p>
    //         </Button>
    //       )}
    //     </div>


    //   </nav>
    //   <div className='px-48 pb-4'>
    //     <hr />
    //   </div>
    // </div>
    <div className='px-4 lg:px-48 py-4 w-full'>
      <NavigationMenu>
        <div className='hidden md:flex items-center justify-between w-full xl:gap-96'>
          <div>
            <NavigationMenuList>
              <NavigationMenuItem>

                <NavigationMenuLink href='#' className={navigationMenuTriggerStyle()}>
                  All Posts(32)
                </NavigationMenuLink>

              </NavigationMenuItem>
              <NavigationMenuItem>

                <NavigationMenuLink href='#' className={navigationMenuTriggerStyle()}>
                  Article
                </NavigationMenuLink>

              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='#' className={navigationMenuTriggerStyle()}>
                  Event
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='#' className={navigationMenuTriggerStyle()}>
                  Education
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='#' className={navigationMenuTriggerStyle()}>
                  Job
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </div>

          <div className='flex gap-2'>
            <Menubar className="bg-[#EDEEF0] hover:bg-[#EDEEF0]" >
              <MenubarMenu>
                <MenubarTrigger className="flex items-center justify-center cursor-pointer"><p>WritePost</p>  <img src='/home/arrow.png' alt='arrow' className='mx-auto px-2' /></MenubarTrigger>
              </MenubarMenu>
            </Menubar>

            {!isJoinedGrp ? (
              <Button className="flex gap-2 bg-[#2F6CE5]">
                <img src='/home/ppl.png' alt='ppl' />
                <p>WritePost</p></Button>
            ) : (
              <Button className="flex gap-2 bg-white hover:bg-gray-200 border-2">
                <img src='/home/exit.png' alt='ppl' />
                <p className='text-[#989899]  hover:text-gray-500'>Leave Group</p>
              </Button>
            )}
          </div>
        </div>



      </NavigationMenu>

      <div className='my-2'>
        <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700' />
      </div>


    </div>
  )
}

export default NavbarHome
