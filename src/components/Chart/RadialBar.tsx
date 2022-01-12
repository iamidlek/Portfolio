import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Idata {
  name: string;
  url: string;
  status: number;
}

const RadialBar: React.FC<Idata> = ({ name, url, status }) => {
  const opt: ApexOptions = {
    series: [status],
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: "60%",
          background: "#E8EBEA",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#E8EBEA",
          strokeWidth: "60%",
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: 60,
            show: true,
            color: "#888",
            fontSize: "16px",
          },
          value: {
            formatter: function (val: number) {
              return `${val}`;
            },
            offsetY: 20,
            color: "#777",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["rgba(222,213,255,1)"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: [name],
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Chart options={opt} series={opt.series} type="radialBar" height={350} />
      <img
        src={url}
        alt={name}
        width="60"
        height="60"
        style={{ position: "absolute", top: "104px" }}
      />
    </div>
  );
};

export default RadialBar;
