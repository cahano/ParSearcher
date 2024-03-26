//
// ParSearch Core Page
//

import './static/corePage-styles.css';
import { Parts } from './../../components/particles'
import NavBar from './../../components/header'
import Footer from '../../components/footer'
import { FileProcessor } from './file-processing'


const CorePage: React.FC = () => {

    return (

      <div className="parent">

        <NavBar />

        <div id="core_title">
          <h1>Core</h1>
        </div>

        <div className="main_frame">

          <div className="intro_box">
            
            <p> Upload a single, or up to [1mm], PDF documents from which
                you wish to abstract data. Select your use-case (e.g. 100 Term Sheets to XLSX)
                and relevant parameters (e.g. input XML/JSON specifying search logic).
                Once documents are uploaded an estimated run time will be returned.</p>

            {/* Upload and parse handler */}
            <div className='file_proc'>
              <FileProcessor />
            </div>

          </div>

        </div>
        
        <Footer />

        {/* Adding tsparticles background */}
        <div id="parts">
            <Parts />
        </div>

      </div>

  );

}

export default CorePage;
