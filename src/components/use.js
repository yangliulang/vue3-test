import { reactive, toRefs } from 'vue'

const usePosition = () => {
  const position = reactive({ x: 0, y: 0 })
  window.addEventListener('click', (e) => {
    position.x = e.clientX
    position.y = e.clientY
  })
  return toRefs(position)
}

export { usePosition }
