<script lang="ts">
  import { Chart, type ChartData, registerables } from "chart.js"
  import { onMount } from "svelte"
  let canvasEl: HTMLCanvasElement

  Chart.register(...registerables)
  const data = {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
        backgroundColor: ["red", "green"],
      },
      {
        label: "Second Dataset",
        data: [
          {
            x: 40,
            y: 30,
            r: 15,
          },
          {
            x: 10,
            y: 30,
            r: 30,
          },
        ],
        backgroundColor: ["red", "green"],
      },
    ],
  }

  onMount(() => {
    new Chart(canvasEl, {
      type: "bubble",
      data: data,
      options: {
        plugins: {
          title: {
            text: 'Title',
            display: true,
          },
          legend: {
            position: 'left'
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            min: -50,
            max: 50,
            grid: {
              color: 'red',
              drawTicks: true,
              drawOnChartArea: true,
            }
          },
          y: {
            beginAtZero: true,
            min: -40,
            max: 40,
          },
        }
      },
    })
  })
</script>

<div style="poistion: relative; width: 100%; height: calc(100vh - 30px)">
  <canvas bind:this={canvasEl} />
</div>
