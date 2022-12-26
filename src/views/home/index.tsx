import { useEffect, useState } from "react";
import StorageService from "../../util/storageService";
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const logout = () => {
        StorageService.setItem("accessToken", "")
        setToken("")
        navigate('/register')
    }
    useEffect(() => {
        setToken(StorageService.getItem("accessToken"));
    }, []);

    return (
        <>
            {!token || token=== ""?
                  <>
                  <Stack
                 sx={{
                     height: '100vh'
                 }}
                 direction="column"
                 justifyContent="center"
                 alignItems="center"
                 spacing={3}
             >
                 <Typography>You Shoud Register </Typography>
                 <Button onClick={logout}
                     variant="contained"> Register
                 </Button>
             </Stack>
              </>
                :
             
                 <Stack
                 sx={{
                     height: '100vh'
                 }}
                 direction="column"
                 justifyContent="center"
                 alignItems="center"
                 spacing={3}
             >
                 <Typography>Welcome {StorageService.getItem("name")}</Typography>
                 <Typography>Your Email is: {StorageService.getItem("email")}</Typography>
                 <Button onClick={logout}
                     variant="contained">Log out
                 </Button>
             </Stack>
            }
        </>
    )
}

export default Home