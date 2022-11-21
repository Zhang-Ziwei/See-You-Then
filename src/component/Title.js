import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Title({titleName}) {
    return (
        <Box
            sx={{
            bgcolor: '#F4D0DB',
            pt: 3,
            pb: 2,
            }}
        >
            <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
            >
            {titleName}
            </Typography>
        </Box>
    )
}