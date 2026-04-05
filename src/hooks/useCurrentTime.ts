'use client'

// Hook: useCurrentTime
// Возвращает строку текущего времени в формате HH:MM:SS, обновляется каждую секунду
// Используется в TimezoneInfo (hero и contacts)

import { useState, useEffect } from 'react'

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

export const useCurrentTime = (): string => {
  const [time, setTime] = useState<string>(() => formatTime(new Date()))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return time
}
