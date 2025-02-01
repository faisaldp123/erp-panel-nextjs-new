import { useState, useEffect } from 'react';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
  Button,
  Modal,
  Box,
  Typography,
  Stack,
  TextField,
  MenuItem,
} from '@mui/material';

import Link from 'next/link';


import { useNotification } from '@/hooks/useNotification';
import { addEbooks, getAllEbooks, updateEbooks } from '@/helper/api/e-books';
import { useForm } from 'react-hook-form';


const Faculty = () => {
  const {displayNotification} = useNotification();
  
  const [isLoading, setIsLoading] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [ebooks, setEbooks] = useState([]);
  const [modal, setModal] = useState({
    open: false,
    isEditable: false,
    details: null
  })
  const form = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      name: "",
      category: null,
      description: null
    },
  });
  const { register, handleSubmit, formState, reset, getValues } = form;
  const { errors } = formState;

  
  useEffect(() => {
    
    getData();
  }, []);

  const getData = async (page = 1, pageSize = 10) => {
    setIsLoading(true)
    try {

      const data = await getAllEbooks({page, pageSize});
      setEbooks(data.result)
     
    } catch (error) {
      displayNotification({message: "Unable To Get Ebooks", type: "error"})

    } finally{
      setIsLoading(false);
    }
  };
//   async function onSubmit(data) {
//     setIsModalLoading(true)
//     try {
//       let response = await addEbooks(data);
//       displayNotification({message: `Ebooks ${modal.isEditable ? 'Updated' : 'Added'}`, type: "success"});
//       handleCloseModal();
//       getData();
//     } catch (error) {
//       displayNotification({message: `Unable to ${modal.isEditable ? 'Update' : 'Add'} Ebooks`, type: "error"});
//     } finally {
//       setIsModalLoading(false)
//     }
 
//   }

async function onSubmit(data) {
    setIsModalLoading(true)
    try {
      if (modal.isEditable) {
        let response = await updateEbooks(modal.details.book_id, data);
        displayNotification({message: `Ebook Updated`, type: "success"});
      
      }else {
        let response = await addEbooks(data);
        displayNotification({message: `Ebook Added`, type: "success"});
      }
      handleCloseModal();
      getData();
    } catch (error) {
      displayNotification({message: `Unable to ${modal.isEditable ? 'Update' : 'Add'} Ebook`, type: "error"});
    } finally {
      setIsModalLoading(false)
    }
 
  }

  function clearForm() {
    reset({
      name: "",
      category: null,
      description: null
    })
  }
  
  function handleOpenModal(details) {
    if (details) {
        setModal({
          open: true,
          isEditable: true,
          details
        });
        
        reset({
          name: details.name,
          category: details.category,
          description: details.description
        });
    }else{
      setModal({
        open: true,
        isEditable: false,
        details: null
      });
    }
   
  }
  function handleCloseModal() {
    setModal({
      open: false,
      isEditable: false,
      details: null
    });
    clearForm()
  }

  return (
    <>
      <div className="flex justify-between align-middle  mb-5">
        <h2 className='text-3xl'>Ebooks ({ebooks.length})</h2>
        

          <Button variant='outlined' color='success' onClick={() => handleOpenModal(null)} >Add +</Button>
      
        
      </div>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>

                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                category
                </TableCell>
            
                <TableCell>
                  description
                </TableCell>
                <TableCell>
                  Edit
                </TableCell>
                <TableCell>
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ebooks.map((row, index) => (
                <TableRow
                  sx={{ '& > *': { borderBottom: 'unset' } }}
                  hover

                  tabIndex={-1}
                  key={row.id}
                >

                  <TableCell>
                    {row.name}
                  </TableCell>

                  <TableCell>
                    {row.category}
                  </TableCell>

                  <TableCell>
                    {row.description}
                  </TableCell>
                  <TableCell>
                    
                  <Button onClick={() => handleOpenModal(row)}>Edit</Button>
                    
                  </TableCell>
                  <TableCell>
                    
                    <Link href={`/ebooks/info/${row.ebook_id}`}><Button >View</Button></Link>
                    
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
       
        </TableContainer>
      </Card>
      <Modal
        open={modal.open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modal.isEditable ? "Edit" : "Add"} Ebooks
          </Typography>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2} className='my-5'>
                <TextField label="Name" type='text' {...register("name", { required: "Name is required" })} error={!!errors.name} helperText={errors.name?.message} />
                <TextField label="Category" type='text' {...register("category", { required: "Category is required" })} error={!!errors.category} helperText={errors.category?.message} />
                <TextField label="Description" type='text' {...register("description", { required: "Description is required" })} error={!!errors.description} helperText={errors.phone?.message} />
                
                  {/* <FormHelperText>{errors?.managerId?.message}</FormHelperText> */}
                {/* </FormControl> */}
                {/* <TextField label="manager" type='text' {...register("manager", { required: "manager is required" })} error={!!errors.name}/> */}
              </Stack>
              <div>
                <Button className='me-5' onClick={() => handleCloseModal()}>
                  Cancel
                </Button>
                <Button variant='outlined' color='success' type='submit' disabled={isModalLoading}>
                  {isModalLoading ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>

          </div>
        </Box>
      </Modal>
    </>
  )
}

export default Faculty;




