import { Company } from '../../mocks/Company';
import styles from './Card.module.css';

const CompanyCard = ({
  logo,
  name,
  description,
  industries,
  services,
}: Company) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <img
          src={logo}
          style={{
            objectFit: 'contain',
          }}
          width={200}
          height={100}
        />
          <div>
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div className={styles.list}>
              {[industries, services].flat().map((item) => (
                <span key={item} className={styles.item}>{item}</span>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default CompanyCard;
