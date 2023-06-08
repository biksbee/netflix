import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { favoriteAction } from "../Features/favorites/favorites" 

const rootActions = {
    ...favoriteAction
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => 
        bindActionCreators(rootActions, dispatch), [dispatch]
    )
}