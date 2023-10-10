import React from 'react';
import ArchiveCameraWidget from './archivecamerawidget/archiveCameraWidget';

const ArchiveCamera = () => {
  
    return (
        <div className='w-full grid py-16 2xl:py-32 sm:py-20 px-2 sm:px-6 grid-cols-1 xl:grid-cols-2 items-center gap-5'>
         <ArchiveCameraWidget/>
         <ArchiveCameraWidget/>
         <ArchiveCameraWidget/>
         <ArchiveCameraWidget/>

        </div>
    )
}

export default ArchiveCamera