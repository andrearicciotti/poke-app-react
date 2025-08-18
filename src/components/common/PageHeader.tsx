
export interface PageHeaderProps {
  classes?: string
  left?: React.ReactNode
  center?: React.ReactNode
  right?: React.ReactNode
}

export function PageHeader({ classes, left, center, right }: PageHeaderProps) {
  let _classes = classes ? `${classes} ` : '';

  return (
    <header 
      className={`${_classes}page-header padding-1`}
    >
      {renderElement(left, 'icon')}
      {renderElement(center, 'title')}
      {renderElement(right, 'icon')}
    </header>
  )
}

function renderElement(element: React.ReactNode, classes: string) {
  return (
    <div className={classes}>{element}</div>
  )
}