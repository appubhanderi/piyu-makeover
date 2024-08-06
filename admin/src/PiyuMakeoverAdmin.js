import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import AdminHome from './AdminHome'
import BookingSlot from './BookingSlot'
import UploadImage from './UploadImage'
import Gallery from './Gallery'

export default function PiyuMakeoverAdmin() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/AdminHome' element={<AdminHome />} />
                <Route path='/BookingSlot' element={<BookingSlot />} />
                <Route path='/UploadImage' element={<UploadImage />} />
                <Route path='/Gallery' element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    )
}
