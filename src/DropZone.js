import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios';

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => {
        console.log('file reading was aborted');
      };
      
      reader.onerror = () => {
        console.log('file reading has failed');
      };

      reader.onload = () => {
        // fetch s3 pre-signed URL from micro-service
        const url = 'https://nlze0aet9h.execute-api.us-west-2.amazonaws.com/dev/api/presigned-upload-url';
        axios.get(url)
          .then(function (response) {
            // send data to s3
            const signedUrl = response.data.presigned.url;
            const formData = new FormData();
            Object.entries(response.data.presigned.fields).forEach(([k, v]) => {
              formData.append(k, v);
            });
            formData.append('file', file);
            //
            console.log('POST request...');
            console.log(signedUrl);
            console.log(formData);
            axios.post(signedUrl, formData)
            .then((yo) => {
              console.log('lets go!');
              console.log(yo);
            })
            .catch(function (error) {
              console.log('post error');
              console.log(error);
            })
            .then(function (result) {
              console.log('after post request');
              console.log(result);
            })
          })
          .catch(function (error) {
            // handle error
            console.log('the error');
            console.log(error);
          })
          .then(function (result) {
            // always executed
            console.log('after get request');
            console.log(result);
          });
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}

export default MyDropzone;