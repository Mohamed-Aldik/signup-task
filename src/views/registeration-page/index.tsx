import { Box, CardContent, Card, Typography, Divider, Grid, Stack, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomSocialMediaButtons from '../../components/bottom-social-media-buttons';
import LeftSideImage from '../../components/left-side-image';
import RegisterationForm from '../../components/registeration-form';
import ThemeSwitch from '../../components/theme-switch';
import StorageService from "../../util/storageService";
import { RegStyle } from './reg.style';

const RegisterationPage = () => {
    const [token, setToken] = useState<null | string>(null);
    const navigate = useNavigate();
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    useEffect(() => {
        setToken(StorageService.getItem("accessToken"));
    }, [token]);

    return (
        <RegStyle>
            {
                token ?
                    <>
                        {navigate('/')}
                    </>
                    :
                    <>
                        <Grid
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            container
                            sx={{ minHeight: '100vh' }}
                        >
                            <Grid item xs={11} md={9}>
                                <div className={`${!isDark ? "light" : "dark"}`}>
                                    <Card className='card-signup' sx={{ display: 'flex' }}>
                                        <Grid
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            container>
                                            <Grid 
                                        sx={{ display: { xs: 'none',  xl: 'block' } }}
                                            height="100%" item md={7}>
                                                <LeftSideImage />
                                            </Grid>

                                            <Grid item py={1} px={5} xs={12} xl={5}>
                                                <Box >
                                                    <CardContent >
                                                        <Stack
                                                            direction="row"
                                                            justifyContent="space-between"
                                                            alignItems="center"
                                                        >
                                                            <Typography className='signup-nav' gutterBottom>
                                                                Logo
                                                            </Typography>
                                                            <ThemeSwitch />
                                                        </Stack>
                                                        <Divider sx={{ my: 4 }} />
                                                        <Typography className='head-signup' gutterBottom>
                                                            Sign up to Website
                                                        </Typography>
                                                        <Typography gutterBottom>
                                                            Already have an account?
                                                            <span> Sign in</span>
                                                        </Typography>

                                                        <Divider sx={{ my: 4 }} />
                                                        <RegisterationForm />
                                                        <Divider sx={{ my: 4 }}>OR</Divider>
                                                        <BottomSocialMediaButtons />
                                                    </CardContent>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>
                    </>

            }

        </RegStyle>

    );
}

export default RegisterationPage