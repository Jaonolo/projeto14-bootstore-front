import React from 'react'
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

import UserContext from "../../Contexts/UserContext"

export default function PrivateScreens({ needsUser }) {
    const { user } = useContext(UserContext)
    const fallback = needsUser ? '/' : '/home'

    if((user === null) === needsUser)
        return <Navigate to={fallback}/>

    return <Outlet/>
}