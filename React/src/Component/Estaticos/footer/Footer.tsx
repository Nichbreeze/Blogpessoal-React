import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import './Footer.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";



function Footer(){
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

      var footerComponent;
      if(token != ""){
       footerComponent = <Grid container  direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Follow me: </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                        < href="https:/http://github.com/Nichbreeze" target="_blank">
                                <GithubIcon className='redes'/>
                
                            <a href="https://www.instagram.com/nickbreeze" target="_blank">
                                <InstagramIcon className='redes'/>
                            </a>
                            <a href="https://www.linkedin.com/in/nicholas-cavalcante-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-4b76951b5/" target="_blank">
                                <LinkedInIcon className='redes'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2' >
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2023 Copyright:</Typography>
                        </Box>
                        <Box >
                      
                        </Box>
                    </Box>
                </Grid>
            </Grid>
      }
    return(
        <>
        {footerComponent}
    </>

    )
}
export default Footer;