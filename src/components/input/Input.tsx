import cn from 'classnames'
import { FC } from 'react'

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

export const Input: FC<InputProps> = ({
    id, 
    onChange, 
    value, 
    label, 
    type
}) => {
    return (
        <div className='relative'>
            <input
                id={id}  
                value={value}
                type={type}
                onChange={onChange}
                className={cn(
                    "block rounded-md",
                    "px-6 pt-6 pb-1",
                    "w-full text-md bg-neutral-700",
                    "appearance-none focul:outline-none focus:ring-0",
                    "peer"
                )}
                placeholder=' '
            />
            <label 
                className='
                    absolute 
                    text-md 
                    text-zinc-400 
                    duration-150 
                    transform 
                    -translate-y-3 
                    scale-75 
                    top-4 
                    z-10 
                    origin-[0] 
                    left-6 
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:-translate-y-3
                '
                htmlFor={id}
            >
                {id}    
            </label>
        </div>
    )
}