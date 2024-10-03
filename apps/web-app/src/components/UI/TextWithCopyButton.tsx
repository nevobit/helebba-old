import { useState } from 'react';
import { Copy } from 'lucide-react';

const TextWithCopyButton = ({ text, maxLength }: { text: string, maxLength: number }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);  
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: 5
        }} >
            <div style={{ maxWidth: '600px', overflowWrap: 'break-word' }}>
                {truncatedText}
            </div>
            <button onClick={handleCopy} style={{
            display: "flex",
            alignItems: "center",
            gap: 5
        }}  ><Copy size={18} /> {copied ? 'Copiado!' : 'Copiar'}</button>
        </div>
    );
};

export default TextWithCopyButton;
