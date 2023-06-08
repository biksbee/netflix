'use client'

import { FC } from "react"
import { useAppSelector, useAppDispatch } from "@/app/store/hooks"
import { addFavorite } from "@/app/store/Features/favorites/favorites"

export const RecipeItem:FC = ({ recipe }) => {

    const favorite = useAppSelector(state => state.favorites)
    const dispatch = useAppDispatch()

    return(
        <div>
            <div className="flex gap-x-[10px]">
                <h2>{recipe.name}</h2>
            </div>
            <button
                onClick={() => {dispatch(addFavorite(recipe))}}
            >
                add favorite
            </button>
        </div>
    )
}