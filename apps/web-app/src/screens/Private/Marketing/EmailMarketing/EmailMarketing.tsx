// import { Button, Input } from "@/components";
import styles from './Email.module.css';
// import { PlusCircle } from "lucide-react";
// import { useState } from "react";
import { Link } from 'react-router-dom';
import { ScreenHeader } from '@/containers';
import { useEmails } from '@/hooks';
import { Email } from '@helebba/entities';

const EmailMarketing = () => {
  //   const [open, setOpen] = useState(false);
  //   const [subject, setSubject] = useState("");
  const { emails } = useEmails();
  return (
    <div>
      <ScreenHeader title="Campañas">
        <Link className={styles.btn_new} to="/email-marketing/new">
          Crear Campaña
        </Link>
      </ScreenHeader>

      <div className={styles.emails}>
        {emails?.items?.map((email: Email) => (
          <div key={email.id} className={styles.email_card} >
            <h3>{email.title}</h3>
            {/* <div className={styles.email_preview}>
              <HTMLPreview content={email.content} />
            </div> */}
          </div>
        ))}
      </div>
      {/* <Button variant="third" onClick={ () => setOpen(true)} >
            <p><PlusCircle /></p>
            <h4>Create new</h4>
        </Button> */}

      {/* {open && (
            <div className={styles.modal} >
                <div className={styles.content} >
                    <h3>Type a subject for email</h3>
                    <Input value={subject} onChange={({ target }) => setSubject(target.value)} placeholder="Subject" />
                    <Link to={"/email/new?subject=" + subject.replace(/ /g, "-")} >Create</Link>
                </div>
            </div>
        )} */}
    </div>
  );
};

export default EmailMarketing;
