import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Sale } from '../../models/sale';
import { styled } from '@mui/material';

function SalesTable({sales} : {sales: Sale[] | null}) {

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
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Employee</StyledTableCell>
            <StyledTableCell>Total Sale</StyledTableCell>
          </TableHead>
          <TableBody>
              {sales?.map(sale => {
                return (
                  <StyleRow key={sale.id}>  
                    <StyledTableCell component={'th'} scope='row'>{new Date(sale.dateOrder).toLocaleDateString()}</StyledTableCell>
                    <StyledTableCell>{new Date(sale.dateOrder).toLocaleTimeString()}</StyledTableCell>
                    <StyledTableCell>{sale.employeeName}</StyledTableCell>
                    <StyledTableCell>{sale.total}</StyledTableCell>
                  </StyleRow>
                )
              }) }
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )
  }
  
  export default SalesTable
  