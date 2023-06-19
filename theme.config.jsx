const YEAR = new Date().getFullYear()
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutubeSquare
} from 'react-icons/fa'
import {
  BsChatSquareDotsFill

} from 'react-icons/bs'

export default {

  footer: (
    <small style={{ fontSize: '14px',display:'block',marginTop:'6rem',display:'flex',gap:'24rem' }}>
      <span><time>{YEAR}</time> © Ninad Vyas</span>

        <div style={{ display: 'flex',  textDecoration: 'none' }}>
  <a             href="mailto:ninadvyas07@gmail.com"
 className='foo'>      <BsChatSquareDotsFill style={{
  color: 'rgb(203, 203, 203)',

                fontSize: '18.5px',
                width: '30px',marginTop:'4px'
              }} />Stay Connected!</a> 
          {/* <a href="https://www.linkedin.com/in/ninad-vyas-b767491a3/" className='icon1'>
            <FaLinkedin
              style={{
                color: '#7e7e7e',
                fontSize: '18.5px',
                width: '30px'
              }}
            />
          </a> */}
          {/* <a href="https://github.com/NinadVyas" className='icon1'>
            {' '}
            <FaGithub
              style={{
                color: '#7e7e7e',
                fontSize: '18.5px',
                width: '30px',hover: "color:red" ,
              }}
            />
          </a>
          <a href="https://twitter.com/NinadVyas87" className='icon1'>
            {' '}
            <FaTwitter
              style={{
                color: '#7e7e7e',
                fontSize: '18.5px',
                width: '30px'
              }}
            />
          </a>
          <a href="https://www.youtube.com/channel/UC-GFeuKUUYdVEqrjMJtItDQ" className='icon1'>
            {' '}
            <FaYoutubeSquare
              style={{
                color: '#7e7e7e',
                fontSize: '18.5px',
                width: '30px'
              }}
            />
          </a> */}
        </div>

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
