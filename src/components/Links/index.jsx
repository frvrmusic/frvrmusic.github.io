import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-ab9a51fa/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      instagram: author.instagram,
      twitter: author.twitter,
      soundcloud: author.soundcloud,
      linkedin: author.linkedin,
      nextEP: author.nextEP,
      email: author.email,
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://instagram.com/${links.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-instagram" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`http://${links.nextEP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-note" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.soundcloud.com/${links.soundcloud}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-soundcloud" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.linkedin.com/in/${links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-linkedin-squared" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
