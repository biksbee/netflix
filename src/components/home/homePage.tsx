'use client'
import { FC, useState, useEffect } from "react"
import { useDebounce } from "@/hooks/useDebounce";
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "@/app/store/Features/github/github";
import { Card } from "@/components/gitCard/Card"
import { useActions } from "@/app/store/hooks/useActions";
import { useAppSelector } from "@/app/store/hooks/useType";


export const HomePage: FC = () => {

    const { searchLater } = useActions()
    const { favorites } = useAppSelector(state => state.favorites)

    const [search, setSearch] = useState('')
    const [dropDown, setDropDown] = useState(false)
    const debounce = useDebounce(search, 300)
    const {isLoading, isError, data} = useSearchUsersQuery(debounce, {
        skip: debounce.length < 3,
        refetchOnFocus: true,
    })
    const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()

    useEffect(() => {
        if(debounce.length > 3)
            setDropDown(true)
        else setDropDown(false)
    }, [debounce])

    const clickHandler = (username: string) => {
        setDropDown(false)
        fetchRepos(username)
        searchLater(username)
    }

    return (
        <div className="">
            <div className="text-white w-full flex justify-center items-center h-[70px]">
                Netflix Clone
            </div>
            <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
                {
                    isError && 
                    <p className="atc text-red-600">Something went wrong...</p>
                }
                <div className="relative w-[560px]">
                    <input 
                        type="text" 
                        className="border py-2 px-3 w-full h-[42px] mb-2"
                        placeholder="Search for Github username..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <ul className="list-none absolute z-10 overflow-y-scroll top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
                        { 
                            isLoading && 
                            <p className="atc">Loading...</p>
                        }
                        {dropDown && favorites?.map((item, index) => (
                            <li 
                                key={index}
                                onClick={() => clickHandler(item)}
                                className="flex items-center py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                            > 
                                {item}
                            </li>
                        ))}
                        {dropDown && data?.map(user => (
                            <li
                                key={user.id}
                                onClick={() => clickHandler(user.login)}
                                className="flex items-center py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                            >
                                <img 
                                    src={user.avatar_url} 
                                    alt="avatar" 
                                    className="w-[40px] mr-[15px]"
                                />
                                { user.login }
                            </li>
                        ))}
                    </ul>
                    <div>
                        {areReposLoading && <p className="atc">Repos are loading...</p>}
                        {repos?.map(repo => 
                            <Card repo={repo} key={repo.id} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}