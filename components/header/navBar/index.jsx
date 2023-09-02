"use client";
import Image from "next/image";
import Logo from "../../../assets/img/Logo.png";
import { PiBag } from "react-icons/pi";
import { useRouter } from "next/navigation";
/* import { useSelector } from "react-redux/es/hooks/useSelector";
 */ function Nav({ setShowLogInModal, isLogin, setIsLogin }) {
  const router = useRouter();
  /*   const cart = useSelector((state) => state.cart); */

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
                  <PiBag className="text-[#A6A6A6] text-[40px]" />
                </button>

                <div className="bg-[#FB5A5A] rounded-full w-[20px] h-[20px] flex items-center justify-center text-white text-[10px] absolute top-[-8px] left-[-8px]">
                  {/*  {cart.length} */}
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
