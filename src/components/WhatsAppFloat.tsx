import { WA } from '../lib/whatsapp'
import { IconChat } from './Icons'

export function WhatsAppFloat() {
  return (
    <a
      href={WA.general()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-navy p-2.5 text-on-dark sm:py-3 sm:pl-3 sm:pr-4 shadow-[0_10px_30px_-10px_rgba(2,2,88,0.6)] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-navy">
        <IconChat className="h-5 w-5" />
      </span>
      <span className="hidden text-[14px] font-semibold sm:inline">WhatsApp</span>
    </a>
  )
}
