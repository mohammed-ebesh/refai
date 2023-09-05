"use client";
import Image from "next/image";
import Logo from "../../../assets/img/Logo.png";
import { BiCartAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
function Nav({ setShowLogInModal, isLogin, setIsLogin }) {
  const router = useRouter();
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="bg-[#191919] p-3">
      <div className="container m-auto">
        <div className=" flex gap-10  justify-between items-center">
          <div className="relative w-[78.59px] h-[91.44px] ">
            <Image className="object-cover" fill src={Logo} alt="Logo" />
          </div>

          <div className="flex items-center gap-3">
            {isLogin ? null : (
              <div className="relative cursor-pointer">
                <button onClick={() => router.push("/cart")}>
                  <BiCartAlt className="text-[#A6A6A6] text-[32px] hover:text-[#FFD740]" />
                </button>

                <div className="bg-[#FFD740] rounded-full w-[18px] h-[18px] flex items-center justify-center text-black text-[11px] font-bold absolute top-[-14px] right-[-10px]">
                  {cart.length}
                </div>
              </div>
            )}

            {isLogin ? (
              <div
                onClick={() => setIsLogin(false)}
                className="text-white cursor-pointer hover:text-[#EF5350]"
              >
                تسجيل الخروج
              </div>
            ) : (
              <div
                onClick={() => setShowLogInModal(true)}
                className="text-white cursor-pointer hover:text-[#FFD740]"
              >
                تسجيل الدخول
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
