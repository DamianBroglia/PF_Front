export default function Reservas(props) {
    const { name, price, img } = props
    return (
        <div>
            <img alt="">{img[0]}</img>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}