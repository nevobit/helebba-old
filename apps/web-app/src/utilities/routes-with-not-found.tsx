import NotFound from '@/screens/NotFount';
import { Routes, Route } from 'react-router-dom';

interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const RoutesWithNotFound = ({children}: Props) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesWithNotFound;