import type { NextraThemeLayoutProps } from 'nextra'
 
export default function Layout({ children }: NextraThemeLayoutProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}