import styles from './BalancePortfolioSection.module.css'

const VECTOR = '/sections/vector-decor-2.svg'
const IMG_NICOLE = '/sections/nicole-1.png'
const IMG_AMBAR = '/sections/ambar-2.png'
const IMG_PAOLA = '/sections/paola-1.png'

type SlideProps = {
  groupKey: string
  suffix: string
}

function SlideColLeft({ groupKey, suffix }: SlideProps) {
  const id = `${groupKey}-${suffix}`
  return (
    <>
      <div
        key={`${id}-1`}
        className={`${styles.card} ${styles.arNicole}`}
        data-node-id="208:524"
      >
        <img className={styles.cardImg} src={IMG_NICOLE} alt="" />
      </div>
      <div
        key={`${id}-2`}
        className={`${styles.card} ${styles.arAmbar}`}
        data-node-id="208:526"
      >
        <img className={styles.cardImg} src={IMG_AMBAR} alt="" />
      </div>
      <div key={`${id}-3`} className={`${styles.card} ${styles.arPaola}`} data-node-id="208:525">
        <img className={styles.cardImg} src={IMG_PAOLA} alt="" />
      </div>
    </>
  )
}

function SlideColRight({ groupKey, suffix }: SlideProps) {
  const id = `${groupKey}-${suffix}`
  return (
    <>
      <div
        key={`${id}-1`}
        className={`${styles.card} ${styles.arAmbar}`}
        data-node-id="208:528"
      >
        <img className={styles.cardImg} src={IMG_AMBAR} alt="" />
      </div>
      <div
        key={`${id}-2`}
        className={`${styles.card} ${styles.arNicole}`}
        data-node-id="208:529"
      >
        <img className={styles.cardImg} src={IMG_NICOLE} alt="" />
      </div>
      <div key={`${id}-3`} className={`${styles.card} ${styles.arPaola}`} data-node-id="208:530">
        <img className={styles.cardImg} src={IMG_PAOLA} alt="" />
      </div>
    </>
  )
}

export function BalancePortfolioSection() {
  return (
    <section
      id="portfolio"
      className={styles.section}
      aria-labelledby="balance-heading"
      data-node-id="208:458"
    >
      <div className={styles.vector} aria-hidden data-node-id="208:459">
        <img src={VECTOR} alt="" width={1073} height={1473} />
      </div>
      <div className={styles.gradTop} aria-hidden data-node-id="208:539" />
      <div className={styles.gradBottom} aria-hidden data-node-id="208:540">
        <div className={styles.gradBottomInner} />
      </div>

      <div className={styles.columnCopy} data-node-id="210:595">
        <div className={styles.copy} id="balance-heading" data-node-id="208:532">
          <p className={styles.copyLine} data-node-id="208:533">
            Existe um equilibrio
          </p>
          <p className={`${styles.copyLine} ${styles.lineCenter}`} data-node-id="208:534">
            <span>entre </span>
            <span className={styles.accentItalic}>utilidade,</span>
          </p>
          <p className={styles.copyLine} data-node-id="208:535">
            <span className={styles.accentItalic}>conversão</span>
            <span> e </span>
            <span className={styles.accentItalic}>beleza</span>
          </p>
          <p
            className={`${styles.copyLine} ${styles.lineRight}`}
            data-node-id="208:536"
          >
            <span className={styles.accentItalic}>eu posso encontra-lo</span>
          </p>
          <p className={styles.copyLine} data-node-id="208:537">
            <span>na </span>
            <span className={styles.accentItalic}>sua marca!</span>
          </p>
        </div>
        <a
          className={styles.cta}
          href="https://wa.me/5541987160509"
          target="_blank"
          rel="noopener noreferrer"
          data-node-id="210:592"
        >
          <span className={styles.ctaText} data-node-id="210:593">
            FALE COMIGO
          </span>
        </a>
      </div>

      <div className={styles.carouselShell}>
        <div className={styles.carouselFadeTop} aria-hidden />
        <div className={styles.carouselFadeBottom} aria-hidden />
        <div className={styles.rotator}>
          <div className={styles.columns} data-node-id="208:522">
            <div className={styles.marqueeOuter} data-node-id="208:523">
              {/* De cima para baixo */}
              <div className={`${styles.marqueeTrack} ${styles.marqueeDown}`}>
                <div className={styles.marqueeGroup}>
                  <SlideColLeft groupKey="L" suffix="a" />
                </div>
                <div className={styles.marqueeGroup} aria-hidden="true">
                  <SlideColLeft groupKey="L" suffix="b" />
                </div>
              </div>
            </div>
            <div className={styles.marqueeOuter} data-node-id="208:527">
              {/* De baixo para cima */}
              <div className={`${styles.marqueeTrack} ${styles.marqueeUp}`}>
                <div className={styles.marqueeGroup}>
                  <SlideColRight groupKey="R" suffix="a" />
                </div>
                <div className={styles.marqueeGroup} aria-hidden="true">
                  <SlideColRight groupKey="R" suffix="b" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
