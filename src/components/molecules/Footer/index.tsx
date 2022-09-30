import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AdbIcon from '@mui/icons-material/Adb';

export default function footer(){
    return <footer>
        <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 10}} bgcolor="AliceBlue" color="Black">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>                        
                        <Box><AdbIcon/><b>Blinkist</b></Box>
                        <Box color="#0082be"><p>Big ideas in small packages</p></Box>
                        <Box color="#0082be"><p>Start learning now</p></Box>                        
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box><b>Editorial</b></Box>
                        <Box>Book lists</Box>
                        <Box>What is notification?</Box> 
                        <Box>What to read next?</Box>
                        <Box>Benefits of reading</Box>                       
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box><b>Useful links</b></Box>
                        <Box>Pricing</Box>
                        <Box>Blinkist business</Box> 
                        <Box>Gift cards</Box>
                        <Box>Blinkist magaine</Box>
                        <Box>Contact & help</Box>                      
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box><b>Company</b></Box>
                        <Box>About</Box>
                        <Box>Careers</Box> 
                        <Box>Partners</Box> 
                        <Box>Code of Conduct</Box>                       
                    </Grid>
                </Grid> 
                <Box pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                    <CopyrightIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <p style={{ marginLeft: 30, marginTop: -25}}>Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies</p></Box>
            </Container>
        </Box>
    </footer>
}