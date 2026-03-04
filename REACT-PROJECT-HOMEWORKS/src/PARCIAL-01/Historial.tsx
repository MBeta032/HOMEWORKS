function Historial(props: any) {
  const { current, onNext, onPrev } = props

  return (
    <div className="panel">
      <h2 className="panel-title">Historial</h2>

      {current ? (
        <>
          <div className="box">
            <p className="panel-text">
              <b>Paciente:</b> {current.nombrePaciente}
            </p>
            <p className="panel-text">
              <b>Doctor:</b> {current.nombreDoctor}
            </p>
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
        <p className="panel-text muted">No hay historial</p>
      )}
    </div>
  )
}

export default Historial