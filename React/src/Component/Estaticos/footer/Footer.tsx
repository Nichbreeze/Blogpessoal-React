import { Grid } from "@material-ui/core";
import './Footer.css';
function Footer(){
    return(
        <>
            <Grid container spacing={0} className="footer--container">
                <Grid item xs={12} alignItems="center" className="footer--item">
                    <span>Desenvolvido por Nick</span>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer