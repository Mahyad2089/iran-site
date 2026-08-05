import { BrowserRouter, Routes, Route } from "react-router-dom";

import MunicipalityPortal from "./MunicipalityPortal";
import AuthPage from "./AuthPage";
import UrbanFeePayment from "./UrbanFeePayment";

import BusinessFeePayment from "./BusinessFeePayment";
import CertificateVerification from "./CertificateVerification";
import CommissionVerdict from "./CommissionVerdict";
import IncomeReceiptPayment from "./IncomeReceiptPayment";
import IssueCertificateRequest from "./IssueCertificateRequest";
import PropertyComplaint from "./PropertyComplaint";
import PropertyDebtPayment from "./PropertyDebtPayment";
import PropertyRecordHistory from "./PropertyRecordHistory";
import RenovationCodeLookup from "./RenovationCodeLookup";
import RequestTracking from "./RequestTracking";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MunicipalityPortal />} />

        <Route path="/login" element={<AuthPage />} />

        <Route path="/payment" element={<UrbanFeePayment />} />

        <Route path="/business" element={<BusinessFeePayment />} />

        <Route path="/income" element={<IncomeReceiptPayment />} />

        <Route path="/debt" element={<PropertyDebtPayment />} />

        <Route path="/renewal-code" element={<RenovationCodeLookup />} />

        <Route path="/property-history" element={<PropertyRecordHistory />} />

        <Route path="/commission" element={<CommissionVerdict />} />

        <Route path="/certificate-check" element={<CertificateVerification />} />

        <Route path="/certificate" element={<IssueCertificateRequest />} />

        <Route path="/requests" element={<RequestTracking />} />

        <Route path="/objection" element={<PropertyComplaint />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;