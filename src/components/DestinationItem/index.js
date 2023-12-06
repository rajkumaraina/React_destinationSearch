import './index.css'

const DestinationProfile = props => {
  const {destinationsList} = props
  const {id, name, imgUrl} = destinationsList
  return (
    <li className="bgContainer">
      <img src={imgUrl} className="img" alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}
export default DestinationProfile
