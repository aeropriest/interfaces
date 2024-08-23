// components/PieChartDemo.js
"use client";
import { ResponsivePie } from "@nivo/pie";

const PieChartDemo = ({ data }: any) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 150, bottom: 80, left: 150 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLabel={(e) => e.id}
        colors={{ scheme: "nivo" }}
    />
    // <div style={{ width: "600px", height: "500px" }}>
    //     <ResponsivePie
    //         data={data}
    //         margin={{ top: 40, right: 150, bottom: 80, left: 150 }}
    //         innerRadius={0.5}
    //         padAngle={0.7}
    //         cornerRadius={3}
    //         activeOuterRadiusOffset={8}
    //         borderWidth={1}
    //         borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    //         arcLabel={(e) => e.id}
    //         colors={{ scheme: "nivo" }}
    //     />
    //     <div>{JSON.stringify(data)}</div>
    // </div>
);

export default PieChartDemo;
