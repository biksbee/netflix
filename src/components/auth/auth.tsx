'use client'

import cn from 'classnames'
import { FC, useCallback, useState } from "react"
import { RootState } from "@/app/store/store"
import { createUser } from '@/app/store/Features/auth/auth'
import { useSelector, useDispatch } from "react-redux";

import { Input } from '../input/Input'

export const AuthPage: FC = () => {

    const [userEmail, setuserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userPassword, setuserPassword] = useState('')

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    const auth = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    const takeValue = () => {
        dispatch(createUser({userEmail, userPassword}))
        console.log(auth)
        setuserEmail('')
        setUserName('')
        setuserPassword('')
    }

    return(
        <div 
            className={cn(
                "relative h-full w-full", 
                "bg-[url(/images/hero.jpg)]",
                "bg-no-repeat bg-center bg-fixed bg-cover"
            )}
        >
                <div className='bg-black w-full h-full lg:bg-opacity-50'>
                        {/* <nav className='px-12 py-5'>
                            <img src="/images/logo.png" alt="logo" className='h-12'/>
                        </nav> */}
                        <div className='flex justify-center'>
                            <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:h-max-w-md rounded-md w-full'>
                                <h2 className='text-white text-4xl mb-8 font-semibold'>
                                    {variant === 'login' ? 'Sign in' : 'Register'}
                                </h2>
                                <div className='flex flex-col gap-4'>
                                {variant === 'register' && (
                                    <Input 
                                            label="Name"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setUserName(e.target.value)}}
                                            id='Name'
                                            type='name'
                                            value={userName}
                                    />
                                )}
                                    <Input 
                                        label="Email"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setuserEmail(e.target.value)}}
                                        id='Email'
                                        type='Email'
                                        value={userEmail}
                                    />
                                    <Input 
                                        label="Password"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setuserPassword(e.target.value as string)}}
                                        id='Password'
                                        type='Password'
                                        value={userPassword}
                                    />
                                </div>
                                <button 
                                    className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'
                                    onClick={takeValue}
                                >    
                                    {variant === 'login' ? 'Login' : 'Sign up'}
                                </button>
                                <p className='text-neutral-500 mt-12'>
                                    {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                                    <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                                        {variant === 'login' ? 'Create an account' : 'Login'}
                                    </span>
                                </p>
                            </div>
                        </div>
                </div>
        </div>
    )
}