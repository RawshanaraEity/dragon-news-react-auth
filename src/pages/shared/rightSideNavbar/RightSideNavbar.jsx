
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightSideNavbar = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline capitalize w-full">
          <FaGoogle></FaGoogle>
          Login with google
        </button>
        <button className="btn btn-outline capitalize w-full">
          <AiFillGithub></AiFillGithub>
          Login with github
        </button>
      </div>
      <div className='p-4 mb-6'>
        <h2 className="text-3xl mb-4">Find Us on</h2>
       <a href="" className='flex p-4 text-lg items-center border rounded-t-lg'>
        <FaFacebook className='mr-3'></FaFacebook>
        <span>Facebook</span>
       </a>
       <a href="" className='flex p-4 text-lg items-center border-x'>
        <FaTwitter className='mr-3'></FaTwitter>
        <span>Twitter</span>
       </a>
       <a href="" className='flex p-4 text-lg items-center border rounded-b-lg'>
        <FaInstagram className='mr-3'></FaInstagram>
        <span>Instagram</span>
       </a>
      </div>

      {/* q zone */}
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNavbar;
