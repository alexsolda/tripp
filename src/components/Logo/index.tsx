import { ReactElement } from 'react'
import logoIMG from '/public/img/tripp_logo.png'
import Image from 'next/image'

const Logo = (): ReactElement => {
  return (
    <div className="w-14 aspect-video relative">
      <Image
        src={logoIMG}
        alt="Logo por extenso escrito: Tripp"
        sizes="50vw"
        objectFit="cover"
        layout="fill"
        priority
      />
    </div>
  )
}

export default Logo
