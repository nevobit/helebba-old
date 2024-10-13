import { useUser } from '@/hooks';
import { PublicRoutes } from '@/router';
import { LineScaleLoader } from '@helebba/design-system/web';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
  <Navigate to={"/"} replace />
)

const GuardRoute = ({privateValidation}: Props) => {
  const { isLoading, user } = useUser();

  console.log("user", user)

  if(isLoading) return <LineScaleLoader />

  return user ? (
    privateValidation ? (
        PrivateValidationFragment
    ): (
        PublicValidationFragment
    )
) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
) 
}

export default GuardRoute
