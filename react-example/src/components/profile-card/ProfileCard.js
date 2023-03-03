import './ProfileCard.css'

function ProfileCard({title, handle, image, description}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {handle}
      <img src={image} alt="Something"/>
      <p>{description}</p>
    </div>
  )
}

export default ProfileCard;
