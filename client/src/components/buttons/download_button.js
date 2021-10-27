import react from 'react';
import './button.css';
import axios from 'axios';
import FileSaver from 'file-saver';
import contentDisposition from 'content-disposition';

export default function DownloadButton(props) {

    async function downloadFile(code) {
        const config = {
            responseType: 'arraybuffer'
        }
        let res = await axios.post("/download", { code: code }, config);

        //seperate the centent provided to get the file's name
        let content = contentDisposition.parse(res.headers['content-disposition']);

        //if the file that as requested exists, download it
        if (res.data)
            FileSaver.saveAs(new Blob([res.data]), content.parameters.filename);
    }

    return (
        <div>
            <button className="button" onClick={(e) => downloadFile(props.code)}>download file</button>
        </div>
    )
}
