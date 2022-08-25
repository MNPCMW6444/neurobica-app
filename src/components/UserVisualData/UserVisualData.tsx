import Paper from "@mui/material/Paper";
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries
} from "@devexpress/dx-react-chart-material-ui";

import { scaleBand } from "@devexpress/dx-chart-core";
import { ArgumentScale, Stack } from "@devexpress/dx-react-chart";

import userbrain from "../../../temp/DemoChart/Chart";
import { useState } from "react";

export default () => {



    return (
        <Paper>
            {/*  <Chart data={[{ data: userbrain }]}>
                <ArgumentScale factory={scaleBand} />
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries
                    valueField="Attention"
                    argumentField="state"
                    name="Attention"
                />
                <BarSeries valueField="Memory" argumentField="state" name="Memory" />
                <BarSeries valueField="Memory" argumentField="state" name="Memory" />
                <Stack />
            </Chart> */}
        </Paper >
    );

}


