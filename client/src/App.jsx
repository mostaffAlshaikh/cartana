import {  Navigate, Route, Routes } from "react-router-dom";
import {ForgotPassword, LogIn, SignUp,ResetPasswordPage, EmailVerification,Home,AdminPanel,PurchaseSuccessPage,GetAllCards, GetGiftCard, PurchaseCancelPage,ShopingCart} from './pages/index'
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import LoadingSpinners from "./components/LoadingSpinner";
import AllSections from "./pages/AllSections";
import AllWebsiteProperty from "./pages/AllWebsiteProperty";
import { ClipboardList, GalleryHorizontalEnd, Headset, LayoutPanelTop, Scale } from "lucide-react";
import Choose from "./components/Choose";
import About from "./pages/About";
import ProductsSrvices from "./pages/ProductsSrvices";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
const RedirectToHome = ({children})=>{
  const {isAuthenticated,user}=useAuthStore()
  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace/>
  }
  return children
}
const ProtectedAdmin = ({children})=>{
  const {isAuthenticated,role}=useAuthStore()

    if(isAuthenticated && role === 'VIP' || role === 'admin' ){
      return children
      } 


}




const App =()=> {
  const {checkAuth,isCheckingAuth,user} = useAuthStore()
  useEffect(()=>{
   checkAuth()
   
 },[checkAuth])
 if (isCheckingAuth) return <LoadingSpinners /> 

  return (
    <>
    <Routes>
      <Route path="/" element={ (user && !user?.isVerified ) ?<Navigate to="/email_verification" replace/> : <Home/>}/>
      <Route path="/Admin_Dashboard" element={
        <ProtectedAdmin>
        <AdminPanel balance={user?.balance} userID={user?._id}/>
      </ProtectedAdmin>}/>
      <Route path="/login" element={<RedirectToHome>
        <LogIn/></RedirectToHome>}/>
      <Route path="/signup" element={<RedirectToHome><SignUp/></RedirectToHome>}/>
      <Route path="/email_verification" element={user ?<EmailVerification/> : <Navigate to='/login' replace/>}/>
      <Route path="/forgot_password" element={<RedirectToHome><ForgotPassword/></RedirectToHome>}/>
      <Route path="/reset_password/:token" element={<RedirectToHome><ResetPasswordPage/></RedirectToHome>}/>
      <Route path="/all-cards" element={<GetAllCards/>}/>
      <Route path="/all-sections" element={<AllSections/>}/>
      <Route path="/giftCard/:id" element={<GetGiftCard/>}/>
      <Route path="/cart" element={<ShopingCart/>}/>
      <Route path="/purchase-success" element={<PurchaseSuccessPage/>}/>
      <Route path="/purchase-cancel" element={<PurchaseCancelPage/>}/>
      <Route path="/why-choose-us" element={<AllWebsiteProperty Icon={ClipboardList} title={"? Why Choose Marveleza"} description={<Choose/>}/>}/>
      <Route path="/about-us" element={ <AllWebsiteProperty Icon={LayoutPanelTop} title={"About Marveleza"} description={<About/>}/>}/>
      <Route path="/products-and-services" element={  <AllWebsiteProperty Icon={GalleryHorizontalEnd} title={"Products and Srvices"} description={<ProductsSrvices/>}/>}/>
      <Route path="/policies" element={ <AllWebsiteProperty Icon={Scale} title={"Rules and Policies"} description={<Policies/>}/>}/>
      <Route path="/contact" element={<AllWebsiteProperty Icon={Headset} title={"Contact Information"} description={<Contact/>}/>}/>
    
    </Routes>
    </>
  )
}

export default App
