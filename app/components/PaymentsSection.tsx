import Image from 'next/image'

import Column from '../assets/images/payments-column.png'
import Phone from '../assets/images/payments-phone 1.png'
import LargePillar from '../assets/images/payments-pillar-large.png'
import MediumPillar from '../assets/images/payments-pillar-medium.png'
import SmallPillar from '../assets/images/payments-pillar-small.png'

export default function PaymentsSection() {
  return (
    <section
      id="Payments"
      className="relative h-screen bg-payments-pattern bg-cover bg-center overflow-hidden"
    >
      <div className="absolute top-[20%] left-[10%]">
        <div className="text-cash-app-green text-6xl tracking-wide leading-relaxed">
          Payments
        </div>
        <p className="font-sans text-2xl">
          Send and receive money with anyone, donate <br />
          to an important cause, or tip professionals. <br />
          Just enter a $cashtag, phone number, or <br />
          scan their QR code to pay.
        </p>
      </div>
    </section>
  )
}
