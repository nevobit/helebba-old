import { Modal } from '@/containers';
import CompanyInfo from '../CompanyInfo';
import { useParams } from 'react-router-dom';
import companies from '../../mocks/companies';

const ShowCompany = () => {
    const { id } = useParams();
    const company = companies.find((company) => company.id == id)
    return (
            <Modal.Window width={900} styleHeader={{
                padding: 20,
                paddingBottom: 0
            }} style={{
                padding: 0,
            }} title={company?.name || ""} name='show-form'>
                <CompanyInfo company={company} />
            </Modal.Window>
    )
}

export default ShowCompany;