import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

import './dropzone.scss';

export default function Dropzone() {
  
  const onDrop = useCallback(acceptedFiles => {

  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='dropzone'>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p className="paragrafoDropzone">Envie seus arquivos aqui...</p>
      }
    </div>
  )
}