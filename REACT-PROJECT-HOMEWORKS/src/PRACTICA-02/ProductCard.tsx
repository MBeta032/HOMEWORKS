import { ProductNode } from "./productNode";

interface Props {
    current: ProductNode | null
    onNext: () => void
    onPrev: () => void
}

export default function ProductCard({ current, onNext, onPrev}: Props) {
    if (current === null) return <div>No products</div>

    return (
    <div className="market-card">
        <div className="market-imgWrap">
        <img className="market-img" src={current.image} alt={current.name} />
        </div>

        <div className="market-info">
        <h3 className="market-name">{current.name}</h3>

        <div className="market-priceRow">
            <div className="market-price">${current.price}</div>
            <div className="market-badge">OFERTA</div>
        </div>

        <div className="market-actions">
            <button className="btn btn-prev" onClick={onPrev}>Previous</button>
            <button className="btn btn-next" onClick={onNext}>Next</button>
        </div>
        </div>
    </div>
    )
}