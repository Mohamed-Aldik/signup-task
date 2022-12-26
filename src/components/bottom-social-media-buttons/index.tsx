import { Button, Typography, useTheme } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { BtnStyle } from "./btn.style";

const BottomSocialMediaButtons = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    return (
        <BtnStyle>
            <div className={`${!isDark && "light"}`}>
                <Button variant="contained" startIcon={<GoogleIcon />}>
                    <Typography> Signin with Google</Typography>
                </Button>
                <Button variant="contained"><FacebookIcon /></Button>
                <Button variant="contained"><AppleIcon /></Button>
            </div>
        </BtnStyle>

    )
}
export default BottomSocialMediaButtons