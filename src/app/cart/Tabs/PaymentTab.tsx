'use client'

import { Box, Button, Card,  FormControlLabel, Typography, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";

const PaymentTab = ({ control }: any) => {

    const handleOnClick = () => {


    }

    return (
        <>

            <Box>
                <Controller
                    control={control}
                    name='paymentMethod'
                    defaultValue={'personalPickup'}

                    render={({ field }) => (
                        <RadioGroup {...field}>
                            <FormControlLabel
                                value="cash"
                                control={<Radio />}
                                label="Cash"
                            />
                            <FormControlLabel
                                value="invoice"
                                control={<Radio />}
                                label="Virmansko placanje"
                            />

                        </RadioGroup>
                    )}
                />
            </Box>
        </>
    )
}

export default PaymentTab