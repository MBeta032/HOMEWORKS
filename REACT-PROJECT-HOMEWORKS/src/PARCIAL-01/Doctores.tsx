function Doctor(props: any) {
  const { current, onNext, onPrev } = props

  return (
    <div className="panel">
      <h2 className="panel-title">Doctor</h2>

      {current ? (
        <>
          <p className="panel-text">
            <b>{current.nombre}</b>
          </p>
          <p className="panel-text">Área: {current.area}</p>

          <div className="row">
            <button className="btn" onClick={onPrev}>
              Volver
            </button>
            <button className="btn" onClick={onNext}>
              Seguir
            </button>
          </div>
        </>
      ) : (
        <p className="panel-text muted">No hay doctores</p>
      )}
    </div>
  )
}

export default Doctor