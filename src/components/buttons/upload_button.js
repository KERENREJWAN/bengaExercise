import react, { useState } from 'react';
import './button.css';

export default function UploadButton(props) {

    const [isUploaded, setIsUploaded] = useState(false);
    const [code, setCode] = useState("");

    function uploadFile(e) {
        console.log(e.target.files[0])
        //     //     const file = e.target.files[0];
        //     //     const storageRef = app.storage().ref()
        //     //     const fileRef = storageRef.child(file.name)
        //     //     fileRef.put(file).then(() => {
        //     //         //   console.log("Uploaded a file")
        setIsUploaded(true);
        //     //     })
    }

    return (
        <div>
            <label className="button">
                <input type="file" style={{ display: "none" }} onChange={uploadFile} />
                    upload file
        </label>
            {isUploaded ? <div style={{ marginTop: '3vh' }}>your code is: {code}</div> : null}
        </div>
    )
}