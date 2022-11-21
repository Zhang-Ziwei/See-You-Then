import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

export default function Item({name, index, handleDelete, handleChange}) {
    return (
        <Grid item xs={12} sm={12} sx={{display: 'flex', justifyContent: 'start', mx: 3}}>
            <TextField
                required
                id={name}
                name={name}
                label={name}
                key={index}
                fullWidth
                // sx={{width: '70%'}}
                autoComplete="given-name"
                variant="standard"
                onChange={(e) => handleChange(e, index)}
            />
            <CloseIcon 
                sx={{mt: 3, position: 'relative', right: '1px', "&:hover": {transform: 'scale(1.2)'}}} 
                onClick={() => handleDelete(index)}
            />
        </Grid>
    )
}