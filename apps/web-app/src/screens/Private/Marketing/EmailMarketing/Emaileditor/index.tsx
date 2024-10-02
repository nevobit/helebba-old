import { useRef, useState } from 'react';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';
import { DefaultJsonData } from '../mails';
import { Button, Input } from '@/components';
import styles from './Email.module.css';
import { useSaveEmail, useSendmail } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { useAccountStore } from '@/state-manager';
import SelectEmails from './SelectEmails';
import { UserCheck } from 'lucide-react';

const Emaileditor = () => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const emailEditorRef = useRef<EditorRef>(null);
  const account = useAccountStore((state) => state.account);

  const [emails, setEmails] = useState<string[]>([]);
  const [subject, setSubject] = useState<string>("");

  const [openEmails, setOpenEmails] = useState<boolean>(false);

  const { saveEmail } = useSaveEmail();
  const { isSending, sendEmail } = useSendmail();
  const navigate = useNavigate();

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    setLoading(false);
    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      setJsonData(design);
      await sendEmail(
        {
          emails: emails,
          subject,
          content: html,
          sender: account.name || '',
          account: account.id || '',
        },
        {
          onSuccess() {
            alert('Succesfully');
          },
        },
      );
    });
  };

  const exportHtmlTest = () => {
    const unlayer = emailEditorRef.current?.editor;
    setLoading(false);
    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      setJsonData(design);
      await sendEmail(
        {
          emails: ['nevobitsoftware@gmail.com'],
          subject,
          content: html,
          sender: account.name || '',
          account: account.id || '',
        },
        {
          onSuccess() {
            alert('Succesfully');
          },
        },
      );
    });
  };

  const onReady: EmailEditorProps['onReady'] = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.loadDesign(jsonData);
  };

  const saveDraft = async () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(async (data) => {
      const { design } = data;
      await saveEmail(
        {
          account: account.id,
          title: subject,
          content: JSON.stringify(design),
        },
        {
          onSuccess() {
            navigate('/email-marketing');
          },
        },
      );
    });
  };

  const handleEmailChange = (email: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      if (!emails.includes(email)) {
        setEmails([...emails, email]);
      }
    } else if (action === 'remove') {
      setEmails(emails.filter((e) => e !== email));
    }
  };

  const handleClose = () => {
    setOpenEmails(false);
  };
  return (
    <div>
      <div className={styles.buttons}>
        <div>
          <Input onChange={({target}) => setSubject(target.value)} className={styles.input} placeholder="Asunto" />
          <button
            className={styles.open}
            onClick={() => setOpenEmails(!openEmails)}>
            <UserCheck size={18} /> Destinatarios
          </button>
        </div>
        <div>
          <Button onClick={saveDraft} variant="third">
            Guardar
          </Button>
          <Button loading={isSending} onClick={exportHtmlTest}>
            Enviar Prueba
          </Button>
          <Button loading={isSending} onClick={exportHtml}>
            Enviar y Guardar
          </Button>
        </div>
      </div>
      {!loading && (
        <div>
          <EmailEditor
            minHeight={'80vh'}
            ref={emailEditorRef}
            onReady={onReady}
          />
        </div>
      )}

      {openEmails && (
        <SelectEmails
          emails={emails}
          onClose={handleClose}
          onEmailChange={handleEmailChange}
        />
      )}
    </div>
  );
};

export default Emaileditor;
