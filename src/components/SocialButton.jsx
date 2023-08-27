import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

const SocialButton = ({icon, icon2, icon3}) => {
  return (
    <div className='icons icon-color fa-xl'>
      <FontAwesomeIcon icon={['fab', icon ]} />
      <FontAwesomeIcon icon={['fab', icon2 ]} />
      <FontAwesomeIcon icon={['fab', icon3 ]} />
    </div>
  )
}

export default SocialButton

