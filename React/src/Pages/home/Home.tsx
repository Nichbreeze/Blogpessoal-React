import { Grid } from "@material-ui/core";
import './home.css';
import FacebookIcon from '@material-ui/icons/FacebookIcon';

function Home(){

    let nome: String = "Nick";
    return(
        <div>
            <Grid container spacing={0}  justifyContent='center' alignItems="stretch" >
                <Grid item xs={12} sm={6} className="fundo">
                <h1 className="titulo">Teste de Home com {nome} <FacebookIcon /></h1>
                </Grid>
                <Grid item xs={12} sm={6} className="fundo">
                <h2>Teste de material GRID</h2>
                </Grid>
            </Grid>
        </div>
        
    );
}

export default Home;