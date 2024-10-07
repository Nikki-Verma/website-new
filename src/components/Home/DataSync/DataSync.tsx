import Image from 'next/image';
import DataSyncImage from '../../../assets/png/dataSync.png';

const DataSync = () => {
    return (
        <div className='container text-center max-auto'>
            <div>
                <h2>Effortlessly sync your complex data <br />sources to your AI applications</h2>
                <p className='section_subheading'>Automatically, securely and reliably ingest data from 300+ connectors including SaaS <br />applications, databases, data warehouses and lakes, unstructured, cloud storage and more.</p>
            </div>
            <div className='flex justify-center items-center mt-16'>
                <Image src={DataSyncImage} alt='data-sync' className='text-center max-auto'/>
            </div>
        </div>
    )
}

export default DataSync;