const style = {
  display: 'flex',
  justifyContent: 'center',
}

export function Logo() {
  return (
    <div style={style}>
      <img src={'logo.png'} alt="Spotifood logo" width="50%" />
    </div>
  )
}
