import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'


const Register = async ({ params: { userId } }: SearchParamProps) => {

  const user = await getUser(userId)

  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container'>
        <div className='sub-continer max-w-[860px] flex-1 flex-col py-10'>
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width={1000}
            alt='logo'
            className='mb-12 h-10 w-fit'
          />

          <RegisterForm user={user}/>

          <p className='copyright pt-10'>
            © 2024 CarePulse
          </p>
        </div>
      </section>

      <Image
        src='/assets/images/register-img.png'
        height={1000}
        width={1000}
        alt='doctors'
        className='side-img max-w-[390px]'
      />
    </div>
  )
}

export default Register