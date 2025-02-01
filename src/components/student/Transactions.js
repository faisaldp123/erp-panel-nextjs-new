import { getPaidAmount, getRemainingAmount } from '@/utils/fee'
import { Box, Button, Collapse, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import dayjs from 'dayjs';

const Transactions = ({row, handleEditModal}) => {
    const [open, setOpen] = useState(false);

  return (
    <>
    <TableRow
    sx={{ '& > *': { borderBottom: 'unset' } }}
    hover

    tabIndex={-1}
    key={row.id}
  >
     <TableCell>
<IconButton
aria-label="expand row"
size="small"
onClick={() => setOpen(!open)}
>
{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
</IconButton>
</TableCell>
       <TableCell>
      {row.session}
    </TableCell>
    <TableCell>
      {row.fee_type}
    </TableCell>

    <TableCell>
      Rs. {row.fee}
    </TableCell>
    <TableCell>
      Rs. {getPaidAmount(row.payments)}
    </TableCell>
    <TableCell>
      Rs. {getRemainingAmount(row.payments, row.fee)}
    </TableCell>
    <TableCell>
    <Button variant='outlined' onClick={() => handleEditModal(row)} disabled={getRemainingAmount(row.payments, row.fee) === 0 ? true : false}>
        Pay
      </Button>
    </TableCell>
  </TableRow>
   <TableRow>
   <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
     <Collapse in={open} timeout="auto" unmountOnExit>
       <Box sx={{ margin: 3 }}>
         <Typography variant="h6" gutterBottom component="div">
           Summery
         </Typography>
         <TableContainer component={Paper} sx={{ maxWidth: 550 }}>
      <Table  size="small">
        <TableHead>
          <TableRow>
            <TableCell><strong>S. No.</strong></TableCell>
            <TableCell><strong>Amount</strong></TableCell>
            <TableCell><strong>Next Due</strong></TableCell>
            <TableCell><strong>Paid At</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.payments?.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>Rs. {row.amount}</TableCell>
              <TableCell>{row.due_date ? dayjs(row.due_date).format('MMM D, YYYY') : 'NA' }</TableCell>
              <TableCell>{dayjs(row.payAt).format('MMM D, YYYY h:mm A') }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </Box>
     </Collapse>
   </TableCell>
 </TableRow>
 </>
  )
}

export default Transactions