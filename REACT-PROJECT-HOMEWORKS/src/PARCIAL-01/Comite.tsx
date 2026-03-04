interface ComiteData {
  id: string
  nombre: string
  role: string
}

interface Props {
  current: ComiteData | null
  onNext: () => void
  onPrev: () => void
}

export default function Comite({ current, onNext, onPrev }: Props) {
  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>Comité</h2>

      {current === null ? (
        <p style={styles.empty}>No hay comité</p>
      ) : (
        <>
          <div style={styles.box}>
            <p style={styles.line}>
              <b>{current.nombre}</b>
            </p>
            <p style={styles.line}>{current.role}</p>
          </div>

          <div style={styles.row}>
            <button style={styles.btn} onClick={onPrev}>
              Anterior
            </button>
            <button style={styles.btn} onClick={onNext}>
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  panel: {
    background: "rgba(255,255,255,0.04)",
    borderRadius: 14,
    padding: 16,
    color: "white",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  title: { margin: 0, marginBottom: 10, fontSize: 20 },
  empty: { opacity: 0.75 },
  box: {
    padding: 12,
    borderRadius: 12,
    background: "rgba(0,0,0,0.25)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  line: { margin: "6px 0" },
  row: { display: "flex", gap: 10, marginTop: 12 },
  btn: {
    background: "#0b1220",
    color: "white",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "10px 14px",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 800,
  },
}