const Alert = ({color, message}) => {
 console.log(color)

  return (
    <>
      <p className={color}>{message}</p> 
    </>
  )
}

export default Alert