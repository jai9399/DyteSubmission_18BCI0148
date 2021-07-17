import { useEffect, useState } from 'react'

export default function Storage(key, initial) {

  const [val, setVal] = useState(() => {
    const jsval = localStorage.getItem(key)
    if (jsval != null) return JSON.parse(jsval)

    if (typeof initial === 'function') {
      return initial()
    } else {
      return initial
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val))
  }, [key, val])

  return [val, setVal]
}
