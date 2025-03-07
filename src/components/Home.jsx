import esign from '../assets/Component 1.png';
import vector from '../assets/Vector.png';
import vector2 from '../assets/Vector (1).png';

const Home = () => {
    return (
      <section className="text-center py-16">
        <div className="hidden lg:block ellipse-1"></div>
      <div className="hidden lg:block ellipse-2"></div>
      <div className="hidden lg:block ellipse-3"></div>
      <div className="hidden lg:block ellipse-4"></div>

        <h1 className="text-4xl text-black sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-10 font-primary tracking-wide">
          AI-Powered Unified Platform;
          <br />
          <div className="flex justify-end max-w-2xl gap-5 mx-auto">
            <span className="bg-gradient-to-r from-[#80BBEB] via-[#89A3D5] to-[#254A76] bg-clip-text text-transparent font-extrabold animate-text-change pb-2"></span>
            <span>Effortlessly</span>
          </div>
        </h1>

        <p className="mt-10 text-[19px] text-gray-600">
          Fast, Smart & Secure – Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
        </p>
        <div className="mt-6 flex text-[16px] justify-center space-x-6">
            <div className='flex items-center'>
                <img src={esign} className='mr-2'/><p>ESIGN Compliant</p>
            </div>
            <div className='flex items-center'>
                <img src={esign} className='mr-2'/>UETA Approved
            </div>
            <div className='flex items-center'>
                <img src={esign} className='mr-2'/>eIDAS Certified
            </div>
        </div>
        <div className="flex items-center mt-8 mx-100 p-4 ">
            {/* Drag & Drop Area */}
            <div className="flex items-center justify-between w-full bg-white px-4 py-2 rounded-full border border-gray-300 shadow-sm">
                <span className="text-gray-600">Drop your file here</span>
                <button className="flex items-center gap-2 bg-[#173A66] cursor-pointer text-white px-4 py-2 rounded-full shadow-md hover:bg-[#122b4d]">
                    <img src={vector}/> Upload File
                </button>
            </div>

            {/* OR Text */}
            <span className="mx-3 text-gray-500 font-medium">OR</span>

            {/* AI Generate Button */}
            <button className="flex items-center justify-center cursor-pointer whitespace-nowrap gap-2 bg-[#173A66] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#122b4d]">
                <img src={vector2}/>Generate with AI
            </button>
        </div>

        <div className="flex justify-center items-center">
            <div className="w-[704vh] h-[90vh] max-w-screen-md mx-auto bg-white rounded-2xl mt-10 shadow-lg shadow-pink-300 border-black border-[1px] p-2">
            </div>
        </div>
      </section>
    );
  };
  
  export default Home;
  