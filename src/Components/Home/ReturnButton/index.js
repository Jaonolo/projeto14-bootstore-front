import React from 'react'
import { useNavigate } from 'react-router-dom'

import marcaX from '../../../Assets/xmark-solid.svg'

export default function ReturnButton() {
    const navigate = useNavigate()

    return <img style={{ height: '36px' }} src={marcaX} onClick={() => navigate(-1)}/> 
}