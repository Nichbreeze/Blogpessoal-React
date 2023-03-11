import {Grid, TextField } from "@material-ui/core";
import { shadows } from '@material-ui/system';
import './Login.css';

function Login(){
    return(
      <Grid container alignItems="center" justifyContent="center" className="gridContainer">
        <Grid item xs={6} >
            <form className="formLog">
              <span>Login</span>
              <div className="containerInputs">
              <TextField id="standard-basic" fullWidth label="Email" />
              </div>
              <div className="containerInputs">
              <TextField id="standard-basic" fullWidth label="Senha" />
              </div>
            </form>
        </Grid>
      </Grid>
      
    );
};

export default Login;


/*
<Grid container spacing={0} justifyContent='center' alignItems='center' direction='column'>
        <Grid item xs={6} justifyContent='center' alignItems='center'>
          <form noValidate autoComplete="off" className='formLog'>
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </form>
        </Grid>
        <Grid item xs={6} justifyContent='center' direction='column'>
          <form noValidate autoComplete="off" >
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </form>
        </Grid>
      </Grid>
*/