import { ReactElement } from 'react'
import logoIMG from '/public/img/tripp_logo.png'
import Image from 'next/image'

type LogoProps = {
  size: 'sm' | 'lg'
}

const Logo = ({ size }: LogoProps): ReactElement => {
  return (
    <div
      className={`${
        size === 'sm' ? 'w-14' : 'w-44 lg:w-60'
      } aspect-video relative`}
    >
      <Image
        src={logoIMG}
        alt="Logo por extenso escrito: Tripp"
        sizes="50vw"
        style={{ objectFit: 'contain' }}
        fill
        priority
      />
    </div>
  )
}

export default Logo
