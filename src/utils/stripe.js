/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
 import { loadStripe } from "@stripe/stripe-js"

 let stripePromise
 const getStripe = () => {
   if (!stripePromise) {
     stripePromise = loadStripe('pk_test_51J7TS2Iw7CyPxjdbX5Y1fECXOwYNIM55CMeyGp5gA6e2tjwhLnYrLtROwoUgS44ZeSkFt3y7TrAOhceMSXdjgJ9300k7etZzyy')
   }
   return stripePromise
 }
 
 export default getStripe