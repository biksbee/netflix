'use client'

import { useAppSelector } from '@/app/store/hooks/useType';
import cn from 'classnames';
import { FC } from "react";
import { Card } from '../gitCard/Card';


export const FavoritePage: FC = () => {
    
    const { favorites } = useAppSelector(state => state.favorites)

    const clearStorage = () => {
        localStorage.clear()
    }

    if(favorites.length === 0)
        return <p className='atc'>No items.</p>

    return(
        <div className='flex flex-col items-center pt-28 mx-auto h-screen w-screen'>
            <div className='text-white'>
                <ul className='list-none'>
                    { favorites.map((item, index) => (
                        <li key={index}>
                            <a href={item}>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mt-4'>
                <div>
                    <button
                        className={cn(
                            'px-[20px] py-2 cb rounded-lg shadow-sm border-[1px] border-[#fff] text-white duration-500', 
                            'hover:text-[#000] hover:border-[#000] hover:bg-[#fff]'
                        )}
                        onClick={clearStorage}
                    > 
                        <div className='text-lg'>
                            clear storage
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}