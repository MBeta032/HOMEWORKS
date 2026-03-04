import { useState } from "react"

function Paciente(props: any) {
  const { current, pacientes, onNext, onAtender, onDelete } = props
  const [showList, setShowList] = useState(false)

  return (
    <div className="panel panel-pacientes">
      <h2 className="panel-title">Pacientes</h2>

      {current ? (
        <>
          <p className="panel-text">
            Seleccionado: {current.nombre} - Turno {current.turno}
          </p>

          <div className="row">
            <button className="btn" onClick={onNext}>
              Siguiente
            </button>
            <button className="btn" onClick={onAtender}>
              Atender
            </button>
          </div>

          <div className="row">
            <button className="btn btn-outline" onClick={() => setShowList(!showList)}>
              {showList ? "Ocultar lista" : "Ver lista"}
            </button>
          </div>
        </>
      ) : (
        <p className="panel-text muted">No hay pacientes</p>
      )}

      {showList ? (
        <div className="pacientes-list">
          {pacientes.map((p: any, index: number) => {
            const selected = current && p.id === current.id

            return (
              <div key={p.id} className={selected ? "paciente-item selected" : "paciente-item"}>
                <span className="paciente-text">
                  {index + 1}. {p.nombre} - {p.turno}
                </span>

                <button className="btn btn-small" onClick={() => onDelete(p.id)}>
                  Eliminar
                </button>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default Paciente