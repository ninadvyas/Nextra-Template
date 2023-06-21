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
import CustomHead from './components/custom-head'


export default {

  head: CustomHead,

  footer: (
    <small style={{ fontSize: '14px',display:'block',marginTop:'6rem',display:'flex' }}>
      <span><time>{YEAR}</time> © Ninad Vyas</span>

        <div className='footicon'>
          <a href="mailto:ninadvyas07@gmail.com" className='footiconin'>
           <a className='icon1'>
            <BsChatSquareDotsFill
              style={{
                color: '#7e7e7e',
                fontSize: '18.5px',
                width: '30px',
                marginTop:'5px'
              }}
            />
          </a>Stay Connected!</a>


         
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
        <span>Ninad Vyas</span>
      </>
    ),
    titleSuffix: "Ninad Vyas ",
  },
  darkMode: false
}
