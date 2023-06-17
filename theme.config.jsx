const YEAR = new Date().getFullYear()
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutubeSquare
} from 'react-icons/fa'



export default {
 
    h1: ({ children }) => (
      <h1 style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundImage: 'linear-gradient(90deg,#FFFFFF,#f5b402)',
      }}
      >
        {children}
      </h1>
    ),
  footer: (
    <small style={{ display: 'block', fontSize: '14px', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Ninad Vyas
      <a>
        <div style={{ display: 'flex' }}>
          <a href="https://www.linkedin.com/in/ninad-vyas-b767491a3/" className='icon'>
            <FaLinkedin
              style={{
                color: '#7e7e7e',
                fontSize: '18.5px',
                width: '30px'
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/ninad-vyas-b767491a3/" className='icon'>
            {' '}
            <FaGithub
              style={{
                color: '#7e7e7e',
                fontSize: '18.5px',
                width: '30px',hover: "color:red" ,
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/ninad-vyas-b767491a3/" className='icon'>
            {' '}
            <FaTwitter
              style={{
                color: '#7e7e7e',
                fontSize: '18.5px',
                width: '30px'
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/ninad-vyas-b767491a3/" className='icon'>
            {' '}
            <FaYoutubeSquare
              style={{
                color: '#7e7e7e',
                fontSize: '18.5px',
                width: '30px'
              }}
            />
          </a>
        </div>
      </a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  components: {
    logo: (
      <>
        <svg>...</svg>
        <span>Ninad Vyas</span>
      </>
    ),
    titleSuffix: " – Ninad Vyas ",
    back: 'Read More →',
  },
  darkMode: false
}
