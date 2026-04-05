'use client'

// UI Component: DotPagination
// Design: Frame с Dot 1-5 — пагинация в виде точек (для слайдеров в works и services)

interface DotPaginationProps {
  total: number
  active: number
  onSelect?: (index: number) => void
}

const DotPagination = ({ total, active, onSelect }: DotPaginationProps) => {
  return (
    <div role="tablist" aria-label="Pagination">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === active}
          aria-label={`Slide ${i + 1}`}
          tabIndex={0}
          onClick={() => onSelect?.(i)}
        >
          {/* TODO: implement dot styles */}
        </button>
      ))}
    </div>
  )
}

export default DotPagination
