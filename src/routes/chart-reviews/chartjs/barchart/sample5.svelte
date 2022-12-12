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
        label: "Dataset1",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "red",
        stack: "group1",
      },
      {
        label: "Dataset2",
        data: [65, 59, 80, 81, 56, 55, 40].reverse(),
        backgroundColor: "blue",
        stack: "group1",
      },
      {
        label: "Dataset3",
        data: [65, 59, 80, 81, 56, 55, 40].reverse(),
        backgroundColor: "green",
        stack: "group2",
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
