<script lang="ts">
  import { Chart, type ChartData, registerables } from "chart.js"
  import { onMount } from "svelte"
  let canvasEl: HTMLCanvasElement
  const data = {
    labels: ["Red", "Blue", "Yellow", "HI", "BY"],
    datasets: [
      {
        label: "My First Dataset",
        data: [60, 50, 0, 30, 100],
      },
      {
        label: "My Second Dataset",
        data: [30, 50, 100, 20, 10].reverse(),
      },
    ],
  }

  Chart.register(...registerables)

  onMount(() => {
    new Chart(canvasEl, {
      type: "radar",
      data,
      options: {
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    })
  })
</script>

<div style="poistion: relative; width: 100%; height: calc(100vh - 30px)">
  <canvas bind:this={canvasEl} />
</div>
