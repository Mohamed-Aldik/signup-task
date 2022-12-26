import { CardMedia, useTheme } from "@mui/material"

const LeftSideImage =()=>{
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";
    return(
        <CardMedia
          component="img"
          sx={{zIndex:99999 ,height: '100%', width: "100%" }}
          image={`images/${isDark ? 'dark.png' :'light.png'}`}
          alt="Live from space album cover"
        />
    )
}
export default LeftSideImage