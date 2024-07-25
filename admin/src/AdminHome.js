import React from 'react'
import BookingSlot from './BookingSlot'
import AdminHeader from './AdminHeader'
import { Col, Container, Row } from 'react-bootstrap'

export default function AdminHome() {
    return (
        <>
            <AdminHeader />
            <BookingSlot />
        </>
    )
}
