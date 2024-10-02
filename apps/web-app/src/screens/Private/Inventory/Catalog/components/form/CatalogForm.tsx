import styles from './form.module.css'

interface Props {
  handleCategorySelectionChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CatalogForm: React.FC<Props> = ({ handleCategorySelectionChange }) => {
  return (
    <section className={styles.containerCategories}>
      <h2>Categorias</h2>
      <div className={styles.containerCategories__form}>
        <div>
          <h3>Ropa</h3>
          <ul>
            <li>
              <label htmlFor="camisetas">
                <input
                  className={styles.inputCheck}
                  type="checkbox"
                  id="camisetas"
                  value='camisetas'
                  onChange={handleCategorySelectionChange}
                />
                <span>camisetas</span>
              </label>
            </li>
            <li>
              <label htmlFor="sudaderas con capucha">
                <input
                  className={styles.inputCheck}
                  type="checkbox"
                  id="sudaderas con capucha"
                  name="sudaderas con capucha"
                  value="sudaderas con capucha"
                  onChange={handleCategorySelectionChange}
                />
                <span>sudaderas con capucha</span>
              </label>
            </li>
            <li>
              <label htmlFor="pantalones">
                <input
                  className={styles.inputCheck}
                  type="checkbox"
                  id="pantalones"
                  value="pantalones"
                  onChange={handleCategorySelectionChange}
                />
                <span>pantalones</span>
              </label>
            </li>
          </ul>
        </div>
        <div>
          <h3>bebidas</h3>
          <ul>
            <li>
              <label htmlFor="soda">
                <input
                  className={styles.inputCheck}
                  type="checkbox"
                  id="soda"
                  value="soda"
                  onChange={handleCategorySelectionChange}
                />
                <span>soda</span>
              </label>
            </li>
            <li>
              <label htmlFor="jugos">
                <input
                  className={styles.inputCheck}
                  type="checkbox"
                  id="jugos"
                  value="jugos"
                  onChange={handleCategorySelectionChange}
                />
                <span>jugos</span>
              </label>
            </li>
            <li>
              <label htmlFor="alcohol">
                <input
                  className={styles.inputCheck}
                  type="checkbox"
                  id="alcohol"
                  value="alcohol"
                  onChange={handleCategorySelectionChange}
                />
                <span>alcohol</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <h2>Variantes</h2>
    </section>
  );
}

export default CatalogForm