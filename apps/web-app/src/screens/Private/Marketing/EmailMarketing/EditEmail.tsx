import EditEmaileditor from './EdtiEmaileditor';
import { useSearchParams } from 'react-router-dom'

const EditEmail = () => {
    const [searchParams] = useSearchParams();
    const subject: string = searchParams.get("subject")!;
    const subjectTitle = subject.replace(/-/g, " ");
  return (
    <div>
        <EditEmaileditor subtitle={subjectTitle} />
    </div>
  )
}

export default EditEmail