import React, { Component } from 'react';
import ResponsiveAppBar from '../components/navbarNew';
import Footer from '../components/footer';
import AdminDashboard from '../components/dashboard/admin';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';      // Import Material UI Back button to this component
import { Button } from '@mui/material';


function AdminPage() {

    return(

        <div className='container'>
            
            <div>
                <ResponsiveAppBar/>

            </div>



            <div style={{marginTop: '65px'}}>

                <div className='text-center'>
                    <h1
                        style={{
                            fontWeight: 'lighter'
                        }}
                    >
                        Course Coordinator Dash Board
                    </h1>
                </div>

                <div className='row'
                    style={{
                        width: '100px'
                    }}
                >

                    <Button variant="contained" color="info" startIcon={<ArrowBackIcon/>}>
                        Back
                    </Button>

                </div>

            </div>




            <div style={{marginTop: '70px'}}>
                <AdminDashboard/>
            </div>



            <div>
                <Footer/>
            </div>

        </div>

    );

}


export default AdminPage;