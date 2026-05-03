import { useCallback, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import styles from './ReferralPromoSection.module.css'

const PROMO_LOTTIE_SRC =
  'https://lottie.host/44305eb3-a471-46df-ae57-6fa443a932af/leBtQCg2ds.lottie'

/** Colado no clipboard ao clicar em «Indicar para alguém» */
const SHARE_CLIPBOARD_LINK = 'wa.me/5541987160509'

async function copyShareLink(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text)
    return
  } catch {
    /* clipboard pode falhar em contextos não seguros — fallback */
  }
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.left = '-9999px'
  document.body.appendChild(ta)
  ta.select()
  const ok = document.execCommand('copy')
  document.body.removeChild(ta)
  if (!ok) throw new Error('copy failed')
}

export function ReferralPromoSection() {
  const [copied, setCopied] = useState(false)

  const handleIndicarClick = useCallback(async () => {
    try {
      await copyShareLink(SHARE_CLIPBOARD_LINK)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 4500)
    } catch {
      /* sem feedback extra — utilizador pode tentar de novo */
    }
  }, [])

  return (
    <section
      id="desconto"
      className={styles.section}
      aria-labelledby="promo-heading"
      data-node-id="216:89"
    >
      <div className={styles.shell} data-node-id="216:90">
        <div className={styles.columnCopy} data-node-id="216:91">
          <div className={styles.titleBlock} data-node-id="216:94" id="promo-heading">
            <p className={styles.titleLine1}>Promoção</p>
            <p className={styles.titleAccent}>Indique e ganhe 30%</p>
          </div>
          <div className={styles.body} data-node-id="216:95">
            <p>
              Indique o meu trabalho de criação de site para alguém!{' '}
            </p>
            <p>
              A pessoa indicada ganha um desconto inicial de 10% (podendo aumentar
              para 30% caso ela indique alguém)
            </p>
            <p>e você ganha um desconto de 30% no seu projeto</p>
          </div>
          <button
            type="button"
            className={`${styles.cta} ${copied ? styles.ctaCopied : ''}`}
            onClick={handleIndicarClick}
            data-node-id="216:96"
            aria-live="polite"
          >
            <span className={styles.ctaText} data-node-id="216:97">
              {copied ? 'Link copiado com sucesso!' : 'INDICAR PARA ALGUEM'}
            </span>
          </button>
        </div>

        <div className={styles.lottieWrap} data-node-id="216:98" role="presentation">
          <DotLottieReact
            src={PROMO_LOTTIE_SRC}
            loop
            autoplay
            layout={{ fit: 'contain', align: [0.5, 0.5] }}
            renderConfig={{
              autoResize: true,
              /* Com true (default) o renderer pausa off-screen e volta ao entrar na view,
               * o que combinado com autoResize pode provocar reflow + scroll anchoring. */
              freezeOnOffscreen: false,
            }}
            tabIndex={-1}
            className={styles.lottieCanvas}
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}
