function Comite(props: any) {
  const { current, onNext, onPrev } = props

  return (
    <div className="panel">
      <h2 className="panel-title">Comité</h2>

      {current ? (
        <>
          <div className="box">
            <p className="panel-text">
              <b>{current.nombre}</b>
            </p>
            <p className="panel-text">{current.role}</p>
          </div>

          <div className="row">
            <button className="btn" onClick={onPrev}>
              Anterior
            </button>
            <button className="btn" onClick={onNext}>
              Siguiente
            </button>
          </div>
        </>
      ) : (
        <p className="panel-text muted">No hay comité</p>
      )}
    </div>
  )
}

export default Comite