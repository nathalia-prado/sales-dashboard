import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Sale } from '../../models/sale';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled } from '@mui/material';
import { useState } from 'react';

function SalesTable({sales, handleDelete} : {sales: Sale[] | null,  handleDelete: (id: number) => void}) {

  const [open, setOpen] = useState(false);
  const [selectedSale, setSelectedSale] = useState<Sale | null>();

  const handleClickOpen = (sale: Sale | null) => {
    if (sale) {
      setSelectedSale(sale)
      setOpen(true)
    }
  };

  const handleClose = () => {
    setOpen(false)
    setSelectedSale(null)
  }

  const handleDeleteClick = () => {
    if (selectedSale && selectedSale.id) {
      handleDelete(selectedSale.id)
    }
    handleClose()
  };

  const StyledTableCell = styled(TableCell)(() => ({
      [`&.${tableCellClasses.head}`]: {
          color: "var(--dark-blue)",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "var(--primary-font)"
      },
      [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
          fontFamily: "var(--primary-font)"
      }
  }))

  const StyleRow = styled(TableRow)(() => ({
      [`&:nth-of-type(odd)`]: {
          backgroundColor: "var(--light-grey)",
          align: "right"
      }
  }))

    return (
      <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700}} aria-label="customized-table">
          <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Employee</StyledTableCell>
            <StyledTableCell>Total Sale</StyledTableCell>
          </TableRow> 
          </TableHead>
          <TableBody>
              {sales?.map(sale => {
                return (
                  <StyleRow key={sale.id} onClick={() => handleClickOpen(sale)}>  
                    <StyledTableCell>{new Date(sale.dateOrder).toLocaleDateString('en-NZ')}</StyledTableCell>
                    <StyledTableCell>{new Date(sale.dateOrder).toLocaleTimeString()}</StyledTableCell>
                    <StyledTableCell>{sale.employeeName}</StyledTableCell>
                    <StyledTableCell>${sale.total}</StyledTableCell>
                  </StyleRow>
                )
              }) }
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure you want to delete this sale?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {selectedSale ? `Please, confirm if you are sure you want to delete the ${selectedSale?.employeeName}'s sale total value of ${selectedSale?.total}!` : 'Loading...'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
          <Button onClick={handleDeleteClick}>Confirm</Button>
        </DialogActions>
      </Dialog>
      </>
    )
  }
  
  export default SalesTable
  