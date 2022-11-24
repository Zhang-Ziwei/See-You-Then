import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Title({titleName}) {
    return (
        <Box
            sx={{
            bgcolor: '#F4D0DB',
            pt: 3,
            pb: 2,
            borderRadius: 3,
            }}
        >
            <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
            >
            <div className="optima" align="center">{titleName}</div>
            </Typography>
        </Box>
    )
}