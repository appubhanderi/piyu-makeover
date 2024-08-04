import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import Contact from './Contact'

import FacialCleanupHome from './FacialCleanupHome'
import FacialAllSkin from './FacialAllSkin'
import FacialDrySkin from './FacialDrySkin'
import FacialOilySkin from './FacialOilySkin'
import FacialCleanup from './FacialCleanup'

import BleachDtanHome from './BleachDtanHome'
import Bleach from './Bleach'
import BleachDtan from './BleachDtan'

import ManiPadiHome from './ManiPadiHome'
import ManiPadi from './ManiPadi'
import ManiPadiPadicure from './ManiPadiPadicure'
import ManiPadiManicure from './ManiPadiManicure'

import WaxingHome from './WaxingHome'
import WaxingHoney from './WaxingHoney '
import WaxingRica from './WaxingRica'
import WaxingRicaBrazilian from './WaxingRicaBrazilian'
import WaxingRicaRollon from './WaxingRicaRollon'

import HairCareHome from './HairCareHome'
import HairCareSpa from './HairCareSpa'
import HairCareCut from './HairCareCut'
import HairCareSplitting from './HairCareSplitting'
import HairCareColouring from './HairCareColouring'
import HairCareHennaColouring from './HairCareHennaColouring'
import HairCareHighlights from './HairCareHighlights'
import HairCareTreatments from './HairCareTreatments'

import ThreadingHome from './ThreadingHome'
import ThreadingPackage from './ThreadingPackage'

import MakeupHome from './MakeupHome'
import MakeupParty from './MakeupParty'
import MakeupEngagement from './MakeupEngagement'
import MakeupHairStyling from './MakeupHairStyling'
import MakeupGroupDeals from './MakeupGroupDeals'

import PreBridalHome from './PreBridalHome'
import PreBridalGrooming from './PreBridalGrooming'
import PreBridalPremiumSitting from './PreBridalPremiumSitting'

import BridalMakeupHome from './BridalMakeupHome'
import BridalMakeups from './BridalMakeups'
import BridalMakeupLuxury from './BridalMakeupLuxury'

import HairStyleHome from './HairStyleHome'




export default function PiyuMakeover() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/layout' element={<Layout />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/facialCleanupHome' element={<FacialCleanupHome />} />
        <Route path='/FacialAllSkin' element={<FacialAllSkin />} />
        <Route path='/FacialDrySkin' element={<FacialDrySkin />} />
        <Route path='/FacialOilySkin' element={<FacialOilySkin />} />
        <Route path='/FacialCleanup' element={<FacialCleanup />} />

        <Route path='/bleachDtanHome' element={<BleachDtanHome />} />
        <Route path='/Bleach' element={<Bleach />} />
        <Route path='/BleachDtan' element={<BleachDtan />} />

        <Route path='/maniPadiHome' element={<ManiPadiHome />} />
        <Route path='/ManiPadi' element={<ManiPadi />} />
        <Route path='/ManiPadiPadicure' element={<ManiPadiPadicure />} />
        <Route path='/ManiPadiManicure' element={<ManiPadiManicure />} />

        <Route path='/waxingHome' element={<WaxingHome />} />
        <Route path='/WaxingHoney' element={<WaxingHoney />} />
        <Route path='/WaxingRica' element={<WaxingRica />} />
        <Route path='/WaxingRicaBrazilian' element={<WaxingRicaBrazilian />} />
        <Route path='/WaxingRicaRollon' element={<WaxingRicaRollon />} />

        <Route path='/hairCareHome' element={<HairCareHome />} />
        <Route path='/HairCareSpa' element={<HairCareSpa />} />
        <Route path='/HairCareCut' element={<HairCareCut />} />
        <Route path='/HairCareSplitting' element={<HairCareSplitting />} />
        <Route path='/HairCareColouring' element={<HairCareColouring />} />
        <Route path='/HairCareHennaColouring' element={<HairCareHennaColouring />} />
        <Route path='/HairCareHighlights' element={<HairCareHighlights />} />
        <Route path='/HairCareTreatments' element={<HairCareTreatments />} />

        <Route path='/ThreadingHome' element={<ThreadingHome />} />
        <Route path='/ThreadingPackage' element={<ThreadingPackage />} />

        <Route path='/MakeupHome' element={<MakeupHome />} />
        <Route path='/MakeupParty' element={<MakeupParty />} />
        <Route path='/MakeupEngagement' element={<MakeupEngagement />} />
        <Route path='/MakeupHairStyling' element={<MakeupHairStyling />} />
        <Route path='/MakeupGroupDeals' element={<MakeupGroupDeals />} />

        <Route path='/PreBridalHome' element={<PreBridalHome />} />
        <Route path='/PreBridalGrooming' element={<PreBridalGrooming />} />
        <Route path='/PreBridalPremiumSitting' element={<PreBridalPremiumSitting />} />

        <Route path='/BridalMakeupHome' element={<BridalMakeupHome />} />
        <Route path='/BridalMakeups' element={<BridalMakeups />} />
        <Route path='/BridalMakeupLuxury' element={<BridalMakeupLuxury />} />

        <Route path='/HairStyleHome' element={<HairStyleHome />} />



      </Routes>
    </BrowserRouter>
  )
}
