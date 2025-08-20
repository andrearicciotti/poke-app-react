
export interface PageFooterProps {
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
  classes?: string
}

export function PageFooter({ left, center, right, classes }: PageFooterProps) {
  const _classes = classes ? `${classes} ` : '';
  return (
    <footer className={`${_classes}page-footer`}>
      <div
        className="padding-1 flex flex-center just-around"
      >
        {left}
        {center}
        {right}
      </div>

    </footer>
  )
}
