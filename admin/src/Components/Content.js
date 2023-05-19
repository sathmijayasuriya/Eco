import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import SquareIcon from '@mui/icons-material/Square';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Content() {

    const Styles = {
        Text: {
            margin: "20px",
            paddingLeft: "10px",
            fontFamily: "Quicksand",
            fontSize: "18px",
            color: "black"
        }
    }
    return (
        <>
            <Box sx={{ width: "auto", height: "auto", background: "#e6ffe6" }}>
                <Typography sx={Styles.Text}>
                    <SquareIcon sx={{ fontSize: "10px" }} />
                    Latest News
                </Typography>
            </Box>
            <Box sx={{ width: "auto", height: "auto", background: "#e6ffe6" }}>
                <Typography sx={Styles.Text}>
                    <SquareIcon sx={{ fontSize: "10px" }} />
                    Events
                </Typography>
            </Box>
            <Box  sx={{ width: "auto", height: "auto",ml:"10px", }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
                        {/* <DemoItem label={'"year", "month" and "day"'}> */}
                            <DateCalendar defaultValue={dayjs('2022-04-17')} />
                        {/* </DemoItem> */}
                    </DemoContainer>
                </LocalizationProvider>
            </Box>

        </>
    )
}