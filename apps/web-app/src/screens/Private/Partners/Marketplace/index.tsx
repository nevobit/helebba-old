import { Modal, ScreenHeader } from '@/containers';
import styles from './Marketplace.module.css';
import { Input } from '@/components';
import { Search } from 'lucide-react';
import companies from './mocks/companies';
import CompanyCard from './components/CompanyCard';
import CheckboxGroup from './components/CheckboxGroup';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCompany from './components/ShowCompany';

const industries = ['Autónomos', 'Pymes', 'E-commerce', 'Startups'];
const services = [
  'Digitalización de empresas',
  'Contable',
  'Evaluación económica',
  'Constitución de empresas',
  'Director financiero externo',
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const navigate = useNavigate();
  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const industryMatch =
        selectedIndustries.length === 0 ||
        selectedIndustries.some((industry) =>
          company.industries.includes(industry),
        );

      const serviceMatch =
        selectedServices.length === 0 ||
        selectedServices.some((service) => company.services.includes(service));

      const searchMatch =
        searchTerm === '' ||
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase());

      return industryMatch && serviceMatch && searchMatch;
    });
  }, [companies, selectedIndustries, selectedServices, searchTerm]);

  return (
    <Modal>
      <ScreenHeader title="Marketplace de asesorías" />

      <div className={styles.container}>
        <div className={styles.services}>
          <div className={styles.filters}>
            <CheckboxGroup
              title="Industrias"
              items={industries}
              selectedItems={selectedIndustries}
              onItemCheck={(item) => {
                setSelectedIndustries((prev) =>
                  prev.includes(item)
                    ? prev.filter((i) => i !== item)
                    : [...prev, item],
                );
              }}
            />
            <CheckboxGroup
              title="Servicios"
              items={services}
              selectedItems={selectedServices}
              onItemCheck={(item) => {
                setSelectedServices((prev) =>
                  prev.includes(item)
                    ? prev.filter((i) => i !== item)
                    : [...prev, item],
                );
              }}
            />
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.list_header}>
            <h3>Asesorías</h3>
            <div className={styles.input}>
              <Input
                icon={<Search size={30} />}
                placeholder="Buscar"
                onChange={({ target }) => setSearchTerm(target.value)}
              />
            </div>
          </div>
          {filteredCompanies.map((company) => (
            <Modal.Open opens="show-form" onClick={() => navigate(`/partners/marketplace/${company.id}`)} key={company.id}>
              <button>
                <CompanyCard {...company} />
              </button>
            </Modal.Open>
          ))}
        </div>
      </div>
      <ShowCompany />
    </Modal>
  );
};

export default Marketplace;
