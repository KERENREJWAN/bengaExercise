import react, { useEffect, useState } from 'react';
import './button.css';
import axios from 'axios';

export default function UploadButton(props) {

    const [isUploaded, setIsUploaded] = useState(false);
    const [code, setCode] = useState("");
    const [file, setFile] = useState({});

    useEffect(() => {
        //if the file exists then upload it
        if (!isEmpty(file))
            uploadFile(file);
    }, [file]);

    function isEmpty(obj) {
        for (var x in obj) { return false; }
        return true;
    }

    async function uploadFile() {
        const data = new FormData();
        data.append('file', file);

        await axios.post("/upload", data).then(res => { // then check response status
            //if managed to load file, show the user the code
            if (res.statusText === "OK") {
                setCode(res.data.code);
                setIsUploaded(true);
            }
        })
    }

    return (
        <div>
            <label className="button">
                <input type="file" name="file" style={{ display: "none" }} onChange={(e) => { setFile(e.target.files[0]) }} />
                upload file
            </label>
            {isUploaded ? <div style={{ marginTop: '3vh' }}>your code is: {code}</div> : null}
        </div>
    )
}