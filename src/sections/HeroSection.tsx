import styles from './HeroSection.module.css'

const LINE_SRC = '/hero/line.svg'
const PORTRAIT_SRC = '/hero/portrait.png'

export function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Início" data-node-id="213:26">
      <div className={styles.lineDecor} data-node-id="213:27" aria-hidden>
        <img src={LINE_SRC} alt="" width={1069} height={1473} />
      </div>

      <header className={styles.header} data-node-id="213:28">
        <p className={styles.logo} data-node-id="213:29">
          Design do Luiz
        </p>
        <div className={styles.headerRight}>
          <nav className={styles.nav} aria-label="Principal" data-node-id="213:30">
            <a className={styles.navLink} href="#inicio" data-node-id="213:31">
              HOME
            </a>
            <a className={styles.navLink} href="#portfolio" data-node-id="213:32">
              PORTFÓLIO
            </a>
            <a className={`${styles.navLink} ${styles.navLinkDesconto}`} href="#desconto">
              DESCONTO
            </a>
            <a className={styles.navLink} href="#sobre" data-node-id="213:33">
              SOBRE MIM
            </a>
          </nav>
          <a
            className={styles.cta}
            href="https://wa.me/5541987160509"
            target="_blank"
            rel="noopener noreferrer"
            data-node-id="213:34"
          >
            <span data-node-id="213:35">FALE COMIGO</span>
          </a>
        </div>
      </header>

      <div className={styles.main} data-node-id="213:36">
        <div className={styles.heroCore} data-node-id="213:37">
          <div className={styles.copy} data-node-id="213:38">
            <p className={styles.copyLine} data-node-id="213:39">
              Olá!
            </p>
            <p
              className={`${styles.copyLine} ${styles.copyLineAccent}`}
              data-node-id="213:40"
            >
              <span>Eu sou o </span>
              <span className={styles.highlight}>Luiz</span>
            </p>
            <p className={styles.copyLine} data-node-id="213:41">
              E eu ajudo empresas
            </p>
            <p
              className={`${styles.copyLine} ${styles.copyLineAccentRight}`}
              data-node-id="213:42"
            >
              <span>A parecer tão </span>
              <span className={styles.highlight}>únicas</span>
            </p>
            <p className={styles.copyLine} data-node-id="213:43">
              <span>Quanto </span>
              <span className={styles.highlight}>elas são</span>
            </p>
          </div>

          <div className={styles.portraitWrap} data-node-id="213:44">
            <img
              className={styles.portrait}
              src={PORTRAIT_SRC}
              alt="Retrato de Luiz"
              width={213}
              height={213}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
