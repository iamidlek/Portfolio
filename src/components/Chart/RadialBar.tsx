import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { IconImg } from "../Layout/Deco";
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
        shadeIntensity: 0.3,
        gradientToColors: ["rgba(222,213,255,1)"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: [name],
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 270,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: -5,
                size: "45%",
              },
              track: {
                strokeWidth: "60%",
              },
              dataLabels: {
                name: {
                  offsetY: 44,
                },
                value: {
                  offsetY: 12,
                  fontSize: "24px",
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            height: 350,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: "60%",
              },
              track: {
                strokeWidth: "60%",
              },
            },
          },
        },
      },
    ],
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
      <IconImg src={url} alt={name} />
    </div>
  );
};

export default RadialBar;
