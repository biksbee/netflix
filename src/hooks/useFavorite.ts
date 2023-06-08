import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"

export const useFavorite = () => {
    const favorites = useSelector((state: RootState) => state.favorites)

    return {favorites}
}