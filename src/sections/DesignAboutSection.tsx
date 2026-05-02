import styles from './DesignAboutSection.module.css'

const VECTOR = '/sections/vector-about.svg'
const PORTRAIT = '/sections/foto.png'

export function DesignAboutSection() {
  return (
    <section
      id="sobre"
      className={styles.section}
      aria-labelledby="design-about-h"
      data-node-id="210:549"
    >
      <div className={styles.main} data-node-id="210:551">
        <div className={styles.headlines} data-node-id="210:588" id="design-about-h">
          <p className={`${styles.hl} ${styles.hlBlack}`} data-node-id="210:553">
            Design não é só
            <br className={styles.headlineMobileBreak} aria-hidden />
            aparência
          </p>
          <p className={`${styles.hl} ${styles.hlAccent}`} data-node-id="210:554">
            é percepção
          </p>
          <p className={`${styles.hl} ${styles.hlAccent} ${styles.hlRight}`} data-node-id="210:571">
            é posicionamento
          </p>
          <p className={`${styles.hl} ${styles.hlAccent}`} data-node-id="210:555">
            e conversão.
          </p>
        </div>

        <div className={styles.body} data-node-id="210:582">
          <p className={styles.bodyLine} data-node-id="210:556">
            <span>A mais de </span>
            <span className={styles.accentItalic}>5 anos</span>
          </p>
          <p className={styles.bodyLine} data-node-id="210:580">
            <span>Crio </span>
            <span className={styles.accentItalic}>experiências digitais</span>
          </p>
          <p className={styles.bodyLine} data-node-id="210:574">{`para marcas que `}</p>
          <p className={styles.bodyLine} data-node-id="210:576">
            <span>querem crescer com </span>
            <span className={styles.accentItalic}>clareza</span>
          </p>
          <p className={styles.bodyLine} data-node-id="210:578">
            <span>e </span>
            <span className={styles.accentItalic}>alto nível de execução</span>
            <span className={styles.brownPlain}>.</span>
          </p>
          <p className={styles.bodyLine} data-node-id="210:583">
            Da pesquisa à interface final
          </p>
          <p className={styles.bodyLine} data-node-id="210:587">
            projeto produtos e websites
          </p>
          <p className={styles.bodyLine} data-node-id="210:585">
            <span>que unem </span>
            <span className={styles.accentItalic}>estratégia</span>
            <span className={styles.brownPlain}>,</span>
            <span>{` estética e `}</span>
            <span className={styles.accentItalic}>resultado.</span>
          </p>
        </div>

        <a className={styles.cta} href="#sobre" data-node-id="210:596">
          <span className={styles.ctaText} data-node-id="210:597">
            MAIS SOBRE MIM
          </span>
        </a>
      </div>

      <div className={styles.imageCol} data-node-id="210:573">
        <div className={styles.imageWrap} data-node-id="210:569">
          <img src={PORTRAIT} alt="Luiz" width={509} height={754} />
        </div>
      </div>

      <div className={styles.vector} aria-hidden data-node-id="210:550">
        <img src={VECTOR} alt="" width={1103} height={1470} />
      </div>
    </section>
  )
}
