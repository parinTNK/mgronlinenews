import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="container  mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col max-w-[900px] mx-auto md:flex-row justify-around items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
          
          {/* LINE Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-600">ติดตามข่าวสารผ่านทาง LINE</h3>
            <a href="https://line.me/ti/p/%40mgronline" rel="noopener noreferrer">
              <Image src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png" className='rounded-2xl' alt="Add friend on LINE" width={190} height={36} />
            </a>
          </div>

          {/* Appliction Section */}
          <div className="flex flex-col items-start ">
            <h3 className="font-THSarabunNew font-semibold text-3xl text-[#fa392c] ">MGR Online Application</h3>
            <div className="flex space-x-2">
              <a href="https://apps.apple.com/th/app/mgr-online/id385722328" rel="noopener noreferrer">
                <Image src="https://mgronline.com/images/appstore.png" className='rounded-2xl' alt="Download on the App Store" width={160} height={40} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.app.mgr" rel="noopener noreferrer">
                <Image src="https://mgronline.com/images/playstore.png"  className='rounded-2xl' alt="Get it on Google Play" width={160} height={40} />
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-600">ติดตาม MGR Online</h3>
            <div className="flex">
               <a href="https://www.facebook.com/MGROnlineLive" rel="noopener noreferrer">
                <Image src="/fffff.png" alt="Facebook" width={120} height={32} />
              </a>
              
            </div>
          </div>
        </div>

        {/* SONP Logo Section */}
        <div className="flex justify-center max-w-[900px] mx-auto my-3">
            <a href="http://www.sonp.or.th/" rel="noopener noreferrer" className='bg-[#888888] p-[2px] rounded-full'>
                 <Image src="https://mgronline.com/images/logo_sonp.png" alt="SONP" width={200} height={50} objectFit="contain" />
            </a>
        </div>

        {/* Bottom Links and Copyright */}
        <div className="border-t border-gray-200 font-THSarabunNew pt-6 text-center text-[28px] md:text-2xl text-gray-700">
          <div className="flex flex-wrap justify-center gap-x-4">
            <a href="https://mgronline.com/privacy-policy" className="hover:underline">นโยบายความเป็นส่วนตัว</a>
            <a href="https://mgronline.com/cookie-policy" className="hover:underline">นโยบายการใช้คุกกี้</a>
            <a href="https://mgronline.com/terms-condition" className="hover:underline">ข้อกำหนดและเงื่อนไขการใช้บริการ</a>
            <a href="https://mgronline.com/facebook-data-policy" className="hover:underline">นโยบายการใช้ข้อมูล Facebook</a>
            <a href="https://mgronline.com/about-us" className="hover:underline">เกี่ยวกับเรา</a>
            <a href="https://mgronline.com/contact-us" className="hover:underline">ติดต่อเรา</a>
          </div>
          <p className='text-black font-medium text-[26px]'>&copy; 2014-2025 MGR Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;