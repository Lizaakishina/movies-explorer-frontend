import "./WebSite.css";

const WebSite = ({title, link}) => {
  return (
    <a href={link} className="link webSite" target="blank">
      <h3 className="webSite__title">{title}</h3>
      <div className="webSite__arrow">↗</div>
    </a>
  )
}

export default WebSite;