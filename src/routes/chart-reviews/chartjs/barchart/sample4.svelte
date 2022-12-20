<script lang="ts">
  import { Chart, type ChartData, registerables } from "chart.js"
  import { onMount } from "svelte"
  let canvasEl: HTMLCanvasElement

  Chart.register(...registerables)
  // Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
  const plugin = {
    id: "customCanvasBackgroundColor",
    beforeDraw: (chart: any) => {
      const { ctx } = chart
      ctx.save()
      ctx.globalCompositeOperation = "destination-over"
      ctx.fillStyle = "#99ffff"
      ctx.fillRect(0, 0, chart.width, chart.height)
      ctx.restore()
    },
  }

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]

  const data: ChartData = {
    labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
      },
      {
        label: "My Second Dataset",
        data: [65, 59, 80, 81, 56, 55, 40].reverse(),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ].sort(),
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ].sort(),
      },
    ],
  }
  onMount(() => {
    const chart = new Chart(canvasEl, {
      type: "bar",
      data,
      options: {
        plugins: {
          legend: {
            labels: {
              color: "red",
            },
            position: "right",
          },
        },
        elements: {
          bar: {
            borderWidth: 1,
            borderRadius: 10,
            hoverBorderWidth: 10,
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    })
  })
</script>

<div style="poistion: relative; width: 100%; height: calc(100vh - 30px)">
  <canvas bind:this={canvasEl} />
</div>
