import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Sidebar from "../components/Sidebar/Sidebar";
import useAuth from "../hooks/useAuth";
import useSidebar from "../hooks/useSidebar";
import { ALL_ROLES } from "../types/constants";

const Quotes = lazy(() => import("../pages/Quotes/Quotes"));
const QuoteDetail = lazy(() => import("../pages/Quotes/QuoteDetail"));
const QuoteDetailCustomer = lazy(
  () => import("../pages/Quotes/QuoteDetailCustomer")
);
const AddQuote = lazy(() => import("../pages/Quotes/AddQuote"));
const AddQuoteCustomer = lazy(() => import("../pages/Quotes/AddQuoteCustomer"));
const PurchaseOrders = lazy(() => import("../pages/Purchase/PurchaseOrders"));
const PurchaseOrderDetail = lazy(
  () => import("../pages/Purchase/PurchaseOrderDetail")
);
const SalesOrders = lazy(() => import("../pages/Sales/SalesOrders"));
const SalesOrderDetail = lazy(() => import("../pages/Sales/SalesOrderDetail"));
const Error404 = lazy(() => import("../pages/Error404"));

const DefaultLayout = () => {
  const { show } = useSidebar();
  const { user } = useAuth();

  return (
    <div
      className="layout relative flex flex-col w-full"
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <main className={`main w-full flex-1 flex flex-col`}>
        <Header />

        <div
          className={`page-wrapper w-full flex-1 flex flex-col pt-16 ${
            show ? "pl-56" : "pl-20"
          }`}
        >
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route index element={<Navigate to="/quotes" />} />

              <Route path="quotes">
                <Route index element={<Quotes />} />
                <Route
                  path="add-quote"
                  element={
                    user?.role === ALL_ROLES.CUSTOMER ? (
                      <AddQuoteCustomer />
                    ) : (
                      <AddQuote />
                    )
                  }
                />
                <Route
                  path=":quoteId"
                  element={
                    user?.role === ALL_ROLES.CUSTOMER ? (
                      <QuoteDetailCustomer />
                    ) : (
                      <QuoteDetail />
                    )
                  }
                />
              </Route>

              {user?.role === ALL_ROLES.ADMIN && (
                <>
                  <Route path="sales">
                    <Route index element={<SalesOrders />} />
                    <Route path=":orderId" element={<SalesOrderDetail />} />
                  </Route>

                  <Route path="purchases">
                    <Route index element={<PurchaseOrders />} />
                    <Route path=":orderId" element={<PurchaseOrderDetail />} />
                  </Route>
                </>
              )}

              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
