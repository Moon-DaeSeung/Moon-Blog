<script lang="ts">
  import { Chart, type ChartData, registerables } from "chart.js"
  import { onMount } from "svelte"
  let canvasEl: HTMLCanvasElement
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
      {
        label: "My Second Dataset",
        data: [300, 50, 100].reverse(),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ].reverse(),
      },
    ],
  }

  Chart.register(...registerables)

  onMount(() => {
    new Chart(canvasEl, {
      type: "polarArea",
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
