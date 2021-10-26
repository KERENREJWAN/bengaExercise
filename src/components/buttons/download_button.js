import react from 'react';
import './button.css';

export default function DownloadButton(props) {

    function downloadFile(e) {
        console.log(e)
    }

    return (
        <div>
            <button className="button" onClick={(e) => downloadFile(props.code)}>download file</button>
        </div>
    )
}