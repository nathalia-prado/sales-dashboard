import { Alert, Box, Modal, Rating } from "@mui/material"
import Title from "./Title"
import Input from "./Input";
import Select from "./Select";
import { ChangeEvent, useState } from "react";
import { convertToDateTimeInputFormat } from "./utils/dateUtils";
import { addSale } from "../apis/Employees";

interface Option {
    value: number
    label: string
}

export interface Sale {
    total: number
    rate: number
    dateOrder: string
    employeeId: number
}

function SalesModal({options, open, handleLoading, handleClose} : {options: Option[] | undefined, open: boolean, handleLoading: () => void, handleClose: () => void}) {


    const defaultSale = { 
        total: 0, 
        rate: 3, 
        dateOrder: convertToDateTimeInputFormat(''), 
        employeeId: 1
    }    

    const [newSale, setNewSale] = useState<Sale>(defaultSale)
    const [errorMessage, setErrorMessage] = useState<string | null>()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage(null)

        if (!newSale.total || newSale.total === 0) {
            setErrorMessage('Total cannot be 0')
            return
        }

        try {
            await addSale({
                total: newSale.total, 
                rate: newSale.rate, 
                dateOrder: new Date(newSale.dateOrder).getTime(),
                employeeId: newSale.employeeId
            })
            await handleLoading()
        } catch (error) {
            console.log(error)
        }
        setNewSale(defaultSale)
    }

    const handleTotalChange = (e: ChangeEvent<HTMLInputElement>) => {
        const total = e.target.value ? Number(e.target.value) : 0
        setNewSale({ ...newSale, total })
    }

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSale({ ...newSale, dateOrder: convertToDateTimeInputFormat(e.target.value) })
    }

    const handleRateChange = (rate: number) => {
        setNewSale({ ...newSale, rate })
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const employeeId = Number(e.target.value) || 1
        setNewSale({ ...newSale, employeeId })
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box className="sales-modal-box">
                    <Title>New Sale:</Title>
                    {errorMessage && (
                        <Alert severity="error">
                            {errorMessage}
                      </Alert>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="sales-modal-container">
                            <Input name="total" type="number" label="Total" value={newSale.total} placeholder="Total Sale" onChange={handleTotalChange}/>
                            <Input name="date" type="datetime-local" label="Date" value={newSale.dateOrder} placeholder="Order Date" onChange={handleDateChange}/>
                            <Select label="Employee" value={newSale.employeeId} onChange={handleSelectChange} options={options}/>
                        </div>
                        <div className="sales-modal-container-rate">
                            <h3 className="subtitle-h3">Customer Satisfaction</h3>
                            <Rating name="simple-controlled" value={newSale.rate} onChange={(event, newValue) => handleRateChange(newValue || 0)} />
                        </div>
                        <button className="button sales-modal-button">Save</button>
                    </form>
                </Box>

        </Modal>
    )
}

export default SalesModal