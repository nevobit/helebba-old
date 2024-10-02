import styles from './Referral.module.css';
import ScreenHeader from '@/containers/ScreenHeader';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PrivateRoutes } from '@/constant-definitions';
import { Empty, ScreenContainer } from '@/containers';
import { useDocuments } from '@/hooks';
import { DocumentType } from '@helebba/entities';
import Image from '/images/empty/contacts.png';
import ReferralsTable from './Table/ReferralTable';
import LineScaleLoader from '@/containers/Loader';

const title = 'Pedidos';

const SalesOrder = () => {
  const { isLoading, documents } = useDocuments(DocumentType.SALES_ORDER);
  const [openCreate, setOpenCreate] = useState(false);
  const [option, setOption] = useState('all');
  const [search, setSearch] = useState('');
  console.log(openCreate, option, search, isLoading);

  if (isLoading) return <LineScaleLoader />;
  if (isLoading) return <LineScaleLoader />;
  return (
    <>
      <ScreenHeader title={title} setOpen={() => setOpenCreate(true)}>
        <Link className={styles.btn_new} to={PrivateRoutes.NEW_SALES_ORDER}>
          Nuevo Pedido
        </Link>
      </ScreenHeader>
      <ScreenContainer
        option={option}
        setOption={setOption}
        setSearch={setSearch}>
        {documents?.items?.length <= 0 ? (
          <Empty
            button={''}
            title={title}
            copy="Aquí es donde puede administrar  sus pedidos  y toda su información."
            image={Image}
          />
        ) : (
          <ReferralsTable />
        )}
      </ScreenContainer>
    </>
  );
};

export default SalesOrder;
