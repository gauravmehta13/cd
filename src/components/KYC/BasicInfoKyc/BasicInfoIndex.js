import React,{useEffect, useState} from 'react'
import Spinner from '../../UI/Spinner'
import {Link} from 'react-router-dom'
import {
    Card,
    CardContent,
    Typography,
    makeStyles,
    Grid,
    Breadcrumbs
} from '@material-ui/core'
const useStyles = makeStyles({
    root: {
        // minWidth: 275,
    },
    title: {
        fontSize: 25,
        height: 50,
        padding: 10,
        paddingLeft: 55,
        color: 'white'
    },
    formHeadings: {
        margin: 20,
        marginBottom: 0
    },
    formControl: {
        marginTop:'1%'
    }
});
const AccountInfoIndex = (props) => {
    const classes = useStyles()
    const [comDetails,setComDetails] = useState()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        var temp = {
            registeredName:'GoFlexe',
            registeredAddress:'Patna',
            email:'pks@gmail.com',
            contact:'8252782928'
        }
        setComDetails(temp);
        setLoading(false)
    },[])
    const fun = (page) => {
        //alert(JSON.stringify(props))
        props.changePage(page)
    }
    if(loading===true){
        return(
            <Spinner />
        )
    }
    return(
        <React.Fragment>
            <Breadcrumbs style={{marginBottom:'10px'}} aria-label="breadcrumb">
        <Link color="inherit" onClick={() => fun('')}>
            KYC
        </Link>
            <Typography color="textPrimary">Company Details</Typography>
    </Breadcrumbs>
        <Card className={classes.root}>
            <CardContent style={{ padding: 0,marginTop:10 }}>
                                <Typography className={classes.title} gutterBottom style={{ backgroundColor: '#66bb6a' }}>
                                    Company Details
                                </Typography>
                                <table style={{fontSize:20}}>
                                    <Grid container spacing={3} style={{ padding: 50, paddingTop: 10, paddingBottom: 30 }}>
                                        <Grid item xs={12} sm={6} >
                                            <tr>
                                                <th scope="row">Registered Name:</th>
                                                <td>{comDetails.registeredName}</td>
                                            </tr>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <tr>
                                                <th scope="row">Registered Address:</th>
                                                <td>{comDetails.registeredAddress}</td>
                                            </tr>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <tr>
                                                <th scope="row">Email:</th>
                                                <td>{comDetails.email}</td>
                                            </tr>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <tr>
                                                <th scope="row">Contact:</th>
                                                <td>{comDetails.contact}</td>
                                            </tr>
                                        </Grid>

                                    </Grid>
                                </table>
                </CardContent>
            </Card>
        </React.Fragment>
    )
    
}
export default AccountInfoIndex