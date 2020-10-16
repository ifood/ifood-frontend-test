import * as React from 'react'

import { useWindowSize } from 'shared/hooks/useWindowSize'

function Waves(canvas) {
  const cvs = canvas
  const ctx = cvs.getContext('2d')
  const nodes = 6
  const waves = []
  const WAVE_HEIGHT = 30
  const COLOURS = ['#f80000', '#00f800', '#0000f8']

  function bounce(nodeArr) {
    nodeArr[1] = (WAVE_HEIGHT / 2) * Math.sin(nodeArr[2] / 20) + cvs.height / 2
    nodeArr[2] = nodeArr[2] + nodeArr[3]
  }

  function drawWave(obj) {
    const diff = function (a, b) {
      return (b - a) / 2 + a
    }

    ctx.fillStyle = obj.colour
    ctx.beginPath()
    ctx.moveTo(0, cvs.height)
    ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1])

    for (let i = 0; i < obj.nodes.length; i++) {
      if (obj.nodes[i + 1]) {
        ctx.quadraticCurveTo(
          obj.nodes[i][0],
          obj.nodes[i][1],
          diff(obj.nodes[i][0], obj.nodes[i + 1][0]),
          diff(obj.nodes[i][1], obj.nodes[i + 1][1])
        )
      } else {
        ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1])
        ctx.lineTo(cvs.width, cvs.height)
      }
    }
    ctx.closePath()
    ctx.fill()
  }

  function update() {
    ctx.fillStyle = '#1A2643'
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillRect(0, 0, cvs.width, cvs.height)
    ctx.globalCompositeOperation = 'screen'
    for (let i = 0; i < waves.length; i++) {
      for (let j = 0; j < waves[i].nodes.length; j++) {
        bounce(waves[i].nodes[j])
      }
      drawWave(waves[i])
    }

    requestAnimationFrame(update)
  }

  function wave(colour, lambda, nodes) {
    this.colour = colour
    this.lambda = lambda
    this.nodes = []

    for (let i = 0; i <= nodes + 2; i++) {
      const temp = [((i - 1) * cvs.width) / nodes, 0, Math.random() * 200, 0.3]
      this.nodes.push(temp)
    }
  }

  function init() {
    for (let i = 0; i < 3; i++) {
      waves.push(new wave(COLOURS[i], 1, nodes))
    }

    update()
  }

  init()
}

export default function CanvasComponent() {
  const canvasRef = React.useRef(null)
  const { width, height } = useWindowSize()

  React.useEffect(() => {
    const canvas = canvasRef.current

    function loadCanvas() {
      new Waves(canvas)
    }

    loadCanvas()
  }, [width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height / 2}
      style={{
        transform: `translateY(110%)`
      }}
    />
  )
}
