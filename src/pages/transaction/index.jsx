import { useState, useEffect } from 'react';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Button,
} from '@mui/material';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { getAllTansactions } from '@/helper/api/fee';
import { useNotification } from '@/hooks/useNotification';


const Students = () => {

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false)
  const {displayNotification} = useNotification()

  async function getData() {
    setLoading(true)
    try {
      let data = await getAllTansactions();
      setTransactions(data.result)
    } catch (error) {
      displayNotification({message: "Unable to fetch transactions", type: "error"})
    } finally {
      setLoading(false)
    }
  
  }
  useEffect(() => {
    getData()
  }, []);



  return (
    <>
      <div className="flex justify-between align-middle  mb-5">
        <h2 className='text-3xl'>Transactions</h2>
        {/* <Button variant='outlined' color='success'  >
          <Link href='/students/form'>Add +</Link>
        </Button> */}
      </div>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>
                  Transaction id
                </TableCell>

                <TableCell>
                  Amount
                </TableCell>
                <TableCell>
                Amount
                </TableCell>
                <TableCell>
                Email
                </TableCell>
                <TableCell>
                Course
                </TableCell>
                <TableCell>
                Session
                </TableCell>
                <TableCell>
                Fee Type
                </TableCell>
                <TableCell>
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((row, index) => (
                <TableRow
                  sx={{ '& > *': { borderBottom: 'unset' } }}
                  hover

                  tabIndex={-1}
                  key={row.id}
                >
                     <TableCell>
                    {row.id}
                  </TableCell>

                  <TableCell>
                   Rs. {row.amount}
                  </TableCell>

                  <TableCell>
                    {row.phone}
                  </TableCell>

                  <TableCell>
                    {row.email}
                  </TableCell>
                  <TableCell>
                    {row.course_name}
                  </TableCell>
                  <TableCell>
                    {row.session}
                  </TableCell>
                  <TableCell>
                    {row.fee_type}
                  </TableCell>

                  <TableCell>
                    <Button >
                    <Link href={`/transaction/id`}>PRINT</Link>
                    </Button>
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
    
        </TableContainer>
      </Card>

    </>
  )
}

export default Students;




