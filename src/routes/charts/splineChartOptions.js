const splineChartOptions = {
    chart: {
        type: "spline",
    },
  title: {
    text: "Sample spline chart",
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      data: [1, 2, 3, 4, 7, 8, 3, 6, 3, 7, 9, 2],
    },
    {
        data: [12, 7, 9, 1, 2, 5, 12, 15, 11, 14, 5, 8],
      },
  ],
}

export default splineChartOptions