import LineScaleLoader from "@/containers/Loader";
import { useFunnels } from "@/hooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const CRM = () => {
    const { isLoading, funnels } = useFunnels();
    const navigate = useNavigate();


    useEffect(() => {
      if(funnels == undefined)
        return
        navigate("/crm/funnels/"+ funnels?.items[0]?.id)
    }, [funnels])

    if(isLoading){
      return <LineScaleLoader />
    }
    return (
    <div></div>
  )
}

export default CRM