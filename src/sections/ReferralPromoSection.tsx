import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import styles from './ReferralPromoSection.module.css'

const PROMO_LOTTIE_SRC =
  'https://lottie.host/44305eb3-a471-46df-ae57-6fa443a932af/leBtQCg2ds.lottie'

export function ReferralPromoSection() {
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
          <a className={styles.cta} href="#contato" data-node-id="216:96">
            <span className={styles.ctaText} data-node-id="216:97">
              INDICAR PARA ALGUEM
            </span>
          </a>
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
