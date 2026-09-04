import { Route, Routes } from "react-router-dom";
import App from "../App";
import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../admin/AdminDashboard";
import AdminArticles from "../admin/AdminArticles";
import AdminCategories from "../admin/AdminCategories";
import AdminCaseStudies from "../admin/AdminCaseStudies";
import AdminSustainability from "../admin/AdminSustainability";
import AdminFacadeLab from "../admin/AdminFacadeLab";
import AdminIndustryLeaders from "../admin/AdminIndustryLeaders";
import AdminCompanies from "../admin/AdminCompanies";
import AdminEvents from "../admin/AdminEvents";
import AdminNewsletter from "../admin/AdminNewsletter";
import AdminSubmissions from "../admin/AdminSubmissions";
import AdminMediaLibrary from "../admin/AdminMediaLibrary";
import AdminUsers from "../admin/AdminUsers";
import AdminSettings from "../admin/AdminSettings";
import NotFound from "../NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/articles" element={<AdminArticles />} />
      <Route path="/admin/categories" element={<AdminCategories />} />
      <Route path="/admin/case-studies" element={<AdminCaseStudies />} />
      <Route path="/admin/sustainability" element={<AdminSustainability />} />
      <Route path="/admin/facade-lab" element={<AdminFacadeLab />} />
      <Route
        path="/admin/industry-leaders"
        element={<AdminIndustryLeaders />}
      />
      <Route path="/admin/companies" element={<AdminCompanies />} />
      <Route path="/admin/events" element={<AdminEvents />} />
      <Route path="/admin/newsletter" element={<AdminNewsletter />} />
      <Route path="/admin/submissions" element={<AdminSubmissions />} />
      <Route path="/admin/media" element={<AdminMediaLibrary />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/settings" element={<AdminSettings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
