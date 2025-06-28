import {
  FaFacebookF,
  FaLink,
  FaStar,
  FaTwitter,
  FaVolumeOff,
} from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1158px] mx-0 md:mx-auto">
      <div className="md:container md:mx-auto  md:mt-10 mt-4  flex justify-center items-center">
        <Image
          src="/image.png"
          alt="Logo"
          width={2000}
          height={2000}
          className="w-full h-auto object-cover md:mx-40"
        />
      </div>
      <main className="container mx-auto flex md:flex-row flex-col  md:mt-10 border-r border-l border-gray-300">
        {/* left div */}
        <div className="flex flex-col md:w-2/3 mx-4">
          <p className="font-THSarabunNew md:text-[20px] text-[26px] text-blue-600 md:text-blue-500 md:font-bold font-medium  py-2 text-base/7 border-gray-200 md:border-gray-300 border-b-1 inline-block">
            หน้าหลัก <span className="text-gray-600">/</span> ทันเหตุการณ์{" "}
            <span className="text-gray-600">/</span> Breaking News{" "}
            <span className="text-gray-600">/</span> อาชญากรรม
          </p>
          <div className="mt-3">
            <p className="text-2xl text-[#337AB7]">
              ตำรวจไซเบอร์เร่งขยายผล
              ปิดบัญชีธนาคารและเว็บไซต์พนันออนไลน์เครือข่ายใหญ่รวม 78 แห่ง
              โยงบริษัท Huione ในกัมพูชา เอี่ยวหลาน “ฮุนเซน”
            </p>
            <p className="text-sm text-gray-500">
              <span className="text-gray-700 font-normal">เผยแพร่:</span> 28
              มิ.ย. 2568 21:47{" "}
              <span className="text-gray-700 font-normal">ปรับปรุง:</span> 18
              มิ.ย. 2568 21:47
              <span className="text-gray-700 font-normal">
                {" "}
                โดย: ผู้จัดการออนไลน์
              </span>
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="rounded-full bg-[#3B5998] p-2 text-white"
                >
                  <FaFacebookF />
                </a>
                <a href="#" className="rounded-full bg-[#00b900] p-[2px]">
                  <Image
                    src="https://mgronline.com/images/line-it-logo.png"
                    alt="Line Logo"
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                </a>
                <a href="#" className="rounded-full bg-sky-500 p-2 text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="rounded-full bg-gray-400 p-2 text-white">
                  <FaLink />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-[#f7931f] p-2 text-white"
                >
                  <FaVolumeOff />
                </a>
                <a href="#" className="rounded-full bg-red-600 p-1 text-white">
                  <CiStar className="text-white text-2xl" />
                </a>
              </div>

              <div className="flex items-center space-x-2 text-gray-600 bg-[#F2F2F2] px-3 py-1 rounded-lg">
                <Image
                  src="/bar.png"
                  alt="Chart Icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span className="text-black text-sm">2,523</span>
              </div>
            </div>

            <Image
              src="/imagecopy.png"
              alt="News Image"
              width={2000}
              height={2000}
              className="w-full h-auto object-cover mt-10"
            />

            <p className="font-THSarabunNew  text-[23px] leading-7 text-gray-900 mt-10">
              พล.ต.ท.ไตรรงค์ ผิวพรรณ
              ผู้บัญชาการตำรวจสืบสวนสอบสวนอาชญากรรมทางเทคโนโลยี (ผบช.สอท.)
              เปิดเผยความคืบหน้าจากการสืบสวนในคดีที่มีความเกี่ยวพันกับบริษัท
              Huione Group
              ซึ่งถูกสงสัยว่ามีบทบาทในการรับโอนเงินจากเว็บพนันออนไลน์และเครือข่ายแก๊งคอลเซ็นเตอร์ข้ามชาติ
              ซึ่งหลอกลวงประชาชนชาวไทยเป็นวงกว้าง โดยระบุว่า
              ขณะนี้เจ้าหน้าที่ตำรวจไซเบอร์ได้ขยายผลเชิงรุกต่อเนื่อง
              และสามารถดำเนินการ “ปิดบัญชีธนาคาร”
              ที่เกี่ยวข้องกับกิจกรรมผิดกฎหมายไปแล้วหลายสิบบัญชี
            </p>
            <p className="font-THSarabunNew  text-[23px] leading-7 text-gray-900 mt-4">
              จากข้อมูลเส้นทางการเงินที่ตรวจพบ พบว่ากลุ่มคนร้ายมีพฤติกรรม
              “ฟอกเงิน” ผ่านกระบวนการแปลงทรัพย์สิน
              โดยเริ่มจากการโอนเงินจากบัญชีผู้เสียหายไปยัง “บัญชีม้า”
              ที่กระจายอยู่ตามพื้นที่ต่าง ๆ
              แล้วนำเงินเหล่านั้นแปลงเป็นสินทรัพย์ดิจิทัล (Cryptocurrency)
              จากนั้นจึงนำสกุลดิจิทัลไปเปลี่ยนกลับเป็นเงินสดหรือทรัพย์สินผ่านบริษัทที่เชื่อมโยงกับกลุ่มคนร้าย
              ซึ่งหนึ่งในนั้นคือบริษัท Huione Group
              ที่เชื่อว่าอาจมีฐานปฏิบัติการอยู่ในประเทศกัมพูชา
              และตั้งอยู่ในพื้นที่ที่มีกลุ่มสแกมเมอร์หรือแก๊งอาชญากรรมข้ามชาติครอบงำ
            </p>
            <p className="font-THSarabunNew font-semibold  text-[23px] leading-7 text-gray-900 mt-4">
              รายชื่อเว็บไซต์ที่ถูกสั่งปิดล่าสุด
            </p>
            <p className="font-THSarabunNew  text-[23px] leading-7 text-gray-900 mt-1">
              ในส่วนของเว็บไซต์พนันออนไลน์ที่เกี่ยวข้องกับเครือข่ายการเงินผิดกฎหมายดังกล่าว
              ขณะนี้ตำรวจไซเบอร์ได้ดำเนินการสั่งปิดเว็บไซต์ไปแล้วจำนวนทั้งสิ้น
              78 แห่ง
              ซึ่งมีทั้งเว็บที่เปิดมาเป็นเวลานานและเว็บที่เพิ่งตั้งขึ้นใหม่เพื่อหลบเลี่ยงการตรวจสอบ
              รายชื่อบางส่วน ได้แก่
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 font-THSarabunNew text-[23px] leading-7 text-gray-900 mt-4">
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                LAGALAXY911
              </li>
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                Slot1688
              </li>
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                TigerBet88
              </li>
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                AllStarSlot99
              </li>
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                Redbull888
              </li>
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                Redbull168
              </li>
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                MegaJackpot789
              </li>
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                LuckyDragon999
              </li>
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                XOPlay88
              </li>
              <li className="flex items-center">
                <span className="w-[6px] h-[6px] bg-gray-600 rounded-full mr-3"></span>
                BetRich678
              </li>
            </ul>
            <p className="font-THSarabunNew text-[23px] leading-7 text-gray-900 mt-4">
              เจ้าหน้าที่ระบุว่าเว็บเหล่านี้มีลักษณะการดำเนินการคล้ายคลึงกัน
              คือเปิดให้บริการการพนันออนไลน์แบบครบวงจร
              มีระบบรับฝาก-ถอนผ่านบัญชีที่ไม่โปร่งใส
              และมีความพยายามปกปิดเจ้าของตัวจริงด้วยการใช้ข้อมูลนิติบุคคลปลอมและระบบบัญชีม้า
              ซึ่งการปิดเว็บเป็นเพียงหนึ่งในขั้นตอนแรก
              ยังมีการไล่ล่าผู้ที่เกี่ยวข้องทั้งหมด
              โดยเฉพาะตัวการใหญ่ในเครือข่าย
            </p>
            <Image
              src="/bamk.png"
              alt="News Image"
              width={2000}
              height={2000}
              className="w-full h-auto object-cover mt-8"
            />
            <p className="font-THSarabunNew font-semibold  text-[23px] leading-7 text-gray-900 mt-8">
              ความร่วมมือกับต่างประเทศและบริษัทเทคโนโลยี
            </p>
            <p className="font-THSarabunNew  text-[23px] leading-7 text-gray-900 mt-1">
              พล.ต.ท.ไตรรงค์ เผยเพิ่มเติมว่า
              เจ้าหน้าที่ได้มีการประสานความร่วมมือกับหน่วยงานในต่างประเทศ
              รวมถึงแพลตฟอร์มผู้ให้บริการกระเป๋าเงินดิจิทัล (Digital Wallet)
              และผู้ให้บริการระบบโอนเงินข้ามประเทศ เพื่อขอข้อมูลเส้นทางการเงิน
              โดยบางบริษัทให้ความร่วมมือในระดับดีมาก (100%) แต่บางบริษัท
              โดยเฉพาะจากต่างประเทศ ให้ข้อมูลมาเพียงบางกรณี
              และบางแห่งก็ไม่ให้ความร่วมมือเลย
              ซึ่งเป็นหนึ่งในอุปสรรคสำคัญของการสืบสวน
            </p>
            <p className="font-THSarabunNew font-semibold  text-[23px] leading-7 text-gray-900 mt-4">
              ข้อสังเกตต่อ Huione Group และประเด็นการเมือง
            </p>
            <p className="font-THSarabunNew  text-[23px] leading-7 text-gray-900 mt-1">
              แม้จะมีข้อมูลเชื่อมโยงกับ Huione Group อย่างต่อเนื่อง
              แต่พล.ต.ท.ไตรรงค์ ระบุว่า
              ยังไม่สามารถยืนยันได้ว่าบริษัทดังกล่าวมีส่วนเกี่ยวข้องโดยตรงกับการกระทำผิด
              เนื่องจากยังอยู่ระหว่างการตรวจสอบ
              และแม้จะมีข่าวจากต่างประเทศว่าเจ้าของบริษัทเป็นบุคคลในตระกูลของผู้นำระดับสูงของกัมพูชา
              เช่น นายฮุน โต หลานชายของสมเด็จฮุน เซน ประธานวุฒิสภา
              แต่ทางเจ้าหน้าที่ไทยยังไม่สามารถยืนยันได้อย่างเป็นทางการ
              จึงยังไม่สามารถชี้ชัดในประเด็นนี้
            </p>
            <p className="font-THSarabunNew font-semibold  text-[23px] leading-7 text-gray-900 mt-4">
              เตือนภัย Fake News และการใช้ AI ปลอมแปลงข้อมูล
            </p>
            <p className="font-THSarabunNew  text-[23px] leading-7 text-gray-900 mt-1">
              ในช่วงที่ความขัดแย้งและความไม่ไว้วางใจระหว่างประชาชนและสื่อบางส่วนยังคงมีอยู่
              พล.ต.ท.ไตรรงค์ ฝากเตือนประชาชนให้ระวังการแชร์ข่าวปลอม (Fake News)
              โดยเฉพาะข่าวที่สร้างขึ้นอย่างแนบเนียนผ่านการใช้ปัญญาประดิษฐ์ (AI)
              ตัดต่อภาพและเสียง เพื่อปลุกปั่นความเข้าใจผิดในสังคม
              หากข่าวสารใดไม่มีแหล่งที่มาแน่ชัดหรือไม่ได้รับการยืนยันจากสื่อหลัก
              ขอให้หลีกเลี่ยงการส่งต่อโดยเด็ดขาด
            </p>
            <p className="font-THSarabunNew  text-[23px] text-gray-900 mt-4">
              นอกจากนี้ ยังเตือนกลุ่มผู้ไม่หวังดีที่คิดจะใช้เสรีภาพในทางผิด
              ว่าการแสดงความคิดเห็นในโลกออนไลน์สามารถทำได้ภายใต้กรอบของกฎหมาย
              แต่การสร้างข่าวเท็จเพื่อปลุกปั่น ถือเป็นการกระทำผิดตาม
              พ.ร.บ.คอมพิวเตอร์ และจะมีการดำเนินคดีอย่างเด็ดขาด
              หากตำรวจไซเบอร์สามารถสืบสวนพบต้นตอ
            </p>

             <div className="mt-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="rounded-full bg-[#3B5998] p-2 text-white"
                >
                  <FaFacebookF />
                </a>
                <a href="#" className="rounded-full bg-[#00b900] p-[2px]">
                  <Image
                    src="https://mgronline.com/images/line-it-logo.png"
                    alt="Line Logo"
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                </a>
                <a href="#" className="rounded-full bg-sky-500 p-2 text-white">
                  <FaTwitter />
                </a>
                <a href="#" className="rounded-full bg-gray-400 p-2 text-white">
                  <FaLink />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-[#f7931f] p-2 text-white"
                >
                  <FaVolumeOff />
                </a>
                <a href="#" className="rounded-full bg-red-600 p-1 text-white">
                  <CiStar className="text-white text-2xl" />
                </a>
              </div>

              <div className="flex items-center space-x-2 text-gray-600 bg-[#F2F2F2] px-3 py-1 rounded-lg">
                <Image
                  src="/bar.png"
                  alt="Chart Icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span className="text-black text-sm">2,523</span>
              </div>
            </div>
          </div>
        </div>

        {/* right div */}
        <div className="flex md:w-1/3 flex-col p-4">
          <div className="space-y-2">
            {/* หัวข้อยอดนิยม */}
            <div className="flex items-center space-x-2">
              <div className="h-6 w-2 rounded bg-blue-400"></div>
              <h2 className=" text-2xl font-normal text-gray-800">ยอดนิยม</h2>
            </div>

            {/* ปุ่มอ่านเพิ่มเติม */}
            <a
              href="https://mgronline.com"
              className="block w-full rounded-b-lg border border-blue-400 py-1 text-center text-md text-blue-500 transition hover:bg-blue-50"
            >
              อ่านเพิ่มเติม
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
