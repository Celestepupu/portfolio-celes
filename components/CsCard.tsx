import React from 'react'

interface CsCardProps {
  children: React.ReactNode
  eyebrow?: string
  centered?: boolean
  impact?: boolean
  as?: React.ElementType
}

export default function CsCard({
  children,
  eyebrow,
  centered,
  impact,
  as: Tag = 'div',
}: CsCardProps) {
  const cls = [
    'cs-card',
    centered && 'cs-card--centered',
    impact && 'cs-card--impact',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={cls}>
      {eyebrow && <p className="cs-card__eyebrow">{eyebrow}</p>}
      {children}
    </Tag>
  )
}
