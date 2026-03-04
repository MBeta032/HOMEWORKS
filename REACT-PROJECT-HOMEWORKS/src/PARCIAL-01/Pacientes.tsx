import type { Pacientes } from "./types"

interface Props {
  current: Pacientes | null
  pacientes: Pacientes[]
  onNext: () => void
  onAtender: () => void
  onDelete: (id: string) => void
  showList: boolean
  onToggleList: () => void
}

export default function Paciente({
  current,
  pacientes,
  onNext,
  onAtender,
  onDelete,
  showList,
  onToggleList,
}: Props) {
  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>Pacientes</h2>

      {current ? (
        <>
          <p style={styles.selected}>
            Seleccionado: {current.nombre} - Turno {current.turno}
          </p>

          <div style={styles.row}>
            <button style={styles.btn} onClick={onNext}>
              Siguiente
            </button>
            <button style={styles.btn} onClick={onAtender}>
              Atender
            </button>
          </div>

          {/* ✅ SOLO queda "Ver lista / Ocultar lista" */}
          <div style={styles.row}>
            <button style={styles.btn2} onClick={onToggleList}>
              {showList ? "Ocultar lista" : "Ver lista"}
            </button>
          </div>
        </>
      ) : (
        <p style={styles.empty}>No hay pacientes</p>
      )}

      {showList ? (
        <>
          <style>
            {`
              .listaPacientes::-webkit-scrollbar { width: 0px; height: 0px; }
              .listaPacientes { scrollbar-width: none; -ms-overflow-style: none; }
            `}
          </style>

          <div className="listaPacientes" style={styles.list}>
            {pacientes.map((p) => {
              const isSelected = current && p.id === current.id

              return (
                <div
                  key={p.id}
                  style={{
                    ...styles.item,
                    ...(isSelected ? styles.itemSelected : {}),
                  }}
                >
                  <span style={styles.itemText}>
                    {p.nombre} - {p.turno}
                  </span>

                  <button style={styles.deleteBtn} onClick={() => onDelete(p.id)}>
                    Eliminar
                  </button>
                </div>
              )
            })}
          </div>
        </>
      ) : null}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  panel: {
    background: "radial-gradient(circle at top, #0e1a3a 0%, #070a12 70%)",
    borderRadius: 14,
    padding: 16,
    color: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
    minHeight: 520,
  },
  title: { margin: 0, marginBottom: 10, fontSize: 20 },
  selected: { margin: "6px 0 10px 0", opacity: 0.9 },
  empty: { opacity: 0.75 },
  row: { display: "flex", gap: 10, marginBottom: 10, flexWrap: "wrap" },
  btn: {
    background: "#0b1220",
    color: "white",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "10px 14px",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 700,
  },
  btn2: {
    background: "rgba(255,255,255,0.06)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "10px 14px",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 700,
  },
  list: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    maxHeight: 360,
    overflowY: "auto",
    paddingRight: 6,
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "14px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
  },
  itemSelected: {
    outline: "2px solid rgba(255,255,255,0.65)",
    background: "rgba(255,255,255,0.06)",
  },
  itemText: { fontWeight: 700 },
  deleteBtn: {
    background: "rgba(0,0,0,0.25)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "10px 14px",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 800,
    minWidth: 105,
  },
}