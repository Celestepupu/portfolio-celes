import React from 'react'

type RenderFn = (children: string) => React.ReactNode
type Components = Record<string, RenderFn>

/**
 * Renders a dict string with inline tags into React nodes.
 *
 * Supported patterns:
 *   <tag>content</tag>  — calls components[tag](content)
 *   <br/>               — renders a <br /> element
 *
 * No dangerouslySetInnerHTML is used.
 */
export function rich(text: string, components: Components): React.ReactNode {
  const tagNames = Object.keys(components)
  const wrapGroup = tagNames.length
    ? `<(?:${tagNames.join('|')})>[\\s\\S]*?</(?:${tagNames.join('|')})>`
    : ''
  const splitPattern = new RegExp(
    `(${['<br/>', wrapGroup].filter(Boolean).join('|')})`,
    'g'
  )

  const parts = text.split(splitPattern)

  return (
    <>
      {parts.map((part, i) => {
        if (part === '<br/>') return <br key={i} />

        for (const [tag, render] of Object.entries(components)) {
          const match = part.match(new RegExp(`^<${tag}>([\\s\\S]*?)</${tag}>$`))
          if (match) return <React.Fragment key={i}>{render(match[1])}</React.Fragment>
        }

        return part ? <React.Fragment key={i}>{part}</React.Fragment> : null
      })}
    </>
  )
}
