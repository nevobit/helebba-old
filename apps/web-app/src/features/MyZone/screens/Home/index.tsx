import { useEffect } from "react";
import Empty from "../../components/Empty"
import { useEmployeeMe } from "../../hooks"
import { useNavigate } from "react-router-dom";
import { LineScaleLoader } from "@helebba/design-system/web";

const Home = () => {
    const { isLoading, employee } = useEmployeeMe();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && employee) {
            navigate("/employees/summary");
        }
    }, [isLoading, employee, navigate]);

    if (isLoading) {
        return <LineScaleLoader />
    }

    return <Empty />
}

export default Home