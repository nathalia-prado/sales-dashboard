interface Props {
  className?: string,
  children?: React.ReactNode
}

function Title({ className, children }: Props) {
    return (
      <div className="title-container">
        {className && <span className={`title-span ${className}`}/>}
        <h2 className="title">{children}</h2>
      </div>
    )
  }
  
  export default Title
  