import styles from './FooterSection.module.css'

const INSTAGRAM_SRC = '/footer/instagram.svg'

export function FooterSection() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contato"
      className={styles.footer}
      data-node-id="238:537"
      aria-labelledby="footer-follow-heading"
    >
      <p className={styles.followLabel} id="footer-follow-heading" data-node-id="238:511">
        me siga:
      </p>

      <div className={styles.row} data-node-id="238:521">
        <div className={styles.monogram} data-node-id="238:531">
          <p className={styles.monogramText} data-node-id="238:532">
            DdL
          </p>
        </div>

        <p className={styles.rights} data-node-id="238:526">
          {year} ALL RIGHTS RESERVED
        </p>

        <a
          className={styles.instagramLink}
          href="https://www.instagram.com/designdoluiz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram — abre numa nova página"
          data-node-id="238:534"
        >
          <img src={INSTAGRAM_SRC} alt="" width={48} height={48} />
        </a>
      </div>
    </footer>
  )
}
