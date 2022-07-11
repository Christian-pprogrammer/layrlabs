import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "layouts/index";

function Loadable(Component) {
  const result = (props) => (
    <Suspense fallback={<></>}>
      <Component {...props} />
    </Suspense>
  );
  return result;
}

export default function Router() {
  return useRoutes([
    {
      element: (<MainLayout />),
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "solutions",
          element: <Solutions />,
        },
        {
          path: "careers",
          element: <Careers />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
        {
          path: "dashboard",
          element: <Dashboard />
        }
      ]
    }
  ]);
}


const Home = Loadable(
  lazy(() => import("views/home"))
);
const Solutions = Loadable(
  lazy(() => import("views/solutions"))
);
const Careers = Loadable(
  lazy(() => import("views/careers"))
);
const Privacy = Loadable(
  lazy(() => import("views/privacy"))
);
const Terms = Loadable(
  lazy(() => import("views/terms"))
);
const Dashboard = Loadable(
  lazy(() => import("views/dashboard"))
)