import react, { useState } from 'react';
import UploadButton from '../buttons/upload_button';
import DownloadButton from '../buttons/download_button';
import styles from './styles';
import '../buttons/button.css';

export default function Page() {

    const StyledPage = styles.page;
    const Line = styles.line;
    const [enteredCode, setEnteredCode] = useState("");

    function downloadFile(code) {
        console.log(code);
    }

    return (
        <StyledPage>
            <div style={{ padding: '50px' }}>
                <UploadButton />
            </div>
            <Line></Line>
            <div style={{ display: 'inline', padding: '50px' }}>
                <div style={{ marginBottom: '2vh' }}>
                    <p>would you like to download a file?</p>
                    <input type="text" value={enteredCode} onChange={(e) => setEnteredCode(e.currentTarget.value)} />
                </div>
                {enteredCode.length === 6 ? <DownloadButton code={enteredCode} /> : null}
            </div>
        </StyledPage>

    )
}