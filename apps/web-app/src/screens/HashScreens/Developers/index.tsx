import { X } from 'lucide-react';
import styles from './ModalCreate.module.css';
import { useCreateDeveloper, useDevelopers, useUser } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { Button, TextWithCopyButton } from '@/components';
import { useAccountStore } from '@/state-manager';
import { Developer } from '@helebba/entities';

const Developers = () => {
  const { user } = useUser();
  const { developers } = useDevelopers();

  const account = useAccountStore((state) => state.account);
  const navigate = useNavigate();

  const { isCreating, createDeveloper } = useCreateDeveloper();

  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.user}>
              <button onClick={handleButtonClick}>
                <X size={20} />
              </button>
              <h2>
                {user?.name} {user?.lastname}
              </h2>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.basic}>
              <div className={styles.basic_header}>
                <div>
                  <h3 className={styles.title}>API</h3>
                  <p className={styles.copy}>
                    Integra Helebba con otras aplicaciones que utilices en tu
                    empresa a un nivel más personalizado.
                  </p>
                </div>
                <div
                  style={{
                    marginTop: 20,
                  }}>
                  <Button
                    loading={isCreating}
                    onClick={() =>
                      createDeveloper({
                        developer: {
                          userId: user?.id,
                          accountId: account.id,
                          description: 'api',
                        },
                      })
                    }>
                    {' '}
                    Nueva Api Key{' '}
                  </Button>
                </div>
              </div>
              <div className={styles.table_container} >

              <table className={styles.table} >
                <thead>
                  <tr>
                    <th style={{
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.65)"
                    }} >Descripción</th>
                    <th style={{
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.65)"
                    }} >APIKEY</th>
                    <th style={{
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.65)"
                    }} >Creación</th>
                  </tr>
                </thead>
                <tbody>
                  {developers?.items.map((developer: Developer) => (
                    <tr key={developer.id}>
                      <td>{developer.description}</td>
                      <td><TextWithCopyButton text={developer.hash} maxLength={40} /></td>
                      <td>{developer?.createdAt?.toString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
