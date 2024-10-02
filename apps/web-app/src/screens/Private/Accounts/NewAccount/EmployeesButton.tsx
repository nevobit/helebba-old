import styles from './Accounts.module.css';

const EmployeesButton = ({
  employees,
  value,
  onChange,
}: {
  value: string;
  onChange: () => void;
  employees: string;
}) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={employees == value ? styles.active : ''}>
      {value}
    </button>
  );
};

export default EmployeesButton;
