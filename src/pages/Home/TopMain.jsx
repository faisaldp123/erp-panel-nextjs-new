import { School } from '@mui/icons-material'
import React from 'react'

const TopMain = () => {
  return (
    <div className='container'>
        <h3 style={{ fontSize: '26px', marginBottom: '20px', borderBottom: '3px solid', width:'fit-content'}}>Home</h3>
        <div className='border rounded border-dark'>
            <h2 style={{fontSize: '22px', borderBottom: '1px solid', padding: '10px'}}>Home</h2>
            <div className='border rounded border-dark' style={{margin: '30px', padding: '23px',}}>
                <h3 style={{fontSize: '22px', borderBottom: '1px solid', padding: '45px 4px'}}>Himanshu singh | Quick Updates</h3>
                <div className="flex flex-wrap justify-center md:justify-around" style={{display: 'flex', justifyContent: 'space-around', padding: '10px', marginTop: '30px'}}>
                    
                        <div className='border rounded' style={{padding: '30px 28px'}}>
                        <div className="flex">
                        <div style={{margin: 'auto', marginRight: '25px'}}>
                            <School/>
                        </div>
                        <div>
                            <p>Semester - 1</p>
                            <h6>MASTER OF BUSINESS <br /> ADMINISTRATION</h6>
                        </div>
                        </div>
                    </div>
                    <div className='border rounded' style={{padding: '30px 28px'}}>
                        <div className="flex">
                        <div style={{margin: 'auto', marginRight: '25px'}}>
                            <School/>
                        </div>
                        <div>
                            <p>Semester - 1</p>
                            <h6>MASTER OF BUSINESS <br /> ADMINISTRATION</h6>
                        </div>
                        </div>
                    </div>
                    <div className='border rounded' style={{padding: '30px 28px'}}>
                        <div className="flex">
                        <div style={{margin: 'auto', marginRight: '25px'}}> 
                            <School/>
                        </div>
                        <div>
                            <p>Semester - 1</p>
                            <h6>MASTER OF BUSINESS <br /> ADMINISTRATION</h6>
                        </div>
                        </div>
                    </div>
                    <div className='border rounded' style={{padding: '30px 28px'}}>
                        <div className="flex">
                        <div style={{margin: 'auto', marginRight: '25px'}}>
                            <School/>
                        </div>
                        <div>
                            <p>Semester - 1</p>
                            <h6>MASTER OF BUSINESS <br /> ADMINISTRATION</h6>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMain