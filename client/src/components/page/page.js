import react, { useState } from 'react';
import UploadButton from '../buttons/upload_button';
import DownloadButton from '../buttons/download_button';
import styles from './styles';

export default function Page() {

    const StyledPage = styles.page;
    const Line = styles.line;
    const [enteredCode, setEnteredCode] = useState("");

    return (
        <StyledPage>
            <div>
                <UploadButton />
            </div>

            <Line></Line>

            <div style={{ display: 'inline' }}>
                <div style={{ marginBottom: '2vh' }}>
                    <p>would you like to download a file?</p>
                    <input type="text" value={enteredCode} onChange={(e) => setEnteredCode(e.currentTarget.value)} />
                </div>
                {enteredCode.length === 6 ? <DownloadButton code={enteredCode} /> : null}
            </div>
        </StyledPage>

    )
}