interface DoctorData {
  id: string
  nombre: string
  area: string
}

interface Props {
  current: DoctorData | null
  onNext: () => void
}

export default function Doctor({ current, onNext }: Props) {
  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>Doctor</h2>

      {current === null ? (
        <p style={styles.empty}>No hay doctores</p>
      ) : (
        <>
          <p style={styles.line}>
            <b>{current.nombre}</b>
          </p>
          <p style={styles.line}>ID: {current.id}</p>
          <p style={styles.line}>Área: {current.area}</p>

          <button style={styles.btn} onClick={onNext}>
            Siguiente doctor
          </button>
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
  line: { margin: "6px 0" },
  btn: {
    marginTop: 12,
    background: "#0b1220",
    color: "white",
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "10px 14px",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 800,
  },
}