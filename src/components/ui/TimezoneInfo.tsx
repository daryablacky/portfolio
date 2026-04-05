'use client'

// UI Component: TimezoneInfo
// Figma: Timezone Info — время (hh:mm:ss) + GMT смещение (+3GMT)
// Используется в hero-section и contacts-section

import { useCurrentTime } from '@/hooks/useCurrentTime'

const TimezoneInfo = () => {
  const time = useCurrentTime()

  return (
    <div>
      <span>{time}</span>
      <span>+3GMT</span>
    </div>
  )
}

export default TimezoneInfo
