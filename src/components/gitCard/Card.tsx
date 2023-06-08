import { useEffect, useState } from "react"
import { IRepo } from "@/models/githubTypes";
import cn from 'classnames'
import { useActions } from "@/app/store/hooks/useActions";
import { useAppSelector } from "@/app/store/hooks/useType";

export const Card = ({ repo }: {repo: IRepo} ) => {
    
    const { addFavorite, removeFavorite } = useActions()
    const { favorites } = useAppSelector(state => state.favorites)
    
    const [isActive, setIsActive] = useState(favorites.includes(repo.html_url))


    const addFav = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsActive(true)
        event.preventDefault()
        addFavorite(repo.html_url)
    }

    const remFav = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setIsActive(false)
        event.preventDefault()
        removeFavorite(repo.html_url)
    }
    
    return(
        <div
            className="relative border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-[#a8a3a3] duration-500 transition-all"
        >
            <a href={repo.html_url} target={"_blank"}>
                <h2 className="text-lg font-bold">
                    {repo.full_name}
                    <p className="text-sm">
                        Forks: <span className="font-bold mr-2">{repo.forks}</span>
                        Watcchers: <span className="font-bold mr-2">{repo.watchers}</span>
                    </p>
                    <p className="text-sm">Lan: <span className="font-bold">{repo.language}</span></p>
                    <p className="text-sm ">{repo?.description}</p>
                    <p className="text-sm text-[#f00]">{`${isActive}`}</p>
                    <p className="text-sm ">Check card</p>
                </h2>
            </a>
            <div 
                className="w-[20px] h-[20px] absolute z-[1] right-0 top-0 flex"
                onClick={!isActive ? addFav : remFav}
            >
                <div className={cn(
                        "star_favorite bg-[#000] w-[20px] duration-500 flex justify-center items-center", 
                        isActive && "bg-[#08ff29]"
                    )}
                >
                    <div 
                        className={cn(
                            "star_favorite w-[15px] h-[15px]",
                            "bg-[#fff] opacity-[.5]",
                            isActive && "bg-[#08ff29]"
                        )}
                    />
                </div>
            </div>
        </div>
    )
}