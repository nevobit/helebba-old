import EmailEditor from './Emaileditor'
import { useSearchParams } from 'react-router-dom'

const Email = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams)
    // const subject: string = searchParams.get("subject")!;
    // const subjectTitle = subject.replace(/-/g, " ");
  return (
    <div>
        <EmailEditor />
    </div>
  )
}

export default Email